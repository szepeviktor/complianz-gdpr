"use strict";(self.webpackChunkcomplianz_gdpr=self.webpackChunkcomplianz_gdpr||[]).push([[9248],{89248:function(e,t,n){n.r(t);var u=n(69307);t.default=(0,u.memo)((e=>{let{value:t,onChange:n,onError:a,required:l,disabled:r,id:p,name:i}=e;const c=p||i,[o,s]=(0,u.useState)("");return(0,u.useEffect)((()=>{t||(t=""),s(t)}),[]),(0,u.useEffect)((()=>{const e=setTimeout((()=>{n(o),null===o.match(/^\+?[\d\-\(\)\s]*$/)&&a("invalid_phone")}),500);return()=>{clearTimeout(e)}}),[o]),(0,u.createElement)("div",{className:"cmplz-input-group cmplz-phone-input-group"},(0,u.createElement)("input",{type:"tel",id:c,name:i,value:o,onChange:e=>(e=>{s(e)})(e.target.value),required:l,disabled:r,className:"cmplz-phone-input-group__input"}))}))}}]);