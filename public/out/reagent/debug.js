// Compiled by ClojureScript 1.10.758 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__671__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__671 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__672__i = 0, G__672__a = new Array(arguments.length -  0);
while (G__672__i < G__672__a.length) {G__672__a[G__672__i] = arguments[G__672__i + 0]; ++G__672__i;}
  args = new cljs.core.IndexedSeq(G__672__a,0,null);
} 
return G__671__delegate.call(this,args);};
G__671.cljs$lang$maxFixedArity = 0;
G__671.cljs$lang$applyTo = (function (arglist__673){
var args = cljs.core.seq(arglist__673);
return G__671__delegate(args);
});
G__671.cljs$core$IFn$_invoke$arity$variadic = G__671__delegate;
return G__671;
})()
);

(o.error = (function() { 
var G__674__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__674 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__675__i = 0, G__675__a = new Array(arguments.length -  0);
while (G__675__i < G__675__a.length) {G__675__a[G__675__i] = arguments[G__675__i + 0]; ++G__675__i;}
  args = new cljs.core.IndexedSeq(G__675__a,0,null);
} 
return G__674__delegate.call(this,args);};
G__674.cljs$lang$maxFixedArity = 0;
G__674.cljs$lang$applyTo = (function (arglist__676){
var args = cljs.core.seq(arglist__676);
return G__674__delegate(args);
});
G__674.cljs$core$IFn$_invoke$arity$variadic = G__674__delegate;
return G__674;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});
