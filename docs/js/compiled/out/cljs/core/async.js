// Compiled by ClojureScript 1.10.597 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__25022 = arguments.length;
switch (G__25022) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25023 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25023 = (function (f,blockable,meta25024){
this.f = f;
this.blockable = blockable;
this.meta25024 = meta25024;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25023.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25025,meta25024__$1){
var self__ = this;
var _25025__$1 = this;
return (new cljs.core.async.t_cljs$core$async25023(self__.f,self__.blockable,meta25024__$1));
}));

(cljs.core.async.t_cljs$core$async25023.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25025){
var self__ = this;
var _25025__$1 = this;
return self__.meta25024;
}));

(cljs.core.async.t_cljs$core$async25023.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25023.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async25023.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async25023.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async25023.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta25024","meta25024",-1143828183,null)], null);
}));

(cljs.core.async.t_cljs$core$async25023.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25023.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25023");

(cljs.core.async.t_cljs$core$async25023.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async25023");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25023.
 */
cljs.core.async.__GT_t_cljs$core$async25023 = (function cljs$core$async$__GT_t_cljs$core$async25023(f__$1,blockable__$1,meta25024){
return (new cljs.core.async.t_cljs$core$async25023(f__$1,blockable__$1,meta25024));
});

}

return (new cljs.core.async.t_cljs$core$async25023(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__25029 = arguments.length;
switch (G__25029) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__25032 = arguments.length;
switch (G__25032) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__25035 = arguments.length;
switch (G__25035) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_25037 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_25037);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_25037);
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__25039 = arguments.length;
switch (G__25039) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4666__auto___25041 = n;
var x_25042 = (0);
while(true){
if((x_25042 < n__4666__auto___25041)){
(a[x_25042] = x_25042);

var G__25043 = (x_25042 + (1));
x_25042 = G__25043;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25044 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25044 = (function (flag,meta25045){
this.flag = flag;
this.meta25045 = meta25045;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25044.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25046,meta25045__$1){
var self__ = this;
var _25046__$1 = this;
return (new cljs.core.async.t_cljs$core$async25044(self__.flag,meta25045__$1));
}));

(cljs.core.async.t_cljs$core$async25044.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25046){
var self__ = this;
var _25046__$1 = this;
return self__.meta25045;
}));

(cljs.core.async.t_cljs$core$async25044.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25044.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async25044.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async25044.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async25044.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta25045","meta25045",1139513940,null)], null);
}));

(cljs.core.async.t_cljs$core$async25044.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25044.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25044");

(cljs.core.async.t_cljs$core$async25044.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async25044");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25044.
 */
cljs.core.async.__GT_t_cljs$core$async25044 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async25044(flag__$1,meta25045){
return (new cljs.core.async.t_cljs$core$async25044(flag__$1,meta25045));
});

}

return (new cljs.core.async.t_cljs$core$async25044(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25047 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25047 = (function (flag,cb,meta25048){
this.flag = flag;
this.cb = cb;
this.meta25048 = meta25048;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25047.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25049,meta25048__$1){
var self__ = this;
var _25049__$1 = this;
return (new cljs.core.async.t_cljs$core$async25047(self__.flag,self__.cb,meta25048__$1));
}));

(cljs.core.async.t_cljs$core$async25047.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25049){
var self__ = this;
var _25049__$1 = this;
return self__.meta25048;
}));

(cljs.core.async.t_cljs$core$async25047.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25047.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async25047.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async25047.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async25047.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta25048","meta25048",-1582730857,null)], null);
}));

(cljs.core.async.t_cljs$core$async25047.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25047.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25047");

(cljs.core.async.t_cljs$core$async25047.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async25047");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25047.
 */
cljs.core.async.__GT_t_cljs$core$async25047 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async25047(flag__$1,cb__$1,meta25048){
return (new cljs.core.async.t_cljs$core$async25047(flag__$1,cb__$1,meta25048));
});

}

return (new cljs.core.async.t_cljs$core$async25047(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count.call(null,ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25050_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25050_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25051_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25051_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4185__auto__ = wport;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return port;
}
})()], null));
} else {
var G__25052 = (i + (1));
i = G__25052;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4185__auto__ = ret;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4174__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___25058 = arguments.length;
var i__4790__auto___25059 = (0);
while(true){
if((i__4790__auto___25059 < len__4789__auto___25058)){
args__4795__auto__.push((arguments[i__4790__auto___25059]));

var G__25060 = (i__4790__auto___25059 + (1));
i__4790__auto___25059 = G__25060;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__25055){
var map__25056 = p__25055;
var map__25056__$1 = (((((!((map__25056 == null))))?(((((map__25056.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25056.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25056):map__25056);
var opts = map__25056__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq25053){
var G__25054 = cljs.core.first.call(null,seq25053);
var seq25053__$1 = cljs.core.next.call(null,seq25053);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25054,seq25053__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__25062 = arguments.length;
switch (G__25062) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__24962__auto___25109 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24963__auto__ = (function (){var switch__24888__auto__ = (function (state_25086){
var state_val_25087 = (state_25086[(1)]);
if((state_val_25087 === (7))){
var inst_25082 = (state_25086[(2)]);
var state_25086__$1 = state_25086;
var statearr_25088_25110 = state_25086__$1;
(statearr_25088_25110[(2)] = inst_25082);

(statearr_25088_25110[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25087 === (1))){
var state_25086__$1 = state_25086;
var statearr_25089_25111 = state_25086__$1;
(statearr_25089_25111[(2)] = null);

(statearr_25089_25111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25087 === (4))){
var inst_25065 = (state_25086[(7)]);
var inst_25065__$1 = (state_25086[(2)]);
var inst_25066 = (inst_25065__$1 == null);
var state_25086__$1 = (function (){var statearr_25090 = state_25086;
(statearr_25090[(7)] = inst_25065__$1);

return statearr_25090;
})();
if(cljs.core.truth_(inst_25066)){
var statearr_25091_25112 = state_25086__$1;
(statearr_25091_25112[(1)] = (5));

} else {
var statearr_25092_25113 = state_25086__$1;
(statearr_25092_25113[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25087 === (13))){
var state_25086__$1 = state_25086;
var statearr_25093_25114 = state_25086__$1;
(statearr_25093_25114[(2)] = null);

(statearr_25093_25114[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25087 === (6))){
var inst_25065 = (state_25086[(7)]);
var state_25086__$1 = state_25086;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25086__$1,(11),to,inst_25065);
} else {
if((state_val_25087 === (3))){
var inst_25084 = (state_25086[(2)]);
var state_25086__$1 = state_25086;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25086__$1,inst_25084);
} else {
if((state_val_25087 === (12))){
var state_25086__$1 = state_25086;
var statearr_25094_25115 = state_25086__$1;
(statearr_25094_25115[(2)] = null);

(statearr_25094_25115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25087 === (2))){
var state_25086__$1 = state_25086;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25086__$1,(4),from);
} else {
if((state_val_25087 === (11))){
var inst_25075 = (state_25086[(2)]);
var state_25086__$1 = state_25086;
if(cljs.core.truth_(inst_25075)){
var statearr_25095_25116 = state_25086__$1;
(statearr_25095_25116[(1)] = (12));

} else {
var statearr_25096_25117 = state_25086__$1;
(statearr_25096_25117[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25087 === (9))){
var state_25086__$1 = state_25086;
var statearr_25097_25118 = state_25086__$1;
(statearr_25097_25118[(2)] = null);

(statearr_25097_25118[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25087 === (5))){
var state_25086__$1 = state_25086;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25098_25119 = state_25086__$1;
(statearr_25098_25119[(1)] = (8));

} else {
var statearr_25099_25120 = state_25086__$1;
(statearr_25099_25120[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25087 === (14))){
var inst_25080 = (state_25086[(2)]);
var state_25086__$1 = state_25086;
var statearr_25100_25121 = state_25086__$1;
(statearr_25100_25121[(2)] = inst_25080);

(statearr_25100_25121[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25087 === (10))){
var inst_25072 = (state_25086[(2)]);
var state_25086__$1 = state_25086;
var statearr_25101_25122 = state_25086__$1;
(statearr_25101_25122[(2)] = inst_25072);

(statearr_25101_25122[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25087 === (8))){
var inst_25069 = cljs.core.async.close_BANG_.call(null,to);
var state_25086__$1 = state_25086;
var statearr_25102_25123 = state_25086__$1;
(statearr_25102_25123[(2)] = inst_25069);

(statearr_25102_25123[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__24889__auto__ = null;
var cljs$core$async$state_machine__24889__auto____0 = (function (){
var statearr_25103 = [null,null,null,null,null,null,null,null];
(statearr_25103[(0)] = cljs$core$async$state_machine__24889__auto__);

(statearr_25103[(1)] = (1));

return statearr_25103;
});
var cljs$core$async$state_machine__24889__auto____1 = (function (state_25086){
while(true){
var ret_value__24890__auto__ = (function (){try{while(true){
var result__24891__auto__ = switch__24888__auto__.call(null,state_25086);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24891__auto__;
}
break;
}
}catch (e25104){var ex__24892__auto__ = e25104;
var statearr_25105_25124 = state_25086;
(statearr_25105_25124[(2)] = ex__24892__auto__);


if(cljs.core.seq.call(null,(state_25086[(4)]))){
var statearr_25106_25125 = state_25086;
(statearr_25106_25125[(1)] = cljs.core.first.call(null,(state_25086[(4)])));

} else {
throw ex__24892__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25126 = state_25086;
state_25086 = G__25126;
continue;
} else {
return ret_value__24890__auto__;
}
break;
}
});
cljs$core$async$state_machine__24889__auto__ = function(state_25086){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24889__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24889__auto____1.call(this,state_25086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24889__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24889__auto____0;
cljs$core$async$state_machine__24889__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24889__auto____1;
return cljs$core$async$state_machine__24889__auto__;
})()
})();
var state__24964__auto__ = (function (){var statearr_25107 = f__24963__auto__.call(null);
(statearr_25107[(6)] = c__24962__auto___25109);

return statearr_25107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24964__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = (function (p__25127){
var vec__25128 = p__25127;
var v = cljs.core.nth.call(null,vec__25128,(0),null);
var p = cljs.core.nth.call(null,vec__25128,(1),null);
var job = vec__25128;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__24962__auto___25304 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24963__auto__ = (function (){var switch__24888__auto__ = (function (state_25135){
var state_val_25136 = (state_25135[(1)]);
if((state_val_25136 === (1))){
var state_25135__$1 = state_25135;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25135__$1,(2),res,v);
} else {
if((state_val_25136 === (2))){
var inst_25132 = (state_25135[(2)]);
var inst_25133 = cljs.core.async.close_BANG_.call(null,res);
var state_25135__$1 = (function (){var statearr_25137 = state_25135;
(statearr_25137[(7)] = inst_25132);

return statearr_25137;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25135__$1,inst_25133);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24889__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24889__auto____0 = (function (){
var statearr_25138 = [null,null,null,null,null,null,null,null];
(statearr_25138[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24889__auto__);

(statearr_25138[(1)] = (1));

return statearr_25138;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24889__auto____1 = (function (state_25135){
while(true){
var ret_value__24890__auto__ = (function (){try{while(true){
var result__24891__auto__ = switch__24888__auto__.call(null,state_25135);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24891__auto__;
}
break;
}
}catch (e25139){var ex__24892__auto__ = e25139;
var statearr_25140_25305 = state_25135;
(statearr_25140_25305[(2)] = ex__24892__auto__);


if(cljs.core.seq.call(null,(state_25135[(4)]))){
var statearr_25141_25306 = state_25135;
(statearr_25141_25306[(1)] = cljs.core.first.call(null,(state_25135[(4)])));

} else {
throw ex__24892__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25307 = state_25135;
state_25135 = G__25307;
continue;
} else {
return ret_value__24890__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24889__auto__ = function(state_25135){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24889__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24889__auto____1.call(this,state_25135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24889__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24889__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24889__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24889__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24889__auto__;
})()
})();
var state__24964__auto__ = (function (){var statearr_25142 = f__24963__auto__.call(null);
(statearr_25142[(6)] = c__24962__auto___25304);

return statearr_25142;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24964__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__25143){
var vec__25144 = p__25143;
var v = cljs.core.nth.call(null,vec__25144,(0),null);
var p = cljs.core.nth.call(null,vec__25144,(1),null);
var job = vec__25144;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__4666__auto___25308 = n;
var __25309 = (0);
while(true){
if((__25309 < n__4666__auto___25308)){
var G__25147_25310 = type;
var G__25147_25311__$1 = (((G__25147_25310 instanceof cljs.core.Keyword))?G__25147_25310.fqn:null);
switch (G__25147_25311__$1) {
case "compute":
var c__24962__auto___25313 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25309,c__24962__auto___25313,G__25147_25310,G__25147_25311__$1,n__4666__auto___25308,jobs,results,process,async){
return (function (){
var f__24963__auto__ = (function (){var switch__24888__auto__ = ((function (__25309,c__24962__auto___25313,G__25147_25310,G__25147_25311__$1,n__4666__auto___25308,jobs,results,process,async){
return (function (state_25160){
var state_val_25161 = (state_25160[(1)]);
if((state_val_25161 === (1))){
var state_25160__$1 = state_25160;
var statearr_25162_25314 = state_25160__$1;
(statearr_25162_25314[(2)] = null);

(statearr_25162_25314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25161 === (2))){
var state_25160__$1 = state_25160;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25160__$1,(4),jobs);
} else {
if((state_val_25161 === (3))){
var inst_25158 = (state_25160[(2)]);
var state_25160__$1 = state_25160;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25160__$1,inst_25158);
} else {
if((state_val_25161 === (4))){
var inst_25150 = (state_25160[(2)]);
var inst_25151 = process.call(null,inst_25150);
var state_25160__$1 = state_25160;
if(cljs.core.truth_(inst_25151)){
var statearr_25163_25315 = state_25160__$1;
(statearr_25163_25315[(1)] = (5));

} else {
var statearr_25164_25316 = state_25160__$1;
(statearr_25164_25316[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25161 === (5))){
var state_25160__$1 = state_25160;
var statearr_25165_25317 = state_25160__$1;
(statearr_25165_25317[(2)] = null);

(statearr_25165_25317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25161 === (6))){
var state_25160__$1 = state_25160;
var statearr_25166_25318 = state_25160__$1;
(statearr_25166_25318[(2)] = null);

(statearr_25166_25318[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25161 === (7))){
var inst_25156 = (state_25160[(2)]);
var state_25160__$1 = state_25160;
var statearr_25167_25319 = state_25160__$1;
(statearr_25167_25319[(2)] = inst_25156);

(statearr_25167_25319[(1)] = (3));


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
});})(__25309,c__24962__auto___25313,G__25147_25310,G__25147_25311__$1,n__4666__auto___25308,jobs,results,process,async))
;
return ((function (__25309,switch__24888__auto__,c__24962__auto___25313,G__25147_25310,G__25147_25311__$1,n__4666__auto___25308,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24889__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24889__auto____0 = (function (){
var statearr_25168 = [null,null,null,null,null,null,null];
(statearr_25168[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24889__auto__);

(statearr_25168[(1)] = (1));

return statearr_25168;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24889__auto____1 = (function (state_25160){
while(true){
var ret_value__24890__auto__ = (function (){try{while(true){
var result__24891__auto__ = switch__24888__auto__.call(null,state_25160);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24891__auto__;
}
break;
}
}catch (e25169){var ex__24892__auto__ = e25169;
var statearr_25170_25320 = state_25160;
(statearr_25170_25320[(2)] = ex__24892__auto__);


if(cljs.core.seq.call(null,(state_25160[(4)]))){
var statearr_25171_25321 = state_25160;
(statearr_25171_25321[(1)] = cljs.core.first.call(null,(state_25160[(4)])));

} else {
throw ex__24892__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25322 = state_25160;
state_25160 = G__25322;
continue;
} else {
return ret_value__24890__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24889__auto__ = function(state_25160){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24889__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24889__auto____1.call(this,state_25160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24889__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24889__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24889__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24889__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24889__auto__;
})()
;})(__25309,switch__24888__auto__,c__24962__auto___25313,G__25147_25310,G__25147_25311__$1,n__4666__auto___25308,jobs,results,process,async))
})();
var state__24964__auto__ = (function (){var statearr_25172 = f__24963__auto__.call(null);
(statearr_25172[(6)] = c__24962__auto___25313);

return statearr_25172;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24964__auto__);
});})(__25309,c__24962__auto___25313,G__25147_25310,G__25147_25311__$1,n__4666__auto___25308,jobs,results,process,async))
);


break;
case "async":
var c__24962__auto___25323 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25309,c__24962__auto___25323,G__25147_25310,G__25147_25311__$1,n__4666__auto___25308,jobs,results,process,async){
return (function (){
var f__24963__auto__ = (function (){var switch__24888__auto__ = ((function (__25309,c__24962__auto___25323,G__25147_25310,G__25147_25311__$1,n__4666__auto___25308,jobs,results,process,async){
return (function (state_25185){
var state_val_25186 = (state_25185[(1)]);
if((state_val_25186 === (1))){
var state_25185__$1 = state_25185;
var statearr_25187_25324 = state_25185__$1;
(statearr_25187_25324[(2)] = null);

(statearr_25187_25324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25186 === (2))){
var state_25185__$1 = state_25185;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25185__$1,(4),jobs);
} else {
if((state_val_25186 === (3))){
var inst_25183 = (state_25185[(2)]);
var state_25185__$1 = state_25185;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25185__$1,inst_25183);
} else {
if((state_val_25186 === (4))){
var inst_25175 = (state_25185[(2)]);
var inst_25176 = async.call(null,inst_25175);
var state_25185__$1 = state_25185;
if(cljs.core.truth_(inst_25176)){
var statearr_25188_25325 = state_25185__$1;
(statearr_25188_25325[(1)] = (5));

} else {
var statearr_25189_25326 = state_25185__$1;
(statearr_25189_25326[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25186 === (5))){
var state_25185__$1 = state_25185;
var statearr_25190_25327 = state_25185__$1;
(statearr_25190_25327[(2)] = null);

(statearr_25190_25327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25186 === (6))){
var state_25185__$1 = state_25185;
var statearr_25191_25328 = state_25185__$1;
(statearr_25191_25328[(2)] = null);

(statearr_25191_25328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25186 === (7))){
var inst_25181 = (state_25185[(2)]);
var state_25185__$1 = state_25185;
var statearr_25192_25329 = state_25185__$1;
(statearr_25192_25329[(2)] = inst_25181);

(statearr_25192_25329[(1)] = (3));


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
});})(__25309,c__24962__auto___25323,G__25147_25310,G__25147_25311__$1,n__4666__auto___25308,jobs,results,process,async))
;
return ((function (__25309,switch__24888__auto__,c__24962__auto___25323,G__25147_25310,G__25147_25311__$1,n__4666__auto___25308,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24889__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24889__auto____0 = (function (){
var statearr_25193 = [null,null,null,null,null,null,null];
(statearr_25193[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24889__auto__);

(statearr_25193[(1)] = (1));

return statearr_25193;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24889__auto____1 = (function (state_25185){
while(true){
var ret_value__24890__auto__ = (function (){try{while(true){
var result__24891__auto__ = switch__24888__auto__.call(null,state_25185);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24891__auto__;
}
break;
}
}catch (e25194){var ex__24892__auto__ = e25194;
var statearr_25195_25330 = state_25185;
(statearr_25195_25330[(2)] = ex__24892__auto__);


if(cljs.core.seq.call(null,(state_25185[(4)]))){
var statearr_25196_25331 = state_25185;
(statearr_25196_25331[(1)] = cljs.core.first.call(null,(state_25185[(4)])));

} else {
throw ex__24892__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25332 = state_25185;
state_25185 = G__25332;
continue;
} else {
return ret_value__24890__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24889__auto__ = function(state_25185){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24889__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24889__auto____1.call(this,state_25185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24889__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24889__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24889__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24889__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24889__auto__;
})()
;})(__25309,switch__24888__auto__,c__24962__auto___25323,G__25147_25310,G__25147_25311__$1,n__4666__auto___25308,jobs,results,process,async))
})();
var state__24964__auto__ = (function (){var statearr_25197 = f__24963__auto__.call(null);
(statearr_25197[(6)] = c__24962__auto___25323);

return statearr_25197;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24964__auto__);
});})(__25309,c__24962__auto___25323,G__25147_25310,G__25147_25311__$1,n__4666__auto___25308,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25147_25311__$1)].join('')));

}

var G__25333 = (__25309 + (1));
__25309 = G__25333;
continue;
} else {
}
break;
}

var c__24962__auto___25334 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24963__auto__ = (function (){var switch__24888__auto__ = (function (state_25219){
var state_val_25220 = (state_25219[(1)]);
if((state_val_25220 === (7))){
var inst_25215 = (state_25219[(2)]);
var state_25219__$1 = state_25219;
var statearr_25221_25335 = state_25219__$1;
(statearr_25221_25335[(2)] = inst_25215);

(statearr_25221_25335[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25220 === (1))){
var state_25219__$1 = state_25219;
var statearr_25222_25336 = state_25219__$1;
(statearr_25222_25336[(2)] = null);

(statearr_25222_25336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25220 === (4))){
var inst_25200 = (state_25219[(7)]);
var inst_25200__$1 = (state_25219[(2)]);
var inst_25201 = (inst_25200__$1 == null);
var state_25219__$1 = (function (){var statearr_25223 = state_25219;
(statearr_25223[(7)] = inst_25200__$1);

return statearr_25223;
})();
if(cljs.core.truth_(inst_25201)){
var statearr_25224_25337 = state_25219__$1;
(statearr_25224_25337[(1)] = (5));

} else {
var statearr_25225_25338 = state_25219__$1;
(statearr_25225_25338[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25220 === (6))){
var inst_25205 = (state_25219[(8)]);
var inst_25200 = (state_25219[(7)]);
var inst_25205__$1 = cljs.core.async.chan.call(null,(1));
var inst_25206 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25207 = [inst_25200,inst_25205__$1];
var inst_25208 = (new cljs.core.PersistentVector(null,2,(5),inst_25206,inst_25207,null));
var state_25219__$1 = (function (){var statearr_25226 = state_25219;
(statearr_25226[(8)] = inst_25205__$1);

return statearr_25226;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25219__$1,(8),jobs,inst_25208);
} else {
if((state_val_25220 === (3))){
var inst_25217 = (state_25219[(2)]);
var state_25219__$1 = state_25219;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25219__$1,inst_25217);
} else {
if((state_val_25220 === (2))){
var state_25219__$1 = state_25219;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25219__$1,(4),from);
} else {
if((state_val_25220 === (9))){
var inst_25212 = (state_25219[(2)]);
var state_25219__$1 = (function (){var statearr_25227 = state_25219;
(statearr_25227[(9)] = inst_25212);

return statearr_25227;
})();
var statearr_25228_25339 = state_25219__$1;
(statearr_25228_25339[(2)] = null);

(statearr_25228_25339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25220 === (5))){
var inst_25203 = cljs.core.async.close_BANG_.call(null,jobs);
var state_25219__$1 = state_25219;
var statearr_25229_25340 = state_25219__$1;
(statearr_25229_25340[(2)] = inst_25203);

(statearr_25229_25340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25220 === (8))){
var inst_25205 = (state_25219[(8)]);
var inst_25210 = (state_25219[(2)]);
var state_25219__$1 = (function (){var statearr_25230 = state_25219;
(statearr_25230[(10)] = inst_25210);

return statearr_25230;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25219__$1,(9),results,inst_25205);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24889__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24889__auto____0 = (function (){
var statearr_25231 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25231[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24889__auto__);

(statearr_25231[(1)] = (1));

return statearr_25231;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24889__auto____1 = (function (state_25219){
while(true){
var ret_value__24890__auto__ = (function (){try{while(true){
var result__24891__auto__ = switch__24888__auto__.call(null,state_25219);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24891__auto__;
}
break;
}
}catch (e25232){var ex__24892__auto__ = e25232;
var statearr_25233_25341 = state_25219;
(statearr_25233_25341[(2)] = ex__24892__auto__);


if(cljs.core.seq.call(null,(state_25219[(4)]))){
var statearr_25234_25342 = state_25219;
(statearr_25234_25342[(1)] = cljs.core.first.call(null,(state_25219[(4)])));

} else {
throw ex__24892__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25343 = state_25219;
state_25219 = G__25343;
continue;
} else {
return ret_value__24890__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24889__auto__ = function(state_25219){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24889__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24889__auto____1.call(this,state_25219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24889__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24889__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24889__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24889__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24889__auto__;
})()
})();
var state__24964__auto__ = (function (){var statearr_25235 = f__24963__auto__.call(null);
(statearr_25235[(6)] = c__24962__auto___25334);

return statearr_25235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24964__auto__);
}));


var c__24962__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24963__auto__ = (function (){var switch__24888__auto__ = (function (state_25273){
var state_val_25274 = (state_25273[(1)]);
if((state_val_25274 === (7))){
var inst_25269 = (state_25273[(2)]);
var state_25273__$1 = state_25273;
var statearr_25275_25344 = state_25273__$1;
(statearr_25275_25344[(2)] = inst_25269);

(statearr_25275_25344[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (20))){
var state_25273__$1 = state_25273;
var statearr_25276_25345 = state_25273__$1;
(statearr_25276_25345[(2)] = null);

(statearr_25276_25345[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (1))){
var state_25273__$1 = state_25273;
var statearr_25277_25346 = state_25273__$1;
(statearr_25277_25346[(2)] = null);

(statearr_25277_25346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (4))){
var inst_25238 = (state_25273[(7)]);
var inst_25238__$1 = (state_25273[(2)]);
var inst_25239 = (inst_25238__$1 == null);
var state_25273__$1 = (function (){var statearr_25278 = state_25273;
(statearr_25278[(7)] = inst_25238__$1);

return statearr_25278;
})();
if(cljs.core.truth_(inst_25239)){
var statearr_25279_25347 = state_25273__$1;
(statearr_25279_25347[(1)] = (5));

} else {
var statearr_25280_25348 = state_25273__$1;
(statearr_25280_25348[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (15))){
var inst_25251 = (state_25273[(8)]);
var state_25273__$1 = state_25273;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25273__$1,(18),to,inst_25251);
} else {
if((state_val_25274 === (21))){
var inst_25264 = (state_25273[(2)]);
var state_25273__$1 = state_25273;
var statearr_25281_25349 = state_25273__$1;
(statearr_25281_25349[(2)] = inst_25264);

(statearr_25281_25349[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (13))){
var inst_25266 = (state_25273[(2)]);
var state_25273__$1 = (function (){var statearr_25282 = state_25273;
(statearr_25282[(9)] = inst_25266);

return statearr_25282;
})();
var statearr_25283_25350 = state_25273__$1;
(statearr_25283_25350[(2)] = null);

(statearr_25283_25350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (6))){
var inst_25238 = (state_25273[(7)]);
var state_25273__$1 = state_25273;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25273__$1,(11),inst_25238);
} else {
if((state_val_25274 === (17))){
var inst_25259 = (state_25273[(2)]);
var state_25273__$1 = state_25273;
if(cljs.core.truth_(inst_25259)){
var statearr_25284_25351 = state_25273__$1;
(statearr_25284_25351[(1)] = (19));

} else {
var statearr_25285_25352 = state_25273__$1;
(statearr_25285_25352[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (3))){
var inst_25271 = (state_25273[(2)]);
var state_25273__$1 = state_25273;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25273__$1,inst_25271);
} else {
if((state_val_25274 === (12))){
var inst_25248 = (state_25273[(10)]);
var state_25273__$1 = state_25273;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25273__$1,(14),inst_25248);
} else {
if((state_val_25274 === (2))){
var state_25273__$1 = state_25273;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25273__$1,(4),results);
} else {
if((state_val_25274 === (19))){
var state_25273__$1 = state_25273;
var statearr_25286_25353 = state_25273__$1;
(statearr_25286_25353[(2)] = null);

(statearr_25286_25353[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (11))){
var inst_25248 = (state_25273[(2)]);
var state_25273__$1 = (function (){var statearr_25287 = state_25273;
(statearr_25287[(10)] = inst_25248);

return statearr_25287;
})();
var statearr_25288_25354 = state_25273__$1;
(statearr_25288_25354[(2)] = null);

(statearr_25288_25354[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (9))){
var state_25273__$1 = state_25273;
var statearr_25289_25355 = state_25273__$1;
(statearr_25289_25355[(2)] = null);

(statearr_25289_25355[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (5))){
var state_25273__$1 = state_25273;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25290_25356 = state_25273__$1;
(statearr_25290_25356[(1)] = (8));

} else {
var statearr_25291_25357 = state_25273__$1;
(statearr_25291_25357[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (14))){
var inst_25251 = (state_25273[(8)]);
var inst_25251__$1 = (state_25273[(2)]);
var inst_25252 = (inst_25251__$1 == null);
var inst_25253 = cljs.core.not.call(null,inst_25252);
var state_25273__$1 = (function (){var statearr_25292 = state_25273;
(statearr_25292[(8)] = inst_25251__$1);

return statearr_25292;
})();
if(inst_25253){
var statearr_25293_25358 = state_25273__$1;
(statearr_25293_25358[(1)] = (15));

} else {
var statearr_25294_25359 = state_25273__$1;
(statearr_25294_25359[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (16))){
var state_25273__$1 = state_25273;
var statearr_25295_25360 = state_25273__$1;
(statearr_25295_25360[(2)] = false);

(statearr_25295_25360[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (10))){
var inst_25245 = (state_25273[(2)]);
var state_25273__$1 = state_25273;
var statearr_25296_25361 = state_25273__$1;
(statearr_25296_25361[(2)] = inst_25245);

(statearr_25296_25361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (18))){
var inst_25256 = (state_25273[(2)]);
var state_25273__$1 = state_25273;
var statearr_25297_25362 = state_25273__$1;
(statearr_25297_25362[(2)] = inst_25256);

(statearr_25297_25362[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (8))){
var inst_25242 = cljs.core.async.close_BANG_.call(null,to);
var state_25273__$1 = state_25273;
var statearr_25298_25363 = state_25273__$1;
(statearr_25298_25363[(2)] = inst_25242);

(statearr_25298_25363[(1)] = (10));


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
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24889__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24889__auto____0 = (function (){
var statearr_25299 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25299[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24889__auto__);

(statearr_25299[(1)] = (1));

return statearr_25299;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24889__auto____1 = (function (state_25273){
while(true){
var ret_value__24890__auto__ = (function (){try{while(true){
var result__24891__auto__ = switch__24888__auto__.call(null,state_25273);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24891__auto__;
}
break;
}
}catch (e25300){var ex__24892__auto__ = e25300;
var statearr_25301_25364 = state_25273;
(statearr_25301_25364[(2)] = ex__24892__auto__);


if(cljs.core.seq.call(null,(state_25273[(4)]))){
var statearr_25302_25365 = state_25273;
(statearr_25302_25365[(1)] = cljs.core.first.call(null,(state_25273[(4)])));

} else {
throw ex__24892__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25366 = state_25273;
state_25273 = G__25366;
continue;
} else {
return ret_value__24890__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24889__auto__ = function(state_25273){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24889__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24889__auto____1.call(this,state_25273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24889__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24889__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24889__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24889__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24889__auto__;
})()
})();
var state__24964__auto__ = (function (){var statearr_25303 = f__24963__auto__.call(null);
(statearr_25303[(6)] = c__24962__auto__);

return statearr_25303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24964__auto__);
}));

return c__24962__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__25368 = arguments.length;
switch (G__25368) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__25371 = arguments.length;
switch (G__25371) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__25374 = arguments.length;
switch (G__25374) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__24962__auto___25424 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24963__auto__ = (function (){var switch__24888__auto__ = (function (state_25400){
var state_val_25401 = (state_25400[(1)]);
if((state_val_25401 === (7))){
var inst_25396 = (state_25400[(2)]);
var state_25400__$1 = state_25400;
var statearr_25402_25425 = state_25400__$1;
(statearr_25402_25425[(2)] = inst_25396);

(statearr_25402_25425[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25401 === (1))){
var state_25400__$1 = state_25400;
var statearr_25403_25426 = state_25400__$1;
(statearr_25403_25426[(2)] = null);

(statearr_25403_25426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25401 === (4))){
var inst_25377 = (state_25400[(7)]);
var inst_25377__$1 = (state_25400[(2)]);
var inst_25378 = (inst_25377__$1 == null);
var state_25400__$1 = (function (){var statearr_25404 = state_25400;
(statearr_25404[(7)] = inst_25377__$1);

return statearr_25404;
})();
if(cljs.core.truth_(inst_25378)){
var statearr_25405_25427 = state_25400__$1;
(statearr_25405_25427[(1)] = (5));

} else {
var statearr_25406_25428 = state_25400__$1;
(statearr_25406_25428[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25401 === (13))){
var state_25400__$1 = state_25400;
var statearr_25407_25429 = state_25400__$1;
(statearr_25407_25429[(2)] = null);

(statearr_25407_25429[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25401 === (6))){
var inst_25377 = (state_25400[(7)]);
var inst_25383 = p.call(null,inst_25377);
var state_25400__$1 = state_25400;
if(cljs.core.truth_(inst_25383)){
var statearr_25408_25430 = state_25400__$1;
(statearr_25408_25430[(1)] = (9));

} else {
var statearr_25409_25431 = state_25400__$1;
(statearr_25409_25431[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25401 === (3))){
var inst_25398 = (state_25400[(2)]);
var state_25400__$1 = state_25400;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25400__$1,inst_25398);
} else {
if((state_val_25401 === (12))){
var state_25400__$1 = state_25400;
var statearr_25410_25432 = state_25400__$1;
(statearr_25410_25432[(2)] = null);

(statearr_25410_25432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25401 === (2))){
var state_25400__$1 = state_25400;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25400__$1,(4),ch);
} else {
if((state_val_25401 === (11))){
var inst_25377 = (state_25400[(7)]);
var inst_25387 = (state_25400[(2)]);
var state_25400__$1 = state_25400;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25400__$1,(8),inst_25387,inst_25377);
} else {
if((state_val_25401 === (9))){
var state_25400__$1 = state_25400;
var statearr_25411_25433 = state_25400__$1;
(statearr_25411_25433[(2)] = tc);

(statearr_25411_25433[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25401 === (5))){
var inst_25380 = cljs.core.async.close_BANG_.call(null,tc);
var inst_25381 = cljs.core.async.close_BANG_.call(null,fc);
var state_25400__$1 = (function (){var statearr_25412 = state_25400;
(statearr_25412[(8)] = inst_25380);

return statearr_25412;
})();
var statearr_25413_25434 = state_25400__$1;
(statearr_25413_25434[(2)] = inst_25381);

(statearr_25413_25434[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25401 === (14))){
var inst_25394 = (state_25400[(2)]);
var state_25400__$1 = state_25400;
var statearr_25414_25435 = state_25400__$1;
(statearr_25414_25435[(2)] = inst_25394);

(statearr_25414_25435[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25401 === (10))){
var state_25400__$1 = state_25400;
var statearr_25415_25436 = state_25400__$1;
(statearr_25415_25436[(2)] = fc);

(statearr_25415_25436[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25401 === (8))){
var inst_25389 = (state_25400[(2)]);
var state_25400__$1 = state_25400;
if(cljs.core.truth_(inst_25389)){
var statearr_25416_25437 = state_25400__$1;
(statearr_25416_25437[(1)] = (12));

} else {
var statearr_25417_25438 = state_25400__$1;
(statearr_25417_25438[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__24889__auto__ = null;
var cljs$core$async$state_machine__24889__auto____0 = (function (){
var statearr_25418 = [null,null,null,null,null,null,null,null,null];
(statearr_25418[(0)] = cljs$core$async$state_machine__24889__auto__);

(statearr_25418[(1)] = (1));

return statearr_25418;
});
var cljs$core$async$state_machine__24889__auto____1 = (function (state_25400){
while(true){
var ret_value__24890__auto__ = (function (){try{while(true){
var result__24891__auto__ = switch__24888__auto__.call(null,state_25400);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24891__auto__;
}
break;
}
}catch (e25419){var ex__24892__auto__ = e25419;
var statearr_25420_25439 = state_25400;
(statearr_25420_25439[(2)] = ex__24892__auto__);


if(cljs.core.seq.call(null,(state_25400[(4)]))){
var statearr_25421_25440 = state_25400;
(statearr_25421_25440[(1)] = cljs.core.first.call(null,(state_25400[(4)])));

} else {
throw ex__24892__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25441 = state_25400;
state_25400 = G__25441;
continue;
} else {
return ret_value__24890__auto__;
}
break;
}
});
cljs$core$async$state_machine__24889__auto__ = function(state_25400){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24889__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24889__auto____1.call(this,state_25400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24889__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24889__auto____0;
cljs$core$async$state_machine__24889__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24889__auto____1;
return cljs$core$async$state_machine__24889__auto__;
})()
})();
var state__24964__auto__ = (function (){var statearr_25422 = f__24963__auto__.call(null);
(statearr_25422[(6)] = c__24962__auto___25424);

return statearr_25422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24964__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__24962__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24963__auto__ = (function (){var switch__24888__auto__ = (function (state_25463){
var state_val_25464 = (state_25463[(1)]);
if((state_val_25464 === (7))){
var inst_25459 = (state_25463[(2)]);
var state_25463__$1 = state_25463;
var statearr_25465_25484 = state_25463__$1;
(statearr_25465_25484[(2)] = inst_25459);

(statearr_25465_25484[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25464 === (1))){
var inst_25442 = init;
var inst_25443 = inst_25442;
var state_25463__$1 = (function (){var statearr_25466 = state_25463;
(statearr_25466[(7)] = inst_25443);

return statearr_25466;
})();
var statearr_25467_25485 = state_25463__$1;
(statearr_25467_25485[(2)] = null);

(statearr_25467_25485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25464 === (4))){
var inst_25446 = (state_25463[(8)]);
var inst_25446__$1 = (state_25463[(2)]);
var inst_25447 = (inst_25446__$1 == null);
var state_25463__$1 = (function (){var statearr_25468 = state_25463;
(statearr_25468[(8)] = inst_25446__$1);

return statearr_25468;
})();
if(cljs.core.truth_(inst_25447)){
var statearr_25469_25486 = state_25463__$1;
(statearr_25469_25486[(1)] = (5));

} else {
var statearr_25470_25487 = state_25463__$1;
(statearr_25470_25487[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25464 === (6))){
var inst_25450 = (state_25463[(9)]);
var inst_25446 = (state_25463[(8)]);
var inst_25443 = (state_25463[(7)]);
var inst_25450__$1 = f.call(null,inst_25443,inst_25446);
var inst_25451 = cljs.core.reduced_QMARK_.call(null,inst_25450__$1);
var state_25463__$1 = (function (){var statearr_25471 = state_25463;
(statearr_25471[(9)] = inst_25450__$1);

return statearr_25471;
})();
if(inst_25451){
var statearr_25472_25488 = state_25463__$1;
(statearr_25472_25488[(1)] = (8));

} else {
var statearr_25473_25489 = state_25463__$1;
(statearr_25473_25489[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25464 === (3))){
var inst_25461 = (state_25463[(2)]);
var state_25463__$1 = state_25463;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25463__$1,inst_25461);
} else {
if((state_val_25464 === (2))){
var state_25463__$1 = state_25463;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25463__$1,(4),ch);
} else {
if((state_val_25464 === (9))){
var inst_25450 = (state_25463[(9)]);
var inst_25443 = inst_25450;
var state_25463__$1 = (function (){var statearr_25474 = state_25463;
(statearr_25474[(7)] = inst_25443);

return statearr_25474;
})();
var statearr_25475_25490 = state_25463__$1;
(statearr_25475_25490[(2)] = null);

(statearr_25475_25490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25464 === (5))){
var inst_25443 = (state_25463[(7)]);
var state_25463__$1 = state_25463;
var statearr_25476_25491 = state_25463__$1;
(statearr_25476_25491[(2)] = inst_25443);

(statearr_25476_25491[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25464 === (10))){
var inst_25457 = (state_25463[(2)]);
var state_25463__$1 = state_25463;
var statearr_25477_25492 = state_25463__$1;
(statearr_25477_25492[(2)] = inst_25457);

(statearr_25477_25492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25464 === (8))){
var inst_25450 = (state_25463[(9)]);
var inst_25453 = cljs.core.deref.call(null,inst_25450);
var state_25463__$1 = state_25463;
var statearr_25478_25493 = state_25463__$1;
(statearr_25478_25493[(2)] = inst_25453);

(statearr_25478_25493[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__24889__auto__ = null;
var cljs$core$async$reduce_$_state_machine__24889__auto____0 = (function (){
var statearr_25479 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25479[(0)] = cljs$core$async$reduce_$_state_machine__24889__auto__);

(statearr_25479[(1)] = (1));

return statearr_25479;
});
var cljs$core$async$reduce_$_state_machine__24889__auto____1 = (function (state_25463){
while(true){
var ret_value__24890__auto__ = (function (){try{while(true){
var result__24891__auto__ = switch__24888__auto__.call(null,state_25463);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24891__auto__;
}
break;
}
}catch (e25480){var ex__24892__auto__ = e25480;
var statearr_25481_25494 = state_25463;
(statearr_25481_25494[(2)] = ex__24892__auto__);


if(cljs.core.seq.call(null,(state_25463[(4)]))){
var statearr_25482_25495 = state_25463;
(statearr_25482_25495[(1)] = cljs.core.first.call(null,(state_25463[(4)])));

} else {
throw ex__24892__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25496 = state_25463;
state_25463 = G__25496;
continue;
} else {
return ret_value__24890__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24889__auto__ = function(state_25463){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24889__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24889__auto____1.call(this,state_25463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__24889__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24889__auto____0;
cljs$core$async$reduce_$_state_machine__24889__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24889__auto____1;
return cljs$core$async$reduce_$_state_machine__24889__auto__;
})()
})();
var state__24964__auto__ = (function (){var statearr_25483 = f__24963__auto__.call(null);
(statearr_25483[(6)] = c__24962__auto__);

return statearr_25483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24964__auto__);
}));

return c__24962__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__24962__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24963__auto__ = (function (){var switch__24888__auto__ = (function (state_25502){
var state_val_25503 = (state_25502[(1)]);
if((state_val_25503 === (1))){
var inst_25497 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_25502__$1 = state_25502;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25502__$1,(2),inst_25497);
} else {
if((state_val_25503 === (2))){
var inst_25499 = (state_25502[(2)]);
var inst_25500 = f__$1.call(null,inst_25499);
var state_25502__$1 = state_25502;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25502__$1,inst_25500);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__24889__auto__ = null;
var cljs$core$async$transduce_$_state_machine__24889__auto____0 = (function (){
var statearr_25504 = [null,null,null,null,null,null,null];
(statearr_25504[(0)] = cljs$core$async$transduce_$_state_machine__24889__auto__);

(statearr_25504[(1)] = (1));

return statearr_25504;
});
var cljs$core$async$transduce_$_state_machine__24889__auto____1 = (function (state_25502){
while(true){
var ret_value__24890__auto__ = (function (){try{while(true){
var result__24891__auto__ = switch__24888__auto__.call(null,state_25502);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24891__auto__;
}
break;
}
}catch (e25505){var ex__24892__auto__ = e25505;
var statearr_25506_25509 = state_25502;
(statearr_25506_25509[(2)] = ex__24892__auto__);


if(cljs.core.seq.call(null,(state_25502[(4)]))){
var statearr_25507_25510 = state_25502;
(statearr_25507_25510[(1)] = cljs.core.first.call(null,(state_25502[(4)])));

} else {
throw ex__24892__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25511 = state_25502;
state_25502 = G__25511;
continue;
} else {
return ret_value__24890__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__24889__auto__ = function(state_25502){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__24889__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__24889__auto____1.call(this,state_25502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__24889__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__24889__auto____0;
cljs$core$async$transduce_$_state_machine__24889__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__24889__auto____1;
return cljs$core$async$transduce_$_state_machine__24889__auto__;
})()
})();
var state__24964__auto__ = (function (){var statearr_25508 = f__24963__auto__.call(null);
(statearr_25508[(6)] = c__24962__auto__);

return statearr_25508;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24964__auto__);
}));

return c__24962__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__25513 = arguments.length;
switch (G__25513) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__24962__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24963__auto__ = (function (){var switch__24888__auto__ = (function (state_25538){
var state_val_25539 = (state_25538[(1)]);
if((state_val_25539 === (7))){
var inst_25520 = (state_25538[(2)]);
var state_25538__$1 = state_25538;
var statearr_25540_25562 = state_25538__$1;
(statearr_25540_25562[(2)] = inst_25520);

(statearr_25540_25562[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25539 === (1))){
var inst_25514 = cljs.core.seq.call(null,coll);
var inst_25515 = inst_25514;
var state_25538__$1 = (function (){var statearr_25541 = state_25538;
(statearr_25541[(7)] = inst_25515);

return statearr_25541;
})();
var statearr_25542_25563 = state_25538__$1;
(statearr_25542_25563[(2)] = null);

(statearr_25542_25563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25539 === (4))){
var inst_25515 = (state_25538[(7)]);
var inst_25518 = cljs.core.first.call(null,inst_25515);
var state_25538__$1 = state_25538;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25538__$1,(7),ch,inst_25518);
} else {
if((state_val_25539 === (13))){
var inst_25532 = (state_25538[(2)]);
var state_25538__$1 = state_25538;
var statearr_25543_25564 = state_25538__$1;
(statearr_25543_25564[(2)] = inst_25532);

(statearr_25543_25564[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25539 === (6))){
var inst_25523 = (state_25538[(2)]);
var state_25538__$1 = state_25538;
if(cljs.core.truth_(inst_25523)){
var statearr_25544_25565 = state_25538__$1;
(statearr_25544_25565[(1)] = (8));

} else {
var statearr_25545_25566 = state_25538__$1;
(statearr_25545_25566[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25539 === (3))){
var inst_25536 = (state_25538[(2)]);
var state_25538__$1 = state_25538;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25538__$1,inst_25536);
} else {
if((state_val_25539 === (12))){
var state_25538__$1 = state_25538;
var statearr_25546_25567 = state_25538__$1;
(statearr_25546_25567[(2)] = null);

(statearr_25546_25567[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25539 === (2))){
var inst_25515 = (state_25538[(7)]);
var state_25538__$1 = state_25538;
if(cljs.core.truth_(inst_25515)){
var statearr_25547_25568 = state_25538__$1;
(statearr_25547_25568[(1)] = (4));

} else {
var statearr_25548_25569 = state_25538__$1;
(statearr_25548_25569[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25539 === (11))){
var inst_25529 = cljs.core.async.close_BANG_.call(null,ch);
var state_25538__$1 = state_25538;
var statearr_25549_25570 = state_25538__$1;
(statearr_25549_25570[(2)] = inst_25529);

(statearr_25549_25570[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25539 === (9))){
var state_25538__$1 = state_25538;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25550_25571 = state_25538__$1;
(statearr_25550_25571[(1)] = (11));

} else {
var statearr_25551_25572 = state_25538__$1;
(statearr_25551_25572[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25539 === (5))){
var inst_25515 = (state_25538[(7)]);
var state_25538__$1 = state_25538;
var statearr_25552_25573 = state_25538__$1;
(statearr_25552_25573[(2)] = inst_25515);

(statearr_25552_25573[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25539 === (10))){
var inst_25534 = (state_25538[(2)]);
var state_25538__$1 = state_25538;
var statearr_25553_25574 = state_25538__$1;
(statearr_25553_25574[(2)] = inst_25534);

(statearr_25553_25574[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25539 === (8))){
var inst_25515 = (state_25538[(7)]);
var inst_25525 = cljs.core.next.call(null,inst_25515);
var inst_25515__$1 = inst_25525;
var state_25538__$1 = (function (){var statearr_25554 = state_25538;
(statearr_25554[(7)] = inst_25515__$1);

return statearr_25554;
})();
var statearr_25555_25575 = state_25538__$1;
(statearr_25555_25575[(2)] = null);

(statearr_25555_25575[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__24889__auto__ = null;
var cljs$core$async$state_machine__24889__auto____0 = (function (){
var statearr_25556 = [null,null,null,null,null,null,null,null];
(statearr_25556[(0)] = cljs$core$async$state_machine__24889__auto__);

(statearr_25556[(1)] = (1));

return statearr_25556;
});
var cljs$core$async$state_machine__24889__auto____1 = (function (state_25538){
while(true){
var ret_value__24890__auto__ = (function (){try{while(true){
var result__24891__auto__ = switch__24888__auto__.call(null,state_25538);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24891__auto__;
}
break;
}
}catch (e25557){var ex__24892__auto__ = e25557;
var statearr_25558_25576 = state_25538;
(statearr_25558_25576[(2)] = ex__24892__auto__);


if(cljs.core.seq.call(null,(state_25538[(4)]))){
var statearr_25559_25577 = state_25538;
(statearr_25559_25577[(1)] = cljs.core.first.call(null,(state_25538[(4)])));

} else {
throw ex__24892__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25578 = state_25538;
state_25538 = G__25578;
continue;
} else {
return ret_value__24890__auto__;
}
break;
}
});
cljs$core$async$state_machine__24889__auto__ = function(state_25538){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24889__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24889__auto____1.call(this,state_25538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24889__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24889__auto____0;
cljs$core$async$state_machine__24889__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24889__auto____1;
return cljs$core$async$state_machine__24889__auto__;
})()
})();
var state__24964__auto__ = (function (){var statearr_25560 = f__24963__auto__.call(null);
(statearr_25560[(6)] = c__24962__auto__);

return statearr_25560;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24964__auto__);
}));

return c__24962__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,_);
} else {
var m__4485__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4485__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m,ch);
} else {
var m__4485__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m);
} else {
var m__4485__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25579 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25579 = (function (ch,cs,meta25580){
this.ch = ch;
this.cs = cs;
this.meta25580 = meta25580;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25579.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25581,meta25580__$1){
var self__ = this;
var _25581__$1 = this;
return (new cljs.core.async.t_cljs$core$async25579(self__.ch,self__.cs,meta25580__$1));
}));

(cljs.core.async.t_cljs$core$async25579.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25581){
var self__ = this;
var _25581__$1 = this;
return self__.meta25580;
}));

(cljs.core.async.t_cljs$core$async25579.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25579.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async25579.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25579.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async25579.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async25579.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async25579.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta25580","meta25580",832178948,null)], null);
}));

(cljs.core.async.t_cljs$core$async25579.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25579.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25579");

(cljs.core.async.t_cljs$core$async25579.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async25579");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25579.
 */
cljs.core.async.__GT_t_cljs$core$async25579 = (function cljs$core$async$mult_$___GT_t_cljs$core$async25579(ch__$1,cs__$1,meta25580){
return (new cljs.core.async.t_cljs$core$async25579(ch__$1,cs__$1,meta25580));
});

}

return (new cljs.core.async.t_cljs$core$async25579(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__24962__auto___25798 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24963__auto__ = (function (){var switch__24888__auto__ = (function (state_25714){
var state_val_25715 = (state_25714[(1)]);
if((state_val_25715 === (7))){
var inst_25710 = (state_25714[(2)]);
var state_25714__$1 = state_25714;
var statearr_25716_25799 = state_25714__$1;
(statearr_25716_25799[(2)] = inst_25710);

(statearr_25716_25799[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (20))){
var inst_25615 = (state_25714[(7)]);
var inst_25627 = cljs.core.first.call(null,inst_25615);
var inst_25628 = cljs.core.nth.call(null,inst_25627,(0),null);
var inst_25629 = cljs.core.nth.call(null,inst_25627,(1),null);
var state_25714__$1 = (function (){var statearr_25717 = state_25714;
(statearr_25717[(8)] = inst_25628);

return statearr_25717;
})();
if(cljs.core.truth_(inst_25629)){
var statearr_25718_25800 = state_25714__$1;
(statearr_25718_25800[(1)] = (22));

} else {
var statearr_25719_25801 = state_25714__$1;
(statearr_25719_25801[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (27))){
var inst_25584 = (state_25714[(9)]);
var inst_25664 = (state_25714[(10)]);
var inst_25657 = (state_25714[(11)]);
var inst_25659 = (state_25714[(12)]);
var inst_25664__$1 = cljs.core._nth.call(null,inst_25657,inst_25659);
var inst_25665 = cljs.core.async.put_BANG_.call(null,inst_25664__$1,inst_25584,done);
var state_25714__$1 = (function (){var statearr_25720 = state_25714;
(statearr_25720[(10)] = inst_25664__$1);

return statearr_25720;
})();
if(cljs.core.truth_(inst_25665)){
var statearr_25721_25802 = state_25714__$1;
(statearr_25721_25802[(1)] = (30));

} else {
var statearr_25722_25803 = state_25714__$1;
(statearr_25722_25803[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (1))){
var state_25714__$1 = state_25714;
var statearr_25723_25804 = state_25714__$1;
(statearr_25723_25804[(2)] = null);

(statearr_25723_25804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (24))){
var inst_25615 = (state_25714[(7)]);
var inst_25634 = (state_25714[(2)]);
var inst_25635 = cljs.core.next.call(null,inst_25615);
var inst_25593 = inst_25635;
var inst_25594 = null;
var inst_25595 = (0);
var inst_25596 = (0);
var state_25714__$1 = (function (){var statearr_25724 = state_25714;
(statearr_25724[(13)] = inst_25595);

(statearr_25724[(14)] = inst_25634);

(statearr_25724[(15)] = inst_25593);

(statearr_25724[(16)] = inst_25594);

(statearr_25724[(17)] = inst_25596);

return statearr_25724;
})();
var statearr_25725_25805 = state_25714__$1;
(statearr_25725_25805[(2)] = null);

(statearr_25725_25805[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (39))){
var state_25714__$1 = state_25714;
var statearr_25729_25806 = state_25714__$1;
(statearr_25729_25806[(2)] = null);

(statearr_25729_25806[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (4))){
var inst_25584 = (state_25714[(9)]);
var inst_25584__$1 = (state_25714[(2)]);
var inst_25585 = (inst_25584__$1 == null);
var state_25714__$1 = (function (){var statearr_25730 = state_25714;
(statearr_25730[(9)] = inst_25584__$1);

return statearr_25730;
})();
if(cljs.core.truth_(inst_25585)){
var statearr_25731_25807 = state_25714__$1;
(statearr_25731_25807[(1)] = (5));

} else {
var statearr_25732_25808 = state_25714__$1;
(statearr_25732_25808[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (15))){
var inst_25595 = (state_25714[(13)]);
var inst_25593 = (state_25714[(15)]);
var inst_25594 = (state_25714[(16)]);
var inst_25596 = (state_25714[(17)]);
var inst_25611 = (state_25714[(2)]);
var inst_25612 = (inst_25596 + (1));
var tmp25726 = inst_25595;
var tmp25727 = inst_25593;
var tmp25728 = inst_25594;
var inst_25593__$1 = tmp25727;
var inst_25594__$1 = tmp25728;
var inst_25595__$1 = tmp25726;
var inst_25596__$1 = inst_25612;
var state_25714__$1 = (function (){var statearr_25733 = state_25714;
(statearr_25733[(13)] = inst_25595__$1);

(statearr_25733[(15)] = inst_25593__$1);

(statearr_25733[(16)] = inst_25594__$1);

(statearr_25733[(18)] = inst_25611);

(statearr_25733[(17)] = inst_25596__$1);

return statearr_25733;
})();
var statearr_25734_25809 = state_25714__$1;
(statearr_25734_25809[(2)] = null);

(statearr_25734_25809[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (21))){
var inst_25638 = (state_25714[(2)]);
var state_25714__$1 = state_25714;
var statearr_25738_25810 = state_25714__$1;
(statearr_25738_25810[(2)] = inst_25638);

(statearr_25738_25810[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (31))){
var inst_25664 = (state_25714[(10)]);
var inst_25668 = cljs.core.async.untap_STAR_.call(null,m,inst_25664);
var state_25714__$1 = state_25714;
var statearr_25739_25811 = state_25714__$1;
(statearr_25739_25811[(2)] = inst_25668);

(statearr_25739_25811[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (32))){
var inst_25658 = (state_25714[(19)]);
var inst_25657 = (state_25714[(11)]);
var inst_25659 = (state_25714[(12)]);
var inst_25656 = (state_25714[(20)]);
var inst_25670 = (state_25714[(2)]);
var inst_25671 = (inst_25659 + (1));
var tmp25735 = inst_25658;
var tmp25736 = inst_25657;
var tmp25737 = inst_25656;
var inst_25656__$1 = tmp25737;
var inst_25657__$1 = tmp25736;
var inst_25658__$1 = tmp25735;
var inst_25659__$1 = inst_25671;
var state_25714__$1 = (function (){var statearr_25740 = state_25714;
(statearr_25740[(19)] = inst_25658__$1);

(statearr_25740[(11)] = inst_25657__$1);

(statearr_25740[(12)] = inst_25659__$1);

(statearr_25740[(21)] = inst_25670);

(statearr_25740[(20)] = inst_25656__$1);

return statearr_25740;
})();
var statearr_25741_25812 = state_25714__$1;
(statearr_25741_25812[(2)] = null);

(statearr_25741_25812[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (40))){
var inst_25683 = (state_25714[(22)]);
var inst_25687 = cljs.core.async.untap_STAR_.call(null,m,inst_25683);
var state_25714__$1 = state_25714;
var statearr_25742_25813 = state_25714__$1;
(statearr_25742_25813[(2)] = inst_25687);

(statearr_25742_25813[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (33))){
var inst_25674 = (state_25714[(23)]);
var inst_25676 = cljs.core.chunked_seq_QMARK_.call(null,inst_25674);
var state_25714__$1 = state_25714;
if(inst_25676){
var statearr_25743_25814 = state_25714__$1;
(statearr_25743_25814[(1)] = (36));

} else {
var statearr_25744_25815 = state_25714__$1;
(statearr_25744_25815[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (13))){
var inst_25605 = (state_25714[(24)]);
var inst_25608 = cljs.core.async.close_BANG_.call(null,inst_25605);
var state_25714__$1 = state_25714;
var statearr_25745_25816 = state_25714__$1;
(statearr_25745_25816[(2)] = inst_25608);

(statearr_25745_25816[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (22))){
var inst_25628 = (state_25714[(8)]);
var inst_25631 = cljs.core.async.close_BANG_.call(null,inst_25628);
var state_25714__$1 = state_25714;
var statearr_25746_25817 = state_25714__$1;
(statearr_25746_25817[(2)] = inst_25631);

(statearr_25746_25817[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (36))){
var inst_25674 = (state_25714[(23)]);
var inst_25678 = cljs.core.chunk_first.call(null,inst_25674);
var inst_25679 = cljs.core.chunk_rest.call(null,inst_25674);
var inst_25680 = cljs.core.count.call(null,inst_25678);
var inst_25656 = inst_25679;
var inst_25657 = inst_25678;
var inst_25658 = inst_25680;
var inst_25659 = (0);
var state_25714__$1 = (function (){var statearr_25747 = state_25714;
(statearr_25747[(19)] = inst_25658);

(statearr_25747[(11)] = inst_25657);

(statearr_25747[(12)] = inst_25659);

(statearr_25747[(20)] = inst_25656);

return statearr_25747;
})();
var statearr_25748_25818 = state_25714__$1;
(statearr_25748_25818[(2)] = null);

(statearr_25748_25818[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (41))){
var inst_25674 = (state_25714[(23)]);
var inst_25689 = (state_25714[(2)]);
var inst_25690 = cljs.core.next.call(null,inst_25674);
var inst_25656 = inst_25690;
var inst_25657 = null;
var inst_25658 = (0);
var inst_25659 = (0);
var state_25714__$1 = (function (){var statearr_25749 = state_25714;
(statearr_25749[(19)] = inst_25658);

(statearr_25749[(25)] = inst_25689);

(statearr_25749[(11)] = inst_25657);

(statearr_25749[(12)] = inst_25659);

(statearr_25749[(20)] = inst_25656);

return statearr_25749;
})();
var statearr_25750_25819 = state_25714__$1;
(statearr_25750_25819[(2)] = null);

(statearr_25750_25819[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (43))){
var state_25714__$1 = state_25714;
var statearr_25751_25820 = state_25714__$1;
(statearr_25751_25820[(2)] = null);

(statearr_25751_25820[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (29))){
var inst_25698 = (state_25714[(2)]);
var state_25714__$1 = state_25714;
var statearr_25752_25821 = state_25714__$1;
(statearr_25752_25821[(2)] = inst_25698);

(statearr_25752_25821[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (44))){
var inst_25707 = (state_25714[(2)]);
var state_25714__$1 = (function (){var statearr_25753 = state_25714;
(statearr_25753[(26)] = inst_25707);

return statearr_25753;
})();
var statearr_25754_25822 = state_25714__$1;
(statearr_25754_25822[(2)] = null);

(statearr_25754_25822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (6))){
var inst_25648 = (state_25714[(27)]);
var inst_25647 = cljs.core.deref.call(null,cs);
var inst_25648__$1 = cljs.core.keys.call(null,inst_25647);
var inst_25649 = cljs.core.count.call(null,inst_25648__$1);
var inst_25650 = cljs.core.reset_BANG_.call(null,dctr,inst_25649);
var inst_25655 = cljs.core.seq.call(null,inst_25648__$1);
var inst_25656 = inst_25655;
var inst_25657 = null;
var inst_25658 = (0);
var inst_25659 = (0);
var state_25714__$1 = (function (){var statearr_25755 = state_25714;
(statearr_25755[(28)] = inst_25650);

(statearr_25755[(19)] = inst_25658);

(statearr_25755[(27)] = inst_25648__$1);

(statearr_25755[(11)] = inst_25657);

(statearr_25755[(12)] = inst_25659);

(statearr_25755[(20)] = inst_25656);

return statearr_25755;
})();
var statearr_25756_25823 = state_25714__$1;
(statearr_25756_25823[(2)] = null);

(statearr_25756_25823[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (28))){
var inst_25674 = (state_25714[(23)]);
var inst_25656 = (state_25714[(20)]);
var inst_25674__$1 = cljs.core.seq.call(null,inst_25656);
var state_25714__$1 = (function (){var statearr_25757 = state_25714;
(statearr_25757[(23)] = inst_25674__$1);

return statearr_25757;
})();
if(inst_25674__$1){
var statearr_25758_25824 = state_25714__$1;
(statearr_25758_25824[(1)] = (33));

} else {
var statearr_25759_25825 = state_25714__$1;
(statearr_25759_25825[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (25))){
var inst_25658 = (state_25714[(19)]);
var inst_25659 = (state_25714[(12)]);
var inst_25661 = (inst_25659 < inst_25658);
var inst_25662 = inst_25661;
var state_25714__$1 = state_25714;
if(cljs.core.truth_(inst_25662)){
var statearr_25760_25826 = state_25714__$1;
(statearr_25760_25826[(1)] = (27));

} else {
var statearr_25761_25827 = state_25714__$1;
(statearr_25761_25827[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (34))){
var state_25714__$1 = state_25714;
var statearr_25762_25828 = state_25714__$1;
(statearr_25762_25828[(2)] = null);

(statearr_25762_25828[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (17))){
var state_25714__$1 = state_25714;
var statearr_25763_25829 = state_25714__$1;
(statearr_25763_25829[(2)] = null);

(statearr_25763_25829[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (3))){
var inst_25712 = (state_25714[(2)]);
var state_25714__$1 = state_25714;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25714__$1,inst_25712);
} else {
if((state_val_25715 === (12))){
var inst_25643 = (state_25714[(2)]);
var state_25714__$1 = state_25714;
var statearr_25764_25830 = state_25714__$1;
(statearr_25764_25830[(2)] = inst_25643);

(statearr_25764_25830[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (2))){
var state_25714__$1 = state_25714;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25714__$1,(4),ch);
} else {
if((state_val_25715 === (23))){
var state_25714__$1 = state_25714;
var statearr_25765_25831 = state_25714__$1;
(statearr_25765_25831[(2)] = null);

(statearr_25765_25831[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (35))){
var inst_25696 = (state_25714[(2)]);
var state_25714__$1 = state_25714;
var statearr_25766_25832 = state_25714__$1;
(statearr_25766_25832[(2)] = inst_25696);

(statearr_25766_25832[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (19))){
var inst_25615 = (state_25714[(7)]);
var inst_25619 = cljs.core.chunk_first.call(null,inst_25615);
var inst_25620 = cljs.core.chunk_rest.call(null,inst_25615);
var inst_25621 = cljs.core.count.call(null,inst_25619);
var inst_25593 = inst_25620;
var inst_25594 = inst_25619;
var inst_25595 = inst_25621;
var inst_25596 = (0);
var state_25714__$1 = (function (){var statearr_25767 = state_25714;
(statearr_25767[(13)] = inst_25595);

(statearr_25767[(15)] = inst_25593);

(statearr_25767[(16)] = inst_25594);

(statearr_25767[(17)] = inst_25596);

return statearr_25767;
})();
var statearr_25768_25833 = state_25714__$1;
(statearr_25768_25833[(2)] = null);

(statearr_25768_25833[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (11))){
var inst_25593 = (state_25714[(15)]);
var inst_25615 = (state_25714[(7)]);
var inst_25615__$1 = cljs.core.seq.call(null,inst_25593);
var state_25714__$1 = (function (){var statearr_25769 = state_25714;
(statearr_25769[(7)] = inst_25615__$1);

return statearr_25769;
})();
if(inst_25615__$1){
var statearr_25770_25834 = state_25714__$1;
(statearr_25770_25834[(1)] = (16));

} else {
var statearr_25771_25835 = state_25714__$1;
(statearr_25771_25835[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (9))){
var inst_25645 = (state_25714[(2)]);
var state_25714__$1 = state_25714;
var statearr_25772_25836 = state_25714__$1;
(statearr_25772_25836[(2)] = inst_25645);

(statearr_25772_25836[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (5))){
var inst_25591 = cljs.core.deref.call(null,cs);
var inst_25592 = cljs.core.seq.call(null,inst_25591);
var inst_25593 = inst_25592;
var inst_25594 = null;
var inst_25595 = (0);
var inst_25596 = (0);
var state_25714__$1 = (function (){var statearr_25773 = state_25714;
(statearr_25773[(13)] = inst_25595);

(statearr_25773[(15)] = inst_25593);

(statearr_25773[(16)] = inst_25594);

(statearr_25773[(17)] = inst_25596);

return statearr_25773;
})();
var statearr_25774_25837 = state_25714__$1;
(statearr_25774_25837[(2)] = null);

(statearr_25774_25837[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (14))){
var state_25714__$1 = state_25714;
var statearr_25775_25838 = state_25714__$1;
(statearr_25775_25838[(2)] = null);

(statearr_25775_25838[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (45))){
var inst_25704 = (state_25714[(2)]);
var state_25714__$1 = state_25714;
var statearr_25776_25839 = state_25714__$1;
(statearr_25776_25839[(2)] = inst_25704);

(statearr_25776_25839[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (26))){
var inst_25648 = (state_25714[(27)]);
var inst_25700 = (state_25714[(2)]);
var inst_25701 = cljs.core.seq.call(null,inst_25648);
var state_25714__$1 = (function (){var statearr_25777 = state_25714;
(statearr_25777[(29)] = inst_25700);

return statearr_25777;
})();
if(inst_25701){
var statearr_25778_25840 = state_25714__$1;
(statearr_25778_25840[(1)] = (42));

} else {
var statearr_25779_25841 = state_25714__$1;
(statearr_25779_25841[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (16))){
var inst_25615 = (state_25714[(7)]);
var inst_25617 = cljs.core.chunked_seq_QMARK_.call(null,inst_25615);
var state_25714__$1 = state_25714;
if(inst_25617){
var statearr_25780_25842 = state_25714__$1;
(statearr_25780_25842[(1)] = (19));

} else {
var statearr_25781_25843 = state_25714__$1;
(statearr_25781_25843[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (38))){
var inst_25693 = (state_25714[(2)]);
var state_25714__$1 = state_25714;
var statearr_25782_25844 = state_25714__$1;
(statearr_25782_25844[(2)] = inst_25693);

(statearr_25782_25844[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (30))){
var state_25714__$1 = state_25714;
var statearr_25783_25845 = state_25714__$1;
(statearr_25783_25845[(2)] = null);

(statearr_25783_25845[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (10))){
var inst_25594 = (state_25714[(16)]);
var inst_25596 = (state_25714[(17)]);
var inst_25604 = cljs.core._nth.call(null,inst_25594,inst_25596);
var inst_25605 = cljs.core.nth.call(null,inst_25604,(0),null);
var inst_25606 = cljs.core.nth.call(null,inst_25604,(1),null);
var state_25714__$1 = (function (){var statearr_25784 = state_25714;
(statearr_25784[(24)] = inst_25605);

return statearr_25784;
})();
if(cljs.core.truth_(inst_25606)){
var statearr_25785_25846 = state_25714__$1;
(statearr_25785_25846[(1)] = (13));

} else {
var statearr_25786_25847 = state_25714__$1;
(statearr_25786_25847[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (18))){
var inst_25641 = (state_25714[(2)]);
var state_25714__$1 = state_25714;
var statearr_25787_25848 = state_25714__$1;
(statearr_25787_25848[(2)] = inst_25641);

(statearr_25787_25848[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (42))){
var state_25714__$1 = state_25714;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25714__$1,(45),dchan);
} else {
if((state_val_25715 === (37))){
var inst_25584 = (state_25714[(9)]);
var inst_25674 = (state_25714[(23)]);
var inst_25683 = (state_25714[(22)]);
var inst_25683__$1 = cljs.core.first.call(null,inst_25674);
var inst_25684 = cljs.core.async.put_BANG_.call(null,inst_25683__$1,inst_25584,done);
var state_25714__$1 = (function (){var statearr_25788 = state_25714;
(statearr_25788[(22)] = inst_25683__$1);

return statearr_25788;
})();
if(cljs.core.truth_(inst_25684)){
var statearr_25789_25849 = state_25714__$1;
(statearr_25789_25849[(1)] = (39));

} else {
var statearr_25790_25850 = state_25714__$1;
(statearr_25790_25850[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (8))){
var inst_25595 = (state_25714[(13)]);
var inst_25596 = (state_25714[(17)]);
var inst_25598 = (inst_25596 < inst_25595);
var inst_25599 = inst_25598;
var state_25714__$1 = state_25714;
if(cljs.core.truth_(inst_25599)){
var statearr_25791_25851 = state_25714__$1;
(statearr_25791_25851[(1)] = (10));

} else {
var statearr_25792_25852 = state_25714__$1;
(statearr_25792_25852[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__24889__auto__ = null;
var cljs$core$async$mult_$_state_machine__24889__auto____0 = (function (){
var statearr_25793 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25793[(0)] = cljs$core$async$mult_$_state_machine__24889__auto__);

(statearr_25793[(1)] = (1));

return statearr_25793;
});
var cljs$core$async$mult_$_state_machine__24889__auto____1 = (function (state_25714){
while(true){
var ret_value__24890__auto__ = (function (){try{while(true){
var result__24891__auto__ = switch__24888__auto__.call(null,state_25714);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24891__auto__;
}
break;
}
}catch (e25794){var ex__24892__auto__ = e25794;
var statearr_25795_25853 = state_25714;
(statearr_25795_25853[(2)] = ex__24892__auto__);


if(cljs.core.seq.call(null,(state_25714[(4)]))){
var statearr_25796_25854 = state_25714;
(statearr_25796_25854[(1)] = cljs.core.first.call(null,(state_25714[(4)])));

} else {
throw ex__24892__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25855 = state_25714;
state_25714 = G__25855;
continue;
} else {
return ret_value__24890__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24889__auto__ = function(state_25714){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24889__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24889__auto____1.call(this,state_25714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__24889__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24889__auto____0;
cljs$core$async$mult_$_state_machine__24889__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24889__auto____1;
return cljs$core$async$mult_$_state_machine__24889__auto__;
})()
})();
var state__24964__auto__ = (function (){var statearr_25797 = f__24963__auto__.call(null);
(statearr_25797[(6)] = c__24962__auto___25798);

return statearr_25797;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24964__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__25857 = arguments.length;
switch (G__25857) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m,ch);
} else {
var m__4485__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m,ch);
} else {
var m__4485__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m);
} else {
var m__4485__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m,state_map);
} else {
var m__4485__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m,mode);
} else {
var m__4485__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___25869 = arguments.length;
var i__4790__auto___25870 = (0);
while(true){
if((i__4790__auto___25870 < len__4789__auto___25869)){
args__4795__auto__.push((arguments[i__4790__auto___25870]));

var G__25871 = (i__4790__auto___25870 + (1));
i__4790__auto___25870 = G__25871;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25863){
var map__25864 = p__25863;
var map__25864__$1 = (((((!((map__25864 == null))))?(((((map__25864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25864.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25864):map__25864);
var opts = map__25864__$1;
var statearr_25866_25872 = state;
(statearr_25866_25872[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_25867_25873 = state;
(statearr_25867_25873[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_25868_25874 = state;
(statearr_25868_25874[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25859){
var G__25860 = cljs.core.first.call(null,seq25859);
var seq25859__$1 = cljs.core.next.call(null,seq25859);
var G__25861 = cljs.core.first.call(null,seq25859__$1);
var seq25859__$2 = cljs.core.next.call(null,seq25859__$1);
var G__25862 = cljs.core.first.call(null,seq25859__$2);
var seq25859__$3 = cljs.core.next.call(null,seq25859__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25860,G__25861,G__25862,seq25859__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(1)));
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25875 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25875 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25876){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta25876 = meta25876;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25875.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25877,meta25876__$1){
var self__ = this;
var _25877__$1 = this;
return (new cljs.core.async.t_cljs$core$async25875(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25876__$1));
}));

(cljs.core.async.t_cljs$core$async25875.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25877){
var self__ = this;
var _25877__$1 = this;
return self__.meta25876;
}));

(cljs.core.async.t_cljs$core$async25875.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25875.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async25875.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25875.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async25875.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async25875.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async25875.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async25875.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async25875.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta25876","meta25876",1738286470,null)], null);
}));

(cljs.core.async.t_cljs$core$async25875.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25875.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25875");

(cljs.core.async.t_cljs$core$async25875.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async25875");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25875.
 */
cljs.core.async.__GT_t_cljs$core$async25875 = (function cljs$core$async$mix_$___GT_t_cljs$core$async25875(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25876){
return (new cljs.core.async.t_cljs$core$async25875(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25876));
});

}

return (new cljs.core.async.t_cljs$core$async25875(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24962__auto___26040 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24963__auto__ = (function (){var switch__24888__auto__ = (function (state_25979){
var state_val_25980 = (state_25979[(1)]);
if((state_val_25980 === (7))){
var inst_25894 = (state_25979[(2)]);
var state_25979__$1 = state_25979;
var statearr_25981_26041 = state_25979__$1;
(statearr_25981_26041[(2)] = inst_25894);

(statearr_25981_26041[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25980 === (20))){
var inst_25906 = (state_25979[(7)]);
var state_25979__$1 = state_25979;
var statearr_25982_26042 = state_25979__$1;
(statearr_25982_26042[(2)] = inst_25906);

(statearr_25982_26042[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25980 === (27))){
var state_25979__$1 = state_25979;
var statearr_25983_26043 = state_25979__$1;
(statearr_25983_26043[(2)] = null);

(statearr_25983_26043[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25980 === (1))){
var inst_25881 = (state_25979[(8)]);
var inst_25881__$1 = calc_state.call(null);
var inst_25883 = (inst_25881__$1 == null);
var inst_25884 = cljs.core.not.call(null,inst_25883);
var state_25979__$1 = (function (){var statearr_25984 = state_25979;
(statearr_25984[(8)] = inst_25881__$1);

return statearr_25984;
})();
if(inst_25884){
var statearr_25985_26044 = state_25979__$1;
(statearr_25985_26044[(1)] = (2));

} else {
var statearr_25986_26045 = state_25979__$1;
(statearr_25986_26045[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25980 === (24))){
var inst_25930 = (state_25979[(9)]);
var inst_25939 = (state_25979[(10)]);
var inst_25953 = (state_25979[(11)]);
var inst_25953__$1 = inst_25930.call(null,inst_25939);
var state_25979__$1 = (function (){var statearr_25987 = state_25979;
(statearr_25987[(11)] = inst_25953__$1);

return statearr_25987;
})();
if(cljs.core.truth_(inst_25953__$1)){
var statearr_25988_26046 = state_25979__$1;
(statearr_25988_26046[(1)] = (29));

} else {
var statearr_25989_26047 = state_25979__$1;
(statearr_25989_26047[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25980 === (4))){
var inst_25897 = (state_25979[(2)]);
var state_25979__$1 = state_25979;
if(cljs.core.truth_(inst_25897)){
var statearr_25990_26048 = state_25979__$1;
(statearr_25990_26048[(1)] = (8));

} else {
var statearr_25991_26049 = state_25979__$1;
(statearr_25991_26049[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25980 === (15))){
var inst_25924 = (state_25979[(2)]);
var state_25979__$1 = state_25979;
if(cljs.core.truth_(inst_25924)){
var statearr_25992_26050 = state_25979__$1;
(statearr_25992_26050[(1)] = (19));

} else {
var statearr_25993_26051 = state_25979__$1;
(statearr_25993_26051[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25980 === (21))){
var inst_25929 = (state_25979[(12)]);
var inst_25929__$1 = (state_25979[(2)]);
var inst_25930 = cljs.core.get.call(null,inst_25929__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25931 = cljs.core.get.call(null,inst_25929__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25932 = cljs.core.get.call(null,inst_25929__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_25979__$1 = (function (){var statearr_25994 = state_25979;
(statearr_25994[(12)] = inst_25929__$1);

(statearr_25994[(9)] = inst_25930);

(statearr_25994[(13)] = inst_25931);

return statearr_25994;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_25979__$1,(22),inst_25932);
} else {
if((state_val_25980 === (31))){
var inst_25961 = (state_25979[(2)]);
var state_25979__$1 = state_25979;
if(cljs.core.truth_(inst_25961)){
var statearr_25995_26052 = state_25979__$1;
(statearr_25995_26052[(1)] = (32));

} else {
var statearr_25996_26053 = state_25979__$1;
(statearr_25996_26053[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25980 === (32))){
var inst_25938 = (state_25979[(14)]);
var state_25979__$1 = state_25979;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25979__$1,(35),out,inst_25938);
} else {
if((state_val_25980 === (33))){
var inst_25929 = (state_25979[(12)]);
var inst_25906 = inst_25929;
var state_25979__$1 = (function (){var statearr_25997 = state_25979;
(statearr_25997[(7)] = inst_25906);

return statearr_25997;
})();
var statearr_25998_26054 = state_25979__$1;
(statearr_25998_26054[(2)] = null);

(statearr_25998_26054[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25980 === (13))){
var inst_25906 = (state_25979[(7)]);
var inst_25913 = inst_25906.cljs$lang$protocol_mask$partition0$;
var inst_25914 = (inst_25913 & (64));
var inst_25915 = inst_25906.cljs$core$ISeq$;
var inst_25916 = (cljs.core.PROTOCOL_SENTINEL === inst_25915);
var inst_25917 = ((inst_25914) || (inst_25916));
var state_25979__$1 = state_25979;
if(cljs.core.truth_(inst_25917)){
var statearr_25999_26055 = state_25979__$1;
(statearr_25999_26055[(1)] = (16));

} else {
var statearr_26000_26056 = state_25979__$1;
(statearr_26000_26056[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25980 === (22))){
var inst_25938 = (state_25979[(14)]);
var inst_25939 = (state_25979[(10)]);
var inst_25937 = (state_25979[(2)]);
var inst_25938__$1 = cljs.core.nth.call(null,inst_25937,(0),null);
var inst_25939__$1 = cljs.core.nth.call(null,inst_25937,(1),null);
var inst_25940 = (inst_25938__$1 == null);
var inst_25941 = cljs.core._EQ_.call(null,inst_25939__$1,change);
var inst_25942 = ((inst_25940) || (inst_25941));
var state_25979__$1 = (function (){var statearr_26001 = state_25979;
(statearr_26001[(14)] = inst_25938__$1);

(statearr_26001[(10)] = inst_25939__$1);

return statearr_26001;
})();
if(cljs.core.truth_(inst_25942)){
var statearr_26002_26057 = state_25979__$1;
(statearr_26002_26057[(1)] = (23));

} else {
var statearr_26003_26058 = state_25979__$1;
(statearr_26003_26058[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25980 === (36))){
var inst_25929 = (state_25979[(12)]);
var inst_25906 = inst_25929;
var state_25979__$1 = (function (){var statearr_26004 = state_25979;
(statearr_26004[(7)] = inst_25906);

return statearr_26004;
})();
var statearr_26005_26059 = state_25979__$1;
(statearr_26005_26059[(2)] = null);

(statearr_26005_26059[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25980 === (29))){
var inst_25953 = (state_25979[(11)]);
var state_25979__$1 = state_25979;
var statearr_26006_26060 = state_25979__$1;
(statearr_26006_26060[(2)] = inst_25953);

(statearr_26006_26060[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25980 === (6))){
var state_25979__$1 = state_25979;
var statearr_26007_26061 = state_25979__$1;
(statearr_26007_26061[(2)] = false);

(statearr_26007_26061[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25980 === (28))){
var inst_25949 = (state_25979[(2)]);
var inst_25950 = calc_state.call(null);
var inst_25906 = inst_25950;
var state_25979__$1 = (function (){var statearr_26008 = state_25979;
(statearr_26008[(7)] = inst_25906);

(statearr_26008[(15)] = inst_25949);

return statearr_26008;
})();
var statearr_26009_26062 = state_25979__$1;
(statearr_26009_26062[(2)] = null);

(statearr_26009_26062[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25980 === (25))){
var inst_25975 = (state_25979[(2)]);
var state_25979__$1 = state_25979;
var statearr_26010_26063 = state_25979__$1;
(statearr_26010_26063[(2)] = inst_25975);

(statearr_26010_26063[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25980 === (34))){
var inst_25973 = (state_25979[(2)]);
var state_25979__$1 = state_25979;
var statearr_26011_26064 = state_25979__$1;
(statearr_26011_26064[(2)] = inst_25973);

(statearr_26011_26064[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25980 === (17))){
var state_25979__$1 = state_25979;
var statearr_26012_26065 = state_25979__$1;
(statearr_26012_26065[(2)] = false);

(statearr_26012_26065[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25980 === (3))){
var state_25979__$1 = state_25979;
var statearr_26013_26066 = state_25979__$1;
(statearr_26013_26066[(2)] = false);

(statearr_26013_26066[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25980 === (12))){
var inst_25977 = (state_25979[(2)]);
var state_25979__$1 = state_25979;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25979__$1,inst_25977);
} else {
if((state_val_25980 === (2))){
var inst_25881 = (state_25979[(8)]);
var inst_25886 = inst_25881.cljs$lang$protocol_mask$partition0$;
var inst_25887 = (inst_25886 & (64));
var inst_25888 = inst_25881.cljs$core$ISeq$;
var inst_25889 = (cljs.core.PROTOCOL_SENTINEL === inst_25888);
var inst_25890 = ((inst_25887) || (inst_25889));
var state_25979__$1 = state_25979;
if(cljs.core.truth_(inst_25890)){
var statearr_26014_26067 = state_25979__$1;
(statearr_26014_26067[(1)] = (5));

} else {
var statearr_26015_26068 = state_25979__$1;
(statearr_26015_26068[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25980 === (23))){
var inst_25938 = (state_25979[(14)]);
var inst_25944 = (inst_25938 == null);
var state_25979__$1 = state_25979;
if(cljs.core.truth_(inst_25944)){
var statearr_26016_26069 = state_25979__$1;
(statearr_26016_26069[(1)] = (26));

} else {
var statearr_26017_26070 = state_25979__$1;
(statearr_26017_26070[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25980 === (35))){
var inst_25964 = (state_25979[(2)]);
var state_25979__$1 = state_25979;
if(cljs.core.truth_(inst_25964)){
var statearr_26018_26071 = state_25979__$1;
(statearr_26018_26071[(1)] = (36));

} else {
var statearr_26019_26072 = state_25979__$1;
(statearr_26019_26072[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25980 === (19))){
var inst_25906 = (state_25979[(7)]);
var inst_25926 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25906);
var state_25979__$1 = state_25979;
var statearr_26020_26073 = state_25979__$1;
(statearr_26020_26073[(2)] = inst_25926);

(statearr_26020_26073[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25980 === (11))){
var inst_25906 = (state_25979[(7)]);
var inst_25910 = (inst_25906 == null);
var inst_25911 = cljs.core.not.call(null,inst_25910);
var state_25979__$1 = state_25979;
if(inst_25911){
var statearr_26021_26074 = state_25979__$1;
(statearr_26021_26074[(1)] = (13));

} else {
var statearr_26022_26075 = state_25979__$1;
(statearr_26022_26075[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25980 === (9))){
var inst_25881 = (state_25979[(8)]);
var state_25979__$1 = state_25979;
var statearr_26023_26076 = state_25979__$1;
(statearr_26023_26076[(2)] = inst_25881);

(statearr_26023_26076[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25980 === (5))){
var state_25979__$1 = state_25979;
var statearr_26024_26077 = state_25979__$1;
(statearr_26024_26077[(2)] = true);

(statearr_26024_26077[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25980 === (14))){
var state_25979__$1 = state_25979;
var statearr_26025_26078 = state_25979__$1;
(statearr_26025_26078[(2)] = false);

(statearr_26025_26078[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25980 === (26))){
var inst_25939 = (state_25979[(10)]);
var inst_25946 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25939);
var state_25979__$1 = state_25979;
var statearr_26026_26079 = state_25979__$1;
(statearr_26026_26079[(2)] = inst_25946);

(statearr_26026_26079[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25980 === (16))){
var state_25979__$1 = state_25979;
var statearr_26027_26080 = state_25979__$1;
(statearr_26027_26080[(2)] = true);

(statearr_26027_26080[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25980 === (38))){
var inst_25969 = (state_25979[(2)]);
var state_25979__$1 = state_25979;
var statearr_26028_26081 = state_25979__$1;
(statearr_26028_26081[(2)] = inst_25969);

(statearr_26028_26081[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25980 === (30))){
var inst_25930 = (state_25979[(9)]);
var inst_25939 = (state_25979[(10)]);
var inst_25931 = (state_25979[(13)]);
var inst_25956 = cljs.core.empty_QMARK_.call(null,inst_25930);
var inst_25957 = inst_25931.call(null,inst_25939);
var inst_25958 = cljs.core.not.call(null,inst_25957);
var inst_25959 = ((inst_25956) && (inst_25958));
var state_25979__$1 = state_25979;
var statearr_26029_26082 = state_25979__$1;
(statearr_26029_26082[(2)] = inst_25959);

(statearr_26029_26082[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25980 === (10))){
var inst_25881 = (state_25979[(8)]);
var inst_25902 = (state_25979[(2)]);
var inst_25903 = cljs.core.get.call(null,inst_25902,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25904 = cljs.core.get.call(null,inst_25902,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25905 = cljs.core.get.call(null,inst_25902,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25906 = inst_25881;
var state_25979__$1 = (function (){var statearr_26030 = state_25979;
(statearr_26030[(7)] = inst_25906);

(statearr_26030[(16)] = inst_25905);

(statearr_26030[(17)] = inst_25904);

(statearr_26030[(18)] = inst_25903);

return statearr_26030;
})();
var statearr_26031_26083 = state_25979__$1;
(statearr_26031_26083[(2)] = null);

(statearr_26031_26083[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25980 === (18))){
var inst_25921 = (state_25979[(2)]);
var state_25979__$1 = state_25979;
var statearr_26032_26084 = state_25979__$1;
(statearr_26032_26084[(2)] = inst_25921);

(statearr_26032_26084[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25980 === (37))){
var state_25979__$1 = state_25979;
var statearr_26033_26085 = state_25979__$1;
(statearr_26033_26085[(2)] = null);

(statearr_26033_26085[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25980 === (8))){
var inst_25881 = (state_25979[(8)]);
var inst_25899 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25881);
var state_25979__$1 = state_25979;
var statearr_26034_26086 = state_25979__$1;
(statearr_26034_26086[(2)] = inst_25899);

(statearr_26034_26086[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__24889__auto__ = null;
var cljs$core$async$mix_$_state_machine__24889__auto____0 = (function (){
var statearr_26035 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26035[(0)] = cljs$core$async$mix_$_state_machine__24889__auto__);

(statearr_26035[(1)] = (1));

return statearr_26035;
});
var cljs$core$async$mix_$_state_machine__24889__auto____1 = (function (state_25979){
while(true){
var ret_value__24890__auto__ = (function (){try{while(true){
var result__24891__auto__ = switch__24888__auto__.call(null,state_25979);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24891__auto__;
}
break;
}
}catch (e26036){var ex__24892__auto__ = e26036;
var statearr_26037_26087 = state_25979;
(statearr_26037_26087[(2)] = ex__24892__auto__);


if(cljs.core.seq.call(null,(state_25979[(4)]))){
var statearr_26038_26088 = state_25979;
(statearr_26038_26088[(1)] = cljs.core.first.call(null,(state_25979[(4)])));

} else {
throw ex__24892__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26089 = state_25979;
state_25979 = G__26089;
continue;
} else {
return ret_value__24890__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24889__auto__ = function(state_25979){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24889__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24889__auto____1.call(this,state_25979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__24889__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24889__auto____0;
cljs$core$async$mix_$_state_machine__24889__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24889__auto____1;
return cljs$core$async$mix_$_state_machine__24889__auto__;
})()
})();
var state__24964__auto__ = (function (){var statearr_26039 = f__24963__auto__.call(null);
(statearr_26039[(6)] = c__24962__auto___26040);

return statearr_26039;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24964__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4485__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,p,v,ch);
} else {
var m__4485__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__26091 = arguments.length;
switch (G__26091) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,p);
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,p,v);
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__26095 = arguments.length;
switch (G__26095) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4185__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__26093_SHARP_){
if(cljs.core.truth_(p1__26093_SHARP_.call(null,topic))){
return p1__26093_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__26093_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26096 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26096 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta26097){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta26097 = meta26097;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26096.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26098,meta26097__$1){
var self__ = this;
var _26098__$1 = this;
return (new cljs.core.async.t_cljs$core$async26096(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta26097__$1));
}));

(cljs.core.async.t_cljs$core$async26096.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26098){
var self__ = this;
var _26098__$1 = this;
return self__.meta26097;
}));

(cljs.core.async.t_cljs$core$async26096.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26096.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async26096.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26096.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async26096.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async26096.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async26096.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async26096.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta26097","meta26097",-1044216848,null)], null);
}));

(cljs.core.async.t_cljs$core$async26096.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26096.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26096");

(cljs.core.async.t_cljs$core$async26096.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async26096");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26096.
 */
cljs.core.async.__GT_t_cljs$core$async26096 = (function cljs$core$async$__GT_t_cljs$core$async26096(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26097){
return (new cljs.core.async.t_cljs$core$async26096(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26097));
});

}

return (new cljs.core.async.t_cljs$core$async26096(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24962__auto___26217 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24963__auto__ = (function (){var switch__24888__auto__ = (function (state_26170){
var state_val_26171 = (state_26170[(1)]);
if((state_val_26171 === (7))){
var inst_26166 = (state_26170[(2)]);
var state_26170__$1 = state_26170;
var statearr_26172_26218 = state_26170__$1;
(statearr_26172_26218[(2)] = inst_26166);

(statearr_26172_26218[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26171 === (20))){
var state_26170__$1 = state_26170;
var statearr_26173_26219 = state_26170__$1;
(statearr_26173_26219[(2)] = null);

(statearr_26173_26219[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26171 === (1))){
var state_26170__$1 = state_26170;
var statearr_26174_26220 = state_26170__$1;
(statearr_26174_26220[(2)] = null);

(statearr_26174_26220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26171 === (24))){
var inst_26149 = (state_26170[(7)]);
var inst_26158 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26149);
var state_26170__$1 = state_26170;
var statearr_26175_26221 = state_26170__$1;
(statearr_26175_26221[(2)] = inst_26158);

(statearr_26175_26221[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26171 === (4))){
var inst_26101 = (state_26170[(8)]);
var inst_26101__$1 = (state_26170[(2)]);
var inst_26102 = (inst_26101__$1 == null);
var state_26170__$1 = (function (){var statearr_26176 = state_26170;
(statearr_26176[(8)] = inst_26101__$1);

return statearr_26176;
})();
if(cljs.core.truth_(inst_26102)){
var statearr_26177_26222 = state_26170__$1;
(statearr_26177_26222[(1)] = (5));

} else {
var statearr_26178_26223 = state_26170__$1;
(statearr_26178_26223[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26171 === (15))){
var inst_26143 = (state_26170[(2)]);
var state_26170__$1 = state_26170;
var statearr_26179_26224 = state_26170__$1;
(statearr_26179_26224[(2)] = inst_26143);

(statearr_26179_26224[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26171 === (21))){
var inst_26163 = (state_26170[(2)]);
var state_26170__$1 = (function (){var statearr_26180 = state_26170;
(statearr_26180[(9)] = inst_26163);

return statearr_26180;
})();
var statearr_26181_26225 = state_26170__$1;
(statearr_26181_26225[(2)] = null);

(statearr_26181_26225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26171 === (13))){
var inst_26125 = (state_26170[(10)]);
var inst_26127 = cljs.core.chunked_seq_QMARK_.call(null,inst_26125);
var state_26170__$1 = state_26170;
if(inst_26127){
var statearr_26182_26226 = state_26170__$1;
(statearr_26182_26226[(1)] = (16));

} else {
var statearr_26183_26227 = state_26170__$1;
(statearr_26183_26227[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26171 === (22))){
var inst_26155 = (state_26170[(2)]);
var state_26170__$1 = state_26170;
if(cljs.core.truth_(inst_26155)){
var statearr_26184_26228 = state_26170__$1;
(statearr_26184_26228[(1)] = (23));

} else {
var statearr_26185_26229 = state_26170__$1;
(statearr_26185_26229[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26171 === (6))){
var inst_26149 = (state_26170[(7)]);
var inst_26101 = (state_26170[(8)]);
var inst_26151 = (state_26170[(11)]);
var inst_26149__$1 = topic_fn.call(null,inst_26101);
var inst_26150 = cljs.core.deref.call(null,mults);
var inst_26151__$1 = cljs.core.get.call(null,inst_26150,inst_26149__$1);
var state_26170__$1 = (function (){var statearr_26186 = state_26170;
(statearr_26186[(7)] = inst_26149__$1);

(statearr_26186[(11)] = inst_26151__$1);

return statearr_26186;
})();
if(cljs.core.truth_(inst_26151__$1)){
var statearr_26187_26230 = state_26170__$1;
(statearr_26187_26230[(1)] = (19));

} else {
var statearr_26188_26231 = state_26170__$1;
(statearr_26188_26231[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26171 === (25))){
var inst_26160 = (state_26170[(2)]);
var state_26170__$1 = state_26170;
var statearr_26189_26232 = state_26170__$1;
(statearr_26189_26232[(2)] = inst_26160);

(statearr_26189_26232[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26171 === (17))){
var inst_26125 = (state_26170[(10)]);
var inst_26134 = cljs.core.first.call(null,inst_26125);
var inst_26135 = cljs.core.async.muxch_STAR_.call(null,inst_26134);
var inst_26136 = cljs.core.async.close_BANG_.call(null,inst_26135);
var inst_26137 = cljs.core.next.call(null,inst_26125);
var inst_26111 = inst_26137;
var inst_26112 = null;
var inst_26113 = (0);
var inst_26114 = (0);
var state_26170__$1 = (function (){var statearr_26190 = state_26170;
(statearr_26190[(12)] = inst_26111);

(statearr_26190[(13)] = inst_26112);

(statearr_26190[(14)] = inst_26113);

(statearr_26190[(15)] = inst_26136);

(statearr_26190[(16)] = inst_26114);

return statearr_26190;
})();
var statearr_26191_26233 = state_26170__$1;
(statearr_26191_26233[(2)] = null);

(statearr_26191_26233[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26171 === (3))){
var inst_26168 = (state_26170[(2)]);
var state_26170__$1 = state_26170;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26170__$1,inst_26168);
} else {
if((state_val_26171 === (12))){
var inst_26145 = (state_26170[(2)]);
var state_26170__$1 = state_26170;
var statearr_26192_26234 = state_26170__$1;
(statearr_26192_26234[(2)] = inst_26145);

(statearr_26192_26234[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26171 === (2))){
var state_26170__$1 = state_26170;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26170__$1,(4),ch);
} else {
if((state_val_26171 === (23))){
var state_26170__$1 = state_26170;
var statearr_26193_26235 = state_26170__$1;
(statearr_26193_26235[(2)] = null);

(statearr_26193_26235[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26171 === (19))){
var inst_26101 = (state_26170[(8)]);
var inst_26151 = (state_26170[(11)]);
var inst_26153 = cljs.core.async.muxch_STAR_.call(null,inst_26151);
var state_26170__$1 = state_26170;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26170__$1,(22),inst_26153,inst_26101);
} else {
if((state_val_26171 === (11))){
var inst_26111 = (state_26170[(12)]);
var inst_26125 = (state_26170[(10)]);
var inst_26125__$1 = cljs.core.seq.call(null,inst_26111);
var state_26170__$1 = (function (){var statearr_26194 = state_26170;
(statearr_26194[(10)] = inst_26125__$1);

return statearr_26194;
})();
if(inst_26125__$1){
var statearr_26195_26236 = state_26170__$1;
(statearr_26195_26236[(1)] = (13));

} else {
var statearr_26196_26237 = state_26170__$1;
(statearr_26196_26237[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26171 === (9))){
var inst_26147 = (state_26170[(2)]);
var state_26170__$1 = state_26170;
var statearr_26197_26238 = state_26170__$1;
(statearr_26197_26238[(2)] = inst_26147);

(statearr_26197_26238[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26171 === (5))){
var inst_26108 = cljs.core.deref.call(null,mults);
var inst_26109 = cljs.core.vals.call(null,inst_26108);
var inst_26110 = cljs.core.seq.call(null,inst_26109);
var inst_26111 = inst_26110;
var inst_26112 = null;
var inst_26113 = (0);
var inst_26114 = (0);
var state_26170__$1 = (function (){var statearr_26198 = state_26170;
(statearr_26198[(12)] = inst_26111);

(statearr_26198[(13)] = inst_26112);

(statearr_26198[(14)] = inst_26113);

(statearr_26198[(16)] = inst_26114);

return statearr_26198;
})();
var statearr_26199_26239 = state_26170__$1;
(statearr_26199_26239[(2)] = null);

(statearr_26199_26239[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26171 === (14))){
var state_26170__$1 = state_26170;
var statearr_26203_26240 = state_26170__$1;
(statearr_26203_26240[(2)] = null);

(statearr_26203_26240[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26171 === (16))){
var inst_26125 = (state_26170[(10)]);
var inst_26129 = cljs.core.chunk_first.call(null,inst_26125);
var inst_26130 = cljs.core.chunk_rest.call(null,inst_26125);
var inst_26131 = cljs.core.count.call(null,inst_26129);
var inst_26111 = inst_26130;
var inst_26112 = inst_26129;
var inst_26113 = inst_26131;
var inst_26114 = (0);
var state_26170__$1 = (function (){var statearr_26204 = state_26170;
(statearr_26204[(12)] = inst_26111);

(statearr_26204[(13)] = inst_26112);

(statearr_26204[(14)] = inst_26113);

(statearr_26204[(16)] = inst_26114);

return statearr_26204;
})();
var statearr_26205_26241 = state_26170__$1;
(statearr_26205_26241[(2)] = null);

(statearr_26205_26241[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26171 === (10))){
var inst_26111 = (state_26170[(12)]);
var inst_26112 = (state_26170[(13)]);
var inst_26113 = (state_26170[(14)]);
var inst_26114 = (state_26170[(16)]);
var inst_26119 = cljs.core._nth.call(null,inst_26112,inst_26114);
var inst_26120 = cljs.core.async.muxch_STAR_.call(null,inst_26119);
var inst_26121 = cljs.core.async.close_BANG_.call(null,inst_26120);
var inst_26122 = (inst_26114 + (1));
var tmp26200 = inst_26111;
var tmp26201 = inst_26112;
var tmp26202 = inst_26113;
var inst_26111__$1 = tmp26200;
var inst_26112__$1 = tmp26201;
var inst_26113__$1 = tmp26202;
var inst_26114__$1 = inst_26122;
var state_26170__$1 = (function (){var statearr_26206 = state_26170;
(statearr_26206[(12)] = inst_26111__$1);

(statearr_26206[(13)] = inst_26112__$1);

(statearr_26206[(14)] = inst_26113__$1);

(statearr_26206[(17)] = inst_26121);

(statearr_26206[(16)] = inst_26114__$1);

return statearr_26206;
})();
var statearr_26207_26242 = state_26170__$1;
(statearr_26207_26242[(2)] = null);

(statearr_26207_26242[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26171 === (18))){
var inst_26140 = (state_26170[(2)]);
var state_26170__$1 = state_26170;
var statearr_26208_26243 = state_26170__$1;
(statearr_26208_26243[(2)] = inst_26140);

(statearr_26208_26243[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26171 === (8))){
var inst_26113 = (state_26170[(14)]);
var inst_26114 = (state_26170[(16)]);
var inst_26116 = (inst_26114 < inst_26113);
var inst_26117 = inst_26116;
var state_26170__$1 = state_26170;
if(cljs.core.truth_(inst_26117)){
var statearr_26209_26244 = state_26170__$1;
(statearr_26209_26244[(1)] = (10));

} else {
var statearr_26210_26245 = state_26170__$1;
(statearr_26210_26245[(1)] = (11));

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
var cljs$core$async$state_machine__24889__auto__ = null;
var cljs$core$async$state_machine__24889__auto____0 = (function (){
var statearr_26211 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26211[(0)] = cljs$core$async$state_machine__24889__auto__);

(statearr_26211[(1)] = (1));

return statearr_26211;
});
var cljs$core$async$state_machine__24889__auto____1 = (function (state_26170){
while(true){
var ret_value__24890__auto__ = (function (){try{while(true){
var result__24891__auto__ = switch__24888__auto__.call(null,state_26170);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24891__auto__;
}
break;
}
}catch (e26212){var ex__24892__auto__ = e26212;
var statearr_26213_26246 = state_26170;
(statearr_26213_26246[(2)] = ex__24892__auto__);


if(cljs.core.seq.call(null,(state_26170[(4)]))){
var statearr_26214_26247 = state_26170;
(statearr_26214_26247[(1)] = cljs.core.first.call(null,(state_26170[(4)])));

} else {
throw ex__24892__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26248 = state_26170;
state_26170 = G__26248;
continue;
} else {
return ret_value__24890__auto__;
}
break;
}
});
cljs$core$async$state_machine__24889__auto__ = function(state_26170){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24889__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24889__auto____1.call(this,state_26170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24889__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24889__auto____0;
cljs$core$async$state_machine__24889__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24889__auto____1;
return cljs$core$async$state_machine__24889__auto__;
})()
})();
var state__24964__auto__ = (function (){var statearr_26215 = f__24963__auto__.call(null);
(statearr_26215[(6)] = c__24962__auto___26217);

return statearr_26215;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24964__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__26250 = arguments.length;
switch (G__26250) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__26253 = arguments.length;
switch (G__26253) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__26256 = arguments.length;
switch (G__26256) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
var c__24962__auto___26334 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24963__auto__ = (function (){var switch__24888__auto__ = (function (state_26299){
var state_val_26300 = (state_26299[(1)]);
if((state_val_26300 === (7))){
var state_26299__$1 = state_26299;
var statearr_26301_26335 = state_26299__$1;
(statearr_26301_26335[(2)] = null);

(statearr_26301_26335[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26300 === (1))){
var state_26299__$1 = state_26299;
var statearr_26302_26336 = state_26299__$1;
(statearr_26302_26336[(2)] = null);

(statearr_26302_26336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26300 === (4))){
var inst_26260 = (state_26299[(7)]);
var inst_26259 = (state_26299[(8)]);
var inst_26262 = (inst_26260 < inst_26259);
var state_26299__$1 = state_26299;
if(cljs.core.truth_(inst_26262)){
var statearr_26303_26337 = state_26299__$1;
(statearr_26303_26337[(1)] = (6));

} else {
var statearr_26304_26338 = state_26299__$1;
(statearr_26304_26338[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26300 === (15))){
var inst_26285 = (state_26299[(9)]);
var inst_26290 = cljs.core.apply.call(null,f,inst_26285);
var state_26299__$1 = state_26299;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26299__$1,(17),out,inst_26290);
} else {
if((state_val_26300 === (13))){
var inst_26285 = (state_26299[(9)]);
var inst_26285__$1 = (state_26299[(2)]);
var inst_26286 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26285__$1);
var state_26299__$1 = (function (){var statearr_26305 = state_26299;
(statearr_26305[(9)] = inst_26285__$1);

return statearr_26305;
})();
if(cljs.core.truth_(inst_26286)){
var statearr_26306_26339 = state_26299__$1;
(statearr_26306_26339[(1)] = (14));

} else {
var statearr_26307_26340 = state_26299__$1;
(statearr_26307_26340[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26300 === (6))){
var state_26299__$1 = state_26299;
var statearr_26308_26341 = state_26299__$1;
(statearr_26308_26341[(2)] = null);

(statearr_26308_26341[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26300 === (17))){
var inst_26292 = (state_26299[(2)]);
var state_26299__$1 = (function (){var statearr_26310 = state_26299;
(statearr_26310[(10)] = inst_26292);

return statearr_26310;
})();
var statearr_26311_26342 = state_26299__$1;
(statearr_26311_26342[(2)] = null);

(statearr_26311_26342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26300 === (3))){
var inst_26297 = (state_26299[(2)]);
var state_26299__$1 = state_26299;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26299__$1,inst_26297);
} else {
if((state_val_26300 === (12))){
var _ = (function (){var statearr_26312 = state_26299;
(statearr_26312[(4)] = cljs.core.rest.call(null,(state_26299[(4)])));

return statearr_26312;
})();
var state_26299__$1 = state_26299;
var ex26309 = (state_26299__$1[(2)]);
var statearr_26313_26343 = state_26299__$1;
(statearr_26313_26343[(5)] = ex26309);


if((ex26309 instanceof Object)){
var statearr_26314_26344 = state_26299__$1;
(statearr_26314_26344[(1)] = (11));

(statearr_26314_26344[(5)] = null);

} else {
throw ex26309;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26300 === (2))){
var inst_26258 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_26259 = cnt;
var inst_26260 = (0);
var state_26299__$1 = (function (){var statearr_26315 = state_26299;
(statearr_26315[(11)] = inst_26258);

(statearr_26315[(7)] = inst_26260);

(statearr_26315[(8)] = inst_26259);

return statearr_26315;
})();
var statearr_26316_26345 = state_26299__$1;
(statearr_26316_26345[(2)] = null);

(statearr_26316_26345[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26300 === (11))){
var inst_26264 = (state_26299[(2)]);
var inst_26265 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_26299__$1 = (function (){var statearr_26317 = state_26299;
(statearr_26317[(12)] = inst_26264);

return statearr_26317;
})();
var statearr_26318_26346 = state_26299__$1;
(statearr_26318_26346[(2)] = inst_26265);

(statearr_26318_26346[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26300 === (9))){
var inst_26260 = (state_26299[(7)]);
var _ = (function (){var statearr_26319 = state_26299;
(statearr_26319[(4)] = cljs.core.cons.call(null,(12),(state_26299[(4)])));

return statearr_26319;
})();
var inst_26271 = chs__$1.call(null,inst_26260);
var inst_26272 = done.call(null,inst_26260);
var inst_26273 = cljs.core.async.take_BANG_.call(null,inst_26271,inst_26272);
var ___$1 = (function (){var statearr_26320 = state_26299;
(statearr_26320[(4)] = cljs.core.rest.call(null,(state_26299[(4)])));

return statearr_26320;
})();
var state_26299__$1 = state_26299;
var statearr_26321_26347 = state_26299__$1;
(statearr_26321_26347[(2)] = inst_26273);

(statearr_26321_26347[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26300 === (5))){
var inst_26283 = (state_26299[(2)]);
var state_26299__$1 = (function (){var statearr_26322 = state_26299;
(statearr_26322[(13)] = inst_26283);

return statearr_26322;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26299__$1,(13),dchan);
} else {
if((state_val_26300 === (14))){
var inst_26288 = cljs.core.async.close_BANG_.call(null,out);
var state_26299__$1 = state_26299;
var statearr_26323_26348 = state_26299__$1;
(statearr_26323_26348[(2)] = inst_26288);

(statearr_26323_26348[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26300 === (16))){
var inst_26295 = (state_26299[(2)]);
var state_26299__$1 = state_26299;
var statearr_26324_26349 = state_26299__$1;
(statearr_26324_26349[(2)] = inst_26295);

(statearr_26324_26349[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26300 === (10))){
var inst_26260 = (state_26299[(7)]);
var inst_26276 = (state_26299[(2)]);
var inst_26277 = (inst_26260 + (1));
var inst_26260__$1 = inst_26277;
var state_26299__$1 = (function (){var statearr_26325 = state_26299;
(statearr_26325[(7)] = inst_26260__$1);

(statearr_26325[(14)] = inst_26276);

return statearr_26325;
})();
var statearr_26326_26350 = state_26299__$1;
(statearr_26326_26350[(2)] = null);

(statearr_26326_26350[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26300 === (8))){
var inst_26281 = (state_26299[(2)]);
var state_26299__$1 = state_26299;
var statearr_26327_26351 = state_26299__$1;
(statearr_26327_26351[(2)] = inst_26281);

(statearr_26327_26351[(1)] = (5));


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
var cljs$core$async$state_machine__24889__auto__ = null;
var cljs$core$async$state_machine__24889__auto____0 = (function (){
var statearr_26328 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26328[(0)] = cljs$core$async$state_machine__24889__auto__);

(statearr_26328[(1)] = (1));

return statearr_26328;
});
var cljs$core$async$state_machine__24889__auto____1 = (function (state_26299){
while(true){
var ret_value__24890__auto__ = (function (){try{while(true){
var result__24891__auto__ = switch__24888__auto__.call(null,state_26299);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24891__auto__;
}
break;
}
}catch (e26329){var ex__24892__auto__ = e26329;
var statearr_26330_26352 = state_26299;
(statearr_26330_26352[(2)] = ex__24892__auto__);


if(cljs.core.seq.call(null,(state_26299[(4)]))){
var statearr_26331_26353 = state_26299;
(statearr_26331_26353[(1)] = cljs.core.first.call(null,(state_26299[(4)])));

} else {
throw ex__24892__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26354 = state_26299;
state_26299 = G__26354;
continue;
} else {
return ret_value__24890__auto__;
}
break;
}
});
cljs$core$async$state_machine__24889__auto__ = function(state_26299){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24889__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24889__auto____1.call(this,state_26299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24889__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24889__auto____0;
cljs$core$async$state_machine__24889__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24889__auto____1;
return cljs$core$async$state_machine__24889__auto__;
})()
})();
var state__24964__auto__ = (function (){var statearr_26332 = f__24963__auto__.call(null);
(statearr_26332[(6)] = c__24962__auto___26334);

return statearr_26332;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24964__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__26357 = arguments.length;
switch (G__26357) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24962__auto___26412 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24963__auto__ = (function (){var switch__24888__auto__ = (function (state_26389){
var state_val_26390 = (state_26389[(1)]);
if((state_val_26390 === (7))){
var inst_26368 = (state_26389[(7)]);
var inst_26369 = (state_26389[(8)]);
var inst_26368__$1 = (state_26389[(2)]);
var inst_26369__$1 = cljs.core.nth.call(null,inst_26368__$1,(0),null);
var inst_26370 = cljs.core.nth.call(null,inst_26368__$1,(1),null);
var inst_26371 = (inst_26369__$1 == null);
var state_26389__$1 = (function (){var statearr_26391 = state_26389;
(statearr_26391[(7)] = inst_26368__$1);

(statearr_26391[(9)] = inst_26370);

(statearr_26391[(8)] = inst_26369__$1);

return statearr_26391;
})();
if(cljs.core.truth_(inst_26371)){
var statearr_26392_26413 = state_26389__$1;
(statearr_26392_26413[(1)] = (8));

} else {
var statearr_26393_26414 = state_26389__$1;
(statearr_26393_26414[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26390 === (1))){
var inst_26358 = cljs.core.vec.call(null,chs);
var inst_26359 = inst_26358;
var state_26389__$1 = (function (){var statearr_26394 = state_26389;
(statearr_26394[(10)] = inst_26359);

return statearr_26394;
})();
var statearr_26395_26415 = state_26389__$1;
(statearr_26395_26415[(2)] = null);

(statearr_26395_26415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26390 === (4))){
var inst_26359 = (state_26389[(10)]);
var state_26389__$1 = state_26389;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26389__$1,(7),inst_26359);
} else {
if((state_val_26390 === (6))){
var inst_26385 = (state_26389[(2)]);
var state_26389__$1 = state_26389;
var statearr_26396_26416 = state_26389__$1;
(statearr_26396_26416[(2)] = inst_26385);

(statearr_26396_26416[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26390 === (3))){
var inst_26387 = (state_26389[(2)]);
var state_26389__$1 = state_26389;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26389__$1,inst_26387);
} else {
if((state_val_26390 === (2))){
var inst_26359 = (state_26389[(10)]);
var inst_26361 = cljs.core.count.call(null,inst_26359);
var inst_26362 = (inst_26361 > (0));
var state_26389__$1 = state_26389;
if(cljs.core.truth_(inst_26362)){
var statearr_26398_26417 = state_26389__$1;
(statearr_26398_26417[(1)] = (4));

} else {
var statearr_26399_26418 = state_26389__$1;
(statearr_26399_26418[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26390 === (11))){
var inst_26359 = (state_26389[(10)]);
var inst_26378 = (state_26389[(2)]);
var tmp26397 = inst_26359;
var inst_26359__$1 = tmp26397;
var state_26389__$1 = (function (){var statearr_26400 = state_26389;
(statearr_26400[(11)] = inst_26378);

(statearr_26400[(10)] = inst_26359__$1);

return statearr_26400;
})();
var statearr_26401_26419 = state_26389__$1;
(statearr_26401_26419[(2)] = null);

(statearr_26401_26419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26390 === (9))){
var inst_26369 = (state_26389[(8)]);
var state_26389__$1 = state_26389;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26389__$1,(11),out,inst_26369);
} else {
if((state_val_26390 === (5))){
var inst_26383 = cljs.core.async.close_BANG_.call(null,out);
var state_26389__$1 = state_26389;
var statearr_26402_26420 = state_26389__$1;
(statearr_26402_26420[(2)] = inst_26383);

(statearr_26402_26420[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26390 === (10))){
var inst_26381 = (state_26389[(2)]);
var state_26389__$1 = state_26389;
var statearr_26403_26421 = state_26389__$1;
(statearr_26403_26421[(2)] = inst_26381);

(statearr_26403_26421[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26390 === (8))){
var inst_26368 = (state_26389[(7)]);
var inst_26370 = (state_26389[(9)]);
var inst_26369 = (state_26389[(8)]);
var inst_26359 = (state_26389[(10)]);
var inst_26373 = (function (){var cs = inst_26359;
var vec__26364 = inst_26368;
var v = inst_26369;
var c = inst_26370;
return (function (p1__26355_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__26355_SHARP_);
});
})();
var inst_26374 = cljs.core.filterv.call(null,inst_26373,inst_26359);
var inst_26359__$1 = inst_26374;
var state_26389__$1 = (function (){var statearr_26404 = state_26389;
(statearr_26404[(10)] = inst_26359__$1);

return statearr_26404;
})();
var statearr_26405_26422 = state_26389__$1;
(statearr_26405_26422[(2)] = null);

(statearr_26405_26422[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__24889__auto__ = null;
var cljs$core$async$state_machine__24889__auto____0 = (function (){
var statearr_26406 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26406[(0)] = cljs$core$async$state_machine__24889__auto__);

(statearr_26406[(1)] = (1));

return statearr_26406;
});
var cljs$core$async$state_machine__24889__auto____1 = (function (state_26389){
while(true){
var ret_value__24890__auto__ = (function (){try{while(true){
var result__24891__auto__ = switch__24888__auto__.call(null,state_26389);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24891__auto__;
}
break;
}
}catch (e26407){var ex__24892__auto__ = e26407;
var statearr_26408_26423 = state_26389;
(statearr_26408_26423[(2)] = ex__24892__auto__);


if(cljs.core.seq.call(null,(state_26389[(4)]))){
var statearr_26409_26424 = state_26389;
(statearr_26409_26424[(1)] = cljs.core.first.call(null,(state_26389[(4)])));

} else {
throw ex__24892__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26425 = state_26389;
state_26389 = G__26425;
continue;
} else {
return ret_value__24890__auto__;
}
break;
}
});
cljs$core$async$state_machine__24889__auto__ = function(state_26389){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24889__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24889__auto____1.call(this,state_26389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24889__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24889__auto____0;
cljs$core$async$state_machine__24889__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24889__auto____1;
return cljs$core$async$state_machine__24889__auto__;
})()
})();
var state__24964__auto__ = (function (){var statearr_26410 = f__24963__auto__.call(null);
(statearr_26410[(6)] = c__24962__auto___26412);

return statearr_26410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24964__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__26427 = arguments.length;
switch (G__26427) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24962__auto___26473 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24963__auto__ = (function (){var switch__24888__auto__ = (function (state_26451){
var state_val_26452 = (state_26451[(1)]);
if((state_val_26452 === (7))){
var inst_26433 = (state_26451[(7)]);
var inst_26433__$1 = (state_26451[(2)]);
var inst_26434 = (inst_26433__$1 == null);
var inst_26435 = cljs.core.not.call(null,inst_26434);
var state_26451__$1 = (function (){var statearr_26453 = state_26451;
(statearr_26453[(7)] = inst_26433__$1);

return statearr_26453;
})();
if(inst_26435){
var statearr_26454_26474 = state_26451__$1;
(statearr_26454_26474[(1)] = (8));

} else {
var statearr_26455_26475 = state_26451__$1;
(statearr_26455_26475[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26452 === (1))){
var inst_26428 = (0);
var state_26451__$1 = (function (){var statearr_26456 = state_26451;
(statearr_26456[(8)] = inst_26428);

return statearr_26456;
})();
var statearr_26457_26476 = state_26451__$1;
(statearr_26457_26476[(2)] = null);

(statearr_26457_26476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26452 === (4))){
var state_26451__$1 = state_26451;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26451__$1,(7),ch);
} else {
if((state_val_26452 === (6))){
var inst_26446 = (state_26451[(2)]);
var state_26451__$1 = state_26451;
var statearr_26458_26477 = state_26451__$1;
(statearr_26458_26477[(2)] = inst_26446);

(statearr_26458_26477[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26452 === (3))){
var inst_26448 = (state_26451[(2)]);
var inst_26449 = cljs.core.async.close_BANG_.call(null,out);
var state_26451__$1 = (function (){var statearr_26459 = state_26451;
(statearr_26459[(9)] = inst_26448);

return statearr_26459;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26451__$1,inst_26449);
} else {
if((state_val_26452 === (2))){
var inst_26428 = (state_26451[(8)]);
var inst_26430 = (inst_26428 < n);
var state_26451__$1 = state_26451;
if(cljs.core.truth_(inst_26430)){
var statearr_26460_26478 = state_26451__$1;
(statearr_26460_26478[(1)] = (4));

} else {
var statearr_26461_26479 = state_26451__$1;
(statearr_26461_26479[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26452 === (11))){
var inst_26428 = (state_26451[(8)]);
var inst_26438 = (state_26451[(2)]);
var inst_26439 = (inst_26428 + (1));
var inst_26428__$1 = inst_26439;
var state_26451__$1 = (function (){var statearr_26462 = state_26451;
(statearr_26462[(10)] = inst_26438);

(statearr_26462[(8)] = inst_26428__$1);

return statearr_26462;
})();
var statearr_26463_26480 = state_26451__$1;
(statearr_26463_26480[(2)] = null);

(statearr_26463_26480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26452 === (9))){
var state_26451__$1 = state_26451;
var statearr_26464_26481 = state_26451__$1;
(statearr_26464_26481[(2)] = null);

(statearr_26464_26481[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26452 === (5))){
var state_26451__$1 = state_26451;
var statearr_26465_26482 = state_26451__$1;
(statearr_26465_26482[(2)] = null);

(statearr_26465_26482[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26452 === (10))){
var inst_26443 = (state_26451[(2)]);
var state_26451__$1 = state_26451;
var statearr_26466_26483 = state_26451__$1;
(statearr_26466_26483[(2)] = inst_26443);

(statearr_26466_26483[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26452 === (8))){
var inst_26433 = (state_26451[(7)]);
var state_26451__$1 = state_26451;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26451__$1,(11),out,inst_26433);
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
});
return (function() {
var cljs$core$async$state_machine__24889__auto__ = null;
var cljs$core$async$state_machine__24889__auto____0 = (function (){
var statearr_26467 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26467[(0)] = cljs$core$async$state_machine__24889__auto__);

(statearr_26467[(1)] = (1));

return statearr_26467;
});
var cljs$core$async$state_machine__24889__auto____1 = (function (state_26451){
while(true){
var ret_value__24890__auto__ = (function (){try{while(true){
var result__24891__auto__ = switch__24888__auto__.call(null,state_26451);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24891__auto__;
}
break;
}
}catch (e26468){var ex__24892__auto__ = e26468;
var statearr_26469_26484 = state_26451;
(statearr_26469_26484[(2)] = ex__24892__auto__);


if(cljs.core.seq.call(null,(state_26451[(4)]))){
var statearr_26470_26485 = state_26451;
(statearr_26470_26485[(1)] = cljs.core.first.call(null,(state_26451[(4)])));

} else {
throw ex__24892__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26486 = state_26451;
state_26451 = G__26486;
continue;
} else {
return ret_value__24890__auto__;
}
break;
}
});
cljs$core$async$state_machine__24889__auto__ = function(state_26451){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24889__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24889__auto____1.call(this,state_26451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24889__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24889__auto____0;
cljs$core$async$state_machine__24889__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24889__auto____1;
return cljs$core$async$state_machine__24889__auto__;
})()
})();
var state__24964__auto__ = (function (){var statearr_26471 = f__24963__auto__.call(null);
(statearr_26471[(6)] = c__24962__auto___26473);

return statearr_26471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24964__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26488 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26488 = (function (f,ch,meta26489){
this.f = f;
this.ch = ch;
this.meta26489 = meta26489;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26488.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26490,meta26489__$1){
var self__ = this;
var _26490__$1 = this;
return (new cljs.core.async.t_cljs$core$async26488(self__.f,self__.ch,meta26489__$1));
}));

(cljs.core.async.t_cljs$core$async26488.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26490){
var self__ = this;
var _26490__$1 = this;
return self__.meta26489;
}));

(cljs.core.async.t_cljs$core$async26488.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26488.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async26488.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async26488.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26488.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26491 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26491 = (function (f,ch,meta26489,_,fn1,meta26492){
this.f = f;
this.ch = ch;
this.meta26489 = meta26489;
this._ = _;
this.fn1 = fn1;
this.meta26492 = meta26492;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26491.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26493,meta26492__$1){
var self__ = this;
var _26493__$1 = this;
return (new cljs.core.async.t_cljs$core$async26491(self__.f,self__.ch,self__.meta26489,self__._,self__.fn1,meta26492__$1));
}));

(cljs.core.async.t_cljs$core$async26491.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26493){
var self__ = this;
var _26493__$1 = this;
return self__.meta26492;
}));

(cljs.core.async.t_cljs$core$async26491.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26491.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async26491.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async26491.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__26487_SHARP_){
return f1.call(null,(((p1__26487_SHARP_ == null))?null:self__.f.call(null,p1__26487_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async26491.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26489","meta26489",-847964930,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async26488","cljs.core.async/t_cljs$core$async26488",-830391030,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta26492","meta26492",1404077416,null)], null);
}));

(cljs.core.async.t_cljs$core$async26491.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26491.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26491");

(cljs.core.async.t_cljs$core$async26491.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async26491");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26491.
 */
cljs.core.async.__GT_t_cljs$core$async26491 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26491(f__$1,ch__$1,meta26489__$1,___$2,fn1__$1,meta26492){
return (new cljs.core.async.t_cljs$core$async26491(f__$1,ch__$1,meta26489__$1,___$2,fn1__$1,meta26492));
});

}

return (new cljs.core.async.t_cljs$core$async26491(self__.f,self__.ch,self__.meta26489,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async26488.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26488.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async26488.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26489","meta26489",-847964930,null)], null);
}));

(cljs.core.async.t_cljs$core$async26488.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26488.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26488");

(cljs.core.async.t_cljs$core$async26488.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async26488");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26488.
 */
cljs.core.async.__GT_t_cljs$core$async26488 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26488(f__$1,ch__$1,meta26489){
return (new cljs.core.async.t_cljs$core$async26488(f__$1,ch__$1,meta26489));
});

}

return (new cljs.core.async.t_cljs$core$async26488(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26494 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26494 = (function (f,ch,meta26495){
this.f = f;
this.ch = ch;
this.meta26495 = meta26495;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26494.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26496,meta26495__$1){
var self__ = this;
var _26496__$1 = this;
return (new cljs.core.async.t_cljs$core$async26494(self__.f,self__.ch,meta26495__$1));
}));

(cljs.core.async.t_cljs$core$async26494.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26496){
var self__ = this;
var _26496__$1 = this;
return self__.meta26495;
}));

(cljs.core.async.t_cljs$core$async26494.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26494.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async26494.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26494.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async26494.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26494.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async26494.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26495","meta26495",517183336,null)], null);
}));

(cljs.core.async.t_cljs$core$async26494.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26494.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26494");

(cljs.core.async.t_cljs$core$async26494.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async26494");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26494.
 */
cljs.core.async.__GT_t_cljs$core$async26494 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async26494(f__$1,ch__$1,meta26495){
return (new cljs.core.async.t_cljs$core$async26494(f__$1,ch__$1,meta26495));
});

}

return (new cljs.core.async.t_cljs$core$async26494(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26497 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26497 = (function (p,ch,meta26498){
this.p = p;
this.ch = ch;
this.meta26498 = meta26498;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26497.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26499,meta26498__$1){
var self__ = this;
var _26499__$1 = this;
return (new cljs.core.async.t_cljs$core$async26497(self__.p,self__.ch,meta26498__$1));
}));

(cljs.core.async.t_cljs$core$async26497.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26499){
var self__ = this;
var _26499__$1 = this;
return self__.meta26498;
}));

(cljs.core.async.t_cljs$core$async26497.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26497.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async26497.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async26497.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26497.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async26497.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26497.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async26497.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26498","meta26498",1716877065,null)], null);
}));

(cljs.core.async.t_cljs$core$async26497.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26497.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26497");

(cljs.core.async.t_cljs$core$async26497.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async26497");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26497.
 */
cljs.core.async.__GT_t_cljs$core$async26497 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async26497(p__$1,ch__$1,meta26498){
return (new cljs.core.async.t_cljs$core$async26497(p__$1,ch__$1,meta26498));
});

}

return (new cljs.core.async.t_cljs$core$async26497(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__26501 = arguments.length;
switch (G__26501) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24962__auto___26542 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24963__auto__ = (function (){var switch__24888__auto__ = (function (state_26522){
var state_val_26523 = (state_26522[(1)]);
if((state_val_26523 === (7))){
var inst_26518 = (state_26522[(2)]);
var state_26522__$1 = state_26522;
var statearr_26524_26543 = state_26522__$1;
(statearr_26524_26543[(2)] = inst_26518);

(statearr_26524_26543[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26523 === (1))){
var state_26522__$1 = state_26522;
var statearr_26525_26544 = state_26522__$1;
(statearr_26525_26544[(2)] = null);

(statearr_26525_26544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26523 === (4))){
var inst_26504 = (state_26522[(7)]);
var inst_26504__$1 = (state_26522[(2)]);
var inst_26505 = (inst_26504__$1 == null);
var state_26522__$1 = (function (){var statearr_26526 = state_26522;
(statearr_26526[(7)] = inst_26504__$1);

return statearr_26526;
})();
if(cljs.core.truth_(inst_26505)){
var statearr_26527_26545 = state_26522__$1;
(statearr_26527_26545[(1)] = (5));

} else {
var statearr_26528_26546 = state_26522__$1;
(statearr_26528_26546[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26523 === (6))){
var inst_26504 = (state_26522[(7)]);
var inst_26509 = p.call(null,inst_26504);
var state_26522__$1 = state_26522;
if(cljs.core.truth_(inst_26509)){
var statearr_26529_26547 = state_26522__$1;
(statearr_26529_26547[(1)] = (8));

} else {
var statearr_26530_26548 = state_26522__$1;
(statearr_26530_26548[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26523 === (3))){
var inst_26520 = (state_26522[(2)]);
var state_26522__$1 = state_26522;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26522__$1,inst_26520);
} else {
if((state_val_26523 === (2))){
var state_26522__$1 = state_26522;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26522__$1,(4),ch);
} else {
if((state_val_26523 === (11))){
var inst_26512 = (state_26522[(2)]);
var state_26522__$1 = state_26522;
var statearr_26531_26549 = state_26522__$1;
(statearr_26531_26549[(2)] = inst_26512);

(statearr_26531_26549[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26523 === (9))){
var state_26522__$1 = state_26522;
var statearr_26532_26550 = state_26522__$1;
(statearr_26532_26550[(2)] = null);

(statearr_26532_26550[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26523 === (5))){
var inst_26507 = cljs.core.async.close_BANG_.call(null,out);
var state_26522__$1 = state_26522;
var statearr_26533_26551 = state_26522__$1;
(statearr_26533_26551[(2)] = inst_26507);

(statearr_26533_26551[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26523 === (10))){
var inst_26515 = (state_26522[(2)]);
var state_26522__$1 = (function (){var statearr_26534 = state_26522;
(statearr_26534[(8)] = inst_26515);

return statearr_26534;
})();
var statearr_26535_26552 = state_26522__$1;
(statearr_26535_26552[(2)] = null);

(statearr_26535_26552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26523 === (8))){
var inst_26504 = (state_26522[(7)]);
var state_26522__$1 = state_26522;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26522__$1,(11),out,inst_26504);
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
});
return (function() {
var cljs$core$async$state_machine__24889__auto__ = null;
var cljs$core$async$state_machine__24889__auto____0 = (function (){
var statearr_26536 = [null,null,null,null,null,null,null,null,null];
(statearr_26536[(0)] = cljs$core$async$state_machine__24889__auto__);

(statearr_26536[(1)] = (1));

return statearr_26536;
});
var cljs$core$async$state_machine__24889__auto____1 = (function (state_26522){
while(true){
var ret_value__24890__auto__ = (function (){try{while(true){
var result__24891__auto__ = switch__24888__auto__.call(null,state_26522);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24891__auto__;
}
break;
}
}catch (e26537){var ex__24892__auto__ = e26537;
var statearr_26538_26553 = state_26522;
(statearr_26538_26553[(2)] = ex__24892__auto__);


if(cljs.core.seq.call(null,(state_26522[(4)]))){
var statearr_26539_26554 = state_26522;
(statearr_26539_26554[(1)] = cljs.core.first.call(null,(state_26522[(4)])));

} else {
throw ex__24892__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26555 = state_26522;
state_26522 = G__26555;
continue;
} else {
return ret_value__24890__auto__;
}
break;
}
});
cljs$core$async$state_machine__24889__auto__ = function(state_26522){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24889__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24889__auto____1.call(this,state_26522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24889__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24889__auto____0;
cljs$core$async$state_machine__24889__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24889__auto____1;
return cljs$core$async$state_machine__24889__auto__;
})()
})();
var state__24964__auto__ = (function (){var statearr_26540 = f__24963__auto__.call(null);
(statearr_26540[(6)] = c__24962__auto___26542);

return statearr_26540;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24964__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__26557 = arguments.length;
switch (G__26557) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__24962__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24963__auto__ = (function (){var switch__24888__auto__ = (function (state_26620){
var state_val_26621 = (state_26620[(1)]);
if((state_val_26621 === (7))){
var inst_26616 = (state_26620[(2)]);
var state_26620__$1 = state_26620;
var statearr_26622_26661 = state_26620__$1;
(statearr_26622_26661[(2)] = inst_26616);

(statearr_26622_26661[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26621 === (20))){
var inst_26586 = (state_26620[(7)]);
var inst_26597 = (state_26620[(2)]);
var inst_26598 = cljs.core.next.call(null,inst_26586);
var inst_26572 = inst_26598;
var inst_26573 = null;
var inst_26574 = (0);
var inst_26575 = (0);
var state_26620__$1 = (function (){var statearr_26623 = state_26620;
(statearr_26623[(8)] = inst_26573);

(statearr_26623[(9)] = inst_26575);

(statearr_26623[(10)] = inst_26574);

(statearr_26623[(11)] = inst_26597);

(statearr_26623[(12)] = inst_26572);

return statearr_26623;
})();
var statearr_26624_26662 = state_26620__$1;
(statearr_26624_26662[(2)] = null);

(statearr_26624_26662[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26621 === (1))){
var state_26620__$1 = state_26620;
var statearr_26625_26663 = state_26620__$1;
(statearr_26625_26663[(2)] = null);

(statearr_26625_26663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26621 === (4))){
var inst_26561 = (state_26620[(13)]);
var inst_26561__$1 = (state_26620[(2)]);
var inst_26562 = (inst_26561__$1 == null);
var state_26620__$1 = (function (){var statearr_26626 = state_26620;
(statearr_26626[(13)] = inst_26561__$1);

return statearr_26626;
})();
if(cljs.core.truth_(inst_26562)){
var statearr_26627_26664 = state_26620__$1;
(statearr_26627_26664[(1)] = (5));

} else {
var statearr_26628_26665 = state_26620__$1;
(statearr_26628_26665[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26621 === (15))){
var state_26620__$1 = state_26620;
var statearr_26632_26666 = state_26620__$1;
(statearr_26632_26666[(2)] = null);

(statearr_26632_26666[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26621 === (21))){
var state_26620__$1 = state_26620;
var statearr_26633_26667 = state_26620__$1;
(statearr_26633_26667[(2)] = null);

(statearr_26633_26667[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26621 === (13))){
var inst_26573 = (state_26620[(8)]);
var inst_26575 = (state_26620[(9)]);
var inst_26574 = (state_26620[(10)]);
var inst_26572 = (state_26620[(12)]);
var inst_26582 = (state_26620[(2)]);
var inst_26583 = (inst_26575 + (1));
var tmp26629 = inst_26573;
var tmp26630 = inst_26574;
var tmp26631 = inst_26572;
var inst_26572__$1 = tmp26631;
var inst_26573__$1 = tmp26629;
var inst_26574__$1 = tmp26630;
var inst_26575__$1 = inst_26583;
var state_26620__$1 = (function (){var statearr_26634 = state_26620;
(statearr_26634[(8)] = inst_26573__$1);

(statearr_26634[(9)] = inst_26575__$1);

(statearr_26634[(10)] = inst_26574__$1);

(statearr_26634[(14)] = inst_26582);

(statearr_26634[(12)] = inst_26572__$1);

return statearr_26634;
})();
var statearr_26635_26668 = state_26620__$1;
(statearr_26635_26668[(2)] = null);

(statearr_26635_26668[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26621 === (22))){
var state_26620__$1 = state_26620;
var statearr_26636_26669 = state_26620__$1;
(statearr_26636_26669[(2)] = null);

(statearr_26636_26669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26621 === (6))){
var inst_26561 = (state_26620[(13)]);
var inst_26570 = f.call(null,inst_26561);
var inst_26571 = cljs.core.seq.call(null,inst_26570);
var inst_26572 = inst_26571;
var inst_26573 = null;
var inst_26574 = (0);
var inst_26575 = (0);
var state_26620__$1 = (function (){var statearr_26637 = state_26620;
(statearr_26637[(8)] = inst_26573);

(statearr_26637[(9)] = inst_26575);

(statearr_26637[(10)] = inst_26574);

(statearr_26637[(12)] = inst_26572);

return statearr_26637;
})();
var statearr_26638_26670 = state_26620__$1;
(statearr_26638_26670[(2)] = null);

(statearr_26638_26670[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26621 === (17))){
var inst_26586 = (state_26620[(7)]);
var inst_26590 = cljs.core.chunk_first.call(null,inst_26586);
var inst_26591 = cljs.core.chunk_rest.call(null,inst_26586);
var inst_26592 = cljs.core.count.call(null,inst_26590);
var inst_26572 = inst_26591;
var inst_26573 = inst_26590;
var inst_26574 = inst_26592;
var inst_26575 = (0);
var state_26620__$1 = (function (){var statearr_26639 = state_26620;
(statearr_26639[(8)] = inst_26573);

(statearr_26639[(9)] = inst_26575);

(statearr_26639[(10)] = inst_26574);

(statearr_26639[(12)] = inst_26572);

return statearr_26639;
})();
var statearr_26640_26671 = state_26620__$1;
(statearr_26640_26671[(2)] = null);

(statearr_26640_26671[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26621 === (3))){
var inst_26618 = (state_26620[(2)]);
var state_26620__$1 = state_26620;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26620__$1,inst_26618);
} else {
if((state_val_26621 === (12))){
var inst_26606 = (state_26620[(2)]);
var state_26620__$1 = state_26620;
var statearr_26641_26672 = state_26620__$1;
(statearr_26641_26672[(2)] = inst_26606);

(statearr_26641_26672[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26621 === (2))){
var state_26620__$1 = state_26620;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26620__$1,(4),in$);
} else {
if((state_val_26621 === (23))){
var inst_26614 = (state_26620[(2)]);
var state_26620__$1 = state_26620;
var statearr_26642_26673 = state_26620__$1;
(statearr_26642_26673[(2)] = inst_26614);

(statearr_26642_26673[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26621 === (19))){
var inst_26601 = (state_26620[(2)]);
var state_26620__$1 = state_26620;
var statearr_26643_26674 = state_26620__$1;
(statearr_26643_26674[(2)] = inst_26601);

(statearr_26643_26674[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26621 === (11))){
var inst_26586 = (state_26620[(7)]);
var inst_26572 = (state_26620[(12)]);
var inst_26586__$1 = cljs.core.seq.call(null,inst_26572);
var state_26620__$1 = (function (){var statearr_26644 = state_26620;
(statearr_26644[(7)] = inst_26586__$1);

return statearr_26644;
})();
if(inst_26586__$1){
var statearr_26645_26675 = state_26620__$1;
(statearr_26645_26675[(1)] = (14));

} else {
var statearr_26646_26676 = state_26620__$1;
(statearr_26646_26676[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26621 === (9))){
var inst_26608 = (state_26620[(2)]);
var inst_26609 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_26620__$1 = (function (){var statearr_26647 = state_26620;
(statearr_26647[(15)] = inst_26608);

return statearr_26647;
})();
if(cljs.core.truth_(inst_26609)){
var statearr_26648_26677 = state_26620__$1;
(statearr_26648_26677[(1)] = (21));

} else {
var statearr_26649_26678 = state_26620__$1;
(statearr_26649_26678[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26621 === (5))){
var inst_26564 = cljs.core.async.close_BANG_.call(null,out);
var state_26620__$1 = state_26620;
var statearr_26650_26679 = state_26620__$1;
(statearr_26650_26679[(2)] = inst_26564);

(statearr_26650_26679[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26621 === (14))){
var inst_26586 = (state_26620[(7)]);
var inst_26588 = cljs.core.chunked_seq_QMARK_.call(null,inst_26586);
var state_26620__$1 = state_26620;
if(inst_26588){
var statearr_26651_26680 = state_26620__$1;
(statearr_26651_26680[(1)] = (17));

} else {
var statearr_26652_26681 = state_26620__$1;
(statearr_26652_26681[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26621 === (16))){
var inst_26604 = (state_26620[(2)]);
var state_26620__$1 = state_26620;
var statearr_26653_26682 = state_26620__$1;
(statearr_26653_26682[(2)] = inst_26604);

(statearr_26653_26682[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26621 === (10))){
var inst_26573 = (state_26620[(8)]);
var inst_26575 = (state_26620[(9)]);
var inst_26580 = cljs.core._nth.call(null,inst_26573,inst_26575);
var state_26620__$1 = state_26620;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26620__$1,(13),out,inst_26580);
} else {
if((state_val_26621 === (18))){
var inst_26586 = (state_26620[(7)]);
var inst_26595 = cljs.core.first.call(null,inst_26586);
var state_26620__$1 = state_26620;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26620__$1,(20),out,inst_26595);
} else {
if((state_val_26621 === (8))){
var inst_26575 = (state_26620[(9)]);
var inst_26574 = (state_26620[(10)]);
var inst_26577 = (inst_26575 < inst_26574);
var inst_26578 = inst_26577;
var state_26620__$1 = state_26620;
if(cljs.core.truth_(inst_26578)){
var statearr_26654_26683 = state_26620__$1;
(statearr_26654_26683[(1)] = (10));

} else {
var statearr_26655_26684 = state_26620__$1;
(statearr_26655_26684[(1)] = (11));

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
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__24889__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__24889__auto____0 = (function (){
var statearr_26656 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26656[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24889__auto__);

(statearr_26656[(1)] = (1));

return statearr_26656;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24889__auto____1 = (function (state_26620){
while(true){
var ret_value__24890__auto__ = (function (){try{while(true){
var result__24891__auto__ = switch__24888__auto__.call(null,state_26620);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24891__auto__;
}
break;
}
}catch (e26657){var ex__24892__auto__ = e26657;
var statearr_26658_26685 = state_26620;
(statearr_26658_26685[(2)] = ex__24892__auto__);


if(cljs.core.seq.call(null,(state_26620[(4)]))){
var statearr_26659_26686 = state_26620;
(statearr_26659_26686[(1)] = cljs.core.first.call(null,(state_26620[(4)])));

} else {
throw ex__24892__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26687 = state_26620;
state_26620 = G__26687;
continue;
} else {
return ret_value__24890__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24889__auto__ = function(state_26620){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24889__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24889__auto____1.call(this,state_26620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__24889__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24889__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24889__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24889__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24889__auto__;
})()
})();
var state__24964__auto__ = (function (){var statearr_26660 = f__24963__auto__.call(null);
(statearr_26660[(6)] = c__24962__auto__);

return statearr_26660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24964__auto__);
}));

return c__24962__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__26689 = arguments.length;
switch (G__26689) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__26692 = arguments.length;
switch (G__26692) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__26695 = arguments.length;
switch (G__26695) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24962__auto___26743 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24963__auto__ = (function (){var switch__24888__auto__ = (function (state_26719){
var state_val_26720 = (state_26719[(1)]);
if((state_val_26720 === (7))){
var inst_26714 = (state_26719[(2)]);
var state_26719__$1 = state_26719;
var statearr_26721_26744 = state_26719__$1;
(statearr_26721_26744[(2)] = inst_26714);

(statearr_26721_26744[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26720 === (1))){
var inst_26696 = null;
var state_26719__$1 = (function (){var statearr_26722 = state_26719;
(statearr_26722[(7)] = inst_26696);

return statearr_26722;
})();
var statearr_26723_26745 = state_26719__$1;
(statearr_26723_26745[(2)] = null);

(statearr_26723_26745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26720 === (4))){
var inst_26699 = (state_26719[(8)]);
var inst_26699__$1 = (state_26719[(2)]);
var inst_26700 = (inst_26699__$1 == null);
var inst_26701 = cljs.core.not.call(null,inst_26700);
var state_26719__$1 = (function (){var statearr_26724 = state_26719;
(statearr_26724[(8)] = inst_26699__$1);

return statearr_26724;
})();
if(inst_26701){
var statearr_26725_26746 = state_26719__$1;
(statearr_26725_26746[(1)] = (5));

} else {
var statearr_26726_26747 = state_26719__$1;
(statearr_26726_26747[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26720 === (6))){
var state_26719__$1 = state_26719;
var statearr_26727_26748 = state_26719__$1;
(statearr_26727_26748[(2)] = null);

(statearr_26727_26748[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26720 === (3))){
var inst_26716 = (state_26719[(2)]);
var inst_26717 = cljs.core.async.close_BANG_.call(null,out);
var state_26719__$1 = (function (){var statearr_26728 = state_26719;
(statearr_26728[(9)] = inst_26716);

return statearr_26728;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26719__$1,inst_26717);
} else {
if((state_val_26720 === (2))){
var state_26719__$1 = state_26719;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26719__$1,(4),ch);
} else {
if((state_val_26720 === (11))){
var inst_26699 = (state_26719[(8)]);
var inst_26708 = (state_26719[(2)]);
var inst_26696 = inst_26699;
var state_26719__$1 = (function (){var statearr_26729 = state_26719;
(statearr_26729[(10)] = inst_26708);

(statearr_26729[(7)] = inst_26696);

return statearr_26729;
})();
var statearr_26730_26749 = state_26719__$1;
(statearr_26730_26749[(2)] = null);

(statearr_26730_26749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26720 === (9))){
var inst_26699 = (state_26719[(8)]);
var state_26719__$1 = state_26719;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26719__$1,(11),out,inst_26699);
} else {
if((state_val_26720 === (5))){
var inst_26696 = (state_26719[(7)]);
var inst_26699 = (state_26719[(8)]);
var inst_26703 = cljs.core._EQ_.call(null,inst_26699,inst_26696);
var state_26719__$1 = state_26719;
if(inst_26703){
var statearr_26732_26750 = state_26719__$1;
(statearr_26732_26750[(1)] = (8));

} else {
var statearr_26733_26751 = state_26719__$1;
(statearr_26733_26751[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26720 === (10))){
var inst_26711 = (state_26719[(2)]);
var state_26719__$1 = state_26719;
var statearr_26734_26752 = state_26719__$1;
(statearr_26734_26752[(2)] = inst_26711);

(statearr_26734_26752[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26720 === (8))){
var inst_26696 = (state_26719[(7)]);
var tmp26731 = inst_26696;
var inst_26696__$1 = tmp26731;
var state_26719__$1 = (function (){var statearr_26735 = state_26719;
(statearr_26735[(7)] = inst_26696__$1);

return statearr_26735;
})();
var statearr_26736_26753 = state_26719__$1;
(statearr_26736_26753[(2)] = null);

(statearr_26736_26753[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__24889__auto__ = null;
var cljs$core$async$state_machine__24889__auto____0 = (function (){
var statearr_26737 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26737[(0)] = cljs$core$async$state_machine__24889__auto__);

(statearr_26737[(1)] = (1));

return statearr_26737;
});
var cljs$core$async$state_machine__24889__auto____1 = (function (state_26719){
while(true){
var ret_value__24890__auto__ = (function (){try{while(true){
var result__24891__auto__ = switch__24888__auto__.call(null,state_26719);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24891__auto__;
}
break;
}
}catch (e26738){var ex__24892__auto__ = e26738;
var statearr_26739_26754 = state_26719;
(statearr_26739_26754[(2)] = ex__24892__auto__);


if(cljs.core.seq.call(null,(state_26719[(4)]))){
var statearr_26740_26755 = state_26719;
(statearr_26740_26755[(1)] = cljs.core.first.call(null,(state_26719[(4)])));

} else {
throw ex__24892__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26756 = state_26719;
state_26719 = G__26756;
continue;
} else {
return ret_value__24890__auto__;
}
break;
}
});
cljs$core$async$state_machine__24889__auto__ = function(state_26719){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24889__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24889__auto____1.call(this,state_26719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24889__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24889__auto____0;
cljs$core$async$state_machine__24889__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24889__auto____1;
return cljs$core$async$state_machine__24889__auto__;
})()
})();
var state__24964__auto__ = (function (){var statearr_26741 = f__24963__auto__.call(null);
(statearr_26741[(6)] = c__24962__auto___26743);

return statearr_26741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24964__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__26758 = arguments.length;
switch (G__26758) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24962__auto___26825 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24963__auto__ = (function (){var switch__24888__auto__ = (function (state_26796){
var state_val_26797 = (state_26796[(1)]);
if((state_val_26797 === (7))){
var inst_26792 = (state_26796[(2)]);
var state_26796__$1 = state_26796;
var statearr_26798_26826 = state_26796__$1;
(statearr_26798_26826[(2)] = inst_26792);

(statearr_26798_26826[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26797 === (1))){
var inst_26759 = (new Array(n));
var inst_26760 = inst_26759;
var inst_26761 = (0);
var state_26796__$1 = (function (){var statearr_26799 = state_26796;
(statearr_26799[(7)] = inst_26760);

(statearr_26799[(8)] = inst_26761);

return statearr_26799;
})();
var statearr_26800_26827 = state_26796__$1;
(statearr_26800_26827[(2)] = null);

(statearr_26800_26827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26797 === (4))){
var inst_26764 = (state_26796[(9)]);
var inst_26764__$1 = (state_26796[(2)]);
var inst_26765 = (inst_26764__$1 == null);
var inst_26766 = cljs.core.not.call(null,inst_26765);
var state_26796__$1 = (function (){var statearr_26801 = state_26796;
(statearr_26801[(9)] = inst_26764__$1);

return statearr_26801;
})();
if(inst_26766){
var statearr_26802_26828 = state_26796__$1;
(statearr_26802_26828[(1)] = (5));

} else {
var statearr_26803_26829 = state_26796__$1;
(statearr_26803_26829[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26797 === (15))){
var inst_26786 = (state_26796[(2)]);
var state_26796__$1 = state_26796;
var statearr_26804_26830 = state_26796__$1;
(statearr_26804_26830[(2)] = inst_26786);

(statearr_26804_26830[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26797 === (13))){
var state_26796__$1 = state_26796;
var statearr_26805_26831 = state_26796__$1;
(statearr_26805_26831[(2)] = null);

(statearr_26805_26831[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26797 === (6))){
var inst_26761 = (state_26796[(8)]);
var inst_26782 = (inst_26761 > (0));
var state_26796__$1 = state_26796;
if(cljs.core.truth_(inst_26782)){
var statearr_26806_26832 = state_26796__$1;
(statearr_26806_26832[(1)] = (12));

} else {
var statearr_26807_26833 = state_26796__$1;
(statearr_26807_26833[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26797 === (3))){
var inst_26794 = (state_26796[(2)]);
var state_26796__$1 = state_26796;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26796__$1,inst_26794);
} else {
if((state_val_26797 === (12))){
var inst_26760 = (state_26796[(7)]);
var inst_26784 = cljs.core.vec.call(null,inst_26760);
var state_26796__$1 = state_26796;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26796__$1,(15),out,inst_26784);
} else {
if((state_val_26797 === (2))){
var state_26796__$1 = state_26796;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26796__$1,(4),ch);
} else {
if((state_val_26797 === (11))){
var inst_26776 = (state_26796[(2)]);
var inst_26777 = (new Array(n));
var inst_26760 = inst_26777;
var inst_26761 = (0);
var state_26796__$1 = (function (){var statearr_26808 = state_26796;
(statearr_26808[(7)] = inst_26760);

(statearr_26808[(8)] = inst_26761);

(statearr_26808[(10)] = inst_26776);

return statearr_26808;
})();
var statearr_26809_26834 = state_26796__$1;
(statearr_26809_26834[(2)] = null);

(statearr_26809_26834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26797 === (9))){
var inst_26760 = (state_26796[(7)]);
var inst_26774 = cljs.core.vec.call(null,inst_26760);
var state_26796__$1 = state_26796;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26796__$1,(11),out,inst_26774);
} else {
if((state_val_26797 === (5))){
var inst_26760 = (state_26796[(7)]);
var inst_26761 = (state_26796[(8)]);
var inst_26769 = (state_26796[(11)]);
var inst_26764 = (state_26796[(9)]);
var inst_26768 = (inst_26760[inst_26761] = inst_26764);
var inst_26769__$1 = (inst_26761 + (1));
var inst_26770 = (inst_26769__$1 < n);
var state_26796__$1 = (function (){var statearr_26810 = state_26796;
(statearr_26810[(11)] = inst_26769__$1);

(statearr_26810[(12)] = inst_26768);

return statearr_26810;
})();
if(cljs.core.truth_(inst_26770)){
var statearr_26811_26835 = state_26796__$1;
(statearr_26811_26835[(1)] = (8));

} else {
var statearr_26812_26836 = state_26796__$1;
(statearr_26812_26836[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26797 === (14))){
var inst_26789 = (state_26796[(2)]);
var inst_26790 = cljs.core.async.close_BANG_.call(null,out);
var state_26796__$1 = (function (){var statearr_26814 = state_26796;
(statearr_26814[(13)] = inst_26789);

return statearr_26814;
})();
var statearr_26815_26837 = state_26796__$1;
(statearr_26815_26837[(2)] = inst_26790);

(statearr_26815_26837[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26797 === (10))){
var inst_26780 = (state_26796[(2)]);
var state_26796__$1 = state_26796;
var statearr_26816_26838 = state_26796__$1;
(statearr_26816_26838[(2)] = inst_26780);

(statearr_26816_26838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26797 === (8))){
var inst_26760 = (state_26796[(7)]);
var inst_26769 = (state_26796[(11)]);
var tmp26813 = inst_26760;
var inst_26760__$1 = tmp26813;
var inst_26761 = inst_26769;
var state_26796__$1 = (function (){var statearr_26817 = state_26796;
(statearr_26817[(7)] = inst_26760__$1);

(statearr_26817[(8)] = inst_26761);

return statearr_26817;
})();
var statearr_26818_26839 = state_26796__$1;
(statearr_26818_26839[(2)] = null);

(statearr_26818_26839[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__24889__auto__ = null;
var cljs$core$async$state_machine__24889__auto____0 = (function (){
var statearr_26819 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26819[(0)] = cljs$core$async$state_machine__24889__auto__);

(statearr_26819[(1)] = (1));

return statearr_26819;
});
var cljs$core$async$state_machine__24889__auto____1 = (function (state_26796){
while(true){
var ret_value__24890__auto__ = (function (){try{while(true){
var result__24891__auto__ = switch__24888__auto__.call(null,state_26796);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24891__auto__;
}
break;
}
}catch (e26820){var ex__24892__auto__ = e26820;
var statearr_26821_26840 = state_26796;
(statearr_26821_26840[(2)] = ex__24892__auto__);


if(cljs.core.seq.call(null,(state_26796[(4)]))){
var statearr_26822_26841 = state_26796;
(statearr_26822_26841[(1)] = cljs.core.first.call(null,(state_26796[(4)])));

} else {
throw ex__24892__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26842 = state_26796;
state_26796 = G__26842;
continue;
} else {
return ret_value__24890__auto__;
}
break;
}
});
cljs$core$async$state_machine__24889__auto__ = function(state_26796){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24889__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24889__auto____1.call(this,state_26796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24889__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24889__auto____0;
cljs$core$async$state_machine__24889__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24889__auto____1;
return cljs$core$async$state_machine__24889__auto__;
})()
})();
var state__24964__auto__ = (function (){var statearr_26823 = f__24963__auto__.call(null);
(statearr_26823[(6)] = c__24962__auto___26825);

return statearr_26823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24964__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__26844 = arguments.length;
switch (G__26844) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24962__auto___26915 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24963__auto__ = (function (){var switch__24888__auto__ = (function (state_26886){
var state_val_26887 = (state_26886[(1)]);
if((state_val_26887 === (7))){
var inst_26882 = (state_26886[(2)]);
var state_26886__$1 = state_26886;
var statearr_26888_26916 = state_26886__$1;
(statearr_26888_26916[(2)] = inst_26882);

(statearr_26888_26916[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26887 === (1))){
var inst_26845 = [];
var inst_26846 = inst_26845;
var inst_26847 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_26886__$1 = (function (){var statearr_26889 = state_26886;
(statearr_26889[(7)] = inst_26847);

(statearr_26889[(8)] = inst_26846);

return statearr_26889;
})();
var statearr_26890_26917 = state_26886__$1;
(statearr_26890_26917[(2)] = null);

(statearr_26890_26917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26887 === (4))){
var inst_26850 = (state_26886[(9)]);
var inst_26850__$1 = (state_26886[(2)]);
var inst_26851 = (inst_26850__$1 == null);
var inst_26852 = cljs.core.not.call(null,inst_26851);
var state_26886__$1 = (function (){var statearr_26891 = state_26886;
(statearr_26891[(9)] = inst_26850__$1);

return statearr_26891;
})();
if(inst_26852){
var statearr_26892_26918 = state_26886__$1;
(statearr_26892_26918[(1)] = (5));

} else {
var statearr_26893_26919 = state_26886__$1;
(statearr_26893_26919[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26887 === (15))){
var inst_26876 = (state_26886[(2)]);
var state_26886__$1 = state_26886;
var statearr_26894_26920 = state_26886__$1;
(statearr_26894_26920[(2)] = inst_26876);

(statearr_26894_26920[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26887 === (13))){
var state_26886__$1 = state_26886;
var statearr_26895_26921 = state_26886__$1;
(statearr_26895_26921[(2)] = null);

(statearr_26895_26921[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26887 === (6))){
var inst_26846 = (state_26886[(8)]);
var inst_26871 = inst_26846.length;
var inst_26872 = (inst_26871 > (0));
var state_26886__$1 = state_26886;
if(cljs.core.truth_(inst_26872)){
var statearr_26896_26922 = state_26886__$1;
(statearr_26896_26922[(1)] = (12));

} else {
var statearr_26897_26923 = state_26886__$1;
(statearr_26897_26923[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26887 === (3))){
var inst_26884 = (state_26886[(2)]);
var state_26886__$1 = state_26886;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26886__$1,inst_26884);
} else {
if((state_val_26887 === (12))){
var inst_26846 = (state_26886[(8)]);
var inst_26874 = cljs.core.vec.call(null,inst_26846);
var state_26886__$1 = state_26886;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26886__$1,(15),out,inst_26874);
} else {
if((state_val_26887 === (2))){
var state_26886__$1 = state_26886;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26886__$1,(4),ch);
} else {
if((state_val_26887 === (11))){
var inst_26850 = (state_26886[(9)]);
var inst_26854 = (state_26886[(10)]);
var inst_26864 = (state_26886[(2)]);
var inst_26865 = [];
var inst_26866 = inst_26865.push(inst_26850);
var inst_26846 = inst_26865;
var inst_26847 = inst_26854;
var state_26886__$1 = (function (){var statearr_26898 = state_26886;
(statearr_26898[(7)] = inst_26847);

(statearr_26898[(8)] = inst_26846);

(statearr_26898[(11)] = inst_26866);

(statearr_26898[(12)] = inst_26864);

return statearr_26898;
})();
var statearr_26899_26924 = state_26886__$1;
(statearr_26899_26924[(2)] = null);

(statearr_26899_26924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26887 === (9))){
var inst_26846 = (state_26886[(8)]);
var inst_26862 = cljs.core.vec.call(null,inst_26846);
var state_26886__$1 = state_26886;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26886__$1,(11),out,inst_26862);
} else {
if((state_val_26887 === (5))){
var inst_26850 = (state_26886[(9)]);
var inst_26847 = (state_26886[(7)]);
var inst_26854 = (state_26886[(10)]);
var inst_26854__$1 = f.call(null,inst_26850);
var inst_26855 = cljs.core._EQ_.call(null,inst_26854__$1,inst_26847);
var inst_26856 = cljs.core.keyword_identical_QMARK_.call(null,inst_26847,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_26857 = ((inst_26855) || (inst_26856));
var state_26886__$1 = (function (){var statearr_26900 = state_26886;
(statearr_26900[(10)] = inst_26854__$1);

return statearr_26900;
})();
if(cljs.core.truth_(inst_26857)){
var statearr_26901_26925 = state_26886__$1;
(statearr_26901_26925[(1)] = (8));

} else {
var statearr_26902_26926 = state_26886__$1;
(statearr_26902_26926[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26887 === (14))){
var inst_26879 = (state_26886[(2)]);
var inst_26880 = cljs.core.async.close_BANG_.call(null,out);
var state_26886__$1 = (function (){var statearr_26904 = state_26886;
(statearr_26904[(13)] = inst_26879);

return statearr_26904;
})();
var statearr_26905_26927 = state_26886__$1;
(statearr_26905_26927[(2)] = inst_26880);

(statearr_26905_26927[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26887 === (10))){
var inst_26869 = (state_26886[(2)]);
var state_26886__$1 = state_26886;
var statearr_26906_26928 = state_26886__$1;
(statearr_26906_26928[(2)] = inst_26869);

(statearr_26906_26928[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26887 === (8))){
var inst_26850 = (state_26886[(9)]);
var inst_26854 = (state_26886[(10)]);
var inst_26846 = (state_26886[(8)]);
var inst_26859 = inst_26846.push(inst_26850);
var tmp26903 = inst_26846;
var inst_26846__$1 = tmp26903;
var inst_26847 = inst_26854;
var state_26886__$1 = (function (){var statearr_26907 = state_26886;
(statearr_26907[(7)] = inst_26847);

(statearr_26907[(14)] = inst_26859);

(statearr_26907[(8)] = inst_26846__$1);

return statearr_26907;
})();
var statearr_26908_26929 = state_26886__$1;
(statearr_26908_26929[(2)] = null);

(statearr_26908_26929[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__24889__auto__ = null;
var cljs$core$async$state_machine__24889__auto____0 = (function (){
var statearr_26909 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26909[(0)] = cljs$core$async$state_machine__24889__auto__);

(statearr_26909[(1)] = (1));

return statearr_26909;
});
var cljs$core$async$state_machine__24889__auto____1 = (function (state_26886){
while(true){
var ret_value__24890__auto__ = (function (){try{while(true){
var result__24891__auto__ = switch__24888__auto__.call(null,state_26886);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24891__auto__;
}
break;
}
}catch (e26910){var ex__24892__auto__ = e26910;
var statearr_26911_26930 = state_26886;
(statearr_26911_26930[(2)] = ex__24892__auto__);


if(cljs.core.seq.call(null,(state_26886[(4)]))){
var statearr_26912_26931 = state_26886;
(statearr_26912_26931[(1)] = cljs.core.first.call(null,(state_26886[(4)])));

} else {
throw ex__24892__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26932 = state_26886;
state_26886 = G__26932;
continue;
} else {
return ret_value__24890__auto__;
}
break;
}
});
cljs$core$async$state_machine__24889__auto__ = function(state_26886){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24889__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24889__auto____1.call(this,state_26886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24889__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24889__auto____0;
cljs$core$async$state_machine__24889__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24889__auto____1;
return cljs$core$async$state_machine__24889__auto__;
})()
})();
var state__24964__auto__ = (function (){var statearr_26913 = f__24963__auto__.call(null);
(statearr_26913[(6)] = c__24962__auto___26915);

return statearr_26913;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24964__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map?rel=1588466957716
