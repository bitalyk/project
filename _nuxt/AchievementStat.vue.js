import{_ as E}from"./Circles.vue.D9wf6_f7.js";import{_ as R}from"./Image.vue.ClQxnqaj.js";import{d as B,o as r,a as p,n as z,az as j,m as F,B as G,h as J,r as A,u as K,t as O,c as _,C as h,D as v,b as t,f as n,g as l,aa as $,e as P,y as Q,q as W}from"./entry.PKrA3y6R.js";const X=B({__name:"Skeleton",props:{loading:{type:Boolean,required:!0,default:!0},classes:{type:String,required:!1,default:""}},setup(a){return(m,g)=>a.loading?(r(),p("div",{key:0,class:z(["skeleton",a.classes])},null,2)):j(m.$slots,"default",{key:1})}}),Y={class:"achievement-stats"},Z=["innerHTML"],x=["innerHTML"],ee={class:"achievement-stats-percent"},te={class:"achievement-stats-percent-inner"},ne=["innerHTML"],se=t("p",null,"?%",-1),ae=["innerHTML"],ie={class:"achievement-stats-percent-image"},oe=["innerHTML"],me=B({__name:"AchievementStat",props:{achievement:{}},setup(a){const{$event:m}=W(),g=F(),I=G(),f=J(),s=a,d=A(!1),{t:N}=K(),i=A(null);O(()=>{g.postAchievementStat([s.achievement.id]).then(e=>{var o;const u=(o=e.achievementRare)==null?void 0:o.find(c=>c.achievementId===s.achievement.id);u&&(i.value=u,d.value=!0)})});const k=_(()=>I.achievementTypes.find(e=>e.id===s.achievement.achievementTypeId)),U=_(()=>{var e;return(e=k.value)!=null&&e.name?f.getLocalizedString(k.value.name):N("achievements.achievement")}),q=()=>{m("bs:close")},T=_(()=>!s.achievement.unlockedAt);return(e,u)=>{var L,y;const o=E,c=R,S=X,D=h("motion-slide-left"),V=h("motion-pop"),w=h("motion-slide-right");return r(),p("div",Y,[v(t("div",{class:"achievement-stats-title",innerHTML:n(U)},null,8,Z),[[D]]),t("div",{class:z(["achievement-stats-image",{"is-locked":n(T),"is-my":!n(T)}])},[l(o,{size:150,animation:!e.achievement.unlockedAt,disabled:!e.achievement.unlockedAt},null,8,["animation","disabled"]),v(l(c,{image:((L=e.achievement.image)==null?void 0:L.defaultUrl)??"",compressed:((y=e.achievement.image)==null?void 0:y.compressedUrl)??""},null,8,["image","compressed"]),[[V]])],2),t("div",{class:"achievement-stats-text",innerHTML:n(f).getLocalizedString(s.achievement.name)},null,8,x),v((r(),p("div",ee,[t("div",te,[t("span",{innerHTML:e.achievement.unlockedAt?e.$t("achievements.stats_description_text_1"):""},null,8,ne),l(S,{loading:!n(d),classes:"is-achievement-stats-percent"},{default:$(()=>[se]),_:1},8,["loading"]),t("span",{innerHTML:e.$t("achievements.stats_description_text_2")},null,8,ae)]),t("div",ie,[l(S,{loading:!n(d),classes:"is-achievement-stats-percent-image"},{default:$(()=>{var b,C,H,M;return[n(i)?(r(),P(c,{key:0,image:((C=(b=n(i))==null?void 0:b.image)==null?void 0:C.defaultUrl)??"",compressed:((M=(H=n(i))==null?void 0:H.image)==null?void 0:M.compressedUrl)??""},null,8,["image","compressed"])):Q("",!0)]}),_:1},8,["loading"])])])),[[w]]),t("button",{class:"bottom-sheet-button button button-primary button-large",onClick:q},[t("span",{innerHTML:e.$t("buttons.close")},null,8,oe)])])}}});export{me as _};
