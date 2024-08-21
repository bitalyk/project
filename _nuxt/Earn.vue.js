import{d as X,m as W,h as G,c as O,a0 as J,o as T,e as se,aa as B,b as a,w as L,f as s,g as m,a5 as K,a9 as ee,U,s as F,_ as Z,V as R,B as ne,M as ae,a as P,O as re,q as M,r as H,t as V,v as j,C as te,D as q,n as oe,ae as Q,x as ce,R as le,a3 as ie,ap as de,H as ue,N as pe,ag as _e,T as me,aq as he,F as ve,G as fe,Q as ge}from"./entry.PKrA3y6R.js";import{_ as $e}from"./image.vue.CMTZJcqa.js";import{a as be,_ as Se}from"./Price.vue.CIqOZq5A.js";import{_ as we}from"./Hamster.vue.BGSh5QqN.js";const Me={class:"user-level-info"},Te={class:"user-level-info-right"},ke={class:"user-level-info-left"},Ce={class:"text-grey"},Le={class:"user-level-progress is-small"},Pe=X({__name:"Level",setup(y){const h=W(),v=G(),n=O(()=>Object.keys(J)[Object.values(J).indexOf(h.level??1)]),g=()=>{F().useHapticFeedback("soft"),v.trackEvent("click_header_league")};return(c,d)=>{const u=Z,t=R;return T(),se(t,{class:"user-level",to:s(U).GAME_LEAGUE,onClick:g},{default:B(()=>[a("div",Me,[a("div",Te,[a("p",null,L(s(n)),1),m(u,{class:"is-10",name:"caret-right"})]),a("div",ke,[a("p",null,[K(L(s(h).level),1),a("span",Ce," / "+L(s(h).getMaxUserLevel),1)])])]),a("div",Le,[a("div",{class:"user-level-progress-bar",style:ee({width:`${s(h).getProgressLevel}%`})},null,4)])]),_:1},8,["to"])}}}),ye=""+globalThis.__publicAssetsURL("images/rocket.png"),Ee={class:"bs-content"},xe=a("div",{class:"bs-content-image is-boost"},[a("img",{src:ye})],-1),Ie=["innerHTML"],He=["innerHTML"],Fe={class:"boost-profit-target"},Ne=["innerHTML"],Oe=["innerHTML"],Be=X({__name:"BoostProfit",setup(y){const{$event:h}=M();W();const v=G(),n=ne(),g=ae();function c(){h("bs:close"),re(g(U.GAME_MINE))}return(d,u)=>{const t=be;return T(),P("div",Ee,[xe,a("div",{class:"bs-content-title has-top-gap",innerHTML:d.$t("boost.profit_title")},null,8,Ie),a("div",{class:"bs-content-description",innerHTML:d.$t("boost.profit_description")},null,8,He),a("div",Fe,[a("span",{innerHTML:d.$t("boost.profit_text",{h:s(v).secondsToHours(s(n).maxPassiveDtSeconds)})},null,8,Ne)]),a("button",{class:"bottom-sheet-button button button-primary button-large",onClick:c},[a("span",{innerHTML:d.$t("boost.profit_button")},null,8,Oe),m(t,{class:"is-28"})])])}}}),Ae={class:"header-info"},Ye={class:"header-info-passive"},Ge=["innerHTML"],Ue={class:"header-info-passive-data"},Xe=X({__name:"HeaderInfo",setup(y){const h=G(),v=W(),n=H(!1),{$event:g,$listen:c,$stopListen:d}=M(),u=()=>{F().useHapticFeedback("soft"),h.trackEvent("click_header_settings")},t=()=>{F().useHapticFeedback("soft"),h.trackEvent("click_header_exchange")};function b(){F().useHapticFeedback("soft"),g("bs:open",{component:ce(Be)})}const A=E=>({content:E,triggers:["click"],delay:0,distance:4,theme:"hk-tooltip",placement:"bottom",container:".header-info",html:!0}),S=()=>{n.value=!0},p=()=>{n.value=!1};return V(()=>{c("balance-animate-passive:start",S),c("balance-animate-passive:stop",p)}),j(()=>{d("balance-animate-passive:start",S),d("balance-animate-passive:stop",p)}),(E,z)=>{const N=$e,$=R,Y=Se,x=Z,e=te("tooltip");return T(),P("div",Ae,[m($,{class:"header-info-exchange",to:s(U).GAME_SETTINGS_EXCHANGE,onClick:t},{default:B(()=>{var r;return[m(N,{class:"is-border-6",name:(r=s(v).currentExchange)==null?void 0:r.id},null,8,["name"])]}),_:1},8,["to"]),q(a("div",Ye,[a("p",{innerHTML:E.$t("user.profit")},null,8,Ge),a("div",Ue,[m(Y,{price:s(v).earnPassivePerHour??0,prefix:s(v).earnPassivePerHour?"+":"",class:oe({"pulse-balance":s(n)}),size:"small"},null,8,["price","prefix","class"]),m(x,{class:"icon-info",name:"info",onClick:Q(b,["stop"])})])],512),[[e,A(s(h).numberFormat(s(v).earnPassivePerHour,!1))]]),m($,{class:"header-info-settings",to:s(U).GAME_SETTINGS,onClick:u},{default:B(()=>[m(x,{name:"settings"})]),_:1},8,["to"])])}}}),ze={class:"header-row"},We={class:"header-progress"};function Ze(y,h){const v=Pe,n=Xe;return T(),P("div",ze,[a("div",We,[m(v)]),m(n)])}const De={},it=le(De,[["render",Ze]]),Re={class:"upgrade-progress"},Ve=["width","height","id"],je={class:"upgrade-progress-info"},qe=["innerHTML"],dt=X({__name:"Countdown",props:{size:{type:Number,default:72},upgrade:{required:!0,type:Object},lineWidth:{type:Number,default:4},borderColor:{type:String,default:"#34383F"},progressColor:{type:String,default:"#FFD337"},circleColor:{type:String,default:"#FFD337"}},setup(y){const{$listen:h,$stopListen:v}=M(),n=y,g=ie(),c=G(),d=H(null),u=H(n.upgrade.id),t=H({}),b=H([]),A=(e,r)=>{const i=Math.random()*Math.PI*2,_=Math.random()*2+1,o=`rgb(255, ${Math.floor(165+Math.random()*90)}, 0)`;b.value.push({x:e,y:r,vx:Math.cos(i)*_,vy:Math.sin(i)*_,alpha:1,color:o})},S=()=>{b.value.forEach((e,r)=>{e.x+=e.vx,e.y+=e.vy,e.alpha-=.05,e.alpha<=0&&b.value.splice(r,1)})},p=e=>{b.value.forEach(r=>{e.globalAlpha=r.alpha,e.fillStyle=r.color,e.beginPath(),e.arc(r.x,r.y,1.5,0,Math.PI*2),e.fill()})},E=()=>{if(!d.value)return;const e=d.value.getContext("2d");if(!e)return;const i=n.size/2-8,_=n.size/2,k=n.size/2,o=1-t.value.cooldownSeconds/t.value.totalCooldownSeconds;e.clearRect(0,0,n.size,n.size),e.beginPath(),e.arc(_,k,i,0,2*Math.PI),e.strokeStyle=n.borderColor,e.lineWidth=n.lineWidth,e.stroke(),e.lineCap="round",e.shadowBlur=6,e.shadowColor=n.progressColor,e.beginPath(),e.arc(_,k,i,1.5*Math.PI,1.5*Math.PI+2*Math.PI*o,!0),e.strokeStyle=n.progressColor,e.lineWidth=n.lineWidth,e.stroke(),e.shadowBlur=0;const l=1.5*Math.PI+2*Math.PI*o,f=_+i*Math.cos(l),w=k+i*Math.sin(l);e.fillStyle=n.circleColor,e.beginPath(),e.arc(f,w,3,0,2*Math.PI),e.fill(),A(f,w),S(),p(e)},z=()=>{t.value.intervalId&&clearInterval(t.value.intervalId),t.value.intervalId=pe(()=>{N()},50)},N=()=>{var e,r;if(((e=t.value)==null?void 0:e.cooldownSeconds)>0){const i=G().getNowTimestampWithMS(),_=i-(((r=t.value)==null?void 0:r.timestamp)??i);_>100&&(t.value.cooldownSeconds=parseFloat(t.value.cooldownSeconds.toFixed(2))-_/1e3),t.value.cooldownSeconds=parseFloat(t.value.cooldownSeconds.toFixed(2))-.05,E(),t.value.cooldownSeconds<=0&&(t.value.cooldownSeconds=0),t.value.timestamp=i}else g.cooldownStopTimer(u.value),t.value={}};V(()=>{$(),h("upgrade:update-timers",$)}),j(()=>{v("upgrade:update-timers",$)});const $=()=>{g.cooldowns[u.value]||g.cooldownAddUpgrade(u.value,n.upgrade.cooldownSeconds??0,n.upgrade.totalCooldownSeconds??0),t.value=g.cooldowns[u.value],z(),N()};O(()=>{const e=Math.floor(t.value.cooldownSeconds??0),r=Math.floor(e/3600),i=Math.floor(e%3600/60),_=e%60;return r>0?`${r}${M().$i18n.t("messages.short_hour")}`:i>0?`${i}${M().$i18n.t("messages.short_minute")}`:`${_}${M().$i18n.t("messages.short_second")}`});const Y=O(()=>{if(!t.value.cooldownSeconds||t.value.cooldownSeconds<=0)return"00:00";const e=Math.floor(t.value.cooldownSeconds%60),r=Math.floor(t.value.cooldownSeconds/60%60),i=Math.floor(t.value.cooldownSeconds/(60*60));return i>0?`${c.padWithZero(i)}:${c.padWithZero(r)}:${c.padWithZero(e)}`:`${c.padWithZero(r)}:${c.padWithZero(e)}`}),x=O(()=>`${M().$i18n.t("messages.upgrade_tooltip")}<br> ${n.upgrade.name} ${M().$i18n.t("upgrade.level")} ${n.upgrade.level}`);return(e,r)=>{const i=Z,_=de("VTooltip");return q((T(),P("div",Re,[m(_,{onClick:Q(()=>{},["stop"]),triggers:["click"],delay:0,distance:4,"auto-hide":"",theme:"hk-tooltip",placement:"top",container:".tabs-inner"},{popper:B(()=>[a("p",{innerHTML:s(x)},null,8,qe)]),default:B(()=>[(T(),P("canvas",{width:n.size,height:n.size,ref:k=>d.value=k,key:n.upgrade.id,id:n.upgrade.id},null,8,Ve)),a("div",je,[m(i,{class:"is-24",name:"clock"}),a("span",null,L(s(Y)),1)])]),_:1},8,["container"])],512)),[[ue,s(t).cooldownSeconds>0]])}}}),Qe={class:"user-tap"},Je=["disabled"],Ke={class:"user-tap-button-circle"},et={class:"user-tap-animate"},tt=["id","initial","enter"],ot={class:"user-tap-row"},st={class:"user-tap-energy"},nt=["src","alt"],ut=X({__name:"Earn",props:{isFrom:{type:String,default:"index"}},setup(y){const{$event:h,$listen:v,$stopListen:n}=M(),g=y,c=W(),d=F(),u=_e();me();const t=H(null),b=H([]);function A(o){c.availableTaps>=c.earnPerTap&&!c.stop&&(_(),F().useHapticFeedback(),c.earn(),z(o),E(o))}const S={scale:1,translateZ:0,rotateX:0,rotateY:0},p=he({...S});function E(o){if(t.value){const l=t.value.getBoundingClientRect(),f=l.left+l.width/2,w=l.top+l.height/2,I=o.clientX-f,D=(w-o.clientY)*.1,C=I*.1;p.translateZ=-5,p.rotateX=D,p.rotateY=C,setTimeout(()=>{p.rotateY=S.rotateY,p.rotateX=S.rotateX,p.scale=S.scale,p.translateZ=S.translateZ},150)}}function z(o){let l=0,f=0,w=0;if(t.value){const I=t.value.getBoundingClientRect();l=o.clientX-I.left-50+Y(),f=o.clientY-I.bottom-25,w=I.width/2-25}N(l,f,w)}const N=(o=0,l=0,f=0)=>{b.value.push({x:o,y:l,center:f,date:Date.now()}),setTimeout(()=>{b.value.shift()},2e3)};function $(o){o==null||o.preventDefault()}function Y(){const l=Math.random()*20-10;return Math.round(l)}const x=()=>{(window.pageYOffset||document.documentElement.scrollTop)<=0&&window.scrollTo(0,d.scroll_gap)};j(()=>{var o,l;(o=t.value)==null||o.removeEventListener("touchmove",$),(l=t.value)==null||l.removeEventListener("touchstart",$),document.removeEventListener("scroll",x),n("morse-mode:start",e),r.value&&(u.setStatus(!1),u.resetMorse())}),V(()=>{var l,f;const o=window.pageYOffset||document.documentElement.scrollTop;(!o||o&&o<d.scroll_gap)&&setTimeout(()=>{window.scrollTo(0,d.scroll_gap)},10),(l=t.value)==null||l.addEventListener("touchmove",$,{passive:!1}),(f=t.value)==null||f.addEventListener("touchstart",$,{passive:!1}),document.addEventListener("scroll",x),v("morse-mode:start",()=>e()),window.scrollTo(0,d.scroll_gap)});const e=()=>{u.resetMorse()},r=O(()=>u.status&&g.isFrom==="index");function i(){r.value&&u.tapStart()}function _(){r.value&&u.tapEnd()}const k=O(()=>r.value?u.last_input:`+${c.earnPerTap}`);return(o,l)=>{const f=we,w=Z,I=R,D=te("motion");return T(),P("div",Qe,[a("button",{class:oe(["user-tap-button button",{"is-morse-mode":s(r)}]),onPointerup:Q(A,["prevent"]),onPointerdown:i,disabled:s(c).availableTaps<s(c).earnPerTap||s(c).stop,ref_key:"eventTarget",ref:t},[a("div",{class:"user-tap-button-inner",style:ee({transform:`scale(${s(p).scale}) translateZ(${s(p).translateZ}px) rotateX(${s(p).rotateX}deg) rotateY(${s(p).rotateY}deg)`})},[a("div",Ke,[m(f,{level:s(c).getUserLevel,skin:!0},null,8,["level"])])],4)],42,Je),a("div",et,[(T(!0),P(ve,null,fe(s(b),C=>q((T(),P("div",{id:C.date,key:C.date,initial:{y:C.y,x:C.x,opacity:1},enter:{y:C.y-140,opacity:0,transition:{type:"spring",stiffness:"30"}}},[K(L(s(k)),1)],8,tt)),[[D]])),128))]),a("div",ot,[a("div",st,[m(w,{name:"energy"}),a("p",null,L(s(c).availableTaps)+" / "+L(s(c).maxTaps),1)]),m(I,{class:"user-tap-boost",to:s(U).GAME_BOOST,onClick:l[0]||(l[0]=C=>("useUiStore"in o?o.useUiStore:s(F))().useHapticFeedback("soft"))},{default:B(()=>[a("img",{src:"IMAGE_BOOST"in o?o.IMAGE_BOOST:s(ge),alt:o.$t("buttons.boost")},null,8,nt),a("p",null,L(o.$t("buttons.boost")),1)]),_:1},8,["to"])])])}}});export{dt as _,ut as a,it as b};
