// Compiled by ClojureScript 1.10.758 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__711__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__711 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__712__i = 0, G__712__a = new Array(arguments.length -  0);
while (G__712__i < G__712__a.length) {G__712__a[G__712__i] = arguments[G__712__i + 0]; ++G__712__i;}
  args = new cljs.core.IndexedSeq(G__712__a,0,null);
} 
return G__711__delegate.call(this,args);};
G__711.cljs$lang$maxFixedArity = 0;
G__711.cljs$lang$applyTo = (function (arglist__713){
var args = cljs.core.seq(arglist__713);
return G__711__delegate(args);
});
G__711.cljs$core$IFn$_invoke$arity$variadic = G__711__delegate;
return G__711;
})()
);

(o.error = (function() { 
var G__714__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__714 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__715__i = 0, G__715__a = new Array(arguments.length -  0);
while (G__715__i < G__715__a.length) {G__715__a[G__715__i] = arguments[G__715__i + 0]; ++G__715__i;}
  args = new cljs.core.IndexedSeq(G__715__a,0,null);
} 
return G__714__delegate.call(this,args);};
G__714.cljs$lang$maxFixedArity = 0;
G__714.cljs$lang$applyTo = (function (arglist__716){
var args = cljs.core.seq(arglist__716);
return G__714__delegate(args);
});
G__714.cljs$core$IFn$_invoke$arity$variadic = G__714__delegate;
return G__714;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map
