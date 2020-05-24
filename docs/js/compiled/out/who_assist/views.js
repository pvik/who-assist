// Compiled by ClojureScript 1.10.597 {}
goog.provide('who_assist.views');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('dommy.core');
if((typeof who_assist !== 'undefined') && (typeof who_assist.views !== 'undefined') && (typeof who_assist.views.substances !== 'undefined')){
} else {
who_assist.views.substances = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.Keyword(null,"j","j",-1397974765),new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.Keyword(null,"a","a",-2123407586)],["Amphetamine type stimulants (speed, diet pills, ecstasy, etc.)","Sedatives or Sleeping Pills (Valium, Serepax, Rohypnol, etc.)","Cannabis (marijuana, pot, grass, hash, etc.)","Other","Hallucinogens (LSD, acid, mushrooms, PCP, Special K, etc.)","Alcoholic beverages (beer, wine, spirits, etc.)","Cocaine (coke, crack, etc.)","Inhalants (nitrous, glue, petrol, paint thinner, etc.)","Opioids (heroin, morphine, methadone, codeine, etc.)","Tobacco products (cigarettes, chewing tobacco, cigars, etc.)"]);
}
if((typeof who_assist !== 'undefined') && (typeof who_assist.views !== 'undefined') && (typeof who_assist.views.questions !== 'undefined')){
} else {
who_assist.views.questions = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"1","1",-521621649),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"question","question",-1411720117),"In your life, which of the following substances have you ever used? (NON-MEDICAL USE ONLY)",new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, ["No",(0),"Yes",(3)], null),new cljs.core.Keyword(null,"notes","notes",-1039600523),"if completing follow-up please cross check the patient\u2019s answers with the answers given for Q1 at baseline. Any differences on this question should be queried"], null),new cljs.core.Keyword(null,"2","2",-1645882217),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"In the past three months, how often have you used the substances you mentioned?",new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 5, ["Never",(0),"Once/Twice",(2),"Monthly",(3),"Weekly",(4),"Daily/Mostly Daily",(6)], null)], null),new cljs.core.Keyword(null,"3","3",2097825370),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"During the past three months, how often have you had a strong desire or urge to use?",new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 5, ["Never",(0),"Once/Twice",(3),"Monthly",(4),"Weekly",(5),"Daily/Mostly Daily",(6)], null)], null),new cljs.core.Keyword(null,"4","4",-1197948085),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"During the past three months, how often has your use of substances you mentioned led to health, social, legal, or financial problems?",new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 5, ["Never",(0),"Once/Twice",(4),"Monthly",(5),"Weekly",(6),"Daily/Mostly Daily",(7)], null)], null),new cljs.core.Keyword(null,"5","5",538911032),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"During the past three months, how often have you failed to do what was normally expected of you because of your use of substances?",new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 5, ["Never",(0),"Once/Twice",(5),"Monthly",(6),"Weekly",(7),"Daily/Mostly Daily",(8)], null)], null),new cljs.core.Keyword(null,"6","6",-1107752709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"Has a friend or relative ever expressed concerned concern about your use of substances?",new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 3, ["Never",(0),"Yes, in past 3 months",(6),"Yes, but not in past 3 months",(3)], null)], null),new cljs.core.Keyword(null,"7","7",993885869),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"Have you ever tried and failed to control, cut down or stop using substances?",new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 3, ["Never",(0),"Yes, in past 3 months",(6),"Yes, but not in past 3 months",(3)], null)], null),new cljs.core.Keyword(null,"8","8",1405994928),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"Have you ever used any drug by injection?",new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 3, ["Never",(0),"Yes, in past 3 months",(0),"Yes, but not in past 3 months",(0)], null)], null)], null);
}
who_assist.views.q_score = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
who_assist.views.visible_substance = reagent.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
who_assist.views.lvl2_substances = reagent.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
who_assist.views.lvl1 = reagent.core.atom.call(null,false);
who_assist.views.lvl2 = reagent.core.atom.call(null,false);
who_assist.views.set_lvl1 = (function who_assist$views$set_lvl1(){
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,who_assist.views.visible_substance)),(0))){
return cljs.core.reset_BANG_.call(null,who_assist.views.lvl1,false);
} else {
return cljs.core.reset_BANG_.call(null,who_assist.views.lvl1,true);
}
});
who_assist.views.set_lvl2 = (function who_assist$views$set_lvl2(){
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,who_assist.views.lvl2_substances)),(0))){
return cljs.core.reset_BANG_.call(null,who_assist.views.lvl2,false);
} else {
return cljs.core.reset_BANG_.call(null,who_assist.views.lvl2,true);
}
});
who_assist.views.question = (function who_assist$views$question(n){
var q1_QMARK_ = cljs.core._EQ_.call(null,n,(1));
var q2_QMARK_ = cljs.core._EQ_.call(null,n,(2));
var q8_QMARK_ = cljs.core._EQ_.call(null,n,(8));
var lvl2_q_QMARK_ = (((n > (2))) && ((n < (6))));
var scorable_QMARK_ = (((n > (1))) && ((n < (8))));
var q_kw = cljs.core.keyword.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(n));
var q_map = q_kw.call(null,who_assist.views.questions);
var q = new cljs.core.Keyword(null,"question","question",-1411720117).cljs$core$IFn$_invoke$arity$1(q_map);
var q_opts = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(q_map);
var q_notes = new cljs.core.Keyword(null,"notes","notes",-1039600523).cljs$core$IFn$_invoke$arity$1(q_map);
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col","div.col",-1800797011),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),["q",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel","div.panel",-1677992199),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-header","div.panel-header",-2088122937),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),["Question ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h6","h6",557293780),cljs.core.str.cljs$core$IFn$_invoke$arity$1(q)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-body","div.panel-body",-4468178),(cljs.core.truth_(q_notes)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),q_notes], null)], null):null),cljs.core.doall.call(null,(function (){var iter__4582__auto__ = (function who_assist$views$question_$_iter__27882(s__27883){
return (new cljs.core.LazySeq(null,(function (){
var s__27883__$1 = s__27883;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__27883__$1);
if(temp__5735__auto__){
var s__27883__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27883__$2)){
var c__4580__auto__ = cljs.core.chunk_first.call(null,s__27883__$2);
var size__4581__auto__ = cljs.core.count.call(null,c__4580__auto__);
var b__27885 = cljs.core.chunk_buffer.call(null,size__4581__auto__);
if((function (){var i__27884 = (0);
while(true){
if((i__27884 < size__4581__auto__)){
var ss = cljs.core._nth.call(null,c__4580__auto__,i__27884);
var ss_name = cljs.core.second.call(null,ss);
var ss_kw = cljs.core.first.call(null,ss);
if(((q1_QMARK_) || (q8_QMARK_) || ((((!(lvl2_q_QMARK_))) && (cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,who_assist.views.visible_substance),ss_kw)))) || (((lvl2_q_QMARK_) && (cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,who_assist.views.lvl2_substances),ss_kw)))))){
cljs.core.chunk_append.call(null,b__27885,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-control-group","div.form-control-group",1302477851),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-control.grow-3x","div.form-control.grow-3x",1081474451),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),[((q8_QMARK_)?"":[cljs.core.name.call(null,ss_kw),". "].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ss_name)].join('')], null),((((cljs.core._EQ_.call(null,n,(1))) && (cljs.core._EQ_.call(null,ss_name,"Other"))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"other",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Other"], null)], null):null)], null),cljs.core.doall.call(null,(function (){var iter__4582__auto__ = ((function (i__27884,s__27883__$1,ss_name,ss_kw,ss,c__4580__auto__,size__4581__auto__,b__27885,s__27883__$2,temp__5735__auto__,q1_QMARK_,q2_QMARK_,q8_QMARK_,lvl2_q_QMARK_,scorable_QMARK_,q_kw,q_map,q,q_opts,q_notes){
return (function who_assist$views$question_$_iter__27882_$_iter__27886(s__27887){
return (new cljs.core.LazySeq(null,((function (i__27884,s__27883__$1,ss_name,ss_kw,ss,c__4580__auto__,size__4581__auto__,b__27885,s__27883__$2,temp__5735__auto__,q1_QMARK_,q2_QMARK_,q8_QMARK_,lvl2_q_QMARK_,scorable_QMARK_,q_kw,q_map,q,q_opts,q_notes){
return (function (){
var s__27887__$1 = s__27887;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__27887__$1);
if(temp__5735__auto____$1){
var s__27887__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27887__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first.call(null,s__27887__$2);
var size__4581__auto____$1 = cljs.core.count.call(null,c__4580__auto____$1);
var b__27889 = cljs.core.chunk_buffer.call(null,size__4581__auto____$1);
if((function (){var i__27888 = (0);
while(true){
if((i__27888 < size__4581__auto____$1)){
var opt_kv = cljs.core._nth.call(null,c__4580__auto____$1,i__27888);
var opt = cljs.core.first.call(null,opt_kv);
var opt_val = cljs.core.second.call(null,opt_kv);
cljs.core.chunk_append.call(null,b__27889,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-control","div.form-control",-2082825974),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"radio","radio",1323726374),new cljs.core.Keyword(null,"value","value",305978217),opt_val,new cljs.core.Keyword(null,"name","name",1843675177),["q",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),cljs.core.name.call(null,ss_kw)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__27888,i__27884,s__27883__$1,opt,opt_val,opt_kv,c__4580__auto____$1,size__4581__auto____$1,b__27889,s__27887__$2,temp__5735__auto____$1,ss_name,ss_kw,ss,c__4580__auto__,size__4581__auto__,b__27885,s__27883__$2,temp__5735__auto__,q1_QMARK_,q2_QMARK_,q8_QMARK_,lvl2_q_QMARK_,scorable_QMARK_,q_kw,q_map,q,q_opts,q_notes){
return (function (){
if(q1_QMARK_){
var G__27890_27898 = opt;
switch (G__27890_27898) {
case "Yes":
cljs.core.swap_BANG_.call(null,who_assist.views.visible_substance,cljs.core.conj,ss_kw);

who_assist.views.set_lvl1.call(null);

break;
case "No":
cljs.core.swap_BANG_.call(null,who_assist.views.visible_substance,cljs.core.disj,ss_kw);

who_assist.views.set_lvl1.call(null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27890_27898)].join('')));

}
} else {
}

if(q2_QMARK_){
if(cljs.core._EQ_.call(null,opt,"Never")){
cljs.core.swap_BANG_.call(null,who_assist.views.lvl2_substances,cljs.core.disj,ss_kw);

who_assist.views.set_lvl2.call(null);
} else {
cljs.core.swap_BANG_.call(null,who_assist.views.lvl2_substances,cljs.core.conj,ss_kw);

who_assist.views.set_lvl2.call(null);
}
} else {
}

if(scorable_QMARK_){
return cljs.core.swap_BANG_.call(null,who_assist.views.q_score,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [q_kw,ss_kw], null),opt_val);
} else {
return null;
}
});})(i__27888,i__27884,s__27883__$1,opt,opt_val,opt_kv,c__4580__auto____$1,size__4581__auto____$1,b__27889,s__27887__$2,temp__5735__auto____$1,ss_name,ss_kw,ss,c__4580__auto__,size__4581__auto__,b__27885,s__27883__$2,temp__5735__auto__,q1_QMARK_,q2_QMARK_,q8_QMARK_,lvl2_q_QMARK_,scorable_QMARK_,q_kw,q_map,q,q_opts,q_notes))
], null)], null),opt], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["q",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),cljs.core.name.call(null,ss_kw),cljs.core.str.cljs$core$IFn$_invoke$arity$1(opt_val)].join('')], null)));

var G__27900 = (i__27888 + (1));
i__27888 = G__27900;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27889),who_assist$views$question_$_iter__27882_$_iter__27886.call(null,cljs.core.chunk_rest.call(null,s__27887__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27889),null);
}
} else {
var opt_kv = cljs.core.first.call(null,s__27887__$2);
var opt = cljs.core.first.call(null,opt_kv);
var opt_val = cljs.core.second.call(null,opt_kv);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-control","div.form-control",-2082825974),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"radio","radio",1323726374),new cljs.core.Keyword(null,"value","value",305978217),opt_val,new cljs.core.Keyword(null,"name","name",1843675177),["q",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),cljs.core.name.call(null,ss_kw)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__27884,s__27883__$1,opt,opt_val,opt_kv,s__27887__$2,temp__5735__auto____$1,ss_name,ss_kw,ss,c__4580__auto__,size__4581__auto__,b__27885,s__27883__$2,temp__5735__auto__,q1_QMARK_,q2_QMARK_,q8_QMARK_,lvl2_q_QMARK_,scorable_QMARK_,q_kw,q_map,q,q_opts,q_notes){
return (function (){
if(q1_QMARK_){
var G__27891_27901 = opt;
switch (G__27891_27901) {
case "Yes":
cljs.core.swap_BANG_.call(null,who_assist.views.visible_substance,cljs.core.conj,ss_kw);

who_assist.views.set_lvl1.call(null);

break;
case "No":
cljs.core.swap_BANG_.call(null,who_assist.views.visible_substance,cljs.core.disj,ss_kw);

who_assist.views.set_lvl1.call(null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27891_27901)].join('')));

}
} else {
}

if(q2_QMARK_){
if(cljs.core._EQ_.call(null,opt,"Never")){
cljs.core.swap_BANG_.call(null,who_assist.views.lvl2_substances,cljs.core.disj,ss_kw);

who_assist.views.set_lvl2.call(null);
} else {
cljs.core.swap_BANG_.call(null,who_assist.views.lvl2_substances,cljs.core.conj,ss_kw);

who_assist.views.set_lvl2.call(null);
}
} else {
}

if(scorable_QMARK_){
return cljs.core.swap_BANG_.call(null,who_assist.views.q_score,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [q_kw,ss_kw], null),opt_val);
} else {
return null;
}
});})(i__27884,s__27883__$1,opt,opt_val,opt_kv,s__27887__$2,temp__5735__auto____$1,ss_name,ss_kw,ss,c__4580__auto__,size__4581__auto__,b__27885,s__27883__$2,temp__5735__auto__,q1_QMARK_,q2_QMARK_,q8_QMARK_,lvl2_q_QMARK_,scorable_QMARK_,q_kw,q_map,q,q_opts,q_notes))
], null)], null),opt], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["q",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),cljs.core.name.call(null,ss_kw),cljs.core.str.cljs$core$IFn$_invoke$arity$1(opt_val)].join('')], null)),who_assist$views$question_$_iter__27882_$_iter__27886.call(null,cljs.core.rest.call(null,s__27887__$2)));
}
} else {
return null;
}
break;
}
});})(i__27884,s__27883__$1,ss_name,ss_kw,ss,c__4580__auto__,size__4581__auto__,b__27885,s__27883__$2,temp__5735__auto__,q1_QMARK_,q2_QMARK_,q8_QMARK_,lvl2_q_QMARK_,scorable_QMARK_,q_kw,q_map,q,q_opts,q_notes))
,null,null));
});})(i__27884,s__27883__$1,ss_name,ss_kw,ss,c__4580__auto__,size__4581__auto__,b__27885,s__27883__$2,temp__5735__auto__,q1_QMARK_,q2_QMARK_,q8_QMARK_,lvl2_q_QMARK_,scorable_QMARK_,q_kw,q_map,q,q_opts,q_notes))
;
return iter__4582__auto__.call(null,q_opts);
})())], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["q",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),cljs.core.name.call(null,ss_kw)].join('')], null)));

var G__27903 = (i__27884 + (1));
i__27884 = G__27903;
continue;
} else {
var G__27904 = (i__27884 + (1));
i__27884 = G__27904;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27885),who_assist$views$question_$_iter__27882.call(null,cljs.core.chunk_rest.call(null,s__27883__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27885),null);
}
} else {
var ss = cljs.core.first.call(null,s__27883__$2);
var ss_name = cljs.core.second.call(null,ss);
var ss_kw = cljs.core.first.call(null,ss);
if(((q1_QMARK_) || (q8_QMARK_) || ((((!(lvl2_q_QMARK_))) && (cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,who_assist.views.visible_substance),ss_kw)))) || (((lvl2_q_QMARK_) && (cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,who_assist.views.lvl2_substances),ss_kw)))))){
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-control-group","div.form-control-group",1302477851),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-control.grow-3x","div.form-control.grow-3x",1081474451),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),[((q8_QMARK_)?"":[cljs.core.name.call(null,ss_kw),". "].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ss_name)].join('')], null),((((cljs.core._EQ_.call(null,n,(1))) && (cljs.core._EQ_.call(null,ss_name,"Other"))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"other",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Other"], null)], null):null)], null),cljs.core.doall.call(null,(function (){var iter__4582__auto__ = ((function (s__27883__$1,ss_name,ss_kw,ss,s__27883__$2,temp__5735__auto__,q1_QMARK_,q2_QMARK_,q8_QMARK_,lvl2_q_QMARK_,scorable_QMARK_,q_kw,q_map,q,q_opts,q_notes){
return (function who_assist$views$question_$_iter__27882_$_iter__27892(s__27893){
return (new cljs.core.LazySeq(null,((function (s__27883__$1,ss_name,ss_kw,ss,s__27883__$2,temp__5735__auto__,q1_QMARK_,q2_QMARK_,q8_QMARK_,lvl2_q_QMARK_,scorable_QMARK_,q_kw,q_map,q,q_opts,q_notes){
return (function (){
var s__27893__$1 = s__27893;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__27893__$1);
if(temp__5735__auto____$1){
var s__27893__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27893__$2)){
var c__4580__auto__ = cljs.core.chunk_first.call(null,s__27893__$2);
var size__4581__auto__ = cljs.core.count.call(null,c__4580__auto__);
var b__27895 = cljs.core.chunk_buffer.call(null,size__4581__auto__);
if((function (){var i__27894 = (0);
while(true){
if((i__27894 < size__4581__auto__)){
var opt_kv = cljs.core._nth.call(null,c__4580__auto__,i__27894);
var opt = cljs.core.first.call(null,opt_kv);
var opt_val = cljs.core.second.call(null,opt_kv);
cljs.core.chunk_append.call(null,b__27895,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-control","div.form-control",-2082825974),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"radio","radio",1323726374),new cljs.core.Keyword(null,"value","value",305978217),opt_val,new cljs.core.Keyword(null,"name","name",1843675177),["q",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),cljs.core.name.call(null,ss_kw)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__27894,s__27883__$1,opt,opt_val,opt_kv,c__4580__auto__,size__4581__auto__,b__27895,s__27893__$2,temp__5735__auto____$1,ss_name,ss_kw,ss,s__27883__$2,temp__5735__auto__,q1_QMARK_,q2_QMARK_,q8_QMARK_,lvl2_q_QMARK_,scorable_QMARK_,q_kw,q_map,q,q_opts,q_notes){
return (function (){
if(q1_QMARK_){
var G__27896_27905 = opt;
switch (G__27896_27905) {
case "Yes":
cljs.core.swap_BANG_.call(null,who_assist.views.visible_substance,cljs.core.conj,ss_kw);

who_assist.views.set_lvl1.call(null);

break;
case "No":
cljs.core.swap_BANG_.call(null,who_assist.views.visible_substance,cljs.core.disj,ss_kw);

who_assist.views.set_lvl1.call(null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27896_27905)].join('')));

}
} else {
}

if(q2_QMARK_){
if(cljs.core._EQ_.call(null,opt,"Never")){
cljs.core.swap_BANG_.call(null,who_assist.views.lvl2_substances,cljs.core.disj,ss_kw);

who_assist.views.set_lvl2.call(null);
} else {
cljs.core.swap_BANG_.call(null,who_assist.views.lvl2_substances,cljs.core.conj,ss_kw);

who_assist.views.set_lvl2.call(null);
}
} else {
}

if(scorable_QMARK_){
return cljs.core.swap_BANG_.call(null,who_assist.views.q_score,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [q_kw,ss_kw], null),opt_val);
} else {
return null;
}
});})(i__27894,s__27883__$1,opt,opt_val,opt_kv,c__4580__auto__,size__4581__auto__,b__27895,s__27893__$2,temp__5735__auto____$1,ss_name,ss_kw,ss,s__27883__$2,temp__5735__auto__,q1_QMARK_,q2_QMARK_,q8_QMARK_,lvl2_q_QMARK_,scorable_QMARK_,q_kw,q_map,q,q_opts,q_notes))
], null)], null),opt], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["q",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),cljs.core.name.call(null,ss_kw),cljs.core.str.cljs$core$IFn$_invoke$arity$1(opt_val)].join('')], null)));

var G__27907 = (i__27894 + (1));
i__27894 = G__27907;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27895),who_assist$views$question_$_iter__27882_$_iter__27892.call(null,cljs.core.chunk_rest.call(null,s__27893__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27895),null);
}
} else {
var opt_kv = cljs.core.first.call(null,s__27893__$2);
var opt = cljs.core.first.call(null,opt_kv);
var opt_val = cljs.core.second.call(null,opt_kv);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-control","div.form-control",-2082825974),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"radio","radio",1323726374),new cljs.core.Keyword(null,"value","value",305978217),opt_val,new cljs.core.Keyword(null,"name","name",1843675177),["q",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),cljs.core.name.call(null,ss_kw)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (s__27883__$1,opt,opt_val,opt_kv,s__27893__$2,temp__5735__auto____$1,ss_name,ss_kw,ss,s__27883__$2,temp__5735__auto__,q1_QMARK_,q2_QMARK_,q8_QMARK_,lvl2_q_QMARK_,scorable_QMARK_,q_kw,q_map,q,q_opts,q_notes){
return (function (){
if(q1_QMARK_){
var G__27897_27908 = opt;
switch (G__27897_27908) {
case "Yes":
cljs.core.swap_BANG_.call(null,who_assist.views.visible_substance,cljs.core.conj,ss_kw);

who_assist.views.set_lvl1.call(null);

break;
case "No":
cljs.core.swap_BANG_.call(null,who_assist.views.visible_substance,cljs.core.disj,ss_kw);

who_assist.views.set_lvl1.call(null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27897_27908)].join('')));

}
} else {
}

if(q2_QMARK_){
if(cljs.core._EQ_.call(null,opt,"Never")){
cljs.core.swap_BANG_.call(null,who_assist.views.lvl2_substances,cljs.core.disj,ss_kw);

who_assist.views.set_lvl2.call(null);
} else {
cljs.core.swap_BANG_.call(null,who_assist.views.lvl2_substances,cljs.core.conj,ss_kw);

who_assist.views.set_lvl2.call(null);
}
} else {
}

if(scorable_QMARK_){
return cljs.core.swap_BANG_.call(null,who_assist.views.q_score,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [q_kw,ss_kw], null),opt_val);
} else {
return null;
}
});})(s__27883__$1,opt,opt_val,opt_kv,s__27893__$2,temp__5735__auto____$1,ss_name,ss_kw,ss,s__27883__$2,temp__5735__auto__,q1_QMARK_,q2_QMARK_,q8_QMARK_,lvl2_q_QMARK_,scorable_QMARK_,q_kw,q_map,q,q_opts,q_notes))
], null)], null),opt], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["q",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),cljs.core.name.call(null,ss_kw),cljs.core.str.cljs$core$IFn$_invoke$arity$1(opt_val)].join('')], null)),who_assist$views$question_$_iter__27882_$_iter__27892.call(null,cljs.core.rest.call(null,s__27893__$2)));
}
} else {
return null;
}
break;
}
});})(s__27883__$1,ss_name,ss_kw,ss,s__27883__$2,temp__5735__auto__,q1_QMARK_,q2_QMARK_,q8_QMARK_,lvl2_q_QMARK_,scorable_QMARK_,q_kw,q_map,q,q_opts,q_notes))
,null,null));
});})(s__27883__$1,ss_name,ss_kw,ss,s__27883__$2,temp__5735__auto__,q1_QMARK_,q2_QMARK_,q8_QMARK_,lvl2_q_QMARK_,scorable_QMARK_,q_kw,q_map,q,q_opts,q_notes))
;
return iter__4582__auto__.call(null,q_opts);
})())], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["q",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),cljs.core.name.call(null,ss_kw)].join('')], null)),who_assist$views$question_$_iter__27882.call(null,cljs.core.rest.call(null,s__27883__$2)));
} else {
var G__27910 = cljs.core.rest.call(null,s__27883__$2);
s__27883__$1 = G__27910;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__.call(null,((q8_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",-789527183),""], null):cljs.core.sort_by.call(null,cljs.core.first,who_assist.views.substances)));
})())], null)], null)], null);
});
});
who_assist.views.intervention_level = (function who_assist$views$intervention_level(subst,val){
if((val > (26))){
return "More intensive treatment";
} else {
if(cljs.core._EQ_.call(null,subst,new cljs.core.Keyword(null,"b","b",1482224470))){
if((val > (10))){
return "receive brief intervention";
} else {
return "no intervention";

}
} else {
if((val > (3))){
return "receive brief intervention";
} else {
return "no intervention";

}
}
}
});
who_assist.views.score_table = (function who_assist$views$score_table(){
var scores = cljs.core.reduce.call(null,(function (acc,p__27911){
var vec__27912 = p__27911;
var q_n = cljs.core.nth.call(null,vec__27912,(0),null);
var q_subst_score = cljs.core.nth.call(null,vec__27912,(1),null);
return cljs.core.reduce.call(null,(function (acc2,p__27915){
var vec__27916 = p__27915;
var subst = cljs.core.nth.call(null,vec__27916,(0),null);
var val = cljs.core.nth.call(null,vec__27916,(1),null);
var v = ((((cljs.core._EQ_.call(null,q_n,new cljs.core.Keyword(null,"5","5",538911032))) && (cljs.core._EQ_.call(null,subst,new cljs.core.Keyword(null,"a","a",-2123407586)))))?(0):val);
return cljs.core.assoc.call(null,acc2,subst,(v + cljs.core.get.call(null,acc,subst,(0))));
}),acc,q_subst_score);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.deref.call(null,who_assist.views.q_score));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h6","h6",557293780),"Substance Involvement Score"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.doall.call(null,(function (){var iter__4582__auto__ = (function who_assist$views$score_table_$_iter__27919(s__27920){
return (new cljs.core.LazySeq(null,(function (){
var s__27920__$1 = s__27920;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__27920__$1);
if(temp__5735__auto__){
var s__27920__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27920__$2)){
var c__4580__auto__ = cljs.core.chunk_first.call(null,s__27920__$2);
var size__4581__auto__ = cljs.core.count.call(null,c__4580__auto__);
var b__27922 = cljs.core.chunk_buffer.call(null,size__4581__auto__);
if((function (){var i__27921 = (0);
while(true){
if((i__27921 < size__4581__auto__)){
var ss = cljs.core._nth.call(null,c__4580__auto__,i__27921);
var subst = cljs.core.first.call(null,ss);
var scr = cljs.core.second.call(null,ss);
cljs.core.chunk_append.call(null,b__27922,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.str.cljs$core$IFn$_invoke$arity$1(subst.call(null,who_assist.views.substances))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scr)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [who_assist.views.intervention_level,subst,scr], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),subst], null)));

var G__27923 = (i__27921 + (1));
i__27921 = G__27923;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27922),who_assist$views$score_table_$_iter__27919.call(null,cljs.core.chunk_rest.call(null,s__27920__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27922),null);
}
} else {
var ss = cljs.core.first.call(null,s__27920__$2);
var subst = cljs.core.first.call(null,ss);
var scr = cljs.core.second.call(null,ss);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.str.cljs$core$IFn$_invoke$arity$1(subst.call(null,who_assist.views.substances))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scr)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [who_assist.views.intervention_level,subst,scr], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),subst], null)),who_assist$views$score_table_$_iter__27919.call(null,cljs.core.rest.call(null,s__27920__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__.call(null,scores);
})())], null)], null)], null);
});
who_assist.views.save_pdf = (function who_assist$views$save_pdf(_){
var interviewer_id = document.getElementById("interviewer_id").value;
var clinic = document.getElementById("clinic").value;
var patient_id = document.getElementById("patient_id").value;
var date = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getDate()),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getMonth()),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getFullYear())].join('');
var name = ["assist_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(interviewer_id),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clinic),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(patient_id),"_",date,".pdf"].join('');
var body_element = document.getElementById("app-body");
return (new html2pdf()).set(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, ["margin",[0.5,(3),0.5,0.5],"filename",name,"jsPDF",new cljs.core.PersistentArrayMap(null, 3, ["format","a4","unit","cm","orientation","landscape"], null)], null))).from(body_element).save();
});
who_assist.views.main_html = (function who_assist$views$main_html(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [who_assist.views.question,(1)], null),(cljs.core.truth_(cljs.core.deref.call(null,who_assist.views.lvl1))?new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [who_assist.views.question,(2)], null),(cljs.core.truth_(cljs.core.deref.call(null,who_assist.views.lvl2))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [who_assist.views.question,(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [who_assist.views.question,(4)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [who_assist.views.question,(5)], null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [who_assist.views.question,(6)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [who_assist.views.question,(7)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [who_assist.views.question,(8)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [who_assist.views.score_table], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col","div.col",-1800797011),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button-primary","button.button-primary",-1646576108),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),who_assist.views.save_pdf], null),"Save as PDF"], null)], null)], null):null)], null);
});

//# sourceMappingURL=views.js.map?rel=1588467288267
