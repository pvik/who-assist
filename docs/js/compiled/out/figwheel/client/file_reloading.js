// Compiled by ClojureScript 1.10.597 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4185__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4185__auto__){
return or__4185__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__4185__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return ((goog.string.startsWith("clojure.",name)) || (goog.string.startsWith("goog.",name)));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__28720_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__28720_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,(function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
}));
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,(function (v,k,_){
return goog.object.forEach(v,(function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__28721 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__28722 = null;
var count__28723 = (0);
var i__28724 = (0);
while(true){
if((i__28724 < count__28723)){
var n = cljs.core._nth.call(null,chunk__28722,i__28724);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__28725 = seq__28721;
var G__28726 = chunk__28722;
var G__28727 = count__28723;
var G__28728 = (i__28724 + (1));
seq__28721 = G__28725;
chunk__28722 = G__28726;
count__28723 = G__28727;
i__28724 = G__28728;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__28721);
if(temp__5735__auto__){
var seq__28721__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28721__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__28721__$1);
var G__28729 = cljs.core.chunk_rest.call(null,seq__28721__$1);
var G__28730 = c__4609__auto__;
var G__28731 = cljs.core.count.call(null,c__4609__auto__);
var G__28732 = (0);
seq__28721 = G__28729;
chunk__28722 = G__28730;
count__28723 = G__28731;
i__28724 = G__28732;
continue;
} else {
var n = cljs.core.first.call(null,seq__28721__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__28733 = cljs.core.next.call(null,seq__28721__$1);
var G__28734 = null;
var G__28735 = (0);
var G__28736 = (0);
seq__28721 = G__28733;
chunk__28722 = G__28734;
count__28723 = G__28735;
i__28724 = G__28736;
continue;
}
} else {
return null;
}
}
break;
}
}));
}));
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__28737){
var vec__28738 = p__28737;
var _ = cljs.core.nth.call(null,vec__28738,(0),null);
var v = cljs.core.nth.call(null,vec__28738,(1),null);
var and__4174__auto__ = v;
if(cljs.core.truth_(and__4174__auto__)){
return v.call(null,dep);
} else {
return and__4174__auto__;
}
}),cljs.core.filter.call(null,(function (p__28741){
var vec__28742 = p__28741;
var k = cljs.core.nth.call(null,vec__28742,(0),null);
var v = cljs.core.nth.call(null,vec__28742,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});
var topo_sort_STAR_ = (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__28754_28762 = cljs.core.seq.call(null,deps);
var chunk__28755_28763 = null;
var count__28756_28764 = (0);
var i__28757_28765 = (0);
while(true){
if((i__28757_28765 < count__28756_28764)){
var dep_28766 = cljs.core._nth.call(null,chunk__28755_28763,i__28757_28765);
if(cljs.core.truth_((function (){var and__4174__auto__ = dep_28766;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_28766));
} else {
return and__4174__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_28766,(depth + (1)),state);
} else {
}


var G__28767 = seq__28754_28762;
var G__28768 = chunk__28755_28763;
var G__28769 = count__28756_28764;
var G__28770 = (i__28757_28765 + (1));
seq__28754_28762 = G__28767;
chunk__28755_28763 = G__28768;
count__28756_28764 = G__28769;
i__28757_28765 = G__28770;
continue;
} else {
var temp__5735__auto___28771 = cljs.core.seq.call(null,seq__28754_28762);
if(temp__5735__auto___28771){
var seq__28754_28772__$1 = temp__5735__auto___28771;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28754_28772__$1)){
var c__4609__auto___28773 = cljs.core.chunk_first.call(null,seq__28754_28772__$1);
var G__28774 = cljs.core.chunk_rest.call(null,seq__28754_28772__$1);
var G__28775 = c__4609__auto___28773;
var G__28776 = cljs.core.count.call(null,c__4609__auto___28773);
var G__28777 = (0);
seq__28754_28762 = G__28774;
chunk__28755_28763 = G__28775;
count__28756_28764 = G__28776;
i__28757_28765 = G__28777;
continue;
} else {
var dep_28778 = cljs.core.first.call(null,seq__28754_28772__$1);
if(cljs.core.truth_((function (){var and__4174__auto__ = dep_28778;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_28778));
} else {
return and__4174__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_28778,(depth + (1)),state);
} else {
}


var G__28779 = cljs.core.next.call(null,seq__28754_28772__$1);
var G__28780 = null;
var G__28781 = (0);
var G__28782 = (0);
seq__28754_28762 = G__28779;
chunk__28755_28763 = G__28780;
count__28756_28764 = G__28781;
i__28757_28765 = G__28782;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;
var elim_dups_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__28758){
var vec__28759 = p__28758;
var seq__28760 = cljs.core.seq.call(null,vec__28759);
var first__28761 = cljs.core.first.call(null,seq__28760);
var seq__28760__$1 = cljs.core.next.call(null,seq__28760);
var x = first__28761;
var xs = seq__28760__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,(function (p1__28745_SHARP_){
return clojure.set.difference.call(null,p1__28745_SHARP_,x);
}),xs)));
}
});
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__28783 = cljs.core.seq.call(null,provides);
var chunk__28784 = null;
var count__28785 = (0);
var i__28786 = (0);
while(true){
if((i__28786 < count__28785)){
var prov = cljs.core._nth.call(null,chunk__28784,i__28786);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28795_28803 = cljs.core.seq.call(null,requires);
var chunk__28796_28804 = null;
var count__28797_28805 = (0);
var i__28798_28806 = (0);
while(true){
if((i__28798_28806 < count__28797_28805)){
var req_28807 = cljs.core._nth.call(null,chunk__28796_28804,i__28798_28806);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28807,prov);


var G__28808 = seq__28795_28803;
var G__28809 = chunk__28796_28804;
var G__28810 = count__28797_28805;
var G__28811 = (i__28798_28806 + (1));
seq__28795_28803 = G__28808;
chunk__28796_28804 = G__28809;
count__28797_28805 = G__28810;
i__28798_28806 = G__28811;
continue;
} else {
var temp__5735__auto___28812 = cljs.core.seq.call(null,seq__28795_28803);
if(temp__5735__auto___28812){
var seq__28795_28813__$1 = temp__5735__auto___28812;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28795_28813__$1)){
var c__4609__auto___28814 = cljs.core.chunk_first.call(null,seq__28795_28813__$1);
var G__28815 = cljs.core.chunk_rest.call(null,seq__28795_28813__$1);
var G__28816 = c__4609__auto___28814;
var G__28817 = cljs.core.count.call(null,c__4609__auto___28814);
var G__28818 = (0);
seq__28795_28803 = G__28815;
chunk__28796_28804 = G__28816;
count__28797_28805 = G__28817;
i__28798_28806 = G__28818;
continue;
} else {
var req_28819 = cljs.core.first.call(null,seq__28795_28813__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28819,prov);


var G__28820 = cljs.core.next.call(null,seq__28795_28813__$1);
var G__28821 = null;
var G__28822 = (0);
var G__28823 = (0);
seq__28795_28803 = G__28820;
chunk__28796_28804 = G__28821;
count__28797_28805 = G__28822;
i__28798_28806 = G__28823;
continue;
}
} else {
}
}
break;
}


var G__28824 = seq__28783;
var G__28825 = chunk__28784;
var G__28826 = count__28785;
var G__28827 = (i__28786 + (1));
seq__28783 = G__28824;
chunk__28784 = G__28825;
count__28785 = G__28826;
i__28786 = G__28827;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__28783);
if(temp__5735__auto__){
var seq__28783__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28783__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__28783__$1);
var G__28828 = cljs.core.chunk_rest.call(null,seq__28783__$1);
var G__28829 = c__4609__auto__;
var G__28830 = cljs.core.count.call(null,c__4609__auto__);
var G__28831 = (0);
seq__28783 = G__28828;
chunk__28784 = G__28829;
count__28785 = G__28830;
i__28786 = G__28831;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28783__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28799_28832 = cljs.core.seq.call(null,requires);
var chunk__28800_28833 = null;
var count__28801_28834 = (0);
var i__28802_28835 = (0);
while(true){
if((i__28802_28835 < count__28801_28834)){
var req_28836 = cljs.core._nth.call(null,chunk__28800_28833,i__28802_28835);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28836,prov);


var G__28837 = seq__28799_28832;
var G__28838 = chunk__28800_28833;
var G__28839 = count__28801_28834;
var G__28840 = (i__28802_28835 + (1));
seq__28799_28832 = G__28837;
chunk__28800_28833 = G__28838;
count__28801_28834 = G__28839;
i__28802_28835 = G__28840;
continue;
} else {
var temp__5735__auto___28841__$1 = cljs.core.seq.call(null,seq__28799_28832);
if(temp__5735__auto___28841__$1){
var seq__28799_28842__$1 = temp__5735__auto___28841__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28799_28842__$1)){
var c__4609__auto___28843 = cljs.core.chunk_first.call(null,seq__28799_28842__$1);
var G__28844 = cljs.core.chunk_rest.call(null,seq__28799_28842__$1);
var G__28845 = c__4609__auto___28843;
var G__28846 = cljs.core.count.call(null,c__4609__auto___28843);
var G__28847 = (0);
seq__28799_28832 = G__28844;
chunk__28800_28833 = G__28845;
count__28801_28834 = G__28846;
i__28802_28835 = G__28847;
continue;
} else {
var req_28848 = cljs.core.first.call(null,seq__28799_28842__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28848,prov);


var G__28849 = cljs.core.next.call(null,seq__28799_28842__$1);
var G__28850 = null;
var G__28851 = (0);
var G__28852 = (0);
seq__28799_28832 = G__28849;
chunk__28800_28833 = G__28850;
count__28801_28834 = G__28851;
i__28802_28835 = G__28852;
continue;
}
} else {
}
}
break;
}


var G__28853 = cljs.core.next.call(null,seq__28783__$1);
var G__28854 = null;
var G__28855 = (0);
var G__28856 = (0);
seq__28783 = G__28853;
chunk__28784 = G__28854;
count__28785 = G__28855;
i__28786 = G__28856;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
(goog.require = figwheel.client.file_reloading.figwheel_require);

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__28857_28861 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__28858_28862 = null;
var count__28859_28863 = (0);
var i__28860_28864 = (0);
while(true){
if((i__28860_28864 < count__28859_28863)){
var ns_28865 = cljs.core._nth.call(null,chunk__28858_28862,i__28860_28864);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28865);


var G__28866 = seq__28857_28861;
var G__28867 = chunk__28858_28862;
var G__28868 = count__28859_28863;
var G__28869 = (i__28860_28864 + (1));
seq__28857_28861 = G__28866;
chunk__28858_28862 = G__28867;
count__28859_28863 = G__28868;
i__28860_28864 = G__28869;
continue;
} else {
var temp__5735__auto___28870 = cljs.core.seq.call(null,seq__28857_28861);
if(temp__5735__auto___28870){
var seq__28857_28871__$1 = temp__5735__auto___28870;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28857_28871__$1)){
var c__4609__auto___28872 = cljs.core.chunk_first.call(null,seq__28857_28871__$1);
var G__28873 = cljs.core.chunk_rest.call(null,seq__28857_28871__$1);
var G__28874 = c__4609__auto___28872;
var G__28875 = cljs.core.count.call(null,c__4609__auto___28872);
var G__28876 = (0);
seq__28857_28861 = G__28873;
chunk__28858_28862 = G__28874;
count__28859_28863 = G__28875;
i__28860_28864 = G__28876;
continue;
} else {
var ns_28877 = cljs.core.first.call(null,seq__28857_28871__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28877);


var G__28878 = cljs.core.next.call(null,seq__28857_28871__$1);
var G__28879 = null;
var G__28880 = (0);
var G__28881 = (0);
seq__28857_28861 = G__28878;
chunk__28858_28862 = G__28879;
count__28859_28863 = G__28880;
i__28860_28864 = G__28881;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
(goog.require_figwheel_backup_ = (function (){var or__4185__auto__ = goog.require__;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.require;
}
})());

(goog.isProvided_ = (function (name){
return false;
}));

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

(goog.addDependency_figwheel_backup_ = goog.addDependency);

(goog.addDependency = (function() { 
var G__28882__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__28882 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28883__i = 0, G__28883__a = new Array(arguments.length -  0);
while (G__28883__i < G__28883__a.length) {G__28883__a[G__28883__i] = arguments[G__28883__i + 0]; ++G__28883__i;}
  args = new cljs.core.IndexedSeq(G__28883__a,0,null);
} 
return G__28882__delegate.call(this,args);};
G__28882.cljs$lang$maxFixedArity = 0;
G__28882.cljs$lang$applyTo = (function (arglist__28884){
var args = cljs.core.seq(arglist__28884);
return G__28882__delegate(args);
});
G__28882.cljs$core$IFn$_invoke$arity$variadic = G__28882__delegate;
return G__28882;
})()
);

goog.constructNamespace_("cljs.user");

(goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload);

return (goog.require = figwheel.client.file_reloading.figwheel_require);
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__28885_SHARP_,p2__28886_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28885_SHARP_)),p2__28886_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__28887_SHARP_,p2__28888_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28887_SHARP_),p2__28888_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__28889 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__28889.addCallback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
}));

G__28889.addErrback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
}));

return G__28889;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e28890){if((e28890 instanceof Error)){
var e = e28890;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28890;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,(function (v,k,o){
return goog.string.endsWith(k,util_pattern);
}));
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e28891){if((e28891 instanceof Error)){
var e = e28891;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28891;

}
}})());
});
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__28892 = cljs.core._EQ_;
var expr__28893 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__28892.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__28893))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__28892.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__28893))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__28892.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__28893))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return (function (a,b){
throw "Reload not defined for this platform";
});
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__28895,callback){
var map__28896 = p__28895;
var map__28896__$1 = (((((!((map__28896 == null))))?(((((map__28896.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28896.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28896):map__28896);
var file_msg = map__28896__$1;
var request_url = cljs.core.get.call(null,map__28896__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4185__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,(function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
}));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),(function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__24962__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24963__auto__ = (function (){var switch__24888__auto__ = (function (state_28934){
var state_val_28935 = (state_28934[(1)]);
if((state_val_28935 === (7))){
var inst_28930 = (state_28934[(2)]);
var state_28934__$1 = state_28934;
var statearr_28936_28963 = state_28934__$1;
(statearr_28936_28963[(2)] = inst_28930);

(statearr_28936_28963[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28935 === (1))){
var state_28934__$1 = state_28934;
var statearr_28937_28964 = state_28934__$1;
(statearr_28937_28964[(2)] = null);

(statearr_28937_28964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28935 === (4))){
var inst_28900 = (state_28934[(7)]);
var inst_28900__$1 = (state_28934[(2)]);
var state_28934__$1 = (function (){var statearr_28938 = state_28934;
(statearr_28938[(7)] = inst_28900__$1);

return statearr_28938;
})();
if(cljs.core.truth_(inst_28900__$1)){
var statearr_28939_28965 = state_28934__$1;
(statearr_28939_28965[(1)] = (5));

} else {
var statearr_28940_28966 = state_28934__$1;
(statearr_28940_28966[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28935 === (15))){
var inst_28913 = (state_28934[(8)]);
var inst_28915 = (state_28934[(9)]);
var inst_28917 = inst_28915.call(null,inst_28913);
var state_28934__$1 = state_28934;
var statearr_28941_28967 = state_28934__$1;
(statearr_28941_28967[(2)] = inst_28917);

(statearr_28941_28967[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28935 === (13))){
var inst_28924 = (state_28934[(2)]);
var state_28934__$1 = state_28934;
var statearr_28942_28968 = state_28934__$1;
(statearr_28942_28968[(2)] = inst_28924);

(statearr_28942_28968[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28935 === (6))){
var state_28934__$1 = state_28934;
var statearr_28943_28969 = state_28934__$1;
(statearr_28943_28969[(2)] = null);

(statearr_28943_28969[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28935 === (17))){
var inst_28921 = (state_28934[(2)]);
var state_28934__$1 = state_28934;
var statearr_28944_28970 = state_28934__$1;
(statearr_28944_28970[(2)] = inst_28921);

(statearr_28944_28970[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28935 === (3))){
var inst_28932 = (state_28934[(2)]);
var state_28934__$1 = state_28934;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28934__$1,inst_28932);
} else {
if((state_val_28935 === (12))){
var state_28934__$1 = state_28934;
var statearr_28945_28971 = state_28934__$1;
(statearr_28945_28971[(2)] = null);

(statearr_28945_28971[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28935 === (2))){
var state_28934__$1 = state_28934;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28934__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_28935 === (11))){
var inst_28905 = (state_28934[(10)]);
var inst_28911 = figwheel.client.file_reloading.blocking_load.call(null,inst_28905);
var state_28934__$1 = state_28934;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28934__$1,(14),inst_28911);
} else {
if((state_val_28935 === (9))){
var inst_28905 = (state_28934[(10)]);
var state_28934__$1 = state_28934;
if(cljs.core.truth_(inst_28905)){
var statearr_28946_28972 = state_28934__$1;
(statearr_28946_28972[(1)] = (11));

} else {
var statearr_28947_28973 = state_28934__$1;
(statearr_28947_28973[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28935 === (5))){
var inst_28900 = (state_28934[(7)]);
var inst_28906 = (state_28934[(11)]);
var inst_28905 = cljs.core.nth.call(null,inst_28900,(0),null);
var inst_28906__$1 = cljs.core.nth.call(null,inst_28900,(1),null);
var state_28934__$1 = (function (){var statearr_28948 = state_28934;
(statearr_28948[(10)] = inst_28905);

(statearr_28948[(11)] = inst_28906__$1);

return statearr_28948;
})();
if(cljs.core.truth_(inst_28906__$1)){
var statearr_28949_28974 = state_28934__$1;
(statearr_28949_28974[(1)] = (8));

} else {
var statearr_28950_28975 = state_28934__$1;
(statearr_28950_28975[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28935 === (14))){
var inst_28905 = (state_28934[(10)]);
var inst_28915 = (state_28934[(9)]);
var inst_28913 = (state_28934[(2)]);
var inst_28914 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_28915__$1 = cljs.core.get.call(null,inst_28914,inst_28905);
var state_28934__$1 = (function (){var statearr_28951 = state_28934;
(statearr_28951[(8)] = inst_28913);

(statearr_28951[(9)] = inst_28915__$1);

return statearr_28951;
})();
if(cljs.core.truth_(inst_28915__$1)){
var statearr_28952_28976 = state_28934__$1;
(statearr_28952_28976[(1)] = (15));

} else {
var statearr_28953_28977 = state_28934__$1;
(statearr_28953_28977[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28935 === (16))){
var inst_28913 = (state_28934[(8)]);
var inst_28919 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_28913);
var state_28934__$1 = state_28934;
var statearr_28954_28978 = state_28934__$1;
(statearr_28954_28978[(2)] = inst_28919);

(statearr_28954_28978[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28935 === (10))){
var inst_28926 = (state_28934[(2)]);
var state_28934__$1 = (function (){var statearr_28955 = state_28934;
(statearr_28955[(12)] = inst_28926);

return statearr_28955;
})();
var statearr_28956_28979 = state_28934__$1;
(statearr_28956_28979[(2)] = null);

(statearr_28956_28979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28935 === (8))){
var inst_28906 = (state_28934[(11)]);
var inst_28908 = eval(inst_28906);
var state_28934__$1 = state_28934;
var statearr_28957_28980 = state_28934__$1;
(statearr_28957_28980[(2)] = inst_28908);

(statearr_28957_28980[(1)] = (10));


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
var figwheel$client$file_reloading$state_machine__24889__auto__ = null;
var figwheel$client$file_reloading$state_machine__24889__auto____0 = (function (){
var statearr_28958 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28958[(0)] = figwheel$client$file_reloading$state_machine__24889__auto__);

(statearr_28958[(1)] = (1));

return statearr_28958;
});
var figwheel$client$file_reloading$state_machine__24889__auto____1 = (function (state_28934){
while(true){
var ret_value__24890__auto__ = (function (){try{while(true){
var result__24891__auto__ = switch__24888__auto__.call(null,state_28934);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24891__auto__;
}
break;
}
}catch (e28959){var ex__24892__auto__ = e28959;
var statearr_28960_28981 = state_28934;
(statearr_28960_28981[(2)] = ex__24892__auto__);


if(cljs.core.seq.call(null,(state_28934[(4)]))){
var statearr_28961_28982 = state_28934;
(statearr_28961_28982[(1)] = cljs.core.first.call(null,(state_28934[(4)])));

} else {
throw ex__24892__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28983 = state_28934;
state_28934 = G__28983;
continue;
} else {
return ret_value__24890__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__24889__auto__ = function(state_28934){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__24889__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__24889__auto____1.call(this,state_28934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__24889__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__24889__auto____0;
figwheel$client$file_reloading$state_machine__24889__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__24889__auto____1;
return figwheel$client$file_reloading$state_machine__24889__auto__;
})()
})();
var state__24964__auto__ = (function (){var statearr_28962 = f__24963__auto__.call(null);
(statearr_28962[(6)] = c__24962__auto__);

return statearr_28962;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24964__auto__);
}));

return c__24962__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__28985 = arguments.length;
switch (G__28985) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2);

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__28987,callback){
var map__28988 = p__28987;
var map__28988__$1 = (((((!((map__28988 == null))))?(((((map__28988.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28988.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28988):map__28988);
var file_msg = map__28988__$1;
var namespace = cljs.core.get.call(null,map__28988__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,(function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
}));

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__28990){
var map__28991 = p__28990;
var map__28991__$1 = (((((!((map__28991 == null))))?(((((map__28991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28991.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28991):map__28991);
var file_msg = map__28991__$1;
var namespace = cljs.core.get.call(null,map__28991__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__28993){
var map__28994 = p__28993;
var map__28994__$1 = (((((!((map__28994 == null))))?(((((map__28994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28994.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28994):map__28994);
var file_msg = map__28994__$1;
var namespace = cljs.core.get.call(null,map__28994__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if(cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg))){
var or__4185__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var or__4185__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4185__auto____$1)){
return or__4185__auto____$1;
} else {
var or__4185__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4185__auto____$2)){
return or__4185__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return false;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__28996,callback){
var map__28997 = p__28996;
var map__28997__$1 = (((((!((map__28997 == null))))?(((((map__28997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28997.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28997):map__28997);
var file_msg = map__28997__$1;
var request_url = cljs.core.get.call(null,map__28997__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__28997__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,(function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__24962__auto___29049 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24963__auto__ = (function (){var switch__24888__auto__ = (function (state_29033){
var state_val_29034 = (state_29033[(1)]);
if((state_val_29034 === (1))){
var inst_29006 = files;
var inst_29007 = cljs.core.seq.call(null,inst_29006);
var inst_29008 = cljs.core.first.call(null,inst_29007);
var inst_29009 = cljs.core.next.call(null,inst_29007);
var inst_29010 = inst_29006;
var state_29033__$1 = (function (){var statearr_29035 = state_29033;
(statearr_29035[(7)] = inst_29008);

(statearr_29035[(8)] = inst_29009);

(statearr_29035[(9)] = inst_29010);

return statearr_29035;
})();
var statearr_29036_29050 = state_29033__$1;
(statearr_29036_29050[(2)] = null);

(statearr_29036_29050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29034 === (2))){
var inst_29016 = (state_29033[(10)]);
var inst_29010 = (state_29033[(9)]);
var inst_29015 = cljs.core.seq.call(null,inst_29010);
var inst_29016__$1 = cljs.core.first.call(null,inst_29015);
var inst_29017 = cljs.core.next.call(null,inst_29015);
var inst_29018 = (inst_29016__$1 == null);
var inst_29019 = cljs.core.not.call(null,inst_29018);
var state_29033__$1 = (function (){var statearr_29037 = state_29033;
(statearr_29037[(10)] = inst_29016__$1);

(statearr_29037[(11)] = inst_29017);

return statearr_29037;
})();
if(inst_29019){
var statearr_29038_29051 = state_29033__$1;
(statearr_29038_29051[(1)] = (4));

} else {
var statearr_29039_29052 = state_29033__$1;
(statearr_29039_29052[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29034 === (3))){
var inst_29031 = (state_29033[(2)]);
var state_29033__$1 = state_29033;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29033__$1,inst_29031);
} else {
if((state_val_29034 === (4))){
var inst_29016 = (state_29033[(10)]);
var inst_29021 = figwheel.client.file_reloading.reload_js_file.call(null,inst_29016);
var state_29033__$1 = state_29033;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29033__$1,(7),inst_29021);
} else {
if((state_val_29034 === (5))){
var inst_29027 = cljs.core.async.close_BANG_.call(null,out);
var state_29033__$1 = state_29033;
var statearr_29040_29053 = state_29033__$1;
(statearr_29040_29053[(2)] = inst_29027);

(statearr_29040_29053[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29034 === (6))){
var inst_29029 = (state_29033[(2)]);
var state_29033__$1 = state_29033;
var statearr_29041_29054 = state_29033__$1;
(statearr_29041_29054[(2)] = inst_29029);

(statearr_29041_29054[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29034 === (7))){
var inst_29017 = (state_29033[(11)]);
var inst_29023 = (state_29033[(2)]);
var inst_29024 = cljs.core.async.put_BANG_.call(null,out,inst_29023);
var inst_29010 = inst_29017;
var state_29033__$1 = (function (){var statearr_29042 = state_29033;
(statearr_29042[(12)] = inst_29024);

(statearr_29042[(9)] = inst_29010);

return statearr_29042;
})();
var statearr_29043_29055 = state_29033__$1;
(statearr_29043_29055[(2)] = null);

(statearr_29043_29055[(1)] = (2));


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
});
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24889__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24889__auto____0 = (function (){
var statearr_29044 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29044[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24889__auto__);

(statearr_29044[(1)] = (1));

return statearr_29044;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24889__auto____1 = (function (state_29033){
while(true){
var ret_value__24890__auto__ = (function (){try{while(true){
var result__24891__auto__ = switch__24888__auto__.call(null,state_29033);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24891__auto__;
}
break;
}
}catch (e29045){var ex__24892__auto__ = e29045;
var statearr_29046_29056 = state_29033;
(statearr_29046_29056[(2)] = ex__24892__auto__);


if(cljs.core.seq.call(null,(state_29033[(4)]))){
var statearr_29047_29057 = state_29033;
(statearr_29047_29057[(1)] = cljs.core.first.call(null,(state_29033[(4)])));

} else {
throw ex__24892__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29058 = state_29033;
state_29033 = G__29058;
continue;
} else {
return ret_value__24890__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24889__auto__ = function(state_29033){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24889__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24889__auto____1.call(this,state_29033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24889__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24889__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24889__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24889__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24889__auto__;
})()
})();
var state__24964__auto__ = (function (){var statearr_29048 = f__24963__auto__.call(null);
(statearr_29048[(6)] = c__24962__auto___29049);

return statearr_29048;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24964__auto__);
}));


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__29059,opts){
var map__29060 = p__29059;
var map__29060__$1 = (((((!((map__29060 == null))))?(((((map__29060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29060.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29060):map__29060);
var eval_body = cljs.core.get.call(null,map__29060__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__29060__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4174__auto__ = eval_body;
if(cljs.core.truth_(and__4174__auto__)){
return typeof eval_body === 'string';
} else {
return and__4174__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e29062){var e = e29062;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,(function (n){
var temp__5733__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__29063_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29063_SHARP_),n);
}),files));
if(cljs.core.truth_(temp__5733__auto__)){
var file_msg = temp__5733__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
}),deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__29064){
var vec__29065 = p__29064;
var k = cljs.core.nth.call(null,vec__29065,(0),null);
var v = cljs.core.nth.call(null,vec__29065,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__29068){
var vec__29069 = p__29068;
var k = cljs.core.nth.call(null,vec__29069,(0),null);
var v = cljs.core.nth.call(null,vec__29069,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__29075,p__29076){
var map__29077 = p__29075;
var map__29077__$1 = (((((!((map__29077 == null))))?(((((map__29077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29077):map__29077);
var opts = map__29077__$1;
var before_jsload = cljs.core.get.call(null,map__29077__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__29077__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__29077__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__29078 = p__29076;
var map__29078__$1 = (((((!((map__29078 == null))))?(((((map__29078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29078.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29078):map__29078);
var msg = map__29078__$1;
var files = cljs.core.get.call(null,map__29078__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__29078__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__29078__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__24962__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24963__auto__ = (function (){var switch__24888__auto__ = (function (state_29233){
var state_val_29234 = (state_29233[(1)]);
if((state_val_29234 === (7))){
var inst_29094 = (state_29233[(7)]);
var inst_29093 = (state_29233[(8)]);
var inst_29095 = (state_29233[(9)]);
var inst_29092 = (state_29233[(10)]);
var inst_29100 = cljs.core._nth.call(null,inst_29093,inst_29095);
var inst_29101 = figwheel.client.file_reloading.eval_body.call(null,inst_29100,opts);
var inst_29102 = (inst_29095 + (1));
var tmp29235 = inst_29094;
var tmp29236 = inst_29093;
var tmp29237 = inst_29092;
var inst_29092__$1 = tmp29237;
var inst_29093__$1 = tmp29236;
var inst_29094__$1 = tmp29235;
var inst_29095__$1 = inst_29102;
var state_29233__$1 = (function (){var statearr_29238 = state_29233;
(statearr_29238[(7)] = inst_29094__$1);

(statearr_29238[(8)] = inst_29093__$1);

(statearr_29238[(11)] = inst_29101);

(statearr_29238[(9)] = inst_29095__$1);

(statearr_29238[(10)] = inst_29092__$1);

return statearr_29238;
})();
var statearr_29239_29323 = state_29233__$1;
(statearr_29239_29323[(2)] = null);

(statearr_29239_29323[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29234 === (20))){
var inst_29135 = (state_29233[(12)]);
var inst_29144 = figwheel.client.file_reloading.sort_files.call(null,inst_29135);
var state_29233__$1 = state_29233;
var statearr_29240_29324 = state_29233__$1;
(statearr_29240_29324[(2)] = inst_29144);

(statearr_29240_29324[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29234 === (27))){
var state_29233__$1 = state_29233;
var statearr_29241_29325 = state_29233__$1;
(statearr_29241_29325[(2)] = null);

(statearr_29241_29325[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29234 === (1))){
var inst_29084 = (state_29233[(13)]);
var inst_29081 = before_jsload.call(null,files);
var inst_29082 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_29083 = (function (){return (function (p1__29072_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29072_SHARP_);
});
})();
var inst_29084__$1 = cljs.core.filter.call(null,inst_29083,files);
var inst_29085 = cljs.core.not_empty.call(null,inst_29084__$1);
var state_29233__$1 = (function (){var statearr_29242 = state_29233;
(statearr_29242[(14)] = inst_29082);

(statearr_29242[(15)] = inst_29081);

(statearr_29242[(13)] = inst_29084__$1);

return statearr_29242;
})();
if(cljs.core.truth_(inst_29085)){
var statearr_29243_29326 = state_29233__$1;
(statearr_29243_29326[(1)] = (2));

} else {
var statearr_29244_29327 = state_29233__$1;
(statearr_29244_29327[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29234 === (24))){
var state_29233__$1 = state_29233;
var statearr_29245_29328 = state_29233__$1;
(statearr_29245_29328[(2)] = null);

(statearr_29245_29328[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29234 === (39))){
var inst_29186 = (state_29233[(16)]);
var state_29233__$1 = state_29233;
var statearr_29246_29329 = state_29233__$1;
(statearr_29246_29329[(2)] = inst_29186);

(statearr_29246_29329[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29234 === (46))){
var inst_29228 = (state_29233[(2)]);
var state_29233__$1 = state_29233;
var statearr_29247_29330 = state_29233__$1;
(statearr_29247_29330[(2)] = inst_29228);

(statearr_29247_29330[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29234 === (4))){
var inst_29136 = (state_29233[(17)]);
var inst_29129 = (state_29233[(2)]);
var inst_29130 = cljs.core.List.EMPTY;
var inst_29131 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_29130);
var inst_29132 = (function (){return (function (p1__29073_SHARP_){
var and__4174__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29073_SHARP_);
if(cljs.core.truth_(and__4174__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29073_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__29073_SHARP_))));
} else {
return and__4174__auto__;
}
});
})();
var inst_29133 = cljs.core.filter.call(null,inst_29132,files);
var inst_29134 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_29135 = cljs.core.concat.call(null,inst_29133,inst_29134);
var inst_29136__$1 = reload_dependents;
var state_29233__$1 = (function (){var statearr_29248 = state_29233;
(statearr_29248[(18)] = inst_29131);

(statearr_29248[(12)] = inst_29135);

(statearr_29248[(19)] = inst_29129);

(statearr_29248[(17)] = inst_29136__$1);

return statearr_29248;
})();
if(cljs.core.truth_(inst_29136__$1)){
var statearr_29249_29331 = state_29233__$1;
(statearr_29249_29331[(1)] = (16));

} else {
var statearr_29250_29332 = state_29233__$1;
(statearr_29250_29332[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29234 === (15))){
var inst_29119 = (state_29233[(2)]);
var state_29233__$1 = state_29233;
var statearr_29251_29333 = state_29233__$1;
(statearr_29251_29333[(2)] = inst_29119);

(statearr_29251_29333[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29234 === (21))){
var inst_29146 = (state_29233[(20)]);
var inst_29146__$1 = (state_29233[(2)]);
var inst_29147 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29146__$1);
var state_29233__$1 = (function (){var statearr_29252 = state_29233;
(statearr_29252[(20)] = inst_29146__$1);

return statearr_29252;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29233__$1,(22),inst_29147);
} else {
if((state_val_29234 === (31))){
var inst_29231 = (state_29233[(2)]);
var state_29233__$1 = state_29233;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29233__$1,inst_29231);
} else {
if((state_val_29234 === (32))){
var inst_29186 = (state_29233[(16)]);
var inst_29191 = inst_29186.cljs$lang$protocol_mask$partition0$;
var inst_29192 = (inst_29191 & (64));
var inst_29193 = inst_29186.cljs$core$ISeq$;
var inst_29194 = (cljs.core.PROTOCOL_SENTINEL === inst_29193);
var inst_29195 = ((inst_29192) || (inst_29194));
var state_29233__$1 = state_29233;
if(cljs.core.truth_(inst_29195)){
var statearr_29253_29334 = state_29233__$1;
(statearr_29253_29334[(1)] = (35));

} else {
var statearr_29254_29335 = state_29233__$1;
(statearr_29254_29335[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29234 === (40))){
var inst_29208 = (state_29233[(21)]);
var inst_29207 = (state_29233[(2)]);
var inst_29208__$1 = cljs.core.get.call(null,inst_29207,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29209 = cljs.core.get.call(null,inst_29207,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29210 = cljs.core.not_empty.call(null,inst_29208__$1);
var state_29233__$1 = (function (){var statearr_29255 = state_29233;
(statearr_29255[(21)] = inst_29208__$1);

(statearr_29255[(22)] = inst_29209);

return statearr_29255;
})();
if(cljs.core.truth_(inst_29210)){
var statearr_29256_29336 = state_29233__$1;
(statearr_29256_29336[(1)] = (41));

} else {
var statearr_29257_29337 = state_29233__$1;
(statearr_29257_29337[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29234 === (33))){
var state_29233__$1 = state_29233;
var statearr_29258_29338 = state_29233__$1;
(statearr_29258_29338[(2)] = false);

(statearr_29258_29338[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29234 === (13))){
var inst_29105 = (state_29233[(23)]);
var inst_29109 = cljs.core.chunk_first.call(null,inst_29105);
var inst_29110 = cljs.core.chunk_rest.call(null,inst_29105);
var inst_29111 = cljs.core.count.call(null,inst_29109);
var inst_29092 = inst_29110;
var inst_29093 = inst_29109;
var inst_29094 = inst_29111;
var inst_29095 = (0);
var state_29233__$1 = (function (){var statearr_29259 = state_29233;
(statearr_29259[(7)] = inst_29094);

(statearr_29259[(8)] = inst_29093);

(statearr_29259[(9)] = inst_29095);

(statearr_29259[(10)] = inst_29092);

return statearr_29259;
})();
var statearr_29260_29339 = state_29233__$1;
(statearr_29260_29339[(2)] = null);

(statearr_29260_29339[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29234 === (22))){
var inst_29146 = (state_29233[(20)]);
var inst_29154 = (state_29233[(24)]);
var inst_29149 = (state_29233[(25)]);
var inst_29150 = (state_29233[(26)]);
var inst_29149__$1 = (state_29233[(2)]);
var inst_29150__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29149__$1);
var inst_29151 = (function (){var all_files = inst_29146;
var res_SINGLEQUOTE_ = inst_29149__$1;
var res = inst_29150__$1;
return (function (p1__29074_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__29074_SHARP_));
});
})();
var inst_29152 = cljs.core.filter.call(null,inst_29151,inst_29149__$1);
var inst_29153 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_29154__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29153);
var inst_29155 = cljs.core.not_empty.call(null,inst_29154__$1);
var state_29233__$1 = (function (){var statearr_29261 = state_29233;
(statearr_29261[(27)] = inst_29152);

(statearr_29261[(24)] = inst_29154__$1);

(statearr_29261[(25)] = inst_29149__$1);

(statearr_29261[(26)] = inst_29150__$1);

return statearr_29261;
})();
if(cljs.core.truth_(inst_29155)){
var statearr_29262_29340 = state_29233__$1;
(statearr_29262_29340[(1)] = (23));

} else {
var statearr_29263_29341 = state_29233__$1;
(statearr_29263_29341[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29234 === (36))){
var state_29233__$1 = state_29233;
var statearr_29264_29342 = state_29233__$1;
(statearr_29264_29342[(2)] = false);

(statearr_29264_29342[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29234 === (41))){
var inst_29208 = (state_29233[(21)]);
var inst_29212 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_29213 = cljs.core.map.call(null,inst_29212,inst_29208);
var inst_29214 = cljs.core.pr_str.call(null,inst_29213);
var inst_29215 = ["figwheel-no-load meta-data: ",inst_29214].join('');
var inst_29216 = figwheel.client.utils.log.call(null,inst_29215);
var state_29233__$1 = state_29233;
var statearr_29265_29343 = state_29233__$1;
(statearr_29265_29343[(2)] = inst_29216);

(statearr_29265_29343[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29234 === (43))){
var inst_29209 = (state_29233[(22)]);
var inst_29219 = (state_29233[(2)]);
var inst_29220 = cljs.core.not_empty.call(null,inst_29209);
var state_29233__$1 = (function (){var statearr_29266 = state_29233;
(statearr_29266[(28)] = inst_29219);

return statearr_29266;
})();
if(cljs.core.truth_(inst_29220)){
var statearr_29267_29344 = state_29233__$1;
(statearr_29267_29344[(1)] = (44));

} else {
var statearr_29268_29345 = state_29233__$1;
(statearr_29268_29345[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29234 === (29))){
var inst_29146 = (state_29233[(20)]);
var inst_29152 = (state_29233[(27)]);
var inst_29186 = (state_29233[(16)]);
var inst_29154 = (state_29233[(24)]);
var inst_29149 = (state_29233[(25)]);
var inst_29150 = (state_29233[(26)]);
var inst_29182 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29185 = (function (){var all_files = inst_29146;
var res_SINGLEQUOTE_ = inst_29149;
var res = inst_29150;
var files_not_loaded = inst_29152;
var dependencies_that_loaded = inst_29154;
return (function (p__29184){
var map__29269 = p__29184;
var map__29269__$1 = (((((!((map__29269 == null))))?(((((map__29269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29269):map__29269);
var namespace = cljs.core.get.call(null,map__29269__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
})();
var inst_29186__$1 = cljs.core.group_by.call(null,inst_29185,inst_29152);
var inst_29188 = (inst_29186__$1 == null);
var inst_29189 = cljs.core.not.call(null,inst_29188);
var state_29233__$1 = (function (){var statearr_29271 = state_29233;
(statearr_29271[(29)] = inst_29182);

(statearr_29271[(16)] = inst_29186__$1);

return statearr_29271;
})();
if(inst_29189){
var statearr_29272_29346 = state_29233__$1;
(statearr_29272_29346[(1)] = (32));

} else {
var statearr_29273_29347 = state_29233__$1;
(statearr_29273_29347[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29234 === (44))){
var inst_29209 = (state_29233[(22)]);
var inst_29222 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29209);
var inst_29223 = cljs.core.pr_str.call(null,inst_29222);
var inst_29224 = ["not required: ",inst_29223].join('');
var inst_29225 = figwheel.client.utils.log.call(null,inst_29224);
var state_29233__$1 = state_29233;
var statearr_29274_29348 = state_29233__$1;
(statearr_29274_29348[(2)] = inst_29225);

(statearr_29274_29348[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29234 === (6))){
var inst_29126 = (state_29233[(2)]);
var state_29233__$1 = state_29233;
var statearr_29275_29349 = state_29233__$1;
(statearr_29275_29349[(2)] = inst_29126);

(statearr_29275_29349[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29234 === (28))){
var inst_29152 = (state_29233[(27)]);
var inst_29179 = (state_29233[(2)]);
var inst_29180 = cljs.core.not_empty.call(null,inst_29152);
var state_29233__$1 = (function (){var statearr_29276 = state_29233;
(statearr_29276[(30)] = inst_29179);

return statearr_29276;
})();
if(cljs.core.truth_(inst_29180)){
var statearr_29277_29350 = state_29233__$1;
(statearr_29277_29350[(1)] = (29));

} else {
var statearr_29278_29351 = state_29233__$1;
(statearr_29278_29351[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29234 === (25))){
var inst_29150 = (state_29233[(26)]);
var inst_29166 = (state_29233[(2)]);
var inst_29167 = cljs.core.not_empty.call(null,inst_29150);
var state_29233__$1 = (function (){var statearr_29279 = state_29233;
(statearr_29279[(31)] = inst_29166);

return statearr_29279;
})();
if(cljs.core.truth_(inst_29167)){
var statearr_29280_29352 = state_29233__$1;
(statearr_29280_29352[(1)] = (26));

} else {
var statearr_29281_29353 = state_29233__$1;
(statearr_29281_29353[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29234 === (34))){
var inst_29202 = (state_29233[(2)]);
var state_29233__$1 = state_29233;
if(cljs.core.truth_(inst_29202)){
var statearr_29282_29354 = state_29233__$1;
(statearr_29282_29354[(1)] = (38));

} else {
var statearr_29283_29355 = state_29233__$1;
(statearr_29283_29355[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29234 === (17))){
var state_29233__$1 = state_29233;
var statearr_29284_29356 = state_29233__$1;
(statearr_29284_29356[(2)] = recompile_dependents);

(statearr_29284_29356[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29234 === (3))){
var state_29233__$1 = state_29233;
var statearr_29285_29357 = state_29233__$1;
(statearr_29285_29357[(2)] = null);

(statearr_29285_29357[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29234 === (12))){
var inst_29122 = (state_29233[(2)]);
var state_29233__$1 = state_29233;
var statearr_29286_29358 = state_29233__$1;
(statearr_29286_29358[(2)] = inst_29122);

(statearr_29286_29358[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29234 === (2))){
var inst_29084 = (state_29233[(13)]);
var inst_29091 = cljs.core.seq.call(null,inst_29084);
var inst_29092 = inst_29091;
var inst_29093 = null;
var inst_29094 = (0);
var inst_29095 = (0);
var state_29233__$1 = (function (){var statearr_29287 = state_29233;
(statearr_29287[(7)] = inst_29094);

(statearr_29287[(8)] = inst_29093);

(statearr_29287[(9)] = inst_29095);

(statearr_29287[(10)] = inst_29092);

return statearr_29287;
})();
var statearr_29288_29359 = state_29233__$1;
(statearr_29288_29359[(2)] = null);

(statearr_29288_29359[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29234 === (23))){
var inst_29146 = (state_29233[(20)]);
var inst_29152 = (state_29233[(27)]);
var inst_29154 = (state_29233[(24)]);
var inst_29149 = (state_29233[(25)]);
var inst_29150 = (state_29233[(26)]);
var inst_29157 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_29159 = (function (){var all_files = inst_29146;
var res_SINGLEQUOTE_ = inst_29149;
var res = inst_29150;
var files_not_loaded = inst_29152;
var dependencies_that_loaded = inst_29154;
return (function (p__29158){
var map__29289 = p__29158;
var map__29289__$1 = (((((!((map__29289 == null))))?(((((map__29289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29289.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29289):map__29289);
var request_url = cljs.core.get.call(null,map__29289__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
})();
var inst_29160 = cljs.core.reverse.call(null,inst_29154);
var inst_29161 = cljs.core.map.call(null,inst_29159,inst_29160);
var inst_29162 = cljs.core.pr_str.call(null,inst_29161);
var inst_29163 = figwheel.client.utils.log.call(null,inst_29162);
var state_29233__$1 = (function (){var statearr_29291 = state_29233;
(statearr_29291[(32)] = inst_29157);

return statearr_29291;
})();
var statearr_29292_29360 = state_29233__$1;
(statearr_29292_29360[(2)] = inst_29163);

(statearr_29292_29360[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29234 === (35))){
var state_29233__$1 = state_29233;
var statearr_29293_29361 = state_29233__$1;
(statearr_29293_29361[(2)] = true);

(statearr_29293_29361[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29234 === (19))){
var inst_29135 = (state_29233[(12)]);
var inst_29142 = figwheel.client.file_reloading.expand_files.call(null,inst_29135);
var state_29233__$1 = state_29233;
var statearr_29294_29362 = state_29233__$1;
(statearr_29294_29362[(2)] = inst_29142);

(statearr_29294_29362[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29234 === (11))){
var state_29233__$1 = state_29233;
var statearr_29295_29363 = state_29233__$1;
(statearr_29295_29363[(2)] = null);

(statearr_29295_29363[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29234 === (9))){
var inst_29124 = (state_29233[(2)]);
var state_29233__$1 = state_29233;
var statearr_29296_29364 = state_29233__$1;
(statearr_29296_29364[(2)] = inst_29124);

(statearr_29296_29364[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29234 === (5))){
var inst_29094 = (state_29233[(7)]);
var inst_29095 = (state_29233[(9)]);
var inst_29097 = (inst_29095 < inst_29094);
var inst_29098 = inst_29097;
var state_29233__$1 = state_29233;
if(cljs.core.truth_(inst_29098)){
var statearr_29297_29365 = state_29233__$1;
(statearr_29297_29365[(1)] = (7));

} else {
var statearr_29298_29366 = state_29233__$1;
(statearr_29298_29366[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29234 === (14))){
var inst_29105 = (state_29233[(23)]);
var inst_29114 = cljs.core.first.call(null,inst_29105);
var inst_29115 = figwheel.client.file_reloading.eval_body.call(null,inst_29114,opts);
var inst_29116 = cljs.core.next.call(null,inst_29105);
var inst_29092 = inst_29116;
var inst_29093 = null;
var inst_29094 = (0);
var inst_29095 = (0);
var state_29233__$1 = (function (){var statearr_29299 = state_29233;
(statearr_29299[(7)] = inst_29094);

(statearr_29299[(33)] = inst_29115);

(statearr_29299[(8)] = inst_29093);

(statearr_29299[(9)] = inst_29095);

(statearr_29299[(10)] = inst_29092);

return statearr_29299;
})();
var statearr_29300_29367 = state_29233__$1;
(statearr_29300_29367[(2)] = null);

(statearr_29300_29367[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29234 === (45))){
var state_29233__$1 = state_29233;
var statearr_29301_29368 = state_29233__$1;
(statearr_29301_29368[(2)] = null);

(statearr_29301_29368[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29234 === (26))){
var inst_29146 = (state_29233[(20)]);
var inst_29152 = (state_29233[(27)]);
var inst_29154 = (state_29233[(24)]);
var inst_29149 = (state_29233[(25)]);
var inst_29150 = (state_29233[(26)]);
var inst_29169 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29171 = (function (){var all_files = inst_29146;
var res_SINGLEQUOTE_ = inst_29149;
var res = inst_29150;
var files_not_loaded = inst_29152;
var dependencies_that_loaded = inst_29154;
return (function (p__29170){
var map__29302 = p__29170;
var map__29302__$1 = (((((!((map__29302 == null))))?(((((map__29302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29302.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29302):map__29302);
var namespace = cljs.core.get.call(null,map__29302__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__29302__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
})();
var inst_29172 = cljs.core.map.call(null,inst_29171,inst_29150);
var inst_29173 = cljs.core.pr_str.call(null,inst_29172);
var inst_29174 = figwheel.client.utils.log.call(null,inst_29173);
var inst_29175 = (function (){var all_files = inst_29146;
var res_SINGLEQUOTE_ = inst_29149;
var res = inst_29150;
var files_not_loaded = inst_29152;
var dependencies_that_loaded = inst_29154;
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
})();
var inst_29176 = setTimeout(inst_29175,(10));
var state_29233__$1 = (function (){var statearr_29304 = state_29233;
(statearr_29304[(34)] = inst_29174);

(statearr_29304[(35)] = inst_29169);

return statearr_29304;
})();
var statearr_29305_29369 = state_29233__$1;
(statearr_29305_29369[(2)] = inst_29176);

(statearr_29305_29369[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29234 === (16))){
var inst_29136 = (state_29233[(17)]);
var state_29233__$1 = state_29233;
var statearr_29306_29370 = state_29233__$1;
(statearr_29306_29370[(2)] = inst_29136);

(statearr_29306_29370[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29234 === (38))){
var inst_29186 = (state_29233[(16)]);
var inst_29204 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29186);
var state_29233__$1 = state_29233;
var statearr_29307_29371 = state_29233__$1;
(statearr_29307_29371[(2)] = inst_29204);

(statearr_29307_29371[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29234 === (30))){
var state_29233__$1 = state_29233;
var statearr_29308_29372 = state_29233__$1;
(statearr_29308_29372[(2)] = null);

(statearr_29308_29372[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29234 === (10))){
var inst_29105 = (state_29233[(23)]);
var inst_29107 = cljs.core.chunked_seq_QMARK_.call(null,inst_29105);
var state_29233__$1 = state_29233;
if(inst_29107){
var statearr_29309_29373 = state_29233__$1;
(statearr_29309_29373[(1)] = (13));

} else {
var statearr_29310_29374 = state_29233__$1;
(statearr_29310_29374[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29234 === (18))){
var inst_29140 = (state_29233[(2)]);
var state_29233__$1 = state_29233;
if(cljs.core.truth_(inst_29140)){
var statearr_29311_29375 = state_29233__$1;
(statearr_29311_29375[(1)] = (19));

} else {
var statearr_29312_29376 = state_29233__$1;
(statearr_29312_29376[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29234 === (42))){
var state_29233__$1 = state_29233;
var statearr_29313_29377 = state_29233__$1;
(statearr_29313_29377[(2)] = null);

(statearr_29313_29377[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29234 === (37))){
var inst_29199 = (state_29233[(2)]);
var state_29233__$1 = state_29233;
var statearr_29314_29378 = state_29233__$1;
(statearr_29314_29378[(2)] = inst_29199);

(statearr_29314_29378[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29234 === (8))){
var inst_29105 = (state_29233[(23)]);
var inst_29092 = (state_29233[(10)]);
var inst_29105__$1 = cljs.core.seq.call(null,inst_29092);
var state_29233__$1 = (function (){var statearr_29315 = state_29233;
(statearr_29315[(23)] = inst_29105__$1);

return statearr_29315;
})();
if(inst_29105__$1){
var statearr_29316_29379 = state_29233__$1;
(statearr_29316_29379[(1)] = (10));

} else {
var statearr_29317_29380 = state_29233__$1;
(statearr_29317_29380[(1)] = (11));

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
}
});
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24889__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24889__auto____0 = (function (){
var statearr_29318 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29318[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__24889__auto__);

(statearr_29318[(1)] = (1));

return statearr_29318;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24889__auto____1 = (function (state_29233){
while(true){
var ret_value__24890__auto__ = (function (){try{while(true){
var result__24891__auto__ = switch__24888__auto__.call(null,state_29233);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24891__auto__;
}
break;
}
}catch (e29319){var ex__24892__auto__ = e29319;
var statearr_29320_29381 = state_29233;
(statearr_29320_29381[(2)] = ex__24892__auto__);


if(cljs.core.seq.call(null,(state_29233[(4)]))){
var statearr_29321_29382 = state_29233;
(statearr_29321_29382[(1)] = cljs.core.first.call(null,(state_29233[(4)])));

} else {
throw ex__24892__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29383 = state_29233;
state_29233 = G__29383;
continue;
} else {
return ret_value__24890__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__24889__auto__ = function(state_29233){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24889__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24889__auto____1.call(this,state_29233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__24889__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24889__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__24889__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24889__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24889__auto__;
})()
})();
var state__24964__auto__ = (function (){var statearr_29322 = f__24963__auto__.call(null);
(statearr_29322[(6)] = c__24962__auto__);

return statearr_29322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24964__auto__);
}));

return c__24962__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29386,link){
var map__29387 = p__29386;
var map__29387__$1 = (((((!((map__29387 == null))))?(((((map__29387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29387.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29387):map__29387);
var file = cljs.core.get.call(null,map__29387__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5735__auto__ = link.href;
if(cljs.core.truth_(temp__5735__auto__)){
var link_href = temp__5735__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__29384_SHARP_,p2__29385_SHARP_){
if(cljs.core._EQ_.call(null,p1__29384_SHARP_,p2__29385_SHARP_)){
return p1__29384_SHARP_;
} else {
return false;
}
}),cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = ((match).length);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),((figwheel.client.file_reloading.truncate_url.call(null,link_href)).length)], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5735__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29390){
var map__29391 = p__29390;
var map__29391__$1 = (((((!((map__29391 == null))))?(((((map__29391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29391.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29391):map__29391);
var match_length = cljs.core.get.call(null,map__29391__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__29391__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29389_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29389_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5735__auto__)){
var res = temp__5735__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
(clone.rel = "stylesheet");

(clone.media = link.media);

(clone.disabled = link.disabled);

(clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
(link.rel = "stylesheet");

(link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__29393_SHARP_,p2__29394_SHARP_){
return cljs.core.assoc.call(null,p1__29393_SHARP_,cljs.core.get.call(null,p2__29394_SHARP_,key),p2__29394_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout((function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
}),(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5733__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5733__auto__)){
var link = temp__5733__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),(function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
}));
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_29395 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_29395);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_29395);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29396,p__29397){
var map__29398 = p__29396;
var map__29398__$1 = (((((!((map__29398 == null))))?(((((map__29398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29398):map__29398);
var on_cssload = cljs.core.get.call(null,map__29398__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__29399 = p__29397;
var map__29399__$1 = (((((!((map__29399 == null))))?(((((map__29399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29399.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29399):map__29399);
var files_msg = map__29399__$1;
var files = cljs.core.get.call(null,map__29399__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5735__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5735__auto__)){
var f_datas = temp__5735__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1588466960798
