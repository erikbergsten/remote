// Compiled by ClojureScript 1.10.758 {}
goog.provide('swipe.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
swipe.core.post = (function swipe$core$post(url,data){
var req = (new XMLHttpRequest());
req.open("POST",url);

req.setRequestHeader("Content-Type","application/json;charset=UTF-8");

return req.send(JSON.stringify(cljs.core.clj__GT_js.call(null,data)));
});
swipe.core.translate = (function swipe$core$translate(x,y){
return ["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),")"].join('');
});
swipe.core.keylist = cljs.core.PersistentHashMap.fromArrays(["Space","Mod","Caps","Alt","R. Mod","Tab","Back","Alt Gr","R. Ctrl","Ctrl","Shift","R. Shift"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Space","Space",(162)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Mod","Mod",(40)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Caps","Caps",(60)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Alt","Alt",(40)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["R. Mod","Mod",(40)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Tab","Tab",(50)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Back","<-",(60)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Alt Gr","Alt Gr",(50)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["R. Ctrl","Ctrl",(50)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Ctrl","Ctrl",(50)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Shift","Shift",(50)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["R. Shift","Shift",(72)], null)]);
swipe.core.keyboard_layout = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u00A7","1","2","3","4","5","6","7","8","9","0","+","\\","Back"], null),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Tab","Q","W","E","R","T","Y","U","I","O","P","\u00C5","~"], null),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Caps","A","S","D","F","G","H","J","K","L","\u00D6","\u00C4","*"], null),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Shift","<","Z","X","C","V","B","N","M",",",".","-","R. Shift"], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Ctrl","Mod","Alt","Space","Alt Gr","R. Mod","???","R. Ctrl"], null)], null);
swipe.core.toggles = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, ["Mod",null,"Caps",null,"Alt",null,"R. Mod",null,"Alt Gr",null,"R. Ctrl",null,"Ctrl",null,"Hold",null,"Shift",null,"R. Shift",null], null), null);
swipe.core.state = reagent.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
swipe.core.press = (function swipe$core$press(name){
return swipe.core.post.call(null,"/post/press",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),name], null));
});
swipe.core.release = (function swipe$core$release(name){
return swipe.core.post.call(null,"/post/release",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),name], null));
});
swipe.core.click = (function swipe$core$click(name){
return swipe.core.post.call(null,"/post/type",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),name], null));
});
swipe.core.toggle = (function swipe$core$toggle(name){
if(cljs.core.truth_(cljs.core.deref.call(null,swipe.core.state).call(null,name))){
cljs.core.swap_BANG_.call(null,swipe.core.state,(function (p1__1760_SHARP_){
return cljs.core.disj.call(null,p1__1760_SHARP_,name);
}));

return swipe.core.release.call(null,name);
} else {
cljs.core.swap_BANG_.call(null,swipe.core.state,(function (p1__1761_SHARP_){
return cljs.core.conj.call(null,p1__1761_SHARP_,name);
}));

return swipe.core.press.call(null,name);
}
});
swipe.core.glick = (function swipe$core$glick(name){
if(cljs.core.truth_(swipe.core.toggles.call(null,name))){
return swipe.core.toggle.call(null,name);
} else {
return swipe.core.click.call(null,name);
}
});
swipe.core.get_key = (function swipe$core$get_key(name){
return cljs.core.get.call(null,swipe.core.keylist,name,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,name,(30)], null));
});
swipe.core.get_row = (function swipe$core$get_row(row){
return cljs.core.first.call(null,cljs.core.reduce.call(null,(function (p__1762,p__1763){
var vec__1764 = p__1762;
var keys = cljs.core.nth.call(null,vec__1764,(0),null);
var left = cljs.core.nth.call(null,vec__1764,(1),null);
var vec__1767 = p__1763;
var id = cljs.core.nth.call(null,vec__1767,(0),null);
var name = cljs.core.nth.call(null,vec__1767,(1),null);
var width = cljs.core.nth.call(null,vec__1767,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,keys,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,name,width,left], null)),((left + width) + (2))], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,(0)], null),cljs.core.map.call(null,swipe.core.get_key,row)));
});
swipe.core.gen_key = (function swipe$core$gen_key(x,y,w,h,text,id){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",1381301764),swipe.core.translate.call(null,x,y),new cljs.core.Keyword(null,"key","key",-1516042587),id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),w,new cljs.core.Keyword(null,"height","height",1025178622),h,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return swipe.core.glick.call(null,id);
}),new cljs.core.Keyword(null,"fill","fill",883462889),(cljs.core.truth_(cljs.core.deref.call(null,swipe.core.state).call(null,id))?"black":"#555")], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"middle",new cljs.core.Keyword(null,"x","x",2099068185),(w / (2)),new cljs.core.Keyword(null,"y","y",-1757859776),(h / (2)),new cljs.core.Keyword(null,"fill","fill",883462889),"white",new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none",new cljs.core.Keyword(null,"alignment-baseline","alignment-baseline",-311060879),"middle"], null),text], null)], null);
});
swipe.core.gen_enter = (function swipe$core$gen_enter(x,y){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",1381301764),swipe.core.translate.call(null,x,y),new cljs.core.Keyword(null,"key","key",-1516042587),"Enter"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),"#555",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return swipe.core.glick.call(null,"Enter");
}),new cljs.core.Keyword(null,"points","points",-1486596883),"0,0 40,0, 40,62, 10,62 10,30 0,30"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"middle",new cljs.core.Keyword(null,"x","x",2099068185),(20),new cljs.core.Keyword(null,"y","y",-1757859776),(15),new cljs.core.Keyword(null,"fill","fill",883462889),"white",new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none",new cljs.core.Keyword(null,"alignment-baseline","alignment-baseline",-311060879),"middle"], null),"Enter"], null)], null);
});
swipe.core.gen_row = (function swipe$core$gen_row(row,y,height){
return cljs.core.doall.call(null,(function (){var iter__4529__auto__ = (function swipe$core$gen_row_$_iter__1770(s__1771){
return (new cljs.core.LazySeq(null,(function (){
var s__1771__$1 = s__1771;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__1771__$1);
if(temp__5735__auto__){
var s__1771__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1771__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__1771__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__1773 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__1772 = (0);
while(true){
if((i__1772 < size__4528__auto__)){
var vec__1774 = cljs.core._nth.call(null,c__4527__auto__,i__1772);
var id = cljs.core.nth.call(null,vec__1774,(0),null);
var name = cljs.core.nth.call(null,vec__1774,(1),null);
var width = cljs.core.nth.call(null,vec__1774,(2),null);
var left = cljs.core.nth.call(null,vec__1774,(3),null);
cljs.core.chunk_append.call(null,b__1773,swipe.core.gen_key.call(null,left,y,width,height,name,id));

var G__1780 = (i__1772 + (1));
i__1772 = G__1780;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1773),swipe$core$gen_row_$_iter__1770.call(null,cljs.core.chunk_rest.call(null,s__1771__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1773),null);
}
} else {
var vec__1777 = cljs.core.first.call(null,s__1771__$2);
var id = cljs.core.nth.call(null,vec__1777,(0),null);
var name = cljs.core.nth.call(null,vec__1777,(1),null);
var width = cljs.core.nth.call(null,vec__1777,(2),null);
var left = cljs.core.nth.call(null,vec__1777,(3),null);
return cljs.core.cons.call(null,swipe.core.gen_key.call(null,left,y,width,height,name,id),swipe$core$gen_row_$_iter__1770.call(null,cljs.core.rest.call(null,s__1771__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,swipe.core.get_row.call(null,row));
})());
});
swipe.core.keyboard = (function swipe$core$keyboard(){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"background","background",-863952629),"#ccc",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"left","left",-399115937),(0)], null),new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 480 213"], null),swipe.core.gen_key.call(null,(2),(2),(50),(50),"Hold","Hold"),swipe.core.gen_key.call(null,(53),(2),(60),(50),"R. Click","R. Click"),swipe.core.gen_key.call(null,(114),(2),(50),(50),"Up","Up"),swipe.core.gen_key.call(null,(165),(2),(50),(50),"Down","Down"),swipe.core.gen_key.call(null,(216),(2),(50),(50),"Left","Left"),swipe.core.gen_key.call(null,(267),(2),(50),(50),"Right","Right"),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),swipe.core.translate.call(null,(2),(53))], null),cljs.core.doall.call(null,cljs.core.map.call(null,(function (row,index){
return swipe.core.gen_row.call(null,row,(index * (32)),(30));
}),swipe.core.keyboard_layout,cljs.core.range.call(null))),swipe.core.gen_enter.call(null,(436),(32))], null)], null);
});
swipe.core.swipe = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
swipe.core.on_touch_start = (function swipe$core$on_touch_start(evt){
var touch = (evt.touches[(0)]);
var x = touch.clientX;
var y = touch.clientY;
return cljs.core.reset_BANG_.call(null,swipe.core.swipe,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"tx","tx",466630418),x,new cljs.core.Keyword(null,"ty","ty",158290825),y], null));
});
swipe.core.on_touch_move = (function swipe$core$on_touch_move(evt){
var touch = (evt.touches[(0)]);
var x = touch.clientX;
var y = touch.clientY;
return cljs.core.swap_BANG_.call(null,swipe.core.swipe,(function (p1__1781_SHARP_){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,p1__1781_SHARP_,new cljs.core.Keyword(null,"tx","tx",466630418),x),new cljs.core.Keyword(null,"ty","ty",158290825),y);
}));
});
swipe.core.on_touch_end = (function swipe$core$on_touch_end(evt){
var map__1782 = cljs.core.deref.call(null,swipe.core.swipe);
var map__1782__$1 = (((((!((map__1782 == null))))?(((((map__1782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1782.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1782):map__1782);
var x = cljs.core.get.call(null,map__1782__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__1782__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var tx = cljs.core.get.call(null,map__1782__$1,new cljs.core.Keyword(null,"tx","tx",466630418));
var ty = cljs.core.get.call(null,map__1782__$1,new cljs.core.Keyword(null,"ty","ty",158290825));
var dx = (tx - x);
var dy = (ty - y);
if(((Math.abs(dx) + Math.abs(dy)) < (3))){
return swipe.core.post.call(null,"/post/click",cljs.core.PersistentArrayMap.EMPTY);
} else {
return swipe.core.post.call(null,"/post/swipe",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),dx,new cljs.core.Keyword(null,"y","y",-1757859776),dy], null));
}
});
swipe.core.touch_pad = (function swipe$core$touch_pad(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background","background",-863952629),"#fcc",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"on-touch-start","on-touch-start",447239419),swipe.core.on_touch_start,new cljs.core.Keyword(null,"on-touch-move","on-touch-move",1587118423),swipe.core.on_touch_move,new cljs.core.Keyword(null,"on-touch-end","on-touch-end",1515667389),swipe.core.on_touch_end], null)], null);
});
swipe.core.value = reagent.core.atom.call(null,"");
swipe.core.text_input = (function swipe$core$text_input(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"top","top",-1856271961),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,swipe.core.value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__1784_SHARP_){
return cljs.core.reset_BANG_.call(null,swipe.core.value,p1__1784_SHARP_.target.value);
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"80%"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
swipe.core.post.call(null,"/post/text",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.deref.call(null,swipe.core.value)], null));

return cljs.core.reset_BANG_.call(null,swipe.core.value,"");
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"fill"], null)], null),"Enter"], null)], null);
});
swipe.core.content = (function swipe$core$content(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null),swipe.core.touch_pad.call(null),swipe.core.text_input.call(null),swipe.core.keyboard.call(null)], null);
});
swipe.core.mount = (function swipe$core$mount(){
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [swipe.core.content], null),document.getElementById("app"));
});
swipe.core.mount.call(null);

//# sourceMappingURL=core.js.map
