import{d as j,B as Z,m as Y,h as N,c as C,o as a,a as c,b as n,g as L,f as o,F as K,G as W,s as V,V as re,U as J,n as F,y as I,x as ue,q as f,u as _e,r as S,e as P,p as de,M as Te,a0 as Le,v as ge,t as Ce,C as Ne,D as Ae,w as B,$ as pe,N as Ie,O as Me,_ as ve,a4 as Ee,aa as He}from"./entry.PKrA3y6R.js";import{_ as Ue}from"./Image.vue.ClQxnqaj.js";import{_ as we}from"./AchievementStat.vue.DlGDJoz_.js";import{_ as me}from"./Price.vue.CIqOZq5A.js";import{_ as fe}from"./Preloader.vue.CEJmd39k.js";import"./Circles.vue.D9wf6_f7.js";const De={class:"profile-achievements"},Fe={class:"profile-achievements-header"},Oe=["innerHTML"],Be={key:0,class:"profile-achievements-list"},Ge=["onClick"],xe=["innerHTML"],Ke=["innerHTML"],Pe=["innerHTML"],Ve=j({__name:"achievements",setup(G){const p=Z(),v=Y(),h=N(),{$event:g}=f(),k=C(()=>{var m;const s=new Map(p.achievements.map(d=>[d.id,d])),b=(m=v.achievements)==null?void 0:m.map(d=>{const l=s.get(d.id);return{...d,...l}});return b.sort((d,l)=>new Date(l.unlockedAt).getTime()-new Date(d.unlockedAt).getTime()),b.slice(0,4)}),y=(s,b=!0)=>b?`is-style-${s%4+1}`:"",t=s=>{g("bs:open",{component:ue(we),props:{achievement:s}})},T=()=>{V().useHapticFeedback("soft"),N().trackEvent("achievements_view")};return(s,b)=>{const m=re,d=Ue;return a(),c("div",De,[n("div",Fe,[n("div",{class:"profile-achievements-title",innerHTML:s.$t("achievements.title")},null,8,Oe),L(m,{class:"button button-primary button-xxs",to:o(J).GAME_USER_ACHIEVEMENTS,innerHTML:s.$t("achievements.see_all"),onClick:T},null,8,["to","innerHTML"])]),o(k).length?(a(),c("ul",Be,[(a(!0),c(K,null,W(o(k),(l,A)=>(a(),c("li",{key:l.id,onClick:M=>t(l)},[l.isNew?(a(),c("div",{key:0,class:F(["badge",y(A,l.isNew)]),innerHTML:s.$t("messages.new")},null,10,xe)):I("",!0),L(d,{image:l.image.defaultUrl,compressed:l.image.compressedUrl},null,8,["image","compressed"]),n("p",{innerHTML:o(h).getLocalizedString(l.name)},null,8,Ke)],8,Ge))),128))])):(a(),c("p",{key:1,class:"profile-achievements-no",innerHTML:s.$t("achievements.no_achievements")},null,8,Pe))])}}}),je={class:"bs-content"},Re=["innerHTML"],ze={class:"bs-content-price"},Xe=["innerHTML"],qe={class:"bs-content-buttons"},We=["disabled"],Ze=["innerHTML"],Ye=["innerHTML"],Je=j({__name:"BuySkin",props:{skin:{},image:{}},setup(G){const{$event:p}=f(),v=Y(),h=Z(),{t:g}=_e(),k=G,y=S(!1);let t;const T=C(()=>{var l;return(((l=k.skin)==null?void 0:l.price)??0)<=(v.balanceCoins??1)}),s=async()=>{T.value&&!y.value&&(y.value=!0,t=de.promise({title:f().$i18n.t("messages.process_request")}),await v.postSkinBuy(k.skin.id).then(()=>{V().useHapticFeedback("heavy"),N().trackEvent(`skin_buy_success_${m.value}`),t==null||t.resolve({title:f().$i18n.t("messages.skin_success",{name:m.value}),duration:3e3}),p("buy-skin:success",{skin:k.skin}),p("bs:close")}).catch(l=>{var M;N().trackEvent(`skin_buy_error_${m.value}`);const A=(M=l==null?void 0:l.data)==null?void 0:M.error_code;if(A)switch(A){case"SKIN_CONFIG_NOT_FOUND":t==null||t.reject(f().$i18n.t("messages.SKIN_CONFIG_NOT_FOUND")),h.getConfig().finally(()=>{}).then(()=>{v.postSkinsGet().finally(()=>{p("update-skins:success")})});break;case"SKIN_NOT_AVAILABLE":t==null||t.reject(f().$i18n.t("messages.SKIN_NOT_AVAILABLE")),h.getConfig().finally(()=>{}).then(()=>{v.postSkinsGet().finally(()=>{p("update-skins:success")})});break;case"SKIN_ALREADY_AVAILABLE":t==null||t.reject(f().$i18n.t("messages.SKIN_ALREADY_AVAILABLE")),h.getConfig().finally(()=>{}).then(()=>{v.postSkinsGet().finally(()=>{p("update-skins:success")})});break;case"SKIN_IS_EXPIRED":t==null||t.reject(f().$i18n.t("messages.SKIN_IS_EXPIRED")),h.getConfig().finally(()=>{}).then(()=>{v.postSkinsGet().finally(()=>{p("update-skins:success")})});break;case"SKIN_CONDITION_NOT_MET":t==null||t.reject(f().$i18n.t("messages.SKIN_CONDITION_NOT_MET")),h.postConfig().finally(()=>{}).then(()=>{v.postSkinsGet().finally(()=>{p("update-skins:success")})});break;case"INSUFFICIENT_FUNDS":t==null||t.reject(f().$i18n.t("messages.INSUFFICIENT_FUNDS")),v.postSync().finally(()=>{p("update-skins:success")});break;default:t==null||t.reject(f().$i18n.t("messages.no_skin"));break}else t==null||t.reject(f().$i18n.t("messages.no_skin"))}).finally(()=>{setTimeout(()=>{y.value=!1},400)}))},b=()=>{N().trackEvent(`skin_buy_cancel_${m.value}`),p("bs:close")},m=C(()=>{var l;return((l=k.skin)==null?void 0:l.name)??"skin"}),d=C(()=>T.value?g("buttons.buy"):g("messages.not_enough_funds"));return(l,A)=>{const M=me,U=fe;return a(),c("div",je,[n("div",{class:"bs-content-title-medium has-top-gap",innerHTML:l.$t("profile.buy_skin",{name:l.skin.name??"skin"})},null,8,Re),n("div",ze,[n("p",{innerHTML:l.$t("messages.price")},null,8,Xe),L(M,{price:l.skin.price,size:"large",class:F({"is-grayscale":!o(T)}),round:!1,text:l.skin.price>0?"":l.$t("messages.free")},null,8,["price","class","text"])]),n("div",qe,[n("button",{class:"button button-default button-primary",onClick:s,disabled:o(y)},[o(y)?(a(),P(U,{key:0})):(a(),c("span",{key:1,innerHTML:o(d)},null,8,Ze))],8,We),n("button",{class:"button button-default button-dark",innerHTML:l.$t("buttons.cancel"),onClick:b},null,8,Ye)])])}}}),Qe={class:"profile-skins"},es={class:"profile-skins-header"},ss=["innerHTML"],ts={class:"profile-skins-tabs"},ns={class:"tabs-list"},is=["onClick"],os={class:"profile-skins-inner"},ls={class:"profile-skin"},as={class:"profile-skin-image"},cs=["srcset"],rs=["src","alt"],us={class:"profile-skin-info"},_s={key:0,class:"profile-skin-info-featured"},ds={class:"profile-skin-title"},ps=["innerHTML"],vs={class:"profile-skin-status"},ms=["innerHTML"],fs={class:"profile-skin-button"},ks=["disabled"],hs=["innerHTML"],bs=["onClick"],$s={key:0,class:"is-icons"},Ss={key:0,class:"is-time-skin"},ys={class:"is-locked-skin"},Ts={key:1,class:"is-current-skin"},Ls=["srcset"],gs=["src","alt"],Cs=j({__name:"skins-list",setup(G){const p=Te(),{$event:v,$listen:h,$stopListen:g}=f(),{t:k}=_e(),y=Z(),t=Y(),T=N(),s=S(null),b=S([]),m=S([]),d=S(!1),l=S(!1),A=S(""),M=S(["featured","all"]),U=S(0),w=S(null),R=S(null);let E;const x=e=>{var i;return(e==null?void 0:e.id)==="skin0"?`/images/hamsters/${t.level??1}.webp`:(i=e==null?void 0:e.pictureLink)==null?void 0:i.compressedUrl},Q=e=>{var i;return(e==null?void 0:e.id)==="skin0"?`/images/hamsters/${t.level??1}.png`:((i=e==null?void 0:e.pictureLink)==null?void 0:i.defaultUrl)??pe},ke=e=>{var i;return(e==null?void 0:e.id)===((i=t.skin)==null?void 0:i.selectedSkinId)},ee=e=>{var i,u;return(u=(i=t.skin)==null?void 0:i.available)==null?void 0:u.some($=>$.skinId===(e==null?void 0:e.id))},he=e=>{var i;return e.id===((i=s.value)==null?void 0:i.id)},se=()=>{var e;if((e=s.value)!=null&&e.isFeatured){const i=new Date().getTime(),$=new Date(s.value.expiresAt).getTime()-i;U.value=$}else U.value=0},z=(e,i=!1)=>{var u;s.value=e,(u=s.value)!=null&&u.expiresAt?(se(),w.value=Ie(se,1e3)):(w.value&&clearInterval(w.value),w.value=null),D(),l.value=!X.value,(s.value.isCurrent||!te.value&&!s.value.isAvailable)&&(l.value=!0),i&&(V().useHapticFeedback("soft"),N().trackEvent(`skin_click_${H.value}`))},D=()=>{var $;const e=((($=y.skins)==null?void 0:$.map(r=>({...r,isAvailable:ee(r),isCurrent:ke(r),isSelected:he(r),isLocked:!ee(r)})))??[]).filter(r=>!r.isExpired||r.isExpired&&r.isAvailable),i=e.filter(r=>r.isAvailable).sort((r,O)=>r.price-O.price),u=e.filter(r=>!r.isAvailable).sort((r,O)=>r.price-O.price);m.value=[...i,...u],b.value=A.value==="all"?m.value:m.value.filter(r=>!!r.isFeatured)},be=C(()=>{var e;return(e=s.value)!=null&&e.id?k(`profile.${s.value.id}_description`,{name:s.value.name}):""}),te=C(()=>{var e;return(((e=s.value)==null?void 0:e.price)??0)<=(t.balanceCoins??1)}),X=C(()=>{var e,i;return Number.isFinite((i=(e=s.value)==null?void 0:e.condition)==null?void 0:i.level)&&s.value.condition.level<=(t.level??1)}),ne=C(()=>{var e,i;return Number.isFinite((i=(e=s.value)==null?void 0:e.condition)==null?void 0:i.level)&&s.value.condition.level>(t.level??1)}),$e=C(()=>{var e,i,u,$;return X.value&&!((e=s.value)!=null&&e.isCurrent)&&!((i=s.value)!=null&&i.isAvailable)?k("buttons.unlock"):ne.value?`<i>${k("profile.locked_skin",{name:Le[(($=(u=s.value)==null?void 0:u.condition)==null?void 0:$.level)??1]})}</i>`:k("buttons.choose")});D(),z(m.value.find(e=>{var i;return e.id===(((i=t.skin)==null?void 0:i.selectedSkinId)??"skin0")})??{id:"skin0",price:0,condition:{_type:"UserLevel",level:0}});const ie=e=>{D();const i=b.value.find(u=>u.id===e.skin.id);i&&z(i)};ge(()=>{g("buy-skin:success",ie),g("update-skins:success",D),w.value&&clearInterval(w.value)}),Ce(()=>{h("buy-skin:success",ie),h("update-skins:success",D),m.value.some(e=>!!e.isFeatured)?q("featured"):(q("all"),M.value.shift())});const H=C(()=>{var e;return((e=s.value)==null?void 0:e.name)??"skin"}),Se=async()=>{var e;!l.value&&!d.value&&((e=s.value)!=null&&e.isAvailable?(d.value=!0,E=de.promise({title:f().$i18n.t("messages.process_request")}),await t.postSkinSelect(s.value.id).then(()=>{V().useHapticFeedback("heavy"),N().trackEvent(`skin_choose_success_${H.value}`),E==null||E.resolve({title:f().$i18n.t("messages.success"),duration:3e3}),v("buy-skin:success",{skin:s.value}),setTimeout(()=>{Me(p(J.GAME_INDEX))},400)}).catch(()=>{N().trackEvent(`skin_choose_error_${H.value}`),E==null||E.reject(f().$i18n.t("messages.no_select_skin",{name:H.value}))}).finally(()=>{setTimeout(()=>{d.value=!1},400)})):(N().trackEvent(`skin_buy_click_${H.value}`),v("bs:open",{component:ue(Je),props:{skin:s.value}})))},q=e=>{A.value=e,D(),R.value&&setTimeout(()=>{var i;(i=R.value)==null||i.scrollTo({top:0,behavior:"smooth"})},100)},ye=e=>{if(e<=0)return"00:00:00";const i=Math.floor(e/1e3%60),u=Math.floor(e/(1e3*60)%60),$=Math.floor(e/(1e3*60*60*24)),r=Math.floor(e/(1e3*60*60)%24)+$*24;return`${T.padWithZero(r)}:${T.padWithZero(u)}:${T.padWithZero(i)}`};return(e,i)=>{var oe,le,ae;const u=ve,$=me,r=fe,O=Ne("motion-slide-left");return a(),c("div",Qe,[n("div",es,[n("div",{class:"profile-skins-title",innerHTML:e.$t("profile.skin")},null,8,ss),n("div",ts,[Ae((a(),c("div",ns,[(a(!0),c(K,null,W(o(M),(_,ce)=>(a(),c("div",{class:F(["tabs-item",{"is-active":_===o(A)}]),key:`t${ce}`,onClick:Gs=>q(_)},B(e.$t(`profile.${_}`)),11,is))),128))])),[[O]])])]),n("div",os,[n("div",ls,[n("div",as,[n("picture",null,[x(o(s))?(a(),c("source",{key:0,srcset:x(o(s)),type:"image/webp"},null,8,cs)):I("",!0),n("img",{class:"img-responsive",src:Q(o(s)),alt:o(H)},null,8,rs)])]),n("div",us,[(oe=o(s))!=null&&oe.expiresAt&&o(U)>0?(a(),c("div",_s,[L(u,{name:"clock"}),n("p",null,B(ye(o(U))),1)])):I("",!0),n("div",ds,B(o(H)),1),n("div",{class:"profile-skin-description",innerHTML:o(be)},null,8,ps),n("div",vs,[(le=o(s))!=null&&le.isAvailable?(a(),c("div",{key:0,class:"is-purchased",innerHTML:e.$t("profile.purchased")},null,8,ms)):(a(),P($,{key:1,price:((ae=o(s))==null?void 0:ae.price)??0,size:"normal",class:F({"is-grayscale":!o(te)||o(ne)}),round:!1},null,8,["price","class"]))]),n("div",fs,[n("button",{class:F(["button button-default button-primary",{"is-disabled-blue":o(l)}]),onClick:Se,disabled:o(d)||o(l)},[o(d)?(a(),P(r,{key:0})):(a(),c(K,{key:1},[n("span",{innerHTML:o($e)},null,8,hs),o(X)&&!o(s).isAvailable?(a(),P(u,{key:0,name:"lock"})):I("",!0)],64))],10,ks)])])]),n("ul",{class:"profile-skins-list",ref_key:"scrollContainer",ref:R},[(a(!0),c(K,null,W(o(b),_=>(a(),c("li",{key:_.id,class:F({"is-selected":_.isSelected,"is-locked":_.isLocked}),onClick:ce=>z(_,!0)},[_.isLocked?(a(),c("div",$s,[_.expiresAt?(a(),c("div",Ss,[L(u,{name:"clock"})])):I("",!0),n("div",ys,[L(u,{name:"lock"})])])):I("",!0),_.isCurrent?(a(),c("div",Ts,[L(u,{name:"check"})])):I("",!0),n("picture",null,[x(_)?(a(),c("source",{key:0,srcset:x(_),type:"image/webp"},null,8,Ls)):I("",!0),n("img",{src:Q(_),alt:(_==null?void 0:_.name)??"skin"},null,8,gs)]),n("p",null,B((_==null?void 0:_.name)??"skin"),1)],10,bs))),128))],512)])])}}}),Ns={class:"main"},As={class:"top-bar"},Is={class:"top-bar-center"},Ms=["innerHTML"],Es=n("div",{class:"top-bar-right"},null,-1),Hs={class:"profile"},Us={class:"profile-header"},ws={class:"profile-header-user"},Ds={class:"profile-header-user-avatar"},Fs=["srcset"],Os=["src"],Bs={class:"profile-info"},zs=j({__name:"index",setup(G){var g,k;const p=Ee(),v=S(((g=p.account_avatar)==null?void 0:g.defaultUrl)??""),h=S(((k=p.account_avatar)==null?void 0:k.compressedUrl)??"");return v.value||(v.value=pe),(y,t)=>{const T=ve,s=re,b=Ve,m=Cs;return a(),c("main",Ns,[n("div",As,[L(s,{class:"top-bar-left",to:o(J).GAME_INDEX},{default:He(()=>[L(T,{class:"is-flipped is-24",name:"caret-right"})]),_:1},8,["to"]),n("div",Is,[n("p",{innerHTML:y.$t("profile.profile")},null,8,Ms)]),Es]),n("div",Hs,[n("div",Us,[n("div",ws,[n("div",Ds,[n("picture",null,[o(h)?(a(),c("source",{key:0,srcset:o(h),type:"image/webp"},null,8,Fs)):I("",!0),n("img",{src:o(v),onError:t[0]||(t[0]=d=>y.imageLoadError())},null,40,Os)])]),n("p",null,B(o(p).account_name),1)])]),n("div",Bs,[L(b),L(m)])])])}}});export{zs as default};
