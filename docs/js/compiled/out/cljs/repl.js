// Compiled by ClojureScript 1.10.597 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__30258){
var map__30259 = p__30258;
var map__30259__$1 = (((((!((map__30259 == null))))?(((((map__30259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30259.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30259):map__30259);
var m = map__30259__$1;
var n = cljs.core.get.call(null,map__30259__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__30259__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
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
var seq__30261_30293 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30262_30294 = null;
var count__30263_30295 = (0);
var i__30264_30296 = (0);
while(true){
if((i__30264_30296 < count__30263_30295)){
var f_30297 = cljs.core._nth.call(null,chunk__30262_30294,i__30264_30296);
cljs.core.println.call(null,"  ",f_30297);


var G__30298 = seq__30261_30293;
var G__30299 = chunk__30262_30294;
var G__30300 = count__30263_30295;
var G__30301 = (i__30264_30296 + (1));
seq__30261_30293 = G__30298;
chunk__30262_30294 = G__30299;
count__30263_30295 = G__30300;
i__30264_30296 = G__30301;
continue;
} else {
var temp__5735__auto___30302 = cljs.core.seq.call(null,seq__30261_30293);
if(temp__5735__auto___30302){
var seq__30261_30303__$1 = temp__5735__auto___30302;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30261_30303__$1)){
var c__4609__auto___30304 = cljs.core.chunk_first.call(null,seq__30261_30303__$1);
var G__30305 = cljs.core.chunk_rest.call(null,seq__30261_30303__$1);
var G__30306 = c__4609__auto___30304;
var G__30307 = cljs.core.count.call(null,c__4609__auto___30304);
var G__30308 = (0);
seq__30261_30293 = G__30305;
chunk__30262_30294 = G__30306;
count__30263_30295 = G__30307;
i__30264_30296 = G__30308;
continue;
} else {
var f_30309 = cljs.core.first.call(null,seq__30261_30303__$1);
cljs.core.println.call(null,"  ",f_30309);


var G__30310 = cljs.core.next.call(null,seq__30261_30303__$1);
var G__30311 = null;
var G__30312 = (0);
var G__30313 = (0);
seq__30261_30293 = G__30310;
chunk__30262_30294 = G__30311;
count__30263_30295 = G__30312;
i__30264_30296 = G__30313;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_30314 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_30314);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_30314)))?cljs.core.second.call(null,arglists_30314):arglists_30314));
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
var seq__30265_30315 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30266_30316 = null;
var count__30267_30317 = (0);
var i__30268_30318 = (0);
while(true){
if((i__30268_30318 < count__30267_30317)){
var vec__30279_30319 = cljs.core._nth.call(null,chunk__30266_30316,i__30268_30318);
var name_30320 = cljs.core.nth.call(null,vec__30279_30319,(0),null);
var map__30282_30321 = cljs.core.nth.call(null,vec__30279_30319,(1),null);
var map__30282_30322__$1 = (((((!((map__30282_30321 == null))))?(((((map__30282_30321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30282_30321.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30282_30321):map__30282_30321);
var doc_30323 = cljs.core.get.call(null,map__30282_30322__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30324 = cljs.core.get.call(null,map__30282_30322__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30320);

cljs.core.println.call(null," ",arglists_30324);

if(cljs.core.truth_(doc_30323)){
cljs.core.println.call(null," ",doc_30323);
} else {
}


var G__30325 = seq__30265_30315;
var G__30326 = chunk__30266_30316;
var G__30327 = count__30267_30317;
var G__30328 = (i__30268_30318 + (1));
seq__30265_30315 = G__30325;
chunk__30266_30316 = G__30326;
count__30267_30317 = G__30327;
i__30268_30318 = G__30328;
continue;
} else {
var temp__5735__auto___30329 = cljs.core.seq.call(null,seq__30265_30315);
if(temp__5735__auto___30329){
var seq__30265_30330__$1 = temp__5735__auto___30329;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30265_30330__$1)){
var c__4609__auto___30331 = cljs.core.chunk_first.call(null,seq__30265_30330__$1);
var G__30332 = cljs.core.chunk_rest.call(null,seq__30265_30330__$1);
var G__30333 = c__4609__auto___30331;
var G__30334 = cljs.core.count.call(null,c__4609__auto___30331);
var G__30335 = (0);
seq__30265_30315 = G__30332;
chunk__30266_30316 = G__30333;
count__30267_30317 = G__30334;
i__30268_30318 = G__30335;
continue;
} else {
var vec__30284_30336 = cljs.core.first.call(null,seq__30265_30330__$1);
var name_30337 = cljs.core.nth.call(null,vec__30284_30336,(0),null);
var map__30287_30338 = cljs.core.nth.call(null,vec__30284_30336,(1),null);
var map__30287_30339__$1 = (((((!((map__30287_30338 == null))))?(((((map__30287_30338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30287_30338.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30287_30338):map__30287_30338);
var doc_30340 = cljs.core.get.call(null,map__30287_30339__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30341 = cljs.core.get.call(null,map__30287_30339__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30337);

cljs.core.println.call(null," ",arglists_30341);

if(cljs.core.truth_(doc_30340)){
cljs.core.println.call(null," ",doc_30340);
} else {
}


var G__30342 = cljs.core.next.call(null,seq__30265_30330__$1);
var G__30343 = null;
var G__30344 = (0);
var G__30345 = (0);
seq__30265_30315 = G__30342;
chunk__30266_30316 = G__30343;
count__30267_30317 = G__30344;
i__30268_30318 = G__30345;
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

var seq__30289 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__30290 = null;
var count__30291 = (0);
var i__30292 = (0);
while(true){
if((i__30292 < count__30291)){
var role = cljs.core._nth.call(null,chunk__30290,i__30292);
var temp__5735__auto___30346__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___30346__$1)){
var spec_30347 = temp__5735__auto___30346__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30347));
} else {
}


var G__30348 = seq__30289;
var G__30349 = chunk__30290;
var G__30350 = count__30291;
var G__30351 = (i__30292 + (1));
seq__30289 = G__30348;
chunk__30290 = G__30349;
count__30291 = G__30350;
i__30292 = G__30351;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__30289);
if(temp__5735__auto____$1){
var seq__30289__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30289__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__30289__$1);
var G__30352 = cljs.core.chunk_rest.call(null,seq__30289__$1);
var G__30353 = c__4609__auto__;
var G__30354 = cljs.core.count.call(null,c__4609__auto__);
var G__30355 = (0);
seq__30289 = G__30352;
chunk__30290 = G__30353;
count__30291 = G__30354;
i__30292 = G__30355;
continue;
} else {
var role = cljs.core.first.call(null,seq__30289__$1);
var temp__5735__auto___30356__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___30356__$2)){
var spec_30357 = temp__5735__auto___30356__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30357));
} else {
}


var G__30358 = cljs.core.next.call(null,seq__30289__$1);
var G__30359 = null;
var G__30360 = (0);
var G__30361 = (0);
seq__30289 = G__30358;
chunk__30290 = G__30359;
count__30291 = G__30360;
i__30292 = G__30361;
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
var G__30362 = cljs.core.conj.call(null,via,t);
var G__30363 = cljs.core.ex_cause.call(null,t);
via = G__30362;
t = G__30363;
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
var map__30366 = datafied_throwable;
var map__30366__$1 = (((((!((map__30366 == null))))?(((((map__30366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30366.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30366):map__30366);
var via = cljs.core.get.call(null,map__30366__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__30366__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__30366__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__30367 = cljs.core.last.call(null,via);
var map__30367__$1 = (((((!((map__30367 == null))))?(((((map__30367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30367.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30367):map__30367);
var type = cljs.core.get.call(null,map__30367__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__30367__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__30367__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__30368 = data;
var map__30368__$1 = (((((!((map__30368 == null))))?(((((map__30368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30368):map__30368);
var problems = cljs.core.get.call(null,map__30368__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__30368__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__30368__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__30369 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__30369__$1 = (((((!((map__30369 == null))))?(((((map__30369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30369.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30369):map__30369);
var top_data = map__30369__$1;
var source = cljs.core.get.call(null,map__30369__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__30374 = phase;
var G__30374__$1 = (((G__30374 instanceof cljs.core.Keyword))?G__30374.fqn:null);
switch (G__30374__$1) {
case "read-source":
var map__30375 = data;
var map__30375__$1 = (((((!((map__30375 == null))))?(((((map__30375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30375.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30375):map__30375);
var line = cljs.core.get.call(null,map__30375__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__30375__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__30377 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__30377__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__30377,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__30377);
var G__30377__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__30377__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__30377__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__30377__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__30377__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__30378 = top_data;
var G__30378__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__30378,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__30378);
var G__30378__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__30378__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__30378__$1);
var G__30378__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__30378__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__30378__$2);
var G__30378__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__30378__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__30378__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__30378__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__30378__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__30379 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__30379,(0),null);
var method = cljs.core.nth.call(null,vec__30379,(1),null);
var file = cljs.core.nth.call(null,vec__30379,(2),null);
var line = cljs.core.nth.call(null,vec__30379,(3),null);
var G__30382 = top_data;
var G__30382__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__30382,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__30382);
var G__30382__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__30382__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__30382__$1);
var G__30382__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.call(null,G__30382__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__30382__$2);
var G__30382__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__30382__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__30382__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__30382__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__30382__$4;
}

break;
case "execution":
var vec__30383 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__30383,(0),null);
var method = cljs.core.nth.call(null,vec__30383,(1),null);
var file = cljs.core.nth.call(null,vec__30383,(2),null);
var line = cljs.core.nth.call(null,vec__30383,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__30365_SHARP_){
var or__4185__auto__ = (p1__30365_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__30365_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__30386 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__30386__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__30386,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__30386);
var G__30386__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__30386__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__30386__$1);
var G__30386__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
}
})())?cljs.core.assoc.call(null,G__30386__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__30386__$2);
var G__30386__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__30386__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__30386__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__30386__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__30386__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30374__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__30390){
var map__30391 = p__30390;
var map__30391__$1 = (((((!((map__30391 == null))))?(((((map__30391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30391.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30391):map__30391);
var triage_data = map__30391__$1;
var phase = cljs.core.get.call(null,map__30391__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__30391__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__30391__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__30391__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__30391__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__30391__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__30391__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__30391__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = source;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = line;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4185__auto__ = class$;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__30393 = phase;
var G__30393__$1 = (((G__30393 instanceof cljs.core.Keyword))?G__30393.fqn:null);
switch (G__30393__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__30394_30403 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__30395_30404 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__30396_30405 = true;
var _STAR_print_fn_STAR__temp_val__30397_30406 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__30396_30405);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__30397_30406);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__30388_SHARP_){
return cljs.core.dissoc.call(null,p1__30388_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__30395_30404);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__30394_30403);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
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
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__30398_30407 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__30399_30408 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__30400_30409 = true;
var _STAR_print_fn_STAR__temp_val__30401_30410 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__30400_30409);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__30401_30410);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__30389_SHARP_){
return cljs.core.dissoc.call(null,p1__30389_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__30399_30408);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__30398_30407);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30393__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1588466962122
