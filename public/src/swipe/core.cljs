(ns swipe.core
  (:require [reagent.core :as r]
            [reagent.dom :as rd]))

(defn post
  [url data]
  (let [req (js/XMLHttpRequest.)]
    (. req open "POST" url)
    (. req setRequestHeader "Content-Type" "application/json;charset=UTF-8")
    (. req send (. js/JSON stringify (clj->js data)))))

(defn translate
  [x y]
  (str "translate(" x "," y ")"))

(def keylist {"Caps" ["Caps" "Caps" 60]
           "Tab" ["Tab" "Tab" 50]
           "Back" ["Back" "<-" 60]
           "R. Shift" ["R. Shift" "Shift", 72]
           "Shift" ["Shift" "Shift" 50]
           "Ctrl" ["Ctrl" "Ctrl" 50]
           "R. Ctrl" ["R. Ctrl" "Ctrl" 50]
           "Mod" ["Mod" "Mod" 40]
           "R. Mod" ["R. Mod" "Mod" 40]
           "Alt" ["Alt" "Alt" 40]
           "Space" ["Space" "Space" 162]
           "Alt Gr" ["Alt Gr" "Alt Gr" 50]
           })

(def keyboard-layout
  [["§" "1" "2" "3" "4" "5" "6" "7" "8" "9" "0" "+" "\\" "Back"]
   ["Tab" "Q" "W" "E" "R" "T" "Y" "U" "I" "O" "P" "Å" "~"]
   ["Caps" "A" "S" "D" "F" "G" "H" "J" "K" "L" "Ö" "Ä" "*"]
   ["Shift" "<" "Z" "X" "C" "V" "B" "N" "M" "," "." "-" "R. Shift"]
   ["Ctrl" "Mod" "Alt" "Space" "Alt Gr" "R. Mod" "???" "R. Ctrl"]])

(def toggles #{"Shift" "Caps" "Ctrl" "Alt" "R. Shift" "R. Ctrl" "Alt Gr"
               "Hold" "R. Mod" "Mod"})

(def state (r/atom #{}))

(defn press
  [name]
  (post "/post/press" {:key name}))

(defn release
  [name]
  (post "/post/release" {:key name}))

(defn click
  [name]
  (post "/post/type" {:key name}))

(defn toggle
  [name]
  (if (@state name)
    (do 
      (swap! state #(disj % name))
      (release name))
    (do
      (swap! state #(conj % name))
      (press name)
      )))

(defn glick
  [name]
  (if (toggles name)
    (do (toggle name)
        )
    (click name)))

(defn get-key
  [name]
  (get keylist name [name name 30]))

(defn get-row
  [ row ]
  (first
    (reduce (fn [[keys left] [id name width]]
              [(conj keys [id name width left]) (+ left width 2)])
            [[] 0]
            (map get-key row))))

(defn gen-key
  [x y w h text id]
  [:g {:transform (translate x y)
       :key id}
   [:rect {:width w
          :height h
          :on-click #(glick id)
          :fill (if (@state id) "black" "#555")}]
   [:text {:text-anchor "middle"
           :x (/ w 2)
           :y (/ h 2)
           :fill "white"
           :pointer-events "none"
           :alignment-baseline "middle"}
    text]])

(defn gen-enter
  [x y]
  [:g {:transform (translate x y)
       :key "Enter"}
   [:polygon {:fill "#555"
              :on-click #(glick "Enter")
              :points "0,0 40,0, 40,62, 10,62 10,30 0,30"}]
   [:text {:text-anchor "middle"
           :x 20
           :y 15
           :fill "white"
           :pointer-events "none"
           :alignment-baseline "middle"}
    "Enter"]])

(defn gen-row
  [row y height]
    (doall (for [[id name width left] (get-row row)]
      (gen-key left y width height name id))))

(defn keyboard
  []
  [:svg {:style {:background "#ccc"
                 :width "100%"
                 :bottom 0
                 :position "absolute"
                 :display "block"
                 :left 0
                 }
          :viewBox "0 0 480 213"}
    (gen-key 2 2 50 50 "Hold" "Hold")
    (gen-key 53 2 60 50 "R. Click" "R. Click")
    (gen-key 114 2 50 50 "Up" "Up")
    (gen-key 165 2 50 50 "Down" "Down")
    (gen-key 216 2 50 50 "Left" "Left")
    (gen-key 267 2 50 50 "Right" "Right")
   [:g {:transform (translate 2 53)}
    (doall (map (fn [row index]
                  (gen-row row (* index 32) 30))
                keyboard-layout
                (range)))
    (gen-enter 436 32)]])

(def swipe (r/atom {}))

(defn on-touch-start
  [evt]
  (let [touch (aget (.-touches evt) 0)
        x (.-clientX touch)
        y (.-clientY touch)]
    (reset! swipe {:x x :y y :tx x :ty y})))

(defn on-touch-move
  [evt]
  (let [touch (aget (.-touches evt) 0)
        x (.-clientX touch)
        y (.-clientY touch)]
    (swap! swipe #(-> %
                      (assoc :tx x)
                      (assoc :ty y)))))

(defn on-touch-end
  [evt]
  (let [{:keys [x y tx ty]} @swipe
        dx (- tx x)
        dy (- ty y)]
    (if (< (+ (. js/Math abs dx) (. js/Math abs dy)) 3)
      (post "/post/click" {})
      (post "/post/swipe" {:x dx
                           :y dy}))))

(defn touch-pad
  []
  [:canvas {:style {:background "#fcc"
                    :height "100%"
                    :width "100%"}
            :on-touch-start on-touch-start
            :on-touch-move on-touch-move
            :on-touch-end on-touch-end}
           ])

(def value (r/atom ""))
(defn text-input
  []
  [:div {:style {:display "block"
          :position "absolute"
          :width "100%"
          :top 0}}
   [:input {:type "text"
            :value @value
            :on-change #(reset! value (-> % .-target .-value))
            :style {:width "80%"}}]
   [:button {:on-click #(do (post "/post/text" {:text @value})
                            (reset! value ""))
             :style {:width "fill"}} "Enter"]])

(defn content
  []
  [:div {:style {:height "100%"}}
   (touch-pad)
   (text-input)
   (keyboard)])

(defn mount
  []
  (rd/render [content]
             (. js/document getElementById "app")))

(mount)
