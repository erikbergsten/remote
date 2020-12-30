// Compiled by ClojureScript 1.10.758 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__1433){
var map__1434 = p__1433;
var map__1434__$1 = (((((!((map__1434 == null))))?(((((map__1434.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1434.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1434):map__1434);
var m = map__1434__$1;
var n = cljs.core.get.call(null,map__1434__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__1434__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__1436_1468 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__1437_1469 = null;
var count__1438_1470 = (0);
var i__1439_1471 = (0);
while(true){
if((i__1439_1471 < count__1438_1470)){
var f_1472 = cljs.core._nth.call(null,chunk__1437_1469,i__1439_1471);
cljs.core.println.call(null,"  ",f_1472);


var G__1473 = seq__1436_1468;
var G__1474 = chunk__1437_1469;
var G__1475 = count__1438_1470;
var G__1476 = (i__1439_1471 + (1));
seq__1436_1468 = G__1473;
chunk__1437_1469 = G__1474;
count__1438_1470 = G__1475;
i__1439_1471 = G__1476;
continue;
} else {
var temp__5735__auto___1477 = cljs.core.seq.call(null,seq__1436_1468);
if(temp__5735__auto___1477){
var seq__1436_1478__$1 = temp__5735__auto___1477;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1436_1478__$1)){
var c__4556__auto___1479 = cljs.core.chunk_first.call(null,seq__1436_1478__$1);
var G__1480 = cljs.core.chunk_rest.call(null,seq__1436_1478__$1);
var G__1481 = c__4556__auto___1479;
var G__1482 = cljs.core.count.call(null,c__4556__auto___1479);
var G__1483 = (0);
seq__1436_1468 = G__1480;
chunk__1437_1469 = G__1481;
count__1438_1470 = G__1482;
i__1439_1471 = G__1483;
continue;
} else {
var f_1484 = cljs.core.first.call(null,seq__1436_1478__$1);
cljs.core.println.call(null,"  ",f_1484);


var G__1485 = cljs.core.next.call(null,seq__1436_1478__$1);
var G__1486 = null;
var G__1487 = (0);
var G__1488 = (0);
seq__1436_1468 = G__1485;
chunk__1437_1469 = G__1486;
count__1438_1470 = G__1487;
i__1439_1471 = G__1488;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_1489 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_1489);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_1489)))?cljs.core.second.call(null,arglists_1489):arglists_1489));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__1440_1490 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__1441_1491 = null;
var count__1442_1492 = (0);
var i__1443_1493 = (0);
while(true){
if((i__1443_1493 < count__1442_1492)){
var vec__1454_1494 = cljs.core._nth.call(null,chunk__1441_1491,i__1443_1493);
var name_1495 = cljs.core.nth.call(null,vec__1454_1494,(0),null);
var map__1457_1496 = cljs.core.nth.call(null,vec__1454_1494,(1),null);
var map__1457_1497__$1 = (((((!((map__1457_1496 == null))))?(((((map__1457_1496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1457_1496.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1457_1496):map__1457_1496);
var doc_1498 = cljs.core.get.call(null,map__1457_1497__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_1499 = cljs.core.get.call(null,map__1457_1497__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_1495);

cljs.core.println.call(null," ",arglists_1499);

if(cljs.core.truth_(doc_1498)){
cljs.core.println.call(null," ",doc_1498);
} else {
}


var G__1500 = seq__1440_1490;
var G__1501 = chunk__1441_1491;
var G__1502 = count__1442_1492;
var G__1503 = (i__1443_1493 + (1));
seq__1440_1490 = G__1500;
chunk__1441_1491 = G__1501;
count__1442_1492 = G__1502;
i__1443_1493 = G__1503;
continue;
} else {
var temp__5735__auto___1504 = cljs.core.seq.call(null,seq__1440_1490);
if(temp__5735__auto___1504){
var seq__1440_1505__$1 = temp__5735__auto___1504;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1440_1505__$1)){
var c__4556__auto___1506 = cljs.core.chunk_first.call(null,seq__1440_1505__$1);
var G__1507 = cljs.core.chunk_rest.call(null,seq__1440_1505__$1);
var G__1508 = c__4556__auto___1506;
var G__1509 = cljs.core.count.call(null,c__4556__auto___1506);
var G__1510 = (0);
seq__1440_1490 = G__1507;
chunk__1441_1491 = G__1508;
count__1442_1492 = G__1509;
i__1443_1493 = G__1510;
continue;
} else {
var vec__1459_1511 = cljs.core.first.call(null,seq__1440_1505__$1);
var name_1512 = cljs.core.nth.call(null,vec__1459_1511,(0),null);
var map__1462_1513 = cljs.core.nth.call(null,vec__1459_1511,(1),null);
var map__1462_1514__$1 = (((((!((map__1462_1513 == null))))?(((((map__1462_1513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1462_1513.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1462_1513):map__1462_1513);
var doc_1515 = cljs.core.get.call(null,map__1462_1514__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_1516 = cljs.core.get.call(null,map__1462_1514__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_1512);

cljs.core.println.call(null," ",arglists_1516);

if(cljs.core.truth_(doc_1515)){
cljs.core.println.call(null," ",doc_1515);
} else {
}


var G__1517 = cljs.core.next.call(null,seq__1440_1505__$1);
var G__1518 = null;
var G__1519 = (0);
var G__1520 = (0);
seq__1440_1490 = G__1517;
chunk__1441_1491 = G__1518;
count__1442_1492 = G__1519;
i__1443_1493 = G__1520;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.call(null,"Spec");

var seq__1464 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__1465 = null;
var count__1466 = (0);
var i__1467 = (0);
while(true){
if((i__1467 < count__1466)){
var role = cljs.core._nth.call(null,chunk__1465,i__1467);
var temp__5735__auto___1521__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___1521__$1)){
var spec_1522 = temp__5735__auto___1521__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_1522));
} else {
}


var G__1523 = seq__1464;
var G__1524 = chunk__1465;
var G__1525 = count__1466;
var G__1526 = (i__1467 + (1));
seq__1464 = G__1523;
chunk__1465 = G__1524;
count__1466 = G__1525;
i__1467 = G__1526;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__1464);
if(temp__5735__auto____$1){
var seq__1464__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1464__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__1464__$1);
var G__1527 = cljs.core.chunk_rest.call(null,seq__1464__$1);
var G__1528 = c__4556__auto__;
var G__1529 = cljs.core.count.call(null,c__4556__auto__);
var G__1530 = (0);
seq__1464 = G__1527;
chunk__1465 = G__1528;
count__1466 = G__1529;
i__1467 = G__1530;
continue;
} else {
var role = cljs.core.first.call(null,seq__1464__$1);
var temp__5735__auto___1531__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___1531__$2)){
var spec_1532 = temp__5735__auto___1531__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_1532));
} else {
}


var G__1533 = cljs.core.next.call(null,seq__1464__$1);
var G__1534 = null;
var G__1535 = (0);
var G__1536 = (0);
seq__1464 = G__1533;
chunk__1465 = G__1534;
count__1466 = G__1535;
i__1467 = G__1536;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__1537 = cljs.core.conj.call(null,via,t);
var G__1538 = cljs.core.ex_cause.call(null,t);
via = G__1537;
t = G__1538;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__1541 = datafied_throwable;
var map__1541__$1 = (((((!((map__1541 == null))))?(((((map__1541.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1541.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1541):map__1541);
var via = cljs.core.get.call(null,map__1541__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__1541__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__1541__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__1542 = cljs.core.last.call(null,via);
var map__1542__$1 = (((((!((map__1542 == null))))?(((((map__1542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1542.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1542):map__1542);
var type = cljs.core.get.call(null,map__1542__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__1542__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__1542__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__1543 = data;
var map__1543__$1 = (((((!((map__1543 == null))))?(((((map__1543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1543.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1543):map__1543);
var problems = cljs.core.get.call(null,map__1543__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__1543__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__1543__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__1544 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__1544__$1 = (((((!((map__1544 == null))))?(((((map__1544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1544.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1544):map__1544);
var top_data = map__1544__$1;
var source = cljs.core.get.call(null,map__1544__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__1549 = phase;
var G__1549__$1 = (((G__1549 instanceof cljs.core.Keyword))?G__1549.fqn:null);
switch (G__1549__$1) {
case "read-source":
var map__1550 = data;
var map__1550__$1 = (((((!((map__1550 == null))))?(((((map__1550.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1550.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1550):map__1550);
var line = cljs.core.get.call(null,map__1550__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__1550__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__1552 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__1552__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__1552,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__1552);
var G__1552__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__1552__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__1552__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__1552__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__1552__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__1553 = top_data;
var G__1553__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__1553,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__1553);
var G__1553__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__1553__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__1553__$1);
var G__1553__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__1553__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__1553__$2);
var G__1553__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__1553__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__1553__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__1553__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__1553__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__1554 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__1554,(0),null);
var method = cljs.core.nth.call(null,vec__1554,(1),null);
var file = cljs.core.nth.call(null,vec__1554,(2),null);
var line = cljs.core.nth.call(null,vec__1554,(3),null);
var G__1557 = top_data;
var G__1557__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__1557,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__1557);
var G__1557__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__1557__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__1557__$1);
var G__1557__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__1557__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__1557__$2);
var G__1557__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__1557__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__1557__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__1557__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__1557__$4;
}

break;
case "execution":
var vec__1558 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__1558,(0),null);
var method = cljs.core.nth.call(null,vec__1558,(1),null);
var file = cljs.core.nth.call(null,vec__1558,(2),null);
var line = cljs.core.nth.call(null,vec__1558,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__1540_SHARP_){
var or__4126__auto__ = (p1__1540_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__1540_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__1561 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__1561__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__1561,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__1561);
var G__1561__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__1561__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__1561__$1);
var G__1561__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.call(null,G__1561__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__1561__$2);
var G__1561__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__1561__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__1561__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__1561__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__1561__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1549__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__1565){
var map__1566 = p__1565;
var map__1566__$1 = (((((!((map__1566 == null))))?(((((map__1566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1566.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1566):map__1566);
var triage_data = map__1566__$1;
var phase = cljs.core.get.call(null,map__1566__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__1566__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__1566__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__1566__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__1566__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__1566__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__1566__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__1566__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__1568 = phase;
var G__1568__$1 = (((G__1568 instanceof cljs.core.Keyword))?G__1568.fqn:null);
switch (G__1568__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__1569_1578 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__1570_1579 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__1571_1580 = true;
var _STAR_print_fn_STAR__temp_val__1572_1581 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__1571_1580);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__1572_1581);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__1563_SHARP_){
return cljs.core.dissoc.call(null,p1__1563_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__1570_1579);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__1569_1578);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__1573_1582 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__1574_1583 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__1575_1584 = true;
var _STAR_print_fn_STAR__temp_val__1576_1585 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__1575_1584);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__1576_1585);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__1564_SHARP_){
return cljs.core.dissoc.call(null,p1__1564_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__1574_1583);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__1573_1582);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1568__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
