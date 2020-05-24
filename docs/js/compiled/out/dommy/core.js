// Compiled by ClojureScript 1.10.597 {}
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('dommy.utils');
/**
 * Returns a selector in string format.
 * Accepts string, keyword, or collection.
 */
dommy.core.selector = (function dommy$core$selector(data){
if(cljs.core.coll_QMARK_.call(null,data)){
return clojure.string.join.call(null," ",cljs.core.map.call(null,dommy.core.selector,data));
} else {
if(((typeof data === 'string') || ((data instanceof cljs.core.Keyword)))){
return cljs.core.name.call(null,data);
} else {
return null;
}
}
});
dommy.core.text = (function dommy$core$text(elem){
var or__4185__auto__ = elem.textContent;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return elem.innerText;
}
});
dommy.core.html = (function dommy$core$html(elem){
return elem.innerHTML;
});
dommy.core.value = (function dommy$core$value(elem){
return elem.value;
});
dommy.core.class$ = (function dommy$core$class(elem){
return elem.className;
});
dommy.core.attr = (function dommy$core$attr(elem,k){
if(cljs.core.truth_(k)){
return elem.getAttribute(dommy.utils.as_str.call(null,k));
} else {
return null;
}
});
/**
 * The computed style of `elem`, optionally specifying the key of
 * a particular style to return
 */
dommy.core.style = (function dommy$core$style(var_args){
var G__22550 = arguments.length;
switch (G__22550) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.style.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return cljs.core.js__GT_clj.call(null,window.getComputedStyle(elem));
}));

(dommy.core.style.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str.call(null,k)]);
}));

(dommy.core.style.cljs$lang$maxFixedArity = 2);

dommy.core.px = (function dommy$core$px(elem,k){

var pixels = dommy.core.style.call(null,elem,k);
if(cljs.core.seq.call(null,pixels)){
return parseInt(pixels);
} else {
return null;
}
});
/**
 * Does `elem` contain `c` in its class list
 */
dommy.core.has_class_QMARK_ = (function dommy$core$has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__5733__auto__ = elem.classList;
if(cljs.core.truth_(temp__5733__auto__)){
var class_list = temp__5733__auto__;
return class_list.contains(c__$1);
} else {
var temp__5735__auto__ = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(temp__5735__auto__)){
var class_name = temp__5735__auto__;
var temp__5735__auto____$1 = dommy.utils.class_index.call(null,class_name,c__$1);
if(cljs.core.truth_(temp__5735__auto____$1)){
var i = temp__5735__auto____$1;
return (i >= (0));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
 */
dommy.core.hidden_QMARK_ = (function dommy$core$hidden_QMARK_(elem){
return (dommy.core.style.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432)) === "none");
});
/**
 * Returns a map of the bounding client rect of `elem`
 * as a map with [:top :left :right :bottom :width :height]
 */
dommy.core.bounding_client_rect = (function dommy$core$bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.core.parent = (function dommy$core$parent(elem){
return elem.parentNode;
});
dommy.core.children = (function dommy$core$children(elem){
return elem.children;
});
/**
 * Lazy seq of the ancestors of `elem`
 */
dommy.core.ancestors = (function dommy$core$ancestors(elem){
return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
 * Returns a predicate on nodes that match `selector` at the
 * time of this `matches-pred` call (may return outdated results
 * if you fuck with the DOM)
 */
dommy.core.matches_pred = (function dommy$core$matches_pred(var_args){
var G__22553 = arguments.length;
switch (G__22553) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2 = (function (base,selector){
var matches = dommy.utils.__GT_Array.call(null,base.querySelectorAll(dommy.core.selector.call(null,selector)));
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
}));

(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return dommy.core.matches_pred.call(null,document,selector);
}));

(dommy.core.matches_pred.cljs$lang$maxFixedArity = 2);

/**
 * Closest ancestor of `elem` (up to `base`, if provided)
 * that matches `selector`
 */
dommy.core.closest = (function dommy$core$closest(var_args){
var G__22557 = arguments.length;
switch (G__22557) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__22555_SHARP_){
return (!((p1__22555_SHARP_ === base)));
}),dommy.core.ancestors.call(null,elem))));
}));

(dommy.core.closest.cljs$core$IFn$_invoke$arity$2 = (function (elem,selector){
return dommy.core.closest.call(null,document.body,elem,selector);
}));

(dommy.core.closest.cljs$lang$maxFixedArity = 3);

/**
 * Is `descendant` a descendant of `ancestor`?
 * (http://goo.gl/T8pgCX)
 */
dommy.core.descendant_QMARK_ = (function dommy$core$descendant_QMARK_(descendant,ancestor){
if(cljs.core.truth_(ancestor.contains)){
return ancestor.contains(descendant);
} else {
if(cljs.core.truth_(ancestor.compareDocumentPosition)){
return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else {
return null;
}
}
});
/**
 * Set the textContent of `elem` to `text`, fall back to innerText
 */
dommy.core.set_text_BANG_ = (function dommy$core$set_text_BANG_(elem,text){
if((!((void 0 === elem.textContent)))){
(elem.textContent = text);
} else {
(elem.innerText = text);
}

return elem;
});
/**
 * Set the innerHTML of `elem` to `html`
 */
dommy.core.set_html_BANG_ = (function dommy$core$set_html_BANG_(elem,html){
(elem.innerHTML = html);

return elem;
});
/**
 * Set the value of `elem` to `value`
 */
dommy.core.set_value_BANG_ = (function dommy$core$set_value_BANG_(elem,value){
(elem.value = value);

return elem;
});
/**
 * Set the css class of `elem` to `elem`
 */
dommy.core.set_class_BANG_ = (function dommy$core$set_class_BANG_(elem,c){
return (elem.className = c);
});
/**
 * Set the style of `elem` using key-value pairs:
 * 
 *    (set-style! elem :display "block" :color "red")
 */
dommy.core.set_style_BANG_ = (function dommy$core$set_style_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___22577 = arguments.length;
var i__4790__auto___22578 = (0);
while(true){
if((i__4790__auto___22578 < len__4789__auto___22577)){
args__4795__auto__.push((arguments[i__4790__auto___22578]));

var G__22579 = (i__4790__auto___22578 + (1));
i__4790__auto___22578 = G__22579;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var style = elem.style;
var seq__22561_22580 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__22562_22581 = null;
var count__22563_22582 = (0);
var i__22564_22583 = (0);
while(true){
if((i__22564_22583 < count__22563_22582)){
var vec__22571_22584 = cljs.core._nth.call(null,chunk__22562_22581,i__22564_22583);
var k_22585 = cljs.core.nth.call(null,vec__22571_22584,(0),null);
var v_22586 = cljs.core.nth.call(null,vec__22571_22584,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_22585),v_22586);


var G__22587 = seq__22561_22580;
var G__22588 = chunk__22562_22581;
var G__22589 = count__22563_22582;
var G__22590 = (i__22564_22583 + (1));
seq__22561_22580 = G__22587;
chunk__22562_22581 = G__22588;
count__22563_22582 = G__22589;
i__22564_22583 = G__22590;
continue;
} else {
var temp__5735__auto___22591 = cljs.core.seq.call(null,seq__22561_22580);
if(temp__5735__auto___22591){
var seq__22561_22592__$1 = temp__5735__auto___22591;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22561_22592__$1)){
var c__4609__auto___22593 = cljs.core.chunk_first.call(null,seq__22561_22592__$1);
var G__22594 = cljs.core.chunk_rest.call(null,seq__22561_22592__$1);
var G__22595 = c__4609__auto___22593;
var G__22596 = cljs.core.count.call(null,c__4609__auto___22593);
var G__22597 = (0);
seq__22561_22580 = G__22594;
chunk__22562_22581 = G__22595;
count__22563_22582 = G__22596;
i__22564_22583 = G__22597;
continue;
} else {
var vec__22574_22598 = cljs.core.first.call(null,seq__22561_22592__$1);
var k_22599 = cljs.core.nth.call(null,vec__22574_22598,(0),null);
var v_22600 = cljs.core.nth.call(null,vec__22574_22598,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_22599),v_22600);


var G__22601 = cljs.core.next.call(null,seq__22561_22592__$1);
var G__22602 = null;
var G__22603 = (0);
var G__22604 = (0);
seq__22561_22580 = G__22601;
chunk__22562_22581 = G__22602;
count__22563_22582 = G__22603;
i__22564_22583 = G__22604;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.set_style_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq22559){
var G__22560 = cljs.core.first.call(null,seq22559);
var seq22559__$1 = cljs.core.next.call(null,seq22559);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22560,seq22559__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___22611 = arguments.length;
var i__4790__auto___22612 = (0);
while(true){
if((i__4790__auto___22612 < len__4789__auto___22611)){
args__4795__auto__.push((arguments[i__4790__auto___22612]));

var G__22613 = (i__4790__auto___22612 + (1));
i__4790__auto___22612 = G__22613;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__22607_22614 = cljs.core.seq.call(null,keywords);
var chunk__22608_22615 = null;
var count__22609_22616 = (0);
var i__22610_22617 = (0);
while(true){
if((i__22610_22617 < count__22609_22616)){
var kw_22618 = cljs.core._nth.call(null,chunk__22608_22615,i__22610_22617);
style.removeProperty(dommy.utils.as_str.call(null,kw_22618));


var G__22619 = seq__22607_22614;
var G__22620 = chunk__22608_22615;
var G__22621 = count__22609_22616;
var G__22622 = (i__22610_22617 + (1));
seq__22607_22614 = G__22619;
chunk__22608_22615 = G__22620;
count__22609_22616 = G__22621;
i__22610_22617 = G__22622;
continue;
} else {
var temp__5735__auto___22623 = cljs.core.seq.call(null,seq__22607_22614);
if(temp__5735__auto___22623){
var seq__22607_22624__$1 = temp__5735__auto___22623;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22607_22624__$1)){
var c__4609__auto___22625 = cljs.core.chunk_first.call(null,seq__22607_22624__$1);
var G__22626 = cljs.core.chunk_rest.call(null,seq__22607_22624__$1);
var G__22627 = c__4609__auto___22625;
var G__22628 = cljs.core.count.call(null,c__4609__auto___22625);
var G__22629 = (0);
seq__22607_22614 = G__22626;
chunk__22608_22615 = G__22627;
count__22609_22616 = G__22628;
i__22610_22617 = G__22629;
continue;
} else {
var kw_22630 = cljs.core.first.call(null,seq__22607_22624__$1);
style.removeProperty(dommy.utils.as_str.call(null,kw_22630));


var G__22631 = cljs.core.next.call(null,seq__22607_22624__$1);
var G__22632 = null;
var G__22633 = (0);
var G__22634 = (0);
seq__22607_22614 = G__22631;
chunk__22608_22615 = G__22632;
count__22609_22616 = G__22633;
i__22610_22617 = G__22634;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.remove_style_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq22605){
var G__22606 = cljs.core.first.call(null,seq22605);
var seq22605__$1 = cljs.core.next.call(null,seq22605);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22606,seq22605__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___22653 = arguments.length;
var i__4790__auto___22654 = (0);
while(true){
if((i__4790__auto___22654 < len__4789__auto___22653)){
args__4795__auto__.push((arguments[i__4790__auto___22654]));

var G__22655 = (i__4790__auto___22654 + (1));
i__4790__auto___22654 = G__22655;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__22637_22656 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__22638_22657 = null;
var count__22639_22658 = (0);
var i__22640_22659 = (0);
while(true){
if((i__22640_22659 < count__22639_22658)){
var vec__22647_22660 = cljs.core._nth.call(null,chunk__22638_22657,i__22640_22659);
var k_22661 = cljs.core.nth.call(null,vec__22647_22660,(0),null);
var v_22662 = cljs.core.nth.call(null,vec__22647_22660,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_22661,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_22662),"px"].join(''));


var G__22663 = seq__22637_22656;
var G__22664 = chunk__22638_22657;
var G__22665 = count__22639_22658;
var G__22666 = (i__22640_22659 + (1));
seq__22637_22656 = G__22663;
chunk__22638_22657 = G__22664;
count__22639_22658 = G__22665;
i__22640_22659 = G__22666;
continue;
} else {
var temp__5735__auto___22667 = cljs.core.seq.call(null,seq__22637_22656);
if(temp__5735__auto___22667){
var seq__22637_22668__$1 = temp__5735__auto___22667;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22637_22668__$1)){
var c__4609__auto___22669 = cljs.core.chunk_first.call(null,seq__22637_22668__$1);
var G__22670 = cljs.core.chunk_rest.call(null,seq__22637_22668__$1);
var G__22671 = c__4609__auto___22669;
var G__22672 = cljs.core.count.call(null,c__4609__auto___22669);
var G__22673 = (0);
seq__22637_22656 = G__22670;
chunk__22638_22657 = G__22671;
count__22639_22658 = G__22672;
i__22640_22659 = G__22673;
continue;
} else {
var vec__22650_22674 = cljs.core.first.call(null,seq__22637_22668__$1);
var k_22675 = cljs.core.nth.call(null,vec__22650_22674,(0),null);
var v_22676 = cljs.core.nth.call(null,vec__22650_22674,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_22675,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_22676),"px"].join(''));


var G__22677 = cljs.core.next.call(null,seq__22637_22668__$1);
var G__22678 = null;
var G__22679 = (0);
var G__22680 = (0);
seq__22637_22656 = G__22677;
chunk__22638_22657 = G__22678;
count__22639_22658 = G__22679;
i__22640_22659 = G__22680;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.set_px_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq22635){
var G__22636 = cljs.core.first.call(null,seq22635);
var seq22635__$1 = cljs.core.next.call(null,seq22635);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22636,seq22635__$1);
}));

/**
 * Sets dom attributes on and returns `elem`.
 * Attributes without values will be set to their name:
 * 
 *     (set-attr! elem :disabled)
 * 
 * With values, the function takes variadic kv pairs:
 * 
 *     (set-attr! elem :id "some-id"
 *                     :name "some-name")
 */
dommy.core.set_attr_BANG_ = (function dommy$core$set_attr_BANG_(var_args){
var G__22686 = arguments.length;
switch (G__22686) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___22706 = arguments.length;
var i__4790__auto___22707 = (0);
while(true){
if((i__4790__auto___22707 < len__4789__auto___22706)){
args_arr__4810__auto__.push((arguments[i__4790__auto___22707]));

var G__22708 = (i__4790__auto___22707 + (1));
i__4790__auto___22707 = G__22708;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((3)),(0),null));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4811__auto__);

}
});

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.call(null,elem,k,dommy.utils.as_str.call(null,k));
}));

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_.call(null,v)){
var G__22687 = elem;
(G__22687[k__$1] = v);

return G__22687;
} else {
var G__22688 = elem;
G__22688.setAttribute(k__$1,v);

return G__22688;
}
} else {
return null;
}
}));

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,v,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__22689_22709 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__22690_22710 = null;
var count__22691_22711 = (0);
var i__22692_22712 = (0);
while(true){
if((i__22692_22712 < count__22691_22711)){
var vec__22699_22713 = cljs.core._nth.call(null,chunk__22690_22710,i__22692_22712);
var k_22714__$1 = cljs.core.nth.call(null,vec__22699_22713,(0),null);
var v_22715__$1 = cljs.core.nth.call(null,vec__22699_22713,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_22714__$1,v_22715__$1);


var G__22716 = seq__22689_22709;
var G__22717 = chunk__22690_22710;
var G__22718 = count__22691_22711;
var G__22719 = (i__22692_22712 + (1));
seq__22689_22709 = G__22716;
chunk__22690_22710 = G__22717;
count__22691_22711 = G__22718;
i__22692_22712 = G__22719;
continue;
} else {
var temp__5735__auto___22720 = cljs.core.seq.call(null,seq__22689_22709);
if(temp__5735__auto___22720){
var seq__22689_22721__$1 = temp__5735__auto___22720;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22689_22721__$1)){
var c__4609__auto___22722 = cljs.core.chunk_first.call(null,seq__22689_22721__$1);
var G__22723 = cljs.core.chunk_rest.call(null,seq__22689_22721__$1);
var G__22724 = c__4609__auto___22722;
var G__22725 = cljs.core.count.call(null,c__4609__auto___22722);
var G__22726 = (0);
seq__22689_22709 = G__22723;
chunk__22690_22710 = G__22724;
count__22691_22711 = G__22725;
i__22692_22712 = G__22726;
continue;
} else {
var vec__22702_22727 = cljs.core.first.call(null,seq__22689_22721__$1);
var k_22728__$1 = cljs.core.nth.call(null,vec__22702_22727,(0),null);
var v_22729__$1 = cljs.core.nth.call(null,vec__22702_22727,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_22728__$1,v_22729__$1);


var G__22730 = cljs.core.next.call(null,seq__22689_22721__$1);
var G__22731 = null;
var G__22732 = (0);
var G__22733 = (0);
seq__22689_22709 = G__22730;
chunk__22690_22710 = G__22731;
count__22691_22711 = G__22732;
i__22692_22712 = G__22733;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq22682){
var G__22683 = cljs.core.first.call(null,seq22682);
var seq22682__$1 = cljs.core.next.call(null,seq22682);
var G__22684 = cljs.core.first.call(null,seq22682__$1);
var seq22682__$2 = cljs.core.next.call(null,seq22682__$1);
var G__22685 = cljs.core.first.call(null,seq22682__$2);
var seq22682__$3 = cljs.core.next.call(null,seq22682__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22683,G__22684,G__22685,seq22682__$3);
}));

(dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3));

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__22738 = arguments.length;
switch (G__22738) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___22744 = arguments.length;
var i__4790__auto___22745 = (0);
while(true){
if((i__4790__auto___22745 < len__4789__auto___22744)){
args_arr__4810__auto__.push((arguments[i__4790__auto___22745]));

var G__22746 = (i__4790__auto___22745 + (1));
i__4790__auto___22745 = G__22746;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_22747__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_22747__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_22747__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__22739_22748 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__22740_22749 = null;
var count__22741_22750 = (0);
var i__22742_22751 = (0);
while(true){
if((i__22742_22751 < count__22741_22750)){
var k_22752__$1 = cljs.core._nth.call(null,chunk__22740_22749,i__22742_22751);
dommy.core.remove_attr_BANG_.call(null,elem,k_22752__$1);


var G__22753 = seq__22739_22748;
var G__22754 = chunk__22740_22749;
var G__22755 = count__22741_22750;
var G__22756 = (i__22742_22751 + (1));
seq__22739_22748 = G__22753;
chunk__22740_22749 = G__22754;
count__22741_22750 = G__22755;
i__22742_22751 = G__22756;
continue;
} else {
var temp__5735__auto___22757 = cljs.core.seq.call(null,seq__22739_22748);
if(temp__5735__auto___22757){
var seq__22739_22758__$1 = temp__5735__auto___22757;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22739_22758__$1)){
var c__4609__auto___22759 = cljs.core.chunk_first.call(null,seq__22739_22758__$1);
var G__22760 = cljs.core.chunk_rest.call(null,seq__22739_22758__$1);
var G__22761 = c__4609__auto___22759;
var G__22762 = cljs.core.count.call(null,c__4609__auto___22759);
var G__22763 = (0);
seq__22739_22748 = G__22760;
chunk__22740_22749 = G__22761;
count__22741_22750 = G__22762;
i__22742_22751 = G__22763;
continue;
} else {
var k_22764__$1 = cljs.core.first.call(null,seq__22739_22758__$1);
dommy.core.remove_attr_BANG_.call(null,elem,k_22764__$1);


var G__22765 = cljs.core.next.call(null,seq__22739_22758__$1);
var G__22766 = null;
var G__22767 = (0);
var G__22768 = (0);
seq__22739_22748 = G__22765;
chunk__22740_22749 = G__22766;
count__22741_22750 = G__22767;
i__22742_22751 = G__22768;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq22735){
var G__22736 = cljs.core.first.call(null,seq22735);
var seq22735__$1 = cljs.core.next.call(null,seq22735);
var G__22737 = cljs.core.first.call(null,seq22735__$1);
var seq22735__$2 = cljs.core.next.call(null,seq22735__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22736,G__22737,seq22735__$2);
}));

(dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__22770 = arguments.length;
switch (G__22770) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.core.attr.call(null,elem,k)));
}));

(dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.call(null,elem,k);
} else {
return dommy.core.remove_attr_BANG_.call(null,elem,k);
}
}));

(dommy.core.toggle_attr_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Add `classes` to `elem`, trying to use Element::classList, and
 * falling back to fast string parsing/manipulation
 */
dommy.core.add_class_BANG_ = (function dommy$core$add_class_BANG_(var_args){
var G__22776 = arguments.length;
switch (G__22776) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___22790 = arguments.length;
var i__4790__auto___22791 = (0);
while(true){
if((i__4790__auto___22791 < len__4789__auto___22790)){
args_arr__4810__auto__.push((arguments[i__4790__auto___22791]));

var G__22792 = (i__4790__auto___22791 + (1));
i__4790__auto___22791 = G__22792;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes)).split(/\s+/);
if(cljs.core.seq.call(null,classes__$1)){
var temp__5733__auto___22793 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___22793)){
var class_list_22794 = temp__5733__auto___22793;
var seq__22777_22795 = cljs.core.seq.call(null,classes__$1);
var chunk__22778_22796 = null;
var count__22779_22797 = (0);
var i__22780_22798 = (0);
while(true){
if((i__22780_22798 < count__22779_22797)){
var c_22799 = cljs.core._nth.call(null,chunk__22778_22796,i__22780_22798);
class_list_22794.add(c_22799);


var G__22800 = seq__22777_22795;
var G__22801 = chunk__22778_22796;
var G__22802 = count__22779_22797;
var G__22803 = (i__22780_22798 + (1));
seq__22777_22795 = G__22800;
chunk__22778_22796 = G__22801;
count__22779_22797 = G__22802;
i__22780_22798 = G__22803;
continue;
} else {
var temp__5735__auto___22804 = cljs.core.seq.call(null,seq__22777_22795);
if(temp__5735__auto___22804){
var seq__22777_22805__$1 = temp__5735__auto___22804;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22777_22805__$1)){
var c__4609__auto___22806 = cljs.core.chunk_first.call(null,seq__22777_22805__$1);
var G__22807 = cljs.core.chunk_rest.call(null,seq__22777_22805__$1);
var G__22808 = c__4609__auto___22806;
var G__22809 = cljs.core.count.call(null,c__4609__auto___22806);
var G__22810 = (0);
seq__22777_22795 = G__22807;
chunk__22778_22796 = G__22808;
count__22779_22797 = G__22809;
i__22780_22798 = G__22810;
continue;
} else {
var c_22811 = cljs.core.first.call(null,seq__22777_22805__$1);
class_list_22794.add(c_22811);


var G__22812 = cljs.core.next.call(null,seq__22777_22805__$1);
var G__22813 = null;
var G__22814 = (0);
var G__22815 = (0);
seq__22777_22795 = G__22812;
chunk__22778_22796 = G__22813;
count__22779_22797 = G__22814;
i__22780_22798 = G__22815;
continue;
}
} else {
}
}
break;
}
} else {
var seq__22781_22816 = cljs.core.seq.call(null,classes__$1);
var chunk__22782_22817 = null;
var count__22783_22818 = (0);
var i__22784_22819 = (0);
while(true){
if((i__22784_22819 < count__22783_22818)){
var c_22820 = cljs.core._nth.call(null,chunk__22782_22817,i__22784_22819);
var class_name_22821 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_22821,c_22820))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_22821 === ""))?c_22820:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_22821)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_22820)].join('')));
}


var G__22822 = seq__22781_22816;
var G__22823 = chunk__22782_22817;
var G__22824 = count__22783_22818;
var G__22825 = (i__22784_22819 + (1));
seq__22781_22816 = G__22822;
chunk__22782_22817 = G__22823;
count__22783_22818 = G__22824;
i__22784_22819 = G__22825;
continue;
} else {
var temp__5735__auto___22826 = cljs.core.seq.call(null,seq__22781_22816);
if(temp__5735__auto___22826){
var seq__22781_22827__$1 = temp__5735__auto___22826;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22781_22827__$1)){
var c__4609__auto___22828 = cljs.core.chunk_first.call(null,seq__22781_22827__$1);
var G__22829 = cljs.core.chunk_rest.call(null,seq__22781_22827__$1);
var G__22830 = c__4609__auto___22828;
var G__22831 = cljs.core.count.call(null,c__4609__auto___22828);
var G__22832 = (0);
seq__22781_22816 = G__22829;
chunk__22782_22817 = G__22830;
count__22783_22818 = G__22831;
i__22784_22819 = G__22832;
continue;
} else {
var c_22833 = cljs.core.first.call(null,seq__22781_22827__$1);
var class_name_22834 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_22834,c_22833))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_22834 === ""))?c_22833:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_22834)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_22833)].join('')));
}


var G__22835 = cljs.core.next.call(null,seq__22781_22827__$1);
var G__22836 = null;
var G__22837 = (0);
var G__22838 = (0);
seq__22781_22816 = G__22835;
chunk__22782_22817 = G__22836;
count__22783_22818 = G__22837;
i__22784_22819 = G__22838;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return elem;
}));

(dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,classes,more_classes){
var seq__22785_22839 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__22786_22840 = null;
var count__22787_22841 = (0);
var i__22788_22842 = (0);
while(true){
if((i__22788_22842 < count__22787_22841)){
var c_22843 = cljs.core._nth.call(null,chunk__22786_22840,i__22788_22842);
dommy.core.add_class_BANG_.call(null,elem,c_22843);


var G__22844 = seq__22785_22839;
var G__22845 = chunk__22786_22840;
var G__22846 = count__22787_22841;
var G__22847 = (i__22788_22842 + (1));
seq__22785_22839 = G__22844;
chunk__22786_22840 = G__22845;
count__22787_22841 = G__22846;
i__22788_22842 = G__22847;
continue;
} else {
var temp__5735__auto___22848 = cljs.core.seq.call(null,seq__22785_22839);
if(temp__5735__auto___22848){
var seq__22785_22849__$1 = temp__5735__auto___22848;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22785_22849__$1)){
var c__4609__auto___22850 = cljs.core.chunk_first.call(null,seq__22785_22849__$1);
var G__22851 = cljs.core.chunk_rest.call(null,seq__22785_22849__$1);
var G__22852 = c__4609__auto___22850;
var G__22853 = cljs.core.count.call(null,c__4609__auto___22850);
var G__22854 = (0);
seq__22785_22839 = G__22851;
chunk__22786_22840 = G__22852;
count__22787_22841 = G__22853;
i__22788_22842 = G__22854;
continue;
} else {
var c_22855 = cljs.core.first.call(null,seq__22785_22849__$1);
dommy.core.add_class_BANG_.call(null,elem,c_22855);


var G__22856 = cljs.core.next.call(null,seq__22785_22849__$1);
var G__22857 = null;
var G__22858 = (0);
var G__22859 = (0);
seq__22785_22839 = G__22856;
chunk__22786_22840 = G__22857;
count__22787_22841 = G__22858;
i__22788_22842 = G__22859;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq22773){
var G__22774 = cljs.core.first.call(null,seq22773);
var seq22773__$1 = cljs.core.next.call(null,seq22773);
var G__22775 = cljs.core.first.call(null,seq22773__$1);
var seq22773__$2 = cljs.core.next.call(null,seq22773__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22774,G__22775,seq22773__$2);
}));

(dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__22864 = arguments.length;
switch (G__22864) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___22870 = arguments.length;
var i__4790__auto___22871 = (0);
while(true){
if((i__4790__auto___22871 < len__4789__auto___22870)){
args_arr__4810__auto__.push((arguments[i__4790__auto___22871]));

var G__22872 = (i__4790__auto___22871 + (1));
i__4790__auto___22871 = G__22872;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__5733__auto___22873 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___22873)){
var class_list_22874 = temp__5733__auto___22873;
class_list_22874.remove(c__$1);
} else {
var class_name_22875 = dommy.core.class$.call(null,elem);
var new_class_name_22876 = dommy.utils.remove_class_str.call(null,class_name_22875,c__$1);
if((class_name_22875 === new_class_name_22876)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_22876);
}
}

return elem;
}));

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__22865 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__22866 = null;
var count__22867 = (0);
var i__22868 = (0);
while(true){
if((i__22868 < count__22867)){
var c = cljs.core._nth.call(null,chunk__22866,i__22868);
dommy.core.remove_class_BANG_.call(null,elem,c);


var G__22877 = seq__22865;
var G__22878 = chunk__22866;
var G__22879 = count__22867;
var G__22880 = (i__22868 + (1));
seq__22865 = G__22877;
chunk__22866 = G__22878;
count__22867 = G__22879;
i__22868 = G__22880;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__22865);
if(temp__5735__auto__){
var seq__22865__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22865__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__22865__$1);
var G__22881 = cljs.core.chunk_rest.call(null,seq__22865__$1);
var G__22882 = c__4609__auto__;
var G__22883 = cljs.core.count.call(null,c__4609__auto__);
var G__22884 = (0);
seq__22865 = G__22881;
chunk__22866 = G__22882;
count__22867 = G__22883;
i__22868 = G__22884;
continue;
} else {
var c = cljs.core.first.call(null,seq__22865__$1);
dommy.core.remove_class_BANG_.call(null,elem,c);


var G__22885 = cljs.core.next.call(null,seq__22865__$1);
var G__22886 = null;
var G__22887 = (0);
var G__22888 = (0);
seq__22865 = G__22885;
chunk__22866 = G__22886;
count__22867 = G__22887;
i__22868 = G__22888;
continue;
}
} else {
return null;
}
}
break;
}
}));

/** @this {Function} */
(dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq22861){
var G__22862 = cljs.core.first.call(null,seq22861);
var seq22861__$1 = cljs.core.next.call(null,seq22861);
var G__22863 = cljs.core.first.call(null,seq22861__$1);
var seq22861__$2 = cljs.core.next.call(null,seq22861__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22862,G__22863,seq22861__$2);
}));

(dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__22890 = arguments.length;
switch (G__22890) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__5733__auto___22892 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___22892)){
var class_list_22893 = temp__5733__auto___22892;
class_list_22893.toggle(c__$1);
} else {
dommy.core.toggle_class_BANG_.call(null,elem,c__$1,(!(dommy.core.has_class_QMARK_.call(null,elem,c__$1))));
}

return elem;
}));

(dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.call(null,elem,class$);
} else {
dommy.core.remove_class_BANG_.call(null,elem,class$);
}

return elem;
}));

(dommy.core.toggle_class_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Display or hide the given `elem` (using display: none).
 * Takes an optional boolean `show?`
 */
dommy.core.toggle_BANG_ = (function dommy$core$toggle_BANG_(var_args){
var G__22895 = arguments.length;
switch (G__22895) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432),((show_QMARK_)?"":"none"));
}));

(dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return dommy.core.toggle_BANG_.call(null,elem,dommy.core.hidden_QMARK_.call(null,elem));
}));

(dommy.core.toggle_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.hide_BANG_ = (function dommy$core$hide_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,false);
});
dommy.core.show_BANG_ = (function dommy$core$show_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,true);
});
dommy.core.scroll_into_view = (function dommy$core$scroll_into_view(elem,align_with_top_QMARK_){
var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect.call(null,elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function dommy$core$create_element(var_args){
var G__22898 = arguments.length;
switch (G__22898) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return document.createElement(dommy.utils.as_str.call(null,tag));
}));

(dommy.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str.call(null,tag_ns),dommy.utils.as_str.call(null,tag));
}));

(dommy.core.create_element.cljs$lang$maxFixedArity = 2);

dommy.core.create_text_node = (function dommy$core$create_text_node(text){
return document.createTextNode(text);
});
/**
 * Clears all children from `elem`
 */
dommy.core.clear_BANG_ = (function dommy$core$clear_BANG_(elem){
return dommy.core.set_html_BANG_.call(null,elem,"");
});
/**
 * Append `child` to `parent`
 */
dommy.core.append_BANG_ = (function dommy$core$append_BANG_(var_args){
var G__22904 = arguments.length;
switch (G__22904) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___22911 = arguments.length;
var i__4790__auto___22912 = (0);
while(true){
if((i__4790__auto___22912 < len__4789__auto___22911)){
args_arr__4810__auto__.push((arguments[i__4790__auto___22912]));

var G__22913 = (i__4790__auto___22912 + (1));
i__4790__auto___22912 = G__22913;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__22905 = parent;
G__22905.appendChild(child);

return G__22905;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__22906_22914 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__22907_22915 = null;
var count__22908_22916 = (0);
var i__22909_22917 = (0);
while(true){
if((i__22909_22917 < count__22908_22916)){
var c_22918 = cljs.core._nth.call(null,chunk__22907_22915,i__22909_22917);
dommy.core.append_BANG_.call(null,parent,c_22918);


var G__22919 = seq__22906_22914;
var G__22920 = chunk__22907_22915;
var G__22921 = count__22908_22916;
var G__22922 = (i__22909_22917 + (1));
seq__22906_22914 = G__22919;
chunk__22907_22915 = G__22920;
count__22908_22916 = G__22921;
i__22909_22917 = G__22922;
continue;
} else {
var temp__5735__auto___22923 = cljs.core.seq.call(null,seq__22906_22914);
if(temp__5735__auto___22923){
var seq__22906_22924__$1 = temp__5735__auto___22923;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22906_22924__$1)){
var c__4609__auto___22925 = cljs.core.chunk_first.call(null,seq__22906_22924__$1);
var G__22926 = cljs.core.chunk_rest.call(null,seq__22906_22924__$1);
var G__22927 = c__4609__auto___22925;
var G__22928 = cljs.core.count.call(null,c__4609__auto___22925);
var G__22929 = (0);
seq__22906_22914 = G__22926;
chunk__22907_22915 = G__22927;
count__22908_22916 = G__22928;
i__22909_22917 = G__22929;
continue;
} else {
var c_22930 = cljs.core.first.call(null,seq__22906_22924__$1);
dommy.core.append_BANG_.call(null,parent,c_22930);


var G__22931 = cljs.core.next.call(null,seq__22906_22924__$1);
var G__22932 = null;
var G__22933 = (0);
var G__22934 = (0);
seq__22906_22914 = G__22931;
chunk__22907_22915 = G__22932;
count__22908_22916 = G__22933;
i__22909_22917 = G__22934;
continue;
}
} else {
}
}
break;
}

return parent;
}));

/** @this {Function} */
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq22901){
var G__22902 = cljs.core.first.call(null,seq22901);
var seq22901__$1 = cljs.core.next.call(null,seq22901);
var G__22903 = cljs.core.first.call(null,seq22901__$1);
var seq22901__$2 = cljs.core.next.call(null,seq22901__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22902,G__22903,seq22901__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__22939 = arguments.length;
switch (G__22939) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___22946 = arguments.length;
var i__4790__auto___22947 = (0);
while(true){
if((i__4790__auto___22947 < len__4789__auto___22946)){
args_arr__4810__auto__.push((arguments[i__4790__auto___22947]));

var G__22948 = (i__4790__auto___22947 + (1));
i__4790__auto___22947 = G__22948;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__22940 = parent;
G__22940.insertBefore(child,parent.firstChild);

return G__22940;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__22941_22949 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__22942_22950 = null;
var count__22943_22951 = (0);
var i__22944_22952 = (0);
while(true){
if((i__22944_22952 < count__22943_22951)){
var c_22953 = cljs.core._nth.call(null,chunk__22942_22950,i__22944_22952);
dommy.core.prepend_BANG_.call(null,parent,c_22953);


var G__22954 = seq__22941_22949;
var G__22955 = chunk__22942_22950;
var G__22956 = count__22943_22951;
var G__22957 = (i__22944_22952 + (1));
seq__22941_22949 = G__22954;
chunk__22942_22950 = G__22955;
count__22943_22951 = G__22956;
i__22944_22952 = G__22957;
continue;
} else {
var temp__5735__auto___22958 = cljs.core.seq.call(null,seq__22941_22949);
if(temp__5735__auto___22958){
var seq__22941_22959__$1 = temp__5735__auto___22958;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22941_22959__$1)){
var c__4609__auto___22960 = cljs.core.chunk_first.call(null,seq__22941_22959__$1);
var G__22961 = cljs.core.chunk_rest.call(null,seq__22941_22959__$1);
var G__22962 = c__4609__auto___22960;
var G__22963 = cljs.core.count.call(null,c__4609__auto___22960);
var G__22964 = (0);
seq__22941_22949 = G__22961;
chunk__22942_22950 = G__22962;
count__22943_22951 = G__22963;
i__22944_22952 = G__22964;
continue;
} else {
var c_22965 = cljs.core.first.call(null,seq__22941_22959__$1);
dommy.core.prepend_BANG_.call(null,parent,c_22965);


var G__22966 = cljs.core.next.call(null,seq__22941_22959__$1);
var G__22967 = null;
var G__22968 = (0);
var G__22969 = (0);
seq__22941_22949 = G__22966;
chunk__22942_22950 = G__22967;
count__22943_22951 = G__22968;
i__22944_22952 = G__22969;
continue;
}
} else {
}
}
break;
}

return parent;
}));

/** @this {Function} */
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq22936){
var G__22937 = cljs.core.first.call(null,seq22936);
var seq22936__$1 = cljs.core.next.call(null,seq22936);
var G__22938 = cljs.core.first.call(null,seq22936__$1);
var seq22936__$2 = cljs.core.next.call(null,seq22936__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22937,G__22938,seq22936__$2);
}));

(dommy.core.prepend_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Insert `elem` before `other`, `other` must have a parent
 */
dommy.core.insert_before_BANG_ = (function dommy$core$insert_before_BANG_(elem,other){
var p = dommy.core.parent.call(null,other);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

p.insertBefore(elem,other);

return elem;
});
/**
 * Insert `elem` after `other`, `other` must have a parent
 */
dommy.core.insert_after_BANG_ = (function dommy$core$insert_after_BANG_(elem,other){
var temp__5733__auto___22970 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___22970)){
var next_22971 = temp__5733__auto___22970;
dommy.core.insert_before_BANG_.call(null,elem,next_22971);
} else {
dommy.core.append_BANG_.call(null,dommy.core.parent.call(null,other),elem);
}

return elem;
});
/**
 * Replace `elem` with `new`, return `new`
 */
dommy.core.replace_BANG_ = (function dommy$core$replace_BANG_(elem,new$){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

p.replaceChild(new$,elem);

return new$;
});
/**
 * Replace children of `elem` with `child`
 */
dommy.core.replace_contents_BANG_ = (function dommy$core$replace_contents_BANG_(p,child){
return dommy.core.append_BANG_.call(null,dommy.core.clear_BANG_.call(null,p),child);
});
/**
 * Remove `elem` from `parent`, return `parent`
 */
dommy.core.remove_BANG_ = (function dommy$core$remove_BANG_(var_args){
var G__22973 = arguments.length;
switch (G__22973) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

return dommy.core.remove_BANG_.call(null,p,elem);
}));

(dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p,elem){
var G__22974 = p;
G__22974.removeChild(elem);

return G__22974;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__22976){
var vec__22977 = p__22976;
var special_mouse_event = cljs.core.nth.call(null,vec__22977,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__22977,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.createAsIfByAssoc([real_mouse_event,(function (f){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__4185__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__4174__auto__ = related_target;
if(cljs.core.truth_(and__4174__auto__)){
return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else {
return and__4174__auto__;
}
})())){
return null;
} else {
return f.call(null,event);
}
});
})])], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.call(null,elem,event.target,selector);
if(cljs.core.truth_((function (){var and__4174__auto__ = selected_target;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__4174__auto__;
}
})())){
(event.selectedTarget = selected_target);

return f.call(null,event);
} else {
return null;
}
});
});
/**
 * Returns a nested map of event listeners on `elem`
 */
dommy.core.event_listeners = (function dommy$core$event_listeners(elem){
var or__4185__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___22983 = arguments.length;
var i__4790__auto___22984 = (0);
while(true){
if((i__4790__auto___22984 < len__4789__auto___22983)){
args__4795__auto__.push((arguments[i__4790__auto___22984]));

var G__22985 = (i__4790__auto___22984 + (1));
i__4790__auto___22984 = G__22985;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return (elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args));
}));

(dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq22980){
var G__22981 = cljs.core.first.call(null,seq22980);
var seq22980__$1 = cljs.core.next.call(null,seq22980);
var G__22982 = cljs.core.first.call(null,seq22980__$1);
var seq22980__$2 = cljs.core.next.call(null,seq22980__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22981,G__22982,seq22980__$2);
}));

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_.call(null,elem_sel)){
return cljs.core.juxt.call(null,cljs.core.first,cljs.core.rest).call(null,elem_sel);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
 * Adds `f` as a listener for events of type `event-type` on
 * `elem-sel`, which must either be a DOM node, or a sequence
 * whose first item is a DOM node.
 * 
 * In other words, the call to `listen!` can take two forms:
 * 
 * If `elem-sel` is a DOM node, i.e., you're doing something like:
 * 
 *     (listen! elem :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on the `elem`.
 * 
 * If `elem-sel` is a sequence:
 * 
 *     (listen! [elem :.selector.for :.some.descendants] :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on descendants of `elem` that match the selector
 * 
 * Also accepts any number of event-type and handler pairs for setting
 * multiple listeners at once:
 * 
 *     (listen! some-elem :click click-handler :hover hover-handler)
 */
dommy.core.listen_BANG_ = (function dommy$core$listen_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___23067 = arguments.length;
var i__4790__auto___23068 = (0);
while(true){
if((i__4790__auto___23068 < len__4789__auto___23067)){
args__4795__auto__.push((arguments[i__4790__auto___23068]));

var G__23069 = (i__4790__auto___23068 + (1));
i__4790__auto___23068 = G__23069;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__22988_23070 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_23071 = cljs.core.nth.call(null,vec__22988_23070,(0),null);
var selector_23072 = cljs.core.nth.call(null,vec__22988_23070,(1),null);
var seq__22991_23073 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__22998_23074 = null;
var count__22999_23075 = (0);
var i__23000_23076 = (0);
while(true){
if((i__23000_23076 < count__22999_23075)){
var vec__23037_23077 = cljs.core._nth.call(null,chunk__22998_23074,i__23000_23076);
var orig_type_23078 = cljs.core.nth.call(null,vec__23037_23077,(0),null);
var f_23079 = cljs.core.nth.call(null,vec__23037_23077,(1),null);
var seq__23001_23080 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_23078,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_23078,cljs.core.identity])));
var chunk__23003_23081 = null;
var count__23004_23082 = (0);
var i__23005_23083 = (0);
while(true){
if((i__23005_23083 < count__23004_23082)){
var vec__23046_23084 = cljs.core._nth.call(null,chunk__23003_23081,i__23005_23083);
var actual_type_23085 = cljs.core.nth.call(null,vec__23046_23084,(0),null);
var factory_23086 = cljs.core.nth.call(null,vec__23046_23084,(1),null);
var canonical_f_23087 = (cljs.core.truth_(selector_23072)?cljs.core.partial.call(null,dommy.core.live_listener,elem_23071,selector_23072):cljs.core.identity).call(null,factory_23086.call(null,f_23079));
dommy.core.update_event_listeners_BANG_.call(null,elem_23071,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_23072,actual_type_23085,f_23079], null),canonical_f_23087);

if(cljs.core.truth_(elem_23071.addEventListener)){
elem_23071.addEventListener(cljs.core.name.call(null,actual_type_23085),canonical_f_23087);
} else {
elem_23071.attachEvent(cljs.core.name.call(null,actual_type_23085),canonical_f_23087);
}


var G__23088 = seq__23001_23080;
var G__23089 = chunk__23003_23081;
var G__23090 = count__23004_23082;
var G__23091 = (i__23005_23083 + (1));
seq__23001_23080 = G__23088;
chunk__23003_23081 = G__23089;
count__23004_23082 = G__23090;
i__23005_23083 = G__23091;
continue;
} else {
var temp__5735__auto___23092 = cljs.core.seq.call(null,seq__23001_23080);
if(temp__5735__auto___23092){
var seq__23001_23093__$1 = temp__5735__auto___23092;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23001_23093__$1)){
var c__4609__auto___23094 = cljs.core.chunk_first.call(null,seq__23001_23093__$1);
var G__23095 = cljs.core.chunk_rest.call(null,seq__23001_23093__$1);
var G__23096 = c__4609__auto___23094;
var G__23097 = cljs.core.count.call(null,c__4609__auto___23094);
var G__23098 = (0);
seq__23001_23080 = G__23095;
chunk__23003_23081 = G__23096;
count__23004_23082 = G__23097;
i__23005_23083 = G__23098;
continue;
} else {
var vec__23049_23099 = cljs.core.first.call(null,seq__23001_23093__$1);
var actual_type_23100 = cljs.core.nth.call(null,vec__23049_23099,(0),null);
var factory_23101 = cljs.core.nth.call(null,vec__23049_23099,(1),null);
var canonical_f_23102 = (cljs.core.truth_(selector_23072)?cljs.core.partial.call(null,dommy.core.live_listener,elem_23071,selector_23072):cljs.core.identity).call(null,factory_23101.call(null,f_23079));
dommy.core.update_event_listeners_BANG_.call(null,elem_23071,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_23072,actual_type_23100,f_23079], null),canonical_f_23102);

if(cljs.core.truth_(elem_23071.addEventListener)){
elem_23071.addEventListener(cljs.core.name.call(null,actual_type_23100),canonical_f_23102);
} else {
elem_23071.attachEvent(cljs.core.name.call(null,actual_type_23100),canonical_f_23102);
}


var G__23103 = cljs.core.next.call(null,seq__23001_23093__$1);
var G__23104 = null;
var G__23105 = (0);
var G__23106 = (0);
seq__23001_23080 = G__23103;
chunk__23003_23081 = G__23104;
count__23004_23082 = G__23105;
i__23005_23083 = G__23106;
continue;
}
} else {
}
}
break;
}

var G__23107 = seq__22991_23073;
var G__23108 = chunk__22998_23074;
var G__23109 = count__22999_23075;
var G__23110 = (i__23000_23076 + (1));
seq__22991_23073 = G__23107;
chunk__22998_23074 = G__23108;
count__22999_23075 = G__23109;
i__23000_23076 = G__23110;
continue;
} else {
var temp__5735__auto___23111 = cljs.core.seq.call(null,seq__22991_23073);
if(temp__5735__auto___23111){
var seq__22991_23112__$1 = temp__5735__auto___23111;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22991_23112__$1)){
var c__4609__auto___23113 = cljs.core.chunk_first.call(null,seq__22991_23112__$1);
var G__23114 = cljs.core.chunk_rest.call(null,seq__22991_23112__$1);
var G__23115 = c__4609__auto___23113;
var G__23116 = cljs.core.count.call(null,c__4609__auto___23113);
var G__23117 = (0);
seq__22991_23073 = G__23114;
chunk__22998_23074 = G__23115;
count__22999_23075 = G__23116;
i__23000_23076 = G__23117;
continue;
} else {
var vec__23052_23118 = cljs.core.first.call(null,seq__22991_23112__$1);
var orig_type_23119 = cljs.core.nth.call(null,vec__23052_23118,(0),null);
var f_23120 = cljs.core.nth.call(null,vec__23052_23118,(1),null);
var seq__22992_23121 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_23119,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_23119,cljs.core.identity])));
var chunk__22994_23122 = null;
var count__22995_23123 = (0);
var i__22996_23124 = (0);
while(true){
if((i__22996_23124 < count__22995_23123)){
var vec__23061_23125 = cljs.core._nth.call(null,chunk__22994_23122,i__22996_23124);
var actual_type_23126 = cljs.core.nth.call(null,vec__23061_23125,(0),null);
var factory_23127 = cljs.core.nth.call(null,vec__23061_23125,(1),null);
var canonical_f_23128 = (cljs.core.truth_(selector_23072)?cljs.core.partial.call(null,dommy.core.live_listener,elem_23071,selector_23072):cljs.core.identity).call(null,factory_23127.call(null,f_23120));
dommy.core.update_event_listeners_BANG_.call(null,elem_23071,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_23072,actual_type_23126,f_23120], null),canonical_f_23128);

if(cljs.core.truth_(elem_23071.addEventListener)){
elem_23071.addEventListener(cljs.core.name.call(null,actual_type_23126),canonical_f_23128);
} else {
elem_23071.attachEvent(cljs.core.name.call(null,actual_type_23126),canonical_f_23128);
}


var G__23129 = seq__22992_23121;
var G__23130 = chunk__22994_23122;
var G__23131 = count__22995_23123;
var G__23132 = (i__22996_23124 + (1));
seq__22992_23121 = G__23129;
chunk__22994_23122 = G__23130;
count__22995_23123 = G__23131;
i__22996_23124 = G__23132;
continue;
} else {
var temp__5735__auto___23133__$1 = cljs.core.seq.call(null,seq__22992_23121);
if(temp__5735__auto___23133__$1){
var seq__22992_23134__$1 = temp__5735__auto___23133__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22992_23134__$1)){
var c__4609__auto___23135 = cljs.core.chunk_first.call(null,seq__22992_23134__$1);
var G__23136 = cljs.core.chunk_rest.call(null,seq__22992_23134__$1);
var G__23137 = c__4609__auto___23135;
var G__23138 = cljs.core.count.call(null,c__4609__auto___23135);
var G__23139 = (0);
seq__22992_23121 = G__23136;
chunk__22994_23122 = G__23137;
count__22995_23123 = G__23138;
i__22996_23124 = G__23139;
continue;
} else {
var vec__23064_23140 = cljs.core.first.call(null,seq__22992_23134__$1);
var actual_type_23141 = cljs.core.nth.call(null,vec__23064_23140,(0),null);
var factory_23142 = cljs.core.nth.call(null,vec__23064_23140,(1),null);
var canonical_f_23143 = (cljs.core.truth_(selector_23072)?cljs.core.partial.call(null,dommy.core.live_listener,elem_23071,selector_23072):cljs.core.identity).call(null,factory_23142.call(null,f_23120));
dommy.core.update_event_listeners_BANG_.call(null,elem_23071,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_23072,actual_type_23141,f_23120], null),canonical_f_23143);

if(cljs.core.truth_(elem_23071.addEventListener)){
elem_23071.addEventListener(cljs.core.name.call(null,actual_type_23141),canonical_f_23143);
} else {
elem_23071.attachEvent(cljs.core.name.call(null,actual_type_23141),canonical_f_23143);
}


var G__23144 = cljs.core.next.call(null,seq__22992_23134__$1);
var G__23145 = null;
var G__23146 = (0);
var G__23147 = (0);
seq__22992_23121 = G__23144;
chunk__22994_23122 = G__23145;
count__22995_23123 = G__23146;
i__22996_23124 = G__23147;
continue;
}
} else {
}
}
break;
}

var G__23148 = cljs.core.next.call(null,seq__22991_23112__$1);
var G__23149 = null;
var G__23150 = (0);
var G__23151 = (0);
seq__22991_23073 = G__23148;
chunk__22998_23074 = G__23149;
count__22999_23075 = G__23150;
i__23000_23076 = G__23151;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.listen_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq22986){
var G__22987 = cljs.core.first.call(null,seq22986);
var seq22986__$1 = cljs.core.next.call(null,seq22986);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22987,seq22986__$1);
}));

/**
 * Removes event listener for the element defined in `elem-sel`,
 * which is the same format as listen!.
 * 
 *   The following forms are allowed, and will remove all handlers
 *   that match the parameters passed in:
 * 
 *    (unlisten! [elem :.selector] :click event-listener)
 * 
 *    (unlisten! [elem :.selector]
 *      :click event-listener
 *      :mouseover other-event-listener)
 */
dommy.core.unlisten_BANG_ = (function dommy$core$unlisten_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___23233 = arguments.length;
var i__4790__auto___23234 = (0);
while(true){
if((i__4790__auto___23234 < len__4789__auto___23233)){
args__4795__auto__.push((arguments[i__4790__auto___23234]));

var G__23235 = (i__4790__auto___23234 + (1));
i__4790__auto___23234 = G__23235;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__23154_23236 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_23237 = cljs.core.nth.call(null,vec__23154_23236,(0),null);
var selector_23238 = cljs.core.nth.call(null,vec__23154_23236,(1),null);
var seq__23157_23239 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__23164_23240 = null;
var count__23165_23241 = (0);
var i__23166_23242 = (0);
while(true){
if((i__23166_23242 < count__23165_23241)){
var vec__23203_23243 = cljs.core._nth.call(null,chunk__23164_23240,i__23166_23242);
var orig_type_23244 = cljs.core.nth.call(null,vec__23203_23243,(0),null);
var f_23245 = cljs.core.nth.call(null,vec__23203_23243,(1),null);
var seq__23167_23246 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_23244,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_23244,cljs.core.identity])));
var chunk__23169_23247 = null;
var count__23170_23248 = (0);
var i__23171_23249 = (0);
while(true){
if((i__23171_23249 < count__23170_23248)){
var vec__23212_23250 = cljs.core._nth.call(null,chunk__23169_23247,i__23171_23249);
var actual_type_23251 = cljs.core.nth.call(null,vec__23212_23250,(0),null);
var __23252 = cljs.core.nth.call(null,vec__23212_23250,(1),null);
var keys_23253 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_23238,actual_type_23251,f_23245], null);
var canonical_f_23254 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_23237),keys_23253);
dommy.core.update_event_listeners_BANG_.call(null,elem_23237,dommy.utils.dissoc_in,keys_23253);

if(cljs.core.truth_(elem_23237.removeEventListener)){
elem_23237.removeEventListener(cljs.core.name.call(null,actual_type_23251),canonical_f_23254);
} else {
elem_23237.detachEvent(cljs.core.name.call(null,actual_type_23251),canonical_f_23254);
}


var G__23255 = seq__23167_23246;
var G__23256 = chunk__23169_23247;
var G__23257 = count__23170_23248;
var G__23258 = (i__23171_23249 + (1));
seq__23167_23246 = G__23255;
chunk__23169_23247 = G__23256;
count__23170_23248 = G__23257;
i__23171_23249 = G__23258;
continue;
} else {
var temp__5735__auto___23259 = cljs.core.seq.call(null,seq__23167_23246);
if(temp__5735__auto___23259){
var seq__23167_23260__$1 = temp__5735__auto___23259;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23167_23260__$1)){
var c__4609__auto___23261 = cljs.core.chunk_first.call(null,seq__23167_23260__$1);
var G__23262 = cljs.core.chunk_rest.call(null,seq__23167_23260__$1);
var G__23263 = c__4609__auto___23261;
var G__23264 = cljs.core.count.call(null,c__4609__auto___23261);
var G__23265 = (0);
seq__23167_23246 = G__23262;
chunk__23169_23247 = G__23263;
count__23170_23248 = G__23264;
i__23171_23249 = G__23265;
continue;
} else {
var vec__23215_23266 = cljs.core.first.call(null,seq__23167_23260__$1);
var actual_type_23267 = cljs.core.nth.call(null,vec__23215_23266,(0),null);
var __23268 = cljs.core.nth.call(null,vec__23215_23266,(1),null);
var keys_23269 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_23238,actual_type_23267,f_23245], null);
var canonical_f_23270 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_23237),keys_23269);
dommy.core.update_event_listeners_BANG_.call(null,elem_23237,dommy.utils.dissoc_in,keys_23269);

if(cljs.core.truth_(elem_23237.removeEventListener)){
elem_23237.removeEventListener(cljs.core.name.call(null,actual_type_23267),canonical_f_23270);
} else {
elem_23237.detachEvent(cljs.core.name.call(null,actual_type_23267),canonical_f_23270);
}


var G__23271 = cljs.core.next.call(null,seq__23167_23260__$1);
var G__23272 = null;
var G__23273 = (0);
var G__23274 = (0);
seq__23167_23246 = G__23271;
chunk__23169_23247 = G__23272;
count__23170_23248 = G__23273;
i__23171_23249 = G__23274;
continue;
}
} else {
}
}
break;
}

var G__23275 = seq__23157_23239;
var G__23276 = chunk__23164_23240;
var G__23277 = count__23165_23241;
var G__23278 = (i__23166_23242 + (1));
seq__23157_23239 = G__23275;
chunk__23164_23240 = G__23276;
count__23165_23241 = G__23277;
i__23166_23242 = G__23278;
continue;
} else {
var temp__5735__auto___23279 = cljs.core.seq.call(null,seq__23157_23239);
if(temp__5735__auto___23279){
var seq__23157_23280__$1 = temp__5735__auto___23279;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23157_23280__$1)){
var c__4609__auto___23281 = cljs.core.chunk_first.call(null,seq__23157_23280__$1);
var G__23282 = cljs.core.chunk_rest.call(null,seq__23157_23280__$1);
var G__23283 = c__4609__auto___23281;
var G__23284 = cljs.core.count.call(null,c__4609__auto___23281);
var G__23285 = (0);
seq__23157_23239 = G__23282;
chunk__23164_23240 = G__23283;
count__23165_23241 = G__23284;
i__23166_23242 = G__23285;
continue;
} else {
var vec__23218_23286 = cljs.core.first.call(null,seq__23157_23280__$1);
var orig_type_23287 = cljs.core.nth.call(null,vec__23218_23286,(0),null);
var f_23288 = cljs.core.nth.call(null,vec__23218_23286,(1),null);
var seq__23158_23289 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_23287,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_23287,cljs.core.identity])));
var chunk__23160_23290 = null;
var count__23161_23291 = (0);
var i__23162_23292 = (0);
while(true){
if((i__23162_23292 < count__23161_23291)){
var vec__23227_23293 = cljs.core._nth.call(null,chunk__23160_23290,i__23162_23292);
var actual_type_23294 = cljs.core.nth.call(null,vec__23227_23293,(0),null);
var __23295 = cljs.core.nth.call(null,vec__23227_23293,(1),null);
var keys_23296 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_23238,actual_type_23294,f_23288], null);
var canonical_f_23297 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_23237),keys_23296);
dommy.core.update_event_listeners_BANG_.call(null,elem_23237,dommy.utils.dissoc_in,keys_23296);

if(cljs.core.truth_(elem_23237.removeEventListener)){
elem_23237.removeEventListener(cljs.core.name.call(null,actual_type_23294),canonical_f_23297);
} else {
elem_23237.detachEvent(cljs.core.name.call(null,actual_type_23294),canonical_f_23297);
}


var G__23298 = seq__23158_23289;
var G__23299 = chunk__23160_23290;
var G__23300 = count__23161_23291;
var G__23301 = (i__23162_23292 + (1));
seq__23158_23289 = G__23298;
chunk__23160_23290 = G__23299;
count__23161_23291 = G__23300;
i__23162_23292 = G__23301;
continue;
} else {
var temp__5735__auto___23302__$1 = cljs.core.seq.call(null,seq__23158_23289);
if(temp__5735__auto___23302__$1){
var seq__23158_23303__$1 = temp__5735__auto___23302__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23158_23303__$1)){
var c__4609__auto___23304 = cljs.core.chunk_first.call(null,seq__23158_23303__$1);
var G__23305 = cljs.core.chunk_rest.call(null,seq__23158_23303__$1);
var G__23306 = c__4609__auto___23304;
var G__23307 = cljs.core.count.call(null,c__4609__auto___23304);
var G__23308 = (0);
seq__23158_23289 = G__23305;
chunk__23160_23290 = G__23306;
count__23161_23291 = G__23307;
i__23162_23292 = G__23308;
continue;
} else {
var vec__23230_23309 = cljs.core.first.call(null,seq__23158_23303__$1);
var actual_type_23310 = cljs.core.nth.call(null,vec__23230_23309,(0),null);
var __23311 = cljs.core.nth.call(null,vec__23230_23309,(1),null);
var keys_23312 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_23238,actual_type_23310,f_23288], null);
var canonical_f_23313 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_23237),keys_23312);
dommy.core.update_event_listeners_BANG_.call(null,elem_23237,dommy.utils.dissoc_in,keys_23312);

if(cljs.core.truth_(elem_23237.removeEventListener)){
elem_23237.removeEventListener(cljs.core.name.call(null,actual_type_23310),canonical_f_23313);
} else {
elem_23237.detachEvent(cljs.core.name.call(null,actual_type_23310),canonical_f_23313);
}


var G__23314 = cljs.core.next.call(null,seq__23158_23303__$1);
var G__23315 = null;
var G__23316 = (0);
var G__23317 = (0);
seq__23158_23289 = G__23314;
chunk__23160_23290 = G__23315;
count__23161_23291 = G__23316;
i__23162_23292 = G__23317;
continue;
}
} else {
}
}
break;
}

var G__23318 = cljs.core.next.call(null,seq__23157_23280__$1);
var G__23319 = null;
var G__23320 = (0);
var G__23321 = (0);
seq__23157_23239 = G__23318;
chunk__23164_23240 = G__23319;
count__23165_23241 = G__23320;
i__23166_23242 = G__23321;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.unlisten_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq23152){
var G__23153 = cljs.core.first.call(null,seq23152);
var seq23152__$1 = cljs.core.next.call(null,seq23152);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23153,seq23152__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___23343 = arguments.length;
var i__4790__auto___23344 = (0);
while(true){
if((i__4790__auto___23344 < len__4789__auto___23343)){
args__4795__auto__.push((arguments[i__4790__auto___23344]));

var G__23345 = (i__4790__auto___23344 + (1));
i__4790__auto___23344 = G__23345;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__23324_23346 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_23347 = cljs.core.nth.call(null,vec__23324_23346,(0),null);
var selector_23348 = cljs.core.nth.call(null,vec__23324_23346,(1),null);
var seq__23327_23349 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__23328_23350 = null;
var count__23329_23351 = (0);
var i__23330_23352 = (0);
while(true){
if((i__23330_23352 < count__23329_23351)){
var vec__23337_23353 = cljs.core._nth.call(null,chunk__23328_23350,i__23330_23352);
var type_23354 = cljs.core.nth.call(null,vec__23337_23353,(0),null);
var f_23355 = cljs.core.nth.call(null,vec__23337_23353,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_23354,((function (seq__23327_23349,chunk__23328_23350,count__23329_23351,i__23330_23352,vec__23337_23353,type_23354,f_23355,vec__23324_23346,elem_23347,selector_23348){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_23354,dommy$core$this_fn);

return f_23355.call(null,e);
});})(seq__23327_23349,chunk__23328_23350,count__23329_23351,i__23330_23352,vec__23337_23353,type_23354,f_23355,vec__23324_23346,elem_23347,selector_23348))
);


var G__23356 = seq__23327_23349;
var G__23357 = chunk__23328_23350;
var G__23358 = count__23329_23351;
var G__23359 = (i__23330_23352 + (1));
seq__23327_23349 = G__23356;
chunk__23328_23350 = G__23357;
count__23329_23351 = G__23358;
i__23330_23352 = G__23359;
continue;
} else {
var temp__5735__auto___23360 = cljs.core.seq.call(null,seq__23327_23349);
if(temp__5735__auto___23360){
var seq__23327_23361__$1 = temp__5735__auto___23360;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23327_23361__$1)){
var c__4609__auto___23362 = cljs.core.chunk_first.call(null,seq__23327_23361__$1);
var G__23363 = cljs.core.chunk_rest.call(null,seq__23327_23361__$1);
var G__23364 = c__4609__auto___23362;
var G__23365 = cljs.core.count.call(null,c__4609__auto___23362);
var G__23366 = (0);
seq__23327_23349 = G__23363;
chunk__23328_23350 = G__23364;
count__23329_23351 = G__23365;
i__23330_23352 = G__23366;
continue;
} else {
var vec__23340_23367 = cljs.core.first.call(null,seq__23327_23361__$1);
var type_23368 = cljs.core.nth.call(null,vec__23340_23367,(0),null);
var f_23369 = cljs.core.nth.call(null,vec__23340_23367,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_23368,((function (seq__23327_23349,chunk__23328_23350,count__23329_23351,i__23330_23352,vec__23340_23367,type_23368,f_23369,seq__23327_23361__$1,temp__5735__auto___23360,vec__23324_23346,elem_23347,selector_23348){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_23368,dommy$core$this_fn);

return f_23369.call(null,e);
});})(seq__23327_23349,chunk__23328_23350,count__23329_23351,i__23330_23352,vec__23340_23367,type_23368,f_23369,seq__23327_23361__$1,temp__5735__auto___23360,vec__23324_23346,elem_23347,selector_23348))
);


var G__23370 = cljs.core.next.call(null,seq__23327_23361__$1);
var G__23371 = null;
var G__23372 = (0);
var G__23373 = (0);
seq__23327_23349 = G__23370;
chunk__23328_23350 = G__23371;
count__23329_23351 = G__23372;
i__23330_23352 = G__23373;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.listen_once_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq23322){
var G__23323 = cljs.core.first.call(null,seq23322);
var seq23322__$1 = cljs.core.next.call(null,seq23322);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23323,seq23322__$1);
}));


//# sourceMappingURL=core.js.map?rel=1588466956148
