// Compiled by ClojureScript 1.10.597 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.19";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e30611){if((e30611 instanceof Error)){
var e = e30611;
return "Error: Unable to stringify";
} else {
throw e30611;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__30614 = arguments.length;
switch (G__30614) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__30612_SHARP_){
if(typeof p1__30612_SHARP_ === 'string'){
return p1__30612_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__30612_SHARP_);
}
}),args)], null)], null));

return null;
}));

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
}));

(figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2);

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4795__auto__ = [];
var len__4789__auto___30617 = arguments.length;
var i__4790__auto___30618 = (0);
while(true){
if((i__4790__auto___30618 < len__4789__auto___30617)){
args__4795__auto__.push((arguments[i__4790__auto___30618]));

var G__30619 = (i__4790__auto___30618 + (1));
i__4790__auto___30618 = G__30619;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
}));

(figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq30616){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30616));
}));

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4795__auto__ = [];
var len__4789__auto___30621 = arguments.length;
var i__4790__auto___30622 = (0);
while(true){
if((i__4790__auto___30622 < len__4789__auto___30621)){
args__4795__auto__.push((arguments[i__4790__auto___30622]));

var G__30623 = (i__4790__auto___30622 + (1));
i__4790__auto___30622 = G__30623;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
}));

(figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq30620){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30620));
}));

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
(cljs.core._STAR_print_newline_STAR_ = false);

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__30624){
var map__30625 = p__30624;
var map__30625__$1 = (((((!((map__30625 == null))))?(((((map__30625.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30625.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30625):map__30625);
var message = cljs.core.get.call(null,map__30625__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__30625__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4185__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return false;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__24962__auto___30705 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24963__auto__ = (function (){var switch__24888__auto__ = (function (state_30676){
var state_val_30677 = (state_30676[(1)]);
if((state_val_30677 === (7))){
var inst_30672 = (state_30676[(2)]);
var state_30676__$1 = state_30676;
var statearr_30678_30706 = state_30676__$1;
(statearr_30678_30706[(2)] = inst_30672);

(statearr_30678_30706[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30677 === (1))){
var state_30676__$1 = state_30676;
var statearr_30679_30707 = state_30676__$1;
(statearr_30679_30707[(2)] = null);

(statearr_30679_30707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30677 === (4))){
var inst_30629 = (state_30676[(7)]);
var inst_30629__$1 = (state_30676[(2)]);
var state_30676__$1 = (function (){var statearr_30680 = state_30676;
(statearr_30680[(7)] = inst_30629__$1);

return statearr_30680;
})();
if(cljs.core.truth_(inst_30629__$1)){
var statearr_30681_30708 = state_30676__$1;
(statearr_30681_30708[(1)] = (5));

} else {
var statearr_30682_30709 = state_30676__$1;
(statearr_30682_30709[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30677 === (15))){
var inst_30636 = (state_30676[(8)]);
var inst_30651 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30636);
var inst_30652 = cljs.core.first.call(null,inst_30651);
var inst_30653 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_30652);
var inst_30654 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30653)].join('');
var inst_30655 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_30654);
var state_30676__$1 = state_30676;
var statearr_30683_30710 = state_30676__$1;
(statearr_30683_30710[(2)] = inst_30655);

(statearr_30683_30710[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30677 === (13))){
var inst_30660 = (state_30676[(2)]);
var state_30676__$1 = state_30676;
var statearr_30684_30711 = state_30676__$1;
(statearr_30684_30711[(2)] = inst_30660);

(statearr_30684_30711[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30677 === (6))){
var state_30676__$1 = state_30676;
var statearr_30685_30712 = state_30676__$1;
(statearr_30685_30712[(2)] = null);

(statearr_30685_30712[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30677 === (17))){
var inst_30658 = (state_30676[(2)]);
var state_30676__$1 = state_30676;
var statearr_30686_30713 = state_30676__$1;
(statearr_30686_30713[(2)] = inst_30658);

(statearr_30686_30713[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30677 === (3))){
var inst_30674 = (state_30676[(2)]);
var state_30676__$1 = state_30676;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30676__$1,inst_30674);
} else {
if((state_val_30677 === (12))){
var inst_30635 = (state_30676[(9)]);
var inst_30649 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_30635,opts);
var state_30676__$1 = state_30676;
if(inst_30649){
var statearr_30687_30714 = state_30676__$1;
(statearr_30687_30714[(1)] = (15));

} else {
var statearr_30688_30715 = state_30676__$1;
(statearr_30688_30715[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30677 === (2))){
var state_30676__$1 = state_30676;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30676__$1,(4),ch);
} else {
if((state_val_30677 === (11))){
var inst_30636 = (state_30676[(8)]);
var inst_30641 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30642 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_30636);
var inst_30643 = cljs.core.async.timeout.call(null,(1000));
var inst_30644 = [inst_30642,inst_30643];
var inst_30645 = (new cljs.core.PersistentVector(null,2,(5),inst_30641,inst_30644,null));
var state_30676__$1 = state_30676;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30676__$1,(14),inst_30645);
} else {
if((state_val_30677 === (9))){
var inst_30636 = (state_30676[(8)]);
var inst_30662 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_30663 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30636);
var inst_30664 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30663);
var inst_30665 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30664)].join('');
var inst_30666 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_30665);
var state_30676__$1 = (function (){var statearr_30689 = state_30676;
(statearr_30689[(10)] = inst_30662);

return statearr_30689;
})();
var statearr_30690_30716 = state_30676__$1;
(statearr_30690_30716[(2)] = inst_30666);

(statearr_30690_30716[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30677 === (5))){
var inst_30629 = (state_30676[(7)]);
var inst_30631 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_30632 = (new cljs.core.PersistentArrayMap(null,2,inst_30631,null));
var inst_30633 = (new cljs.core.PersistentHashSet(null,inst_30632,null));
var inst_30634 = figwheel.client.focus_msgs.call(null,inst_30633,inst_30629);
var inst_30635 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_30634);
var inst_30636 = cljs.core.first.call(null,inst_30634);
var inst_30637 = figwheel.client.autoload_QMARK_.call(null);
var state_30676__$1 = (function (){var statearr_30691 = state_30676;
(statearr_30691[(8)] = inst_30636);

(statearr_30691[(9)] = inst_30635);

return statearr_30691;
})();
if(cljs.core.truth_(inst_30637)){
var statearr_30692_30717 = state_30676__$1;
(statearr_30692_30717[(1)] = (8));

} else {
var statearr_30693_30718 = state_30676__$1;
(statearr_30693_30718[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30677 === (14))){
var inst_30647 = (state_30676[(2)]);
var state_30676__$1 = state_30676;
var statearr_30694_30719 = state_30676__$1;
(statearr_30694_30719[(2)] = inst_30647);

(statearr_30694_30719[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30677 === (16))){
var state_30676__$1 = state_30676;
var statearr_30695_30720 = state_30676__$1;
(statearr_30695_30720[(2)] = null);

(statearr_30695_30720[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30677 === (10))){
var inst_30668 = (state_30676[(2)]);
var state_30676__$1 = (function (){var statearr_30696 = state_30676;
(statearr_30696[(11)] = inst_30668);

return statearr_30696;
})();
var statearr_30697_30721 = state_30676__$1;
(statearr_30697_30721[(2)] = null);

(statearr_30697_30721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30677 === (8))){
var inst_30635 = (state_30676[(9)]);
var inst_30639 = figwheel.client.reload_file_state_QMARK_.call(null,inst_30635,opts);
var state_30676__$1 = state_30676;
if(cljs.core.truth_(inst_30639)){
var statearr_30698_30722 = state_30676__$1;
(statearr_30698_30722[(1)] = (11));

} else {
var statearr_30699_30723 = state_30676__$1;
(statearr_30699_30723[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__24889__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__24889__auto____0 = (function (){
var statearr_30700 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30700[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__24889__auto__);

(statearr_30700[(1)] = (1));

return statearr_30700;
});
var figwheel$client$file_reloader_plugin_$_state_machine__24889__auto____1 = (function (state_30676){
while(true){
var ret_value__24890__auto__ = (function (){try{while(true){
var result__24891__auto__ = switch__24888__auto__.call(null,state_30676);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24891__auto__;
}
break;
}
}catch (e30701){var ex__24892__auto__ = e30701;
var statearr_30702_30724 = state_30676;
(statearr_30702_30724[(2)] = ex__24892__auto__);


if(cljs.core.seq.call(null,(state_30676[(4)]))){
var statearr_30703_30725 = state_30676;
(statearr_30703_30725[(1)] = cljs.core.first.call(null,(state_30676[(4)])));

} else {
throw ex__24892__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30726 = state_30676;
state_30676 = G__30726;
continue;
} else {
return ret_value__24890__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__24889__auto__ = function(state_30676){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__24889__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__24889__auto____1.call(this,state_30676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__24889__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__24889__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__24889__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__24889__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__24889__auto__;
})()
})();
var state__24964__auto__ = (function (){var statearr_30704 = f__24963__auto__.call(null);
(statearr_30704[(6)] = c__24962__auto___30705);

return statearr_30704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24964__auto__);
}));


return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__30727_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__30727_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.SAFARI){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(goog.userAgent.product.CHROME){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.FIREFOX){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(goog.userAgent.product.IE){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_30733 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__30729 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__30730 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__30731 = true;
var _STAR_print_fn_STAR__temp_val__30732 = (function (x){
return sb.append(x);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__30731);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__30732);

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__30730);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__30729);
}}catch (e30728){if((e30728 instanceof Error)){
var e = e30728;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_30733], null));
} else {
var e = e30728;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return (cljs.user = ({}));
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__30734){
var map__30735 = p__30734;
var map__30735__$1 = (((((!((map__30735 == null))))?(((((map__30735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30735.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30735):map__30735);
var opts = map__30735__$1;
var build_id = cljs.core.get.call(null,map__30735__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return (function (p__30737){
var vec__30738 = p__30737;
var seq__30739 = cljs.core.seq.call(null,vec__30738);
var first__30740 = cljs.core.first.call(null,seq__30739);
var seq__30739__$1 = cljs.core.next.call(null,seq__30739);
var map__30741 = first__30740;
var map__30741__$1 = (((((!((map__30741 == null))))?(((((map__30741.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30741.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30741):map__30741);
var msg = map__30741__$1;
var msg_name = cljs.core.get.call(null,map__30741__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30739__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,(function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
}));
} else {
return null;
}
});
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__30743){
var vec__30744 = p__30743;
var seq__30745 = cljs.core.seq.call(null,vec__30744);
var first__30746 = cljs.core.first.call(null,seq__30745);
var seq__30745__$1 = cljs.core.next.call(null,seq__30745);
var map__30747 = first__30746;
var map__30747__$1 = (((((!((map__30747 == null))))?(((((map__30747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30747.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30747):map__30747);
var msg = map__30747__$1;
var msg_name = cljs.core.get.call(null,map__30747__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30745__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__30749){
var map__30750 = p__30749;
var map__30750__$1 = (((((!((map__30750 == null))))?(((((map__30750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30750.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30750):map__30750);
var on_compile_warning = cljs.core.get.call(null,map__30750__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__30750__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return (function (p__30752){
var vec__30753 = p__30752;
var seq__30754 = cljs.core.seq.call(null,vec__30753);
var first__30755 = cljs.core.first.call(null,seq__30754);
var seq__30754__$1 = cljs.core.next.call(null,seq__30754);
var map__30756 = first__30755;
var map__30756__$1 = (((((!((map__30756 == null))))?(((((map__30756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30756.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30756):map__30756);
var msg = map__30756__$1;
var msg_name = cljs.core.get.call(null,map__30756__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30754__$1;
var pred__30758 = cljs.core._EQ_;
var expr__30759 = msg_name;
if(cljs.core.truth_(pred__30758.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__30759))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__30758.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30759))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__24962__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24963__auto__ = (function (){var switch__24888__auto__ = (function (state_30848){
var state_val_30849 = (state_30848[(1)]);
if((state_val_30849 === (7))){
var inst_30768 = (state_30848[(2)]);
var state_30848__$1 = state_30848;
if(cljs.core.truth_(inst_30768)){
var statearr_30850_30898 = state_30848__$1;
(statearr_30850_30898[(1)] = (8));

} else {
var statearr_30851_30899 = state_30848__$1;
(statearr_30851_30899[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30849 === (20))){
var inst_30842 = (state_30848[(2)]);
var state_30848__$1 = state_30848;
var statearr_30852_30900 = state_30848__$1;
(statearr_30852_30900[(2)] = inst_30842);

(statearr_30852_30900[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30849 === (27))){
var inst_30838 = (state_30848[(2)]);
var state_30848__$1 = state_30848;
var statearr_30853_30901 = state_30848__$1;
(statearr_30853_30901[(2)] = inst_30838);

(statearr_30853_30901[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30849 === (1))){
var inst_30761 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_30848__$1 = state_30848;
if(cljs.core.truth_(inst_30761)){
var statearr_30854_30902 = state_30848__$1;
(statearr_30854_30902[(1)] = (2));

} else {
var statearr_30855_30903 = state_30848__$1;
(statearr_30855_30903[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30849 === (24))){
var inst_30840 = (state_30848[(2)]);
var state_30848__$1 = state_30848;
var statearr_30856_30904 = state_30848__$1;
(statearr_30856_30904[(2)] = inst_30840);

(statearr_30856_30904[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30849 === (4))){
var inst_30846 = (state_30848[(2)]);
var state_30848__$1 = state_30848;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30848__$1,inst_30846);
} else {
if((state_val_30849 === (15))){
var inst_30844 = (state_30848[(2)]);
var state_30848__$1 = state_30848;
var statearr_30857_30905 = state_30848__$1;
(statearr_30857_30905[(2)] = inst_30844);

(statearr_30857_30905[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30849 === (21))){
var inst_30797 = (state_30848[(2)]);
var inst_30798 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30799 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30798);
var state_30848__$1 = (function (){var statearr_30858 = state_30848;
(statearr_30858[(7)] = inst_30797);

return statearr_30858;
})();
var statearr_30859_30906 = state_30848__$1;
(statearr_30859_30906[(2)] = inst_30799);

(statearr_30859_30906[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30849 === (31))){
var inst_30827 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_30848__$1 = state_30848;
if(inst_30827){
var statearr_30860_30907 = state_30848__$1;
(statearr_30860_30907[(1)] = (34));

} else {
var statearr_30861_30908 = state_30848__$1;
(statearr_30861_30908[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30849 === (32))){
var inst_30836 = (state_30848[(2)]);
var state_30848__$1 = state_30848;
var statearr_30862_30909 = state_30848__$1;
(statearr_30862_30909[(2)] = inst_30836);

(statearr_30862_30909[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30849 === (33))){
var inst_30823 = (state_30848[(2)]);
var inst_30824 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30825 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30824);
var state_30848__$1 = (function (){var statearr_30863 = state_30848;
(statearr_30863[(8)] = inst_30823);

return statearr_30863;
})();
var statearr_30864_30910 = state_30848__$1;
(statearr_30864_30910[(2)] = inst_30825);

(statearr_30864_30910[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30849 === (13))){
var inst_30782 = figwheel.client.heads_up.clear.call(null);
var state_30848__$1 = state_30848;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30848__$1,(16),inst_30782);
} else {
if((state_val_30849 === (22))){
var inst_30803 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30804 = figwheel.client.heads_up.append_warning_message.call(null,inst_30803);
var state_30848__$1 = state_30848;
var statearr_30865_30911 = state_30848__$1;
(statearr_30865_30911[(2)] = inst_30804);

(statearr_30865_30911[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30849 === (36))){
var inst_30834 = (state_30848[(2)]);
var state_30848__$1 = state_30848;
var statearr_30866_30912 = state_30848__$1;
(statearr_30866_30912[(2)] = inst_30834);

(statearr_30866_30912[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30849 === (29))){
var inst_30814 = (state_30848[(2)]);
var inst_30815 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30816 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30815);
var state_30848__$1 = (function (){var statearr_30867 = state_30848;
(statearr_30867[(9)] = inst_30814);

return statearr_30867;
})();
var statearr_30868_30913 = state_30848__$1;
(statearr_30868_30913[(2)] = inst_30816);

(statearr_30868_30913[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30849 === (6))){
var inst_30763 = (state_30848[(10)]);
var state_30848__$1 = state_30848;
var statearr_30869_30914 = state_30848__$1;
(statearr_30869_30914[(2)] = inst_30763);

(statearr_30869_30914[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30849 === (28))){
var inst_30810 = (state_30848[(2)]);
var inst_30811 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30812 = figwheel.client.heads_up.display_warning.call(null,inst_30811);
var state_30848__$1 = (function (){var statearr_30870 = state_30848;
(statearr_30870[(11)] = inst_30810);

return statearr_30870;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30848__$1,(29),inst_30812);
} else {
if((state_val_30849 === (25))){
var inst_30808 = figwheel.client.heads_up.clear.call(null);
var state_30848__$1 = state_30848;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30848__$1,(28),inst_30808);
} else {
if((state_val_30849 === (34))){
var inst_30829 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30848__$1 = state_30848;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30848__$1,(37),inst_30829);
} else {
if((state_val_30849 === (17))){
var inst_30788 = (state_30848[(2)]);
var inst_30789 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30790 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30789);
var state_30848__$1 = (function (){var statearr_30871 = state_30848;
(statearr_30871[(12)] = inst_30788);

return statearr_30871;
})();
var statearr_30872_30915 = state_30848__$1;
(statearr_30872_30915[(2)] = inst_30790);

(statearr_30872_30915[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30849 === (3))){
var inst_30780 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_30848__$1 = state_30848;
if(inst_30780){
var statearr_30873_30916 = state_30848__$1;
(statearr_30873_30916[(1)] = (13));

} else {
var statearr_30874_30917 = state_30848__$1;
(statearr_30874_30917[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30849 === (12))){
var inst_30776 = (state_30848[(2)]);
var state_30848__$1 = state_30848;
var statearr_30875_30918 = state_30848__$1;
(statearr_30875_30918[(2)] = inst_30776);

(statearr_30875_30918[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30849 === (2))){
var inst_30763 = (state_30848[(10)]);
var inst_30763__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_30848__$1 = (function (){var statearr_30876 = state_30848;
(statearr_30876[(10)] = inst_30763__$1);

return statearr_30876;
})();
if(cljs.core.truth_(inst_30763__$1)){
var statearr_30877_30919 = state_30848__$1;
(statearr_30877_30919[(1)] = (5));

} else {
var statearr_30878_30920 = state_30848__$1;
(statearr_30878_30920[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30849 === (23))){
var inst_30806 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_30848__$1 = state_30848;
if(inst_30806){
var statearr_30879_30921 = state_30848__$1;
(statearr_30879_30921[(1)] = (25));

} else {
var statearr_30880_30922 = state_30848__$1;
(statearr_30880_30922[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30849 === (35))){
var state_30848__$1 = state_30848;
var statearr_30881_30923 = state_30848__$1;
(statearr_30881_30923[(2)] = null);

(statearr_30881_30923[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30849 === (19))){
var inst_30801 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_30848__$1 = state_30848;
if(inst_30801){
var statearr_30882_30924 = state_30848__$1;
(statearr_30882_30924[(1)] = (22));

} else {
var statearr_30883_30925 = state_30848__$1;
(statearr_30883_30925[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30849 === (11))){
var inst_30772 = (state_30848[(2)]);
var state_30848__$1 = state_30848;
var statearr_30884_30926 = state_30848__$1;
(statearr_30884_30926[(2)] = inst_30772);

(statearr_30884_30926[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30849 === (9))){
var inst_30774 = figwheel.client.heads_up.clear.call(null);
var state_30848__$1 = state_30848;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30848__$1,(12),inst_30774);
} else {
if((state_val_30849 === (5))){
var inst_30765 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_30848__$1 = state_30848;
var statearr_30885_30927 = state_30848__$1;
(statearr_30885_30927[(2)] = inst_30765);

(statearr_30885_30927[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30849 === (14))){
var inst_30792 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_30848__$1 = state_30848;
if(inst_30792){
var statearr_30886_30928 = state_30848__$1;
(statearr_30886_30928[(1)] = (18));

} else {
var statearr_30887_30929 = state_30848__$1;
(statearr_30887_30929[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30849 === (26))){
var inst_30818 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_30848__$1 = state_30848;
if(inst_30818){
var statearr_30888_30930 = state_30848__$1;
(statearr_30888_30930[(1)] = (30));

} else {
var statearr_30889_30931 = state_30848__$1;
(statearr_30889_30931[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30849 === (16))){
var inst_30784 = (state_30848[(2)]);
var inst_30785 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30786 = figwheel.client.heads_up.display_exception.call(null,inst_30785);
var state_30848__$1 = (function (){var statearr_30890 = state_30848;
(statearr_30890[(13)] = inst_30784);

return statearr_30890;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30848__$1,(17),inst_30786);
} else {
if((state_val_30849 === (30))){
var inst_30820 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30821 = figwheel.client.heads_up.display_warning.call(null,inst_30820);
var state_30848__$1 = state_30848;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30848__$1,(33),inst_30821);
} else {
if((state_val_30849 === (10))){
var inst_30778 = (state_30848[(2)]);
var state_30848__$1 = state_30848;
var statearr_30891_30932 = state_30848__$1;
(statearr_30891_30932[(2)] = inst_30778);

(statearr_30891_30932[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30849 === (18))){
var inst_30794 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30795 = figwheel.client.heads_up.display_exception.call(null,inst_30794);
var state_30848__$1 = state_30848;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30848__$1,(21),inst_30795);
} else {
if((state_val_30849 === (37))){
var inst_30831 = (state_30848[(2)]);
var state_30848__$1 = state_30848;
var statearr_30892_30933 = state_30848__$1;
(statearr_30892_30933[(2)] = inst_30831);

(statearr_30892_30933[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30849 === (8))){
var inst_30770 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30848__$1 = state_30848;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30848__$1,(11),inst_30770);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24889__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24889__auto____0 = (function (){
var statearr_30893 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30893[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24889__auto__);

(statearr_30893[(1)] = (1));

return statearr_30893;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24889__auto____1 = (function (state_30848){
while(true){
var ret_value__24890__auto__ = (function (){try{while(true){
var result__24891__auto__ = switch__24888__auto__.call(null,state_30848);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24891__auto__;
}
break;
}
}catch (e30894){var ex__24892__auto__ = e30894;
var statearr_30895_30934 = state_30848;
(statearr_30895_30934[(2)] = ex__24892__auto__);


if(cljs.core.seq.call(null,(state_30848[(4)]))){
var statearr_30896_30935 = state_30848;
(statearr_30896_30935[(1)] = cljs.core.first.call(null,(state_30848[(4)])));

} else {
throw ex__24892__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30936 = state_30848;
state_30848 = G__30936;
continue;
} else {
return ret_value__24890__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24889__auto__ = function(state_30848){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24889__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24889__auto____1.call(this,state_30848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24889__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24889__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24889__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24889__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24889__auto__;
})()
})();
var state__24964__auto__ = (function (){var statearr_30897 = f__24963__auto__.call(null);
(statearr_30897[(6)] = c__24962__auto__);

return statearr_30897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24964__auto__);
}));

return c__24962__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__24962__auto___30966 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24963__auto__ = (function (){var switch__24888__auto__ = (function (state_30951){
var state_val_30952 = (state_30951[(1)]);
if((state_val_30952 === (1))){
var state_30951__$1 = state_30951;
var statearr_30953_30967 = state_30951__$1;
(statearr_30953_30967[(2)] = null);

(statearr_30953_30967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30952 === (2))){
var state_30951__$1 = state_30951;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30951__$1,(4),ch);
} else {
if((state_val_30952 === (3))){
var inst_30949 = (state_30951[(2)]);
var state_30951__$1 = state_30951;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30951__$1,inst_30949);
} else {
if((state_val_30952 === (4))){
var inst_30939 = (state_30951[(7)]);
var inst_30939__$1 = (state_30951[(2)]);
var state_30951__$1 = (function (){var statearr_30954 = state_30951;
(statearr_30954[(7)] = inst_30939__$1);

return statearr_30954;
})();
if(cljs.core.truth_(inst_30939__$1)){
var statearr_30955_30968 = state_30951__$1;
(statearr_30955_30968[(1)] = (5));

} else {
var statearr_30956_30969 = state_30951__$1;
(statearr_30956_30969[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30952 === (5))){
var inst_30939 = (state_30951[(7)]);
var inst_30941 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_30939);
var state_30951__$1 = state_30951;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30951__$1,(8),inst_30941);
} else {
if((state_val_30952 === (6))){
var state_30951__$1 = state_30951;
var statearr_30957_30970 = state_30951__$1;
(statearr_30957_30970[(2)] = null);

(statearr_30957_30970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30952 === (7))){
var inst_30947 = (state_30951[(2)]);
var state_30951__$1 = state_30951;
var statearr_30958_30971 = state_30951__$1;
(statearr_30958_30971[(2)] = inst_30947);

(statearr_30958_30971[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30952 === (8))){
var inst_30943 = (state_30951[(2)]);
var state_30951__$1 = (function (){var statearr_30959 = state_30951;
(statearr_30959[(8)] = inst_30943);

return statearr_30959;
})();
var statearr_30960_30972 = state_30951__$1;
(statearr_30960_30972[(2)] = null);

(statearr_30960_30972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__24889__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__24889__auto____0 = (function (){
var statearr_30961 = [null,null,null,null,null,null,null,null,null];
(statearr_30961[(0)] = figwheel$client$heads_up_plugin_$_state_machine__24889__auto__);

(statearr_30961[(1)] = (1));

return statearr_30961;
});
var figwheel$client$heads_up_plugin_$_state_machine__24889__auto____1 = (function (state_30951){
while(true){
var ret_value__24890__auto__ = (function (){try{while(true){
var result__24891__auto__ = switch__24888__auto__.call(null,state_30951);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24891__auto__;
}
break;
}
}catch (e30962){var ex__24892__auto__ = e30962;
var statearr_30963_30973 = state_30951;
(statearr_30963_30973[(2)] = ex__24892__auto__);


if(cljs.core.seq.call(null,(state_30951[(4)]))){
var statearr_30964_30974 = state_30951;
(statearr_30964_30974[(1)] = cljs.core.first.call(null,(state_30951[(4)])));

} else {
throw ex__24892__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30975 = state_30951;
state_30951 = G__30975;
continue;
} else {
return ret_value__24890__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__24889__auto__ = function(state_30951){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__24889__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__24889__auto____1.call(this,state_30951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__24889__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__24889__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__24889__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__24889__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__24889__auto__;
})()
})();
var state__24964__auto__ = (function (){var statearr_30965 = f__24963__auto__.call(null);
(statearr_30965[(6)] = c__24962__auto___30966);

return statearr_30965;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24964__auto__);
}));


figwheel.client.heads_up.ensure_container.call(null);

return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__24962__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24963__auto__ = (function (){var switch__24888__auto__ = (function (state_30981){
var state_val_30982 = (state_30981[(1)]);
if((state_val_30982 === (1))){
var inst_30976 = cljs.core.async.timeout.call(null,(3000));
var state_30981__$1 = state_30981;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30981__$1,(2),inst_30976);
} else {
if((state_val_30982 === (2))){
var inst_30978 = (state_30981[(2)]);
var inst_30979 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_30981__$1 = (function (){var statearr_30983 = state_30981;
(statearr_30983[(7)] = inst_30978);

return statearr_30983;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30981__$1,inst_30979);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__24889__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__24889__auto____0 = (function (){
var statearr_30984 = [null,null,null,null,null,null,null,null];
(statearr_30984[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__24889__auto__);

(statearr_30984[(1)] = (1));

return statearr_30984;
});
var figwheel$client$enforce_project_plugin_$_state_machine__24889__auto____1 = (function (state_30981){
while(true){
var ret_value__24890__auto__ = (function (){try{while(true){
var result__24891__auto__ = switch__24888__auto__.call(null,state_30981);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24891__auto__;
}
break;
}
}catch (e30985){var ex__24892__auto__ = e30985;
var statearr_30986_30989 = state_30981;
(statearr_30986_30989[(2)] = ex__24892__auto__);


if(cljs.core.seq.call(null,(state_30981[(4)]))){
var statearr_30987_30990 = state_30981;
(statearr_30987_30990[(1)] = cljs.core.first.call(null,(state_30981[(4)])));

} else {
throw ex__24892__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30991 = state_30981;
state_30981 = G__30991;
continue;
} else {
return ret_value__24890__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__24889__auto__ = function(state_30981){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__24889__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__24889__auto____1.call(this,state_30981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__24889__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__24889__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__24889__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__24889__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__24889__auto__;
})()
})();
var state__24964__auto__ = (function (){var statearr_30988 = f__24963__auto__.call(null);
(statearr_30988[(6)] = c__24962__auto__);

return statearr_30988;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24964__auto__);
}));

return c__24962__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5735__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5735__auto__)){
var figwheel_version = temp__5735__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__24962__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24963__auto__ = (function (){var switch__24888__auto__ = (function (state_30998){
var state_val_30999 = (state_30998[(1)]);
if((state_val_30999 === (1))){
var inst_30992 = cljs.core.async.timeout.call(null,(2000));
var state_30998__$1 = state_30998;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30998__$1,(2),inst_30992);
} else {
if((state_val_30999 === (2))){
var inst_30994 = (state_30998[(2)]);
var inst_30995 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_30996 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_30995);
var state_30998__$1 = (function (){var statearr_31000 = state_30998;
(statearr_31000[(7)] = inst_30994);

return statearr_31000;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30998__$1,inst_30996);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24889__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24889__auto____0 = (function (){
var statearr_31001 = [null,null,null,null,null,null,null,null];
(statearr_31001[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24889__auto__);

(statearr_31001[(1)] = (1));

return statearr_31001;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24889__auto____1 = (function (state_30998){
while(true){
var ret_value__24890__auto__ = (function (){try{while(true){
var result__24891__auto__ = switch__24888__auto__.call(null,state_30998);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24891__auto__;
}
break;
}
}catch (e31002){var ex__24892__auto__ = e31002;
var statearr_31003_31006 = state_30998;
(statearr_31003_31006[(2)] = ex__24892__auto__);


if(cljs.core.seq.call(null,(state_30998[(4)]))){
var statearr_31004_31007 = state_30998;
(statearr_31004_31007[(1)] = cljs.core.first.call(null,(state_30998[(4)])));

} else {
throw ex__24892__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31008 = state_30998;
state_30998 = G__31008;
continue;
} else {
return ret_value__24890__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24889__auto__ = function(state_30998){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24889__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24889__auto____1.call(this,state_30998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24889__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24889__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24889__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24889__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24889__auto__;
})()
})();
var state__24964__auto__ = (function (){var statearr_31005 = f__24963__auto__.call(null);
(statearr_31005[(6)] = c__24962__auto__);

return statearr_31005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24964__auto__);
}));

return c__24962__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__31009){
var map__31010 = p__31009;
var map__31010__$1 = (((((!((map__31010 == null))))?(((((map__31010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31010.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31010):map__31010);
var file = cljs.core.get.call(null,map__31010__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__31010__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__31010__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__31012 = "";
var G__31012__$1 = (cljs.core.truth_(file)?[G__31012,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__31012);
var G__31012__$2 = (cljs.core.truth_(line)?[G__31012__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__31012__$1);
if(cljs.core.truth_((function (){var and__4174__auto__ = line;
if(cljs.core.truth_(and__4174__auto__)){
return column;
} else {
return and__4174__auto__;
}
})())){
return [G__31012__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__31012__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__31013){
var map__31014 = p__31013;
var map__31014__$1 = (((((!((map__31014 == null))))?(((((map__31014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31014.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31014):map__31014);
var ed = map__31014__$1;
var exception_data = cljs.core.get.call(null,map__31014__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__31014__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_31017 = (function (){var G__31016 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31016)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__31016;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_31017);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__31018){
var map__31019 = p__31018;
var map__31019__$1 = (((((!((map__31019 == null))))?(((((map__31019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31019.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31019):map__31019);
var w = map__31019__$1;
var message = cljs.core.get.call(null,map__31019__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4174__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4174__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4174__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__31021 = cljs.core.seq.call(null,plugins);
var chunk__31022 = null;
var count__31023 = (0);
var i__31024 = (0);
while(true){
if((i__31024 < count__31023)){
var vec__31031 = cljs.core._nth.call(null,chunk__31022,i__31024);
var k = cljs.core.nth.call(null,vec__31031,(0),null);
var plugin = cljs.core.nth.call(null,vec__31031,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31037 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31021,chunk__31022,count__31023,i__31024,pl_31037,vec__31031,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_31037.call(null,msg_hist);
});})(seq__31021,chunk__31022,count__31023,i__31024,pl_31037,vec__31031,k,plugin))
);
} else {
}


var G__31038 = seq__31021;
var G__31039 = chunk__31022;
var G__31040 = count__31023;
var G__31041 = (i__31024 + (1));
seq__31021 = G__31038;
chunk__31022 = G__31039;
count__31023 = G__31040;
i__31024 = G__31041;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__31021);
if(temp__5735__auto__){
var seq__31021__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31021__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__31021__$1);
var G__31042 = cljs.core.chunk_rest.call(null,seq__31021__$1);
var G__31043 = c__4609__auto__;
var G__31044 = cljs.core.count.call(null,c__4609__auto__);
var G__31045 = (0);
seq__31021 = G__31042;
chunk__31022 = G__31043;
count__31023 = G__31044;
i__31024 = G__31045;
continue;
} else {
var vec__31034 = cljs.core.first.call(null,seq__31021__$1);
var k = cljs.core.nth.call(null,vec__31034,(0),null);
var plugin = cljs.core.nth.call(null,vec__31034,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31046 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31021,chunk__31022,count__31023,i__31024,pl_31046,vec__31034,k,plugin,seq__31021__$1,temp__5735__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_31046.call(null,msg_hist);
});})(seq__31021,chunk__31022,count__31023,i__31024,pl_31046,vec__31034,k,plugin,seq__31021__$1,temp__5735__auto__))
);
} else {
}


var G__31047 = cljs.core.next.call(null,seq__31021__$1);
var G__31048 = null;
var G__31049 = (0);
var G__31050 = (0);
seq__31021 = G__31047;
chunk__31022 = G__31048;
count__31023 = G__31049;
i__31024 = G__31050;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__31052 = arguments.length;
switch (G__31052) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
(figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts));

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__31053_31058 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__31054_31059 = null;
var count__31055_31060 = (0);
var i__31056_31061 = (0);
while(true){
if((i__31056_31061 < count__31055_31060)){
var msg_31062 = cljs.core._nth.call(null,chunk__31054_31059,i__31056_31061);
figwheel.client.socket.handle_incoming_message.call(null,msg_31062);


var G__31063 = seq__31053_31058;
var G__31064 = chunk__31054_31059;
var G__31065 = count__31055_31060;
var G__31066 = (i__31056_31061 + (1));
seq__31053_31058 = G__31063;
chunk__31054_31059 = G__31064;
count__31055_31060 = G__31065;
i__31056_31061 = G__31066;
continue;
} else {
var temp__5735__auto___31067 = cljs.core.seq.call(null,seq__31053_31058);
if(temp__5735__auto___31067){
var seq__31053_31068__$1 = temp__5735__auto___31067;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31053_31068__$1)){
var c__4609__auto___31069 = cljs.core.chunk_first.call(null,seq__31053_31068__$1);
var G__31070 = cljs.core.chunk_rest.call(null,seq__31053_31068__$1);
var G__31071 = c__4609__auto___31069;
var G__31072 = cljs.core.count.call(null,c__4609__auto___31069);
var G__31073 = (0);
seq__31053_31058 = G__31070;
chunk__31054_31059 = G__31071;
count__31055_31060 = G__31072;
i__31056_31061 = G__31073;
continue;
} else {
var msg_31074 = cljs.core.first.call(null,seq__31053_31068__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_31074);


var G__31075 = cljs.core.next.call(null,seq__31053_31068__$1);
var G__31076 = null;
var G__31077 = (0);
var G__31078 = (0);
seq__31053_31058 = G__31075;
chunk__31054_31059 = G__31076;
count__31055_31060 = G__31077;
i__31056_31061 = G__31078;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
}));

(figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
}));

(figwheel.client.start.cljs$lang$maxFixedArity = 1);

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4795__auto__ = [];
var len__4789__auto___31083 = arguments.length;
var i__4790__auto___31084 = (0);
while(true){
if((i__4790__auto___31084 < len__4789__auto___31083)){
args__4795__auto__.push((arguments[i__4790__auto___31084]));

var G__31085 = (i__4790__auto___31084 + (1));
i__4790__auto___31084 = G__31085;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__31080){
var map__31081 = p__31080;
var map__31081__$1 = (((((!((map__31081 == null))))?(((((map__31081.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31081.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31081):map__31081);
var opts = map__31081__$1;
return figwheel.client.start.call(null,opts);
}));

(figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq31079){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31079));
}));

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e31086){if((e31086 instanceof Error)){
var e = e31086;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e31086;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
(goog.dependencies_ = true);
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),(function (p__31087){
var map__31088 = p__31087;
var map__31088__$1 = (((((!((map__31088 == null))))?(((((map__31088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31088.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31088):map__31088);
var msg_name = cljs.core.get.call(null,map__31088__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return (location.href = location.href);
} else {
return null;
}
}));
});

//# sourceMappingURL=client.js.map?rel=1588466962807
