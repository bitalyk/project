import{o as a,a as c,f as i,Z as f,R as m,d as g,h as p,b as s,g as x,n,w as t}from"./entry.PKrA3y6R.js";const _=["src"];function y(e,r){return a(),c("img",{class:"coin img-responsive",src:"IMAGE_COIN"in e?e.IMAGE_COIN:i(f)},null,8,_)}const h={},C=m(h,[["render",y]]),S={class:"price"},I={class:"price-image"},v=g({__name:"Price",props:{price:{type:Number,required:!0},text:{type:String,required:!1},size:{type:String,default:"normal"},prefix:{type:String,required:!1},affix:{type:String,required:!1},color:{type:String,required:!1},round:{type:Boolean,default:!0,required:!1}},setup(e){const r=e;function o(){switch(r.size){case"super-small":return"is-14";case"small":return"is-18";case"normal":return"is-20";case"large":return"is-28";case"x-large":return"is-40";case"xx-large":return"is-60";default:return"is-20"}}function l(){switch(r.color){case"yellow":return"text-yellow";case"green":return"text-green";case"orange":return"text-orange";case"blue":return"text-blue";case"red":return"text-red";default:return""}}const u=p();return(q,N)=>{const d=C;return a(),c("div",S,[s("div",I,[x(d,{class:n(o())},null,8,["class"])]),s("div",{class:n(["price-value",l()])},t(e.prefix)+t(e.text?e.text:i(u).numberFormat(e.price,e.round))+t(e.affix),3)])}}});export{v as _,C as a};
