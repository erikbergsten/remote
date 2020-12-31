// Compiled by ClojureScript 1.10.758 {:static-fns true, :optimize-constants true}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.input');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.protocols');
goog.require('reagent.ratom');
reagent.dom.global$module$react_dom = goog.global["ReactDOM"];
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return reagent.dom.global$module$react_dom.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__1203 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__1204 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__1204);

try{var G__1205 = (comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null));
var G__1206 = container;
var G__1207 = (function (){
var _STAR_always_update_STAR__orig_val__1208 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__1209 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__1209);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__1208);
}});
return reagent.dom.global$module$react_dom.render(G__1205,G__1206,G__1207);
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__1203);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__1211 = arguments.length;
switch (G__1211) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__1212 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,cljs.core.cst$kw$callback.cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1212,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1212,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return reagent.dom.global$module$react_dom.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__1216_1232 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__1217_1233 = null;
var count__1218_1234 = (0);
var i__1219_1235 = (0);
while(true){
if((i__1219_1235 < count__1218_1234)){
var vec__1226_1236 = chunk__1217_1233.cljs$core$IIndexed$_nth$arity$2(null,i__1219_1235);
var container_1237 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1226_1236,(0),null);
var comp_1238 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1226_1236,(1),null);
reagent.dom.re_render_component(comp_1238,container_1237);


var G__1239 = seq__1216_1232;
var G__1240 = chunk__1217_1233;
var G__1241 = count__1218_1234;
var G__1242 = (i__1219_1235 + (1));
seq__1216_1232 = G__1239;
chunk__1217_1233 = G__1240;
count__1218_1234 = G__1241;
i__1219_1235 = G__1242;
continue;
} else {
var temp__5735__auto___1243 = cljs.core.seq(seq__1216_1232);
if(temp__5735__auto___1243){
var seq__1216_1244__$1 = temp__5735__auto___1243;
if(cljs.core.chunked_seq_QMARK_(seq__1216_1244__$1)){
var c__4556__auto___1245 = cljs.core.chunk_first(seq__1216_1244__$1);
var G__1246 = cljs.core.chunk_rest(seq__1216_1244__$1);
var G__1247 = c__4556__auto___1245;
var G__1248 = cljs.core.count(c__4556__auto___1245);
var G__1249 = (0);
seq__1216_1232 = G__1246;
chunk__1217_1233 = G__1247;
count__1218_1234 = G__1248;
i__1219_1235 = G__1249;
continue;
} else {
var vec__1229_1250 = cljs.core.first(seq__1216_1244__$1);
var container_1251 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1229_1250,(0),null);
var comp_1252 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1229_1250,(1),null);
reagent.dom.re_render_component(comp_1252,container_1251);


var G__1253 = cljs.core.next(seq__1216_1244__$1);
var G__1254 = null;
var G__1255 = (0);
var G__1256 = (0);
seq__1216_1232 = G__1253;
chunk__1217_1233 = G__1254;
count__1218_1234 = G__1255;
i__1219_1235 = G__1256;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});
