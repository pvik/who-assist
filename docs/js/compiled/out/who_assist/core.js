// Compiled by ClojureScript 1.10.597 {}
goog.provide('who_assist.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('dommy.core');
goog.require('who_assist.views');
cljs.core.enable_console_print_BANG_.call(null);
who_assist.core.console_log = (function who_assist$core$console_log(var_args){
var args__4795__auto__ = [];
var len__4789__auto___27928 = arguments.length;
var i__4790__auto___27929 = (0);
while(true){
if((i__4790__auto___27929 < len__4789__auto___27928)){
args__4795__auto__.push((arguments[i__4790__auto___27929]));

var G__27930 = (i__4790__auto___27929 + (1));
i__4790__auto___27929 = G__27930;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return who_assist.core.console_log.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(who_assist.core.console_log.cljs$core$IFn$_invoke$arity$variadic = (function (msg,more_msgs){
return console.log([cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),cljs.core.str.cljs$core$IFn$_invoke$arity$1(more_msgs)].join(''));
}));

(who_assist.core.console_log.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(who_assist.core.console_log.cljs$lang$applyTo = (function (seq27926){
var G__27927 = cljs.core.first.call(null,seq27926);
var seq27926__$1 = cljs.core.next.call(null,seq27926);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27927,seq27926__$1);
}));

who_assist.core.init = (function who_assist$core$init(){
who_assist.core.console_log.call(null,"Initializing...");

return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [who_assist.views.main_html], null),document.getElementById("app"));
});
(window.onload = who_assist.core.init);

//# sourceMappingURL=core.js.map?rel=1588467288290
