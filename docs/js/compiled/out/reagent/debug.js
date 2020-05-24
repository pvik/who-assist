// Compiled by ClojureScript 1.10.597 {}
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
var G__21994__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__21994 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21995__i = 0, G__21995__a = new Array(arguments.length -  0);
while (G__21995__i < G__21995__a.length) {G__21995__a[G__21995__i] = arguments[G__21995__i + 0]; ++G__21995__i;}
  args = new cljs.core.IndexedSeq(G__21995__a,0,null);
} 
return G__21994__delegate.call(this,args);};
G__21994.cljs$lang$maxFixedArity = 0;
G__21994.cljs$lang$applyTo = (function (arglist__21996){
var args = cljs.core.seq(arglist__21996);
return G__21994__delegate(args);
});
G__21994.cljs$core$IFn$_invoke$arity$variadic = G__21994__delegate;
return G__21994;
})()
);

(o.error = (function() { 
var G__21997__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__21997 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21998__i = 0, G__21998__a = new Array(arguments.length -  0);
while (G__21998__i < G__21998__a.length) {G__21998__a[G__21998__i] = arguments[G__21998__i + 0]; ++G__21998__i;}
  args = new cljs.core.IndexedSeq(G__21998__a,0,null);
} 
return G__21997__delegate.call(this,args);};
G__21997.cljs$lang$maxFixedArity = 0;
G__21997.cljs$lang$applyTo = (function (arglist__21999){
var args = cljs.core.seq(arglist__21999);
return G__21997__delegate(args);
});
G__21997.cljs$core$IFn$_invoke$arity$variadic = G__21997__delegate;
return G__21997;
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

//# sourceMappingURL=debug.js.map?rel=1588466955050
