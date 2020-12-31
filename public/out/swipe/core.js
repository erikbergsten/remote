// Compiled by ClojureScript 1.10.758 {:static-fns true, :optimize-constants true}
goog.provide('swipe.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('reagent.dom');
swipe.core.post = (function swipe$core$post(url,data){
var req = (new XMLHttpRequest());
req.open("POST",url);

req.setRequestHeader("Content-Type","application/json;charset=UTF-8");

return req.send(JSON.stringify(cljs.core.clj__GT_js(data)));
});
swipe.core.translate = (function swipe$core$translate(x,y){
return ["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),")"].join('');
});
swipe.core.keylist = cljs.core.PersistentHashMap.fromArrays(["Space","Mod","Caps","Alt","R. Mod","Tab","Back","Alt Gr","R. Ctrl","Ctrl","Shift","R. Shift"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Space","Space",(162)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Mod","Mod",(40)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Caps","Caps",(60)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Alt","Alt",(40)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["R. Mod","Mod",(40)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Tab","Tab",(50)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Back","<-",(60)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Alt Gr","Alt Gr",(50)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["R. Ctrl","Ctrl",(50)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Ctrl","Ctrl",(50)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Shift","Shift",(50)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["R. Shift","Shift",(72)], null)]);
swipe.core.keyboard_layout = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u00A7","1","2","3","4","5","6","7","8","9","0","+","\\","Back"], null),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Tab","Q","W","E","R","T","Y","U","I","O","P","\u00C5","~"], null),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Caps","A","S","D","F","G","H","J","K","L","\u00D6","\u00C4","*"], null),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Shift","<","Z","X","C","V","B","N","M",",",".","-","R. Shift"], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Ctrl","Mod","Alt","Space","Alt Gr","R. Mod","???","R. Ctrl"], null)], null);
swipe.core.toggles = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, ["Mod",null,"Caps",null,"Alt",null,"R. Mod",null,"Alt Gr",null,"R. Ctrl",null,"Ctrl",null,"Hold",null,"Shift",null,"R. Shift",null], null), null);
swipe.core.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
swipe.core.press = (function swipe$core$press(name){
return swipe.core.post("/post/press",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,name], null));
});
swipe.core.release = (function swipe$core$release(name){
return swipe.core.post("/post/release",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,name], null));
});
swipe.core.click = (function swipe$core$click(name){
return swipe.core.post("/post/type",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,name], null));
});
swipe.core.toggle = (function swipe$core$toggle(name){
if(cljs.core.truth_((function (){var fexpr__683 = cljs.core.deref(swipe.core.state);
return (fexpr__683.cljs$core$IFn$_invoke$arity$1 ? fexpr__683.cljs$core$IFn$_invoke$arity$1(name) : fexpr__683.call(null,name));
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(swipe.core.state,(function (p1__681_SHARP_){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(p1__681_SHARP_,name);
}));

return swipe.core.release(name);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(swipe.core.state,(function (p1__682_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__682_SHARP_,name);
}));

return swipe.core.press(name);
}
});
swipe.core.glick = (function swipe$core$glick(name){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,"Text")){
var text = window.prompt("Enter text");
return swipe.core.post("/post/text",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text,text], null));
} else {
if(cljs.core.truth_((swipe.core.toggles.cljs$core$IFn$_invoke$arity$1 ? swipe.core.toggles.cljs$core$IFn$_invoke$arity$1(name) : swipe.core.toggles.call(null,name)))){
return swipe.core.toggle(name);
} else {
return swipe.core.click(name);
}
}
});
swipe.core.get_key = (function swipe$core$get_key(name){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(swipe.core.keylist,name,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,name,(30)], null));
});
swipe.core.get_row = (function swipe$core$get_row(row){
return cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__684,p__685){
var vec__686 = p__684;
var keys = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__686,(0),null);
var left = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__686,(1),null);
var vec__689 = p__685;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__689,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__689,(1),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__689,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(keys,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,name,width,left], null)),((left + width) + (2))], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,(0)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(swipe.core.get_key,row)));
});
swipe.core.gen_key = (function swipe$core$gen_key(x,y,w,h,text,id){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$transform,swipe.core.translate(x,y),cljs.core.cst$kw$key,id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$width,w,cljs.core.cst$kw$height,h,cljs.core.cst$kw$on_DASH_click,(function (){
return swipe.core.glick(id);
}),cljs.core.cst$kw$fill,(cljs.core.truth_((function (){var fexpr__692 = cljs.core.deref(swipe.core.state);
return (fexpr__692.cljs$core$IFn$_invoke$arity$1 ? fexpr__692.cljs$core$IFn$_invoke$arity$1(id) : fexpr__692.call(null,id));
})())?"black":"#555")], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$text,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$text_DASH_anchor,"middle",cljs.core.cst$kw$x,(w / (2)),cljs.core.cst$kw$y,(h / (2)),cljs.core.cst$kw$fill,"white",cljs.core.cst$kw$pointer_DASH_events,"none",cljs.core.cst$kw$alignment_DASH_baseline,"middle"], null),text], null)], null);
});
swipe.core.gen_enter = (function swipe$core$gen_enter(x,y){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$transform,swipe.core.translate(x,y),cljs.core.cst$kw$key,"Enter"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$polygon,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$fill,"#555",cljs.core.cst$kw$on_DASH_click,(function (){
return swipe.core.glick("Enter");
}),cljs.core.cst$kw$points,"0,0 40,0, 40,62, 10,62 10,30 0,30"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$text,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$text_DASH_anchor,"middle",cljs.core.cst$kw$x,(20),cljs.core.cst$kw$y,(15),cljs.core.cst$kw$fill,"white",cljs.core.cst$kw$pointer_DASH_events,"none",cljs.core.cst$kw$alignment_DASH_baseline,"middle"], null),"Enter"], null)], null);
});
swipe.core.gen_row = (function swipe$core$gen_row(row,y,height){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function swipe$core$gen_row_$_iter__693(s__694){
return (new cljs.core.LazySeq(null,(function (){
var s__694__$1 = s__694;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__694__$1);
if(temp__5735__auto__){
var s__694__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__694__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__694__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__696 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__695 = (0);
while(true){
if((i__695 < size__4528__auto__)){
var vec__697 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__695);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__697,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__697,(1),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__697,(2),null);
var left = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__697,(3),null);
cljs.core.chunk_append(b__696,swipe.core.gen_key(left,y,width,height,name,id));

var G__703 = (i__695 + (1));
i__695 = G__703;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__696),swipe$core$gen_row_$_iter__693(cljs.core.chunk_rest(s__694__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__696),null);
}
} else {
var vec__700 = cljs.core.first(s__694__$2);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__700,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__700,(1),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__700,(2),null);
var left = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__700,(3),null);
return cljs.core.cons(swipe.core.gen_key(left,y,width,height,name,id),swipe$core$gen_row_$_iter__693(cljs.core.rest(s__694__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(swipe.core.get_row(row));
})());
});
swipe.core.keyboard = (function swipe$core$keyboard(){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$background,"#ccc",cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$bottom,(0),cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$display,"block",cljs.core.cst$kw$left,(0)], null),cljs.core.cst$kw$viewBox,"0 0 480 213"], null),swipe.core.gen_key((2),(2),(50),(50),"Hold","Hold"),swipe.core.gen_key((53),(2),(60),(50),"R. Click","R. Click"),swipe.core.gen_key((114),(2),(50),(50),"Up","Up"),swipe.core.gen_key((165),(2),(50),(50),"Down","Down"),swipe.core.gen_key((216),(2),(50),(50),"Left","Left"),swipe.core.gen_key((267),(2),(50),(50),"Right","Right"),swipe.core.gen_key((318),(2),(50),(50),"Text","Text"),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,swipe.core.translate((2),(53))], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (row,index){
return swipe.core.gen_row(row,(index * (32)),(30));
}),swipe.core.keyboard_layout,cljs.core.range.cljs$core$IFn$_invoke$arity$0())),swipe.core.gen_enter((436),(32))], null)], null);
});
swipe.core.swipe = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
swipe.core.on_touch_start = (function swipe$core$on_touch_start(evt){
var touch = (evt.touches[(0)]);
var x = touch.clientX;
var y = touch.clientY;
return cljs.core.reset_BANG_(swipe.core.swipe,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$x,x,cljs.core.cst$kw$y,y,cljs.core.cst$kw$tx,x,cljs.core.cst$kw$ty,y], null));
});
swipe.core.on_touch_move = (function swipe$core$on_touch_move(evt){
var touch = (evt.touches[(0)]);
var x = touch.clientX;
var y = touch.clientY;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(swipe.core.swipe,(function (p1__704_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__704_SHARP_,cljs.core.cst$kw$tx,x),cljs.core.cst$kw$ty,y);
}));
});
swipe.core.on_touch_end = (function swipe$core$on_touch_end(evt){
var map__705 = cljs.core.deref(swipe.core.swipe);
var map__705__$1 = (((((!((map__705 == null))))?(((((map__705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__705.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__705):map__705);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__705__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__705__$1,cljs.core.cst$kw$y);
var tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__705__$1,cljs.core.cst$kw$tx);
var ty = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__705__$1,cljs.core.cst$kw$ty);
var dx = (tx - x);
var dy = (ty - y);
if(((Math.abs(dx) + Math.abs(dy)) < (3))){
return swipe.core.post("/post/click",cljs.core.PersistentArrayMap.EMPTY);
} else {
return swipe.core.post("/post/swipe",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,dx,cljs.core.cst$kw$y,dy], null));
}
});
swipe.core.touch_pad = (function swipe$core$touch_pad(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$canvas,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$background,"#eee",cljs.core.cst$kw$height,"100%",cljs.core.cst$kw$width,"100%"], null),cljs.core.cst$kw$on_DASH_touch_DASH_start,swipe.core.on_touch_start,cljs.core.cst$kw$on_DASH_touch_DASH_move,swipe.core.on_touch_move,cljs.core.cst$kw$on_DASH_touch_DASH_end,swipe.core.on_touch_end], null)], null);
});
swipe.core.content = (function swipe$core$content(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$height,"100%"], null)], null),swipe.core.touch_pad(),swipe.core.keyboard()], null);
});
swipe.core.mount = (function swipe$core$mount(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [swipe.core.content], null),document.getElementById("app"));
});
swipe.core.mount();
