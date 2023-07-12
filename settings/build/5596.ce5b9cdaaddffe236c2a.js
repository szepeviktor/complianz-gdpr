"use strict";(self.webpackChunkcomplianz_gdpr=self.webpackChunkcomplianz_gdpr||[]).push([[5596,5343,881,2588,5294,5671,5364,4573,849],{75343:(e,t,l)=>{l.r(t),l.d(t,{default:()=>i});var a=l(69307),n=l(99196),c=l(74981),r=(l(61549),l(42270),l(82679),l(65736)),s=l(20384);const i=(0,n.memo)((e=>{let t=e.mode?e.mode:"css",l=e.height?e.height:"200px",i=e.field&&e.field.default?e.field.default:e.placeholder;const[o,d]=(0,n.useState)(e.value),[p,u]=(0,n.useState)(!1);(0,n.useEffect)((()=>{const t=setTimeout((()=>{e.onChange(o)}),500);return()=>{clearTimeout(t)}}),[o]);let m=e.disabled?"cmplz-editor-disabled":"";return(0,a.createElement)("div",{className:m},p&&(0,a.createElement)("div",{className:"cmplz-error-text"},(0,a.createElement)(s.default,{name:"error",size:13,color:"red"}),(0,a.createElement)("p",null,(0,r.__)("Write your javascript without wrapping it in script tags.","complianz-gdpr"))),(0,a.createElement)(c.ZP,{readOnly:e.disabled,placeholder:"//"+i,mode:t,theme:"monokai",width:"100%",height:l,onChange:e=>(e=>{(e.includes("<script>")||e.includes("<\/script>"))&&u(!0),e=e.replace(/<script>/gi,""),console.log(e),e=e.replace(/<\/script>/gi,""),d(e)})(e),fontSize:12,showPrintMargin:!0,showGutter:!0,highlightActiveLine:!0,value:o,setOptions:{enableBasicAutocompletion:!1,enableLiveAutocompletion:!1,enableSnippets:!1,showLineNumbers:!0,tabSize:2,useWorker:!1}}))}))},80881:(e,t,l)=>{l.r(t),l.d(t,{default:()=>o});var a=l(69307),n=l(99196),c=l(48399),r=l(56293),s=l(82485),i=l(55609);const o=(0,n.memo)((e=>{let{type:t="action",style:l="tertiary",label:o,onClick:d,href:p="",target:u="",disabled:m,action:h,field:b,children:f}=e;if(!o&&!f)return null;const g=(b&&b.button_text?b.button_text:o)||f,{fetchFieldsData:_,showSavedSettingsNotice:E}=(0,r.default)(),{selectedSubMenuItem:y}=(0,s.default)(),[v,k]=(0,n.useState)(!1),z=`button cmplz-button button--${l} button-${t}`,w=async e=>{await c.doAction(b.action,{}).then((e=>{e.success&&(_(y),E(e.message))}))},C=b&&b.warn?b.warn:"";return"action"===t?(0,a.createElement)(a.Fragment,null,(0,a.createElement)(i.__experimentalConfirmDialog,{isOpen:v,onConfirm:async()=>{k(!1),await w()},onCancel:()=>{k(!1)}},C),(0,a.createElement)("button",{className:z,onClick:async e=>{"action"===t&&d?d(e):"action"===t&&h?b&&b.warn?k(!0):await w():window.location.href=b.url},disabled:m},g)):"link"===t?(0,a.createElement)("a",{className:z,href:p,target:u},g):void 0}))},382:(e,t,l)=>{l.r(t),l.d(t,{default:()=>x});var a=l(69307),n=l(87462),c=l(99196),r=l(28771),s=l(25360),i=l(36206),o=l(77342),d=l(57898),p=l(7546),u=l(29115),m=l(75320);const h="Checkbox",[b,f]=(0,s.b)(h),[g,_]=b(h),E=(0,c.forwardRef)(((e,t)=>{const{__scopeCheckbox:l,name:a,checked:s,defaultChecked:d,required:p,disabled:u,value:h="on",onCheckedChange:b,...f}=e,[_,E]=(0,c.useState)(null),z=(0,r.e)(t,(e=>E(e))),w=(0,c.useRef)(!1),C=!_||Boolean(_.closest("form")),[N=!1,S]=(0,o.T)({prop:s,defaultProp:d,onChange:b}),x=(0,c.useRef)(N);return(0,c.useEffect)((()=>{const e=null==_?void 0:_.form;if(e){const t=()=>S(x.current);return e.addEventListener("reset",t),()=>e.removeEventListener("reset",t)}}),[_,S]),(0,c.createElement)(g,{scope:l,state:N,disabled:u},(0,c.createElement)(m.WV.button,(0,n.Z)({type:"button",role:"checkbox","aria-checked":v(N)?"mixed":N,"aria-required":p,"data-state":k(N),"data-disabled":u?"":void 0,disabled:u,value:h},f,{ref:z,onKeyDown:(0,i.M)(e.onKeyDown,(e=>{"Enter"===e.key&&e.preventDefault()})),onClick:(0,i.M)(e.onClick,(e=>{S((e=>!!v(e)||!e)),C&&(w.current=e.isPropagationStopped(),w.current||e.stopPropagation())}))})),C&&(0,c.createElement)(y,{control:_,bubbles:!w.current,name:a,value:h,checked:N,required:p,disabled:u,style:{transform:"translateX(-100%)"}}))})),y=e=>{const{control:t,checked:l,bubbles:a=!0,...r}=e,s=(0,c.useRef)(null),i=(0,d.D)(l),o=(0,p.t)(t);return(0,c.useEffect)((()=>{const e=s.current,t=window.HTMLInputElement.prototype,n=Object.getOwnPropertyDescriptor(t,"checked").set;if(i!==l&&n){const t=new Event("click",{bubbles:a});e.indeterminate=v(l),n.call(e,!v(l)&&l),e.dispatchEvent(t)}}),[i,l,a]),(0,c.createElement)("input",(0,n.Z)({type:"checkbox","aria-hidden":!0,defaultChecked:!v(l)&&l},r,{tabIndex:-1,ref:s,style:{...e.style,...o,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function v(e){return"indeterminate"===e}function k(e){return v(e)?"indeterminate":e?"checked":"unchecked"}const z=E,w=(0,c.forwardRef)(((e,t)=>{const{__scopeCheckbox:l,forceMount:a,...r}=e,s=_("CheckboxIndicator",l);return(0,c.createElement)(u.z,{present:a||v(s.state)||!0===s.state},(0,c.createElement)(m.WV.span,(0,n.Z)({"data-state":k(s.state),"data-disabled":s.disabled?"":void 0},r,{ref:t,style:{pointerEvents:"none",...e.style}})))}));var C=l(65736),N=l(20384),S=l(80881);const x=(0,c.memo)((e=>{let{indeterminate:t,label:l,value:n,id:r,onChange:s,required:i,disabled:o,options:d={}}=e,p=n;Array.isArray(p)||(p=""===p?[]:[p]),t&&(n=!0);const u=p,[m,h]=(0,c.useState)(!1);let b=!1;Object.keys(d).length>10&&(b=!0);const f=e=>u.includes(e),g=()=>{h(!m)};let _=o&&!Array.isArray(o);return(0,a.createElement)("div",{className:"cmplz-checkbox-group"},Object.entries(d).map(((e,c)=>{let[p,h]=e;return(0,a.createElement)("div",{key:p,className:"cmplz-checkbox-group__item"+(!m&&c>10?" cmplz-hidden":"")},(0,a.createElement)(z,{className:"cmplz-checkbox-group__checkbox",id:r+"_"+p,checked:1===Object.keys(d).length?n:f(p),"aria-label":l,disabled:_||Array.isArray(o)&&o.includes(p),required:i,onCheckedChange:e=>((e,t)=>{if(1===Object.keys(d).length)s(!n);else{const e=u.includes(t)?u.filter((e=>e!==t)):[...u,t];s(e)}})(0,p)},(0,a.createElement)(w,{className:"cmplz-checkbox-group__indicator"},(0,a.createElement)(N.default,{name:t?"indeterminate":"check",size:14,color:"dark-blue"}))),(0,a.createElement)("label",{className:"cmplz-checkbox-group__label",htmlFor:r+"_"+p},h))})),!m&&b&&(0,a.createElement)(S.default,{onClick:g},(0,C.__)("Show more","complianz-gdpr")),m&&b&&(0,a.createElement)(S.default,{onClick:g},(0,C.__)("Show less","complianz-gdpr")))}))},41629:(e,t,l)=>{l.r(t),l.d(t,{default:()=>c});var a=l(69307),n=l(872);const c=(0,l(99196).memo)((e=>{let{label:t,id:l,value:c,onChange:r,required:s,defaultValue:i,disabled:o,options:d={}}=e;return(0,a.createElement)(n.fC,{disabled:o&&!Array.isArray(o),className:"cmplz-input-group cmplz-radio-group",value:c,"aria-label":t,onValueChange:r,required:s,default:i},Object.entries(d).map((e=>{let[t,c]=e;return(0,a.createElement)("div",{key:t,className:"cmplz-radio-group__item"},(0,a.createElement)(n.ck,{disabled:Array.isArray(o)&&o.includes(t),value:t,id:l+"_"+t},(0,a.createElement)(n.z$,{className:"cmplz-radio-group__indicator"})),(0,a.createElement)("label",{className:"cmplz-radio-label",htmlFor:l+"_"+t},c))})))}))},32588:(e,t,l)=>{l.r(t),l.d(t,{default:()=>i});var a=l(69307),n=l(99196),c=l(79552),r=l(20384),s=l(65736);const i=(0,n.memo)((e=>{let{value:t=!1,onChange:l,required:n,defaultValue:i,disabled:o,options:d={},canBeEmpty:p=!0,label:u,innerRef:m}=e;if(Array.isArray(d)){let e={};d.map((t=>{e[t.value]=t.label})),d=e}return p?d={0:(0,s.__)("Select an option","complianz-gdpr"),...d}:t||(t=Object.keys(d)[0]),(0,a.createElement)("div",{className:"cmplz-input-group cmplz-select-group",key:u},(0,a.createElement)(c.fC,{value:t,defaultValue:i,onValueChange:l,required:n,disabled:o&&!Array.isArray(o)},(0,a.createElement)(c.xz,{className:"cmplz-select-group__trigger"},(0,a.createElement)(c.B4,null),(0,a.createElement)(r.default,{name:"chevron-down"})),(0,a.createElement)(c.VY,{className:"cmplz-select-group__content",position:"popper"},(0,a.createElement)(c.u_,{className:"cmplz-select-group__scroll-button"},(0,a.createElement)(r.default,{name:"chevron-up"})),(0,a.createElement)(c.l_,{className:"cmplz-select-group__viewport"},(0,a.createElement)(c.ZA,null,Object.entries(d).map((e=>{let[t,l]=e;return(0,a.createElement)(c.ck,{disabled:Array.isArray(o)&&o.includes(t),className:"cmplz-select-group__item",key:t,value:t},(0,a.createElement)(c.eT,null,l))})))),(0,a.createElement)(c.$G,{className:"cmplz-select-group__scroll-button"},(0,a.createElement)(r.default,{name:"chevron-down"})))))}))},38857:(e,t,l)=>{l.r(t),l.d(t,{default:()=>z});var a=l(69307),n=l(99196),c=l(87462),r=l(36206),s=l(28771),i=l(25360),o=l(77342),d=l(57898),p=l(7546),u=l(75320);const m="Switch",[h,b]=(0,i.b)(m),[f,g]=h(m),_=(0,n.forwardRef)(((e,t)=>{const{__scopeSwitch:l,name:a,checked:i,defaultChecked:d,required:p,disabled:m,value:h="on",onCheckedChange:b,...g}=e,[_,v]=(0,n.useState)(null),k=(0,s.e)(t,(e=>v(e))),z=(0,n.useRef)(!1),w=!_||Boolean(_.closest("form")),[C=!1,N]=(0,o.T)({prop:i,defaultProp:d,onChange:b});return(0,n.createElement)(f,{scope:l,checked:C,disabled:m},(0,n.createElement)(u.WV.button,(0,c.Z)({type:"button",role:"switch","aria-checked":C,"aria-required":p,"data-state":y(C),"data-disabled":m?"":void 0,disabled:m,value:h},g,{ref:k,onClick:(0,r.M)(e.onClick,(e=>{N((e=>!e)),w&&(z.current=e.isPropagationStopped(),z.current||e.stopPropagation())}))})),w&&(0,n.createElement)(E,{control:_,bubbles:!z.current,name:a,value:h,checked:C,required:p,disabled:m,style:{transform:"translateX(-100%)"}}))})),E=e=>{const{control:t,checked:l,bubbles:a=!0,...r}=e,s=(0,n.useRef)(null),i=(0,d.D)(l),o=(0,p.t)(t);return(0,n.useEffect)((()=>{const e=s.current,t=window.HTMLInputElement.prototype,n=Object.getOwnPropertyDescriptor(t,"checked").set;if(i!==l&&n){const t=new Event("click",{bubbles:a});n.call(e,l),e.dispatchEvent(t)}}),[i,l,a]),(0,n.createElement)("input",(0,c.Z)({type:"checkbox","aria-hidden":!0,defaultChecked:l},r,{tabIndex:-1,ref:s,style:{...e.style,...o,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function y(e){return e?"checked":"unchecked"}const v=_,k=(0,n.forwardRef)(((e,t)=>{const{__scopeSwitch:l,...a}=e,r=g("SwitchThumb",l);return(0,n.createElement)(u.WV.span,(0,c.Z)({"data-state":y(r.checked),"data-disabled":r.disabled?"":void 0},a,{ref:t}))})),z=(0,n.memo)((e=>{let{value:t,onChange:l,required:n,disabled:c,className:r,label:s}=e,i=t;return"0"!==t&&"1"!==t||(i="1"===t),(0,a.createElement)("div",{className:"cmplz-input-group cmplz-switch-group"},(0,a.createElement)(v,{className:"cmplz-switch-root "+r,checked:i,onCheckedChange:l,disabled:c,required:n},(0,a.createElement)(k,{className:"cmplz-switch-thumb"})))}))},65294:(e,t,l)=>{l.r(t),l.d(t,{default:()=>c});var a=l(69307),n=l(99196);const c=(0,n.memo)((e=>{let{value:t,onChange:l,required:c,defaultValue:r,disabled:s,id:i,name:o,placeholder:d}=e;const p=i||o,[u,m]=(0,n.useState)("");return(0,n.useEffect)((()=>{m(t||"")}),[t]),(0,n.useEffect)((()=>{const e=setTimeout((()=>{l(u)}),500);return()=>{clearTimeout(e)}}),[u]),(0,a.createElement)("div",{className:"cmplz-input-group cmplz-text-input-group"},(0,a.createElement)("input",{type:"text",id:p,name:o,value:u,onChange:e=>(e=>{m(e)})(e.target.value),required:c,disabled:s,className:"cmplz-text-input-group__input",placeholder:d}))}))},17347:(e,t,l)=>{l.r(t),l.d(t,{default:()=>s});var a=l(69307),n=l(41629),c=l(65736),r=l(85671);const s=e=>{const{setScript:t,fetching:l}=(0,r.default)(),s=e.script,i={statistics:(0,c.__)("Statistics","complianz-gdpr"),marketing:(0,c.__)("Marketing","complianz-gdpr")};return(0,a.createElement)(a.Fragment,null,(0,a.createElement)("label",null,(0,c.__)("Category","complianz-gdpr")),(0,a.createElement)(n.default,{disabled:l,label:(0,c.__)("Marketing","complianz-gdpr"),id:"category",value:s.category,onChange:l=>((l,a)=>{let n={...s};n.category=l,t(n,e.type)})(l),defaultValue:"marketing",options:i}))}},13863:(e,t,l)=>{l.r(t),l.d(t,{default:()=>i});var a=l(69307),n=l(65736),c=(l(38857),l(32588)),r=l(85671),s=l(382);const i=e=>{const{setScript:t,blockedScripts:l,fetching:i}=(0,r.default)(),o=l,d=e.script,p=e=>{if(!d.dependency||0===d.dependency.length)return"";let t=Object.entries(d.dependency);for(const[l,a]of t)if(l===e)return a;return""},u=(e,t)=>{let l={...e};for(const[e,a]of Object.entries(l))if(a===t){delete l[e];break}return l};let m=d.hasOwnProperty("urls")?Object.entries(d.urls):[""];return(0,a.createElement)(a.Fragment,null,(0,a.createElement)("div",{className:"cmplz-details-row cmplz-details-row__checkbox"},(0,a.createElement)(s.default,{id:d.id+"dependency",disabled:i,value:d.enable_dependency,onChange:l=>((l,a)=>{let n={...d};n.enable_dependency=l,t(n,e.type)})(l),options:{dependency:(0,n.__)("Enable dependency","complianz-gdpr")}})),!!d.enable_dependency&&(0,a.createElement)("div",{className:"cmplz-details-row cmplz-details-row"},m.length>1&&m.map(((l,r)=>{let[s,m]=l;return(0,a.createElement)("div",{key:r,className:"cmplz-scriptcenter-dependencies"},(0,a.createElement)(c.default,{disabled:i,value:p(m),options:u(o,m),onChange:l=>((l,a)=>{let n={...d},c={...n.dependency};c[a]=l,n.dependency=c,t(n,e.type)})(l,m)}),(0,a.createElement)("div",null,(0,n.__)("waits for: ","complianz-gdpr"),m||(0,n.__)("Empty URL","complianz-gdpr")))})),m.length<=1&&(0,a.createElement)(a.Fragment,null,(0,n.__)("Add a URL to create a dependency between two URLs","complianz-gdpr"))))}},85671:(e,t,l)=>{l.r(t),l.d(t,{default:()=>r});var a=l(30270),n=l(12902),c=l(48399);const r=(0,a.Ue)(((e,t)=>({integrationsLoaded:!1,fetching:!1,services:[],plugins:[],scripts:[],placeholders:[],blockedScripts:[],setScript:(t,l)=>{e((0,n.ZP)((e=>{if("block_script"===l){let l=e.blockedScripts;if(t.urls){for(const[e,a]of Object.entries(t.urls)){if(!a||0===a.length)continue;let e=!1;for(const[t,n]of Object.entries(l))a===t&&(e=!0);e||(l[a]=a)}e.blockedScripts=l}}const a=e.scripts[l].findIndex((e=>e.id===t.id));-1!==a&&(e.scripts[l][a]=t)})))},fetchIntegrationsData:async()=>{if(t().fetching)return;e({fetching:!0});const{services:l,plugins:a,scripts:n,placeholders:c,blocked_scripts:r}=await s();let i=n;i.block_script.forEach(((e,t)=>{e.id=t})),i.add_script.forEach(((e,t)=>{e.id=t})),i.whitelist_script.forEach(((e,t)=>{e.id=t})),e((()=>({integrationsLoaded:!0,services:l,plugins:a,scripts:i,fetching:!1,placeholders:c,blockedScripts:r})))},addScript:l=>{e({fetching:!0}),e((0,n.ZP)((e=>{e.scripts[l].push({name:"general",id:e.scripts[l].length,enable:!0})})));let a=t().scripts;return c.doAction("update_scripts",{scripts:a}).then((t=>(e({fetching:!1}),t))).catch((e=>{console.error(e)}))},saveScript:(l,a)=>{e({fetching:!0}),e((0,n.ZP)((e=>{const t=e.scripts[a].findIndex((e=>e.id===l.id));-1!==t&&(e.scripts[a][t]=l)})));let r=t().scripts;return c.doAction("update_scripts",{scripts:r}).then((t=>(e({fetching:!1}),t))).catch((e=>{console.error(e)}))},deleteScript:(l,a)=>{e({fetching:!0}),e((0,n.ZP)((e=>{const t=e.scripts[a].findIndex((e=>e.id===l.id));-1!==t&&e.scripts[a].splice(t,1)})));let r=t().scripts;return c.doAction("update_scripts",{scripts:r}).then((t=>(e({fetching:!1}),t))).catch((e=>{console.error(e)}))},updatePluginStatus:async(t,l)=>{e({fetching:!0}),e((0,n.ZP)((e=>{const a=e.plugins.findIndex((e=>e.id===t));-1!==a&&(e.plugins[a].enabled=l)})));const a=await c.doAction("update_plugin_status",{plugin:t,enabled:l}).then((e=>e)).catch((e=>{console.error(e)}));return e({fetching:!1}),a},updatePlaceholderStatus:async(t,l,a)=>{e({fetching:!0}),a&&e((0,n.ZP)((e=>{const a=e.plugins.findIndex((e=>e.id===t));-1!==a&&(e.plugins[a].placeholder=l?"enabled":"disabled")})));const r=await c.doAction("update_placeholder_status",{id:t,enabled:l}).then((e=>e)).catch((e=>{console.error(e)}));return e({fetching:!1}),r}}))),s=()=>c.doAction("get_integrations_data",{}).then((e=>e)).catch((e=>{console.error(e)}))},44783:(e,t,l)=>{l.r(t),l.d(t,{default:()=>d});var a=l(69307),n=(l(38857),l(60849)),c=l(65294),r=l(32588),s=l(65736),i=l(85671),o=l(382);const d=e=>{const{setScript:t,fetching:l,placeholders:d}=(0,i.default)(),p=e.script,u=e.type,m=(l,a)=>{let n={...p};n[a]=l,t(n,e.type)};return(0,a.createElement)(a.Fragment,null,(0,a.createElement)("div",{className:"cmplz-details-row cmplz-details-row__checkbox"},(0,a.createElement)("label",null,(0,s.__)("Placeholder","complianz-gdpr")),(0,a.createElement)(o.default,{id:p.id+"placeholder",disabled:l,value:p.enable_placeholder,onChange:e=>m(e,"enable_placeholder"),options:{placeholder:(0,s.__)("Enable placeholder","complianz-gdpr")}})),!!p.enable_placeholder&&(0,a.createElement)(a.Fragment,null,"block_script"===u&&(0,a.createElement)("div",{className:"cmplz-details-row cmplz-details-row__checkbox"},(0,a.createElement)(o.default,{id:p.id+"iframe",disabled:l,value:p.iframe||"",onChange:e=>m(e||"","iframe"),options:{iframe:(0,s.__)("The blocked content is an iframe","complianz-gdpr")}})),!p.iframe&&(0,a.createElement)("div",{className:"cmplz-details-row cmplz-details-row"},(0,a.createElement)("p",null,(0,s.__)("Enter the div class or ID that should be targeted.","complianz-gdpr"),(0,n.default)("https://complianz.io/integrating-plugins/#placeholder/")),(0,a.createElement)(c.default,{disabled:l,value:p.placeholder_class||"",onChange:e=>m(e||"","placeholder_class"),name:"placeholder_class",placeholder:(0,s.__)("Your CSS class","complianz-gdpr")})),(0,a.createElement)("div",{className:"cmplz-details-row cmplz-details-row__checkbox"},(0,a.createElement)(r.default,{disabled:l,value:p.placeholder?p.placeholder:"default",options:d,onChange:e=>m(e||"default","placeholder")}))))}},15596:(e,t,l)=>{l.r(t),l.d(t,{default:()=>b});var a=l(69307),n=l(34573),c=l(65736),r=l(85671),s=l(75343),i=l(38857),o=l(99196),d=l(17347),p=l(44783),u=l(13863),m=l(25364),h=l(382);const b=(0,o.memo)((e=>{const{setScript:t,fetching:l,saveScript:o,deleteScript:b}=(0,r.default)(),f=e.script,g=(l,a)=>{let n={...f};n[a]=l,t(n,e.type),o(n,e.type)},_=(l,a)=>{let n={...f};n[a]=l,t(n,e.type)},E=()=>{o(f,e.type)},y=()=>{b(f,e.type)};return f?(0,a.createElement)(a.Fragment,null,(0,a.createElement)(n.default,{summary:f.name,icons:(e=>(0,a.createElement)(a.Fragment,null,(0,a.createElement)(i.default,{className:"cmplz-switch-input-tiny",onChange:e=>g(e,"enable"),value:e.enable})))(f),details:((e,t)=>{const{fetching:l}=(0,r.default)();return(0,a.createElement)(a.Fragment,null,(0,a.createElement)("div",{className:"cmplz-details-row"},(0,a.createElement)("label",null,(0,c.__)("Name","complianz-gdpr")),(0,a.createElement)("input",{disabled:l,onChange:e=>_(e.target.value,"name"),type:"text",placeholder:(0,c.__)("Name","complianz-gdpr"),value:e.name})),"add_script"===t&&(0,a.createElement)("div",{className:"cmplz-details-row"},(0,a.createElement)(s.default,{disabled:l,onChange:e=>(e=>{_(e,"editor")})(e),placeholder:"Enter your script here",value:e.editor?e.editor:console.log("marketing enabled")})),("block_script"===t||"whitelist_script"===t)&&(0,a.createElement)(m.default,{script:e,type:t}),"whitelist_script"!==t&&(0,a.createElement)(a.Fragment,null,(0,a.createElement)("div",{className:"cmplz-details-row cmplz-details-row__checkbox"},(0,a.createElement)(h.default,{id:e.id,disabled:l,value:e.async,onChange:e=>_(e,"async"),options:{async:"This script contains an async attribute."}})),(0,a.createElement)("div",{className:"cmplz-details-row"},(0,a.createElement)(d.default,{script:e,type:t})),(0,a.createElement)(p.default,{script:e,type:t})),"block_script"===t&&(0,a.createElement)("div",{className:"cmplz-details-row cmplz-details-row__checkbox"},(0,a.createElement)("label",null,(0,c.__)("Dependency","complianz-gdpr")),(0,a.createElement)(u.default,{script:e,type:t})),(0,a.createElement)("div",{className:"cmplz-details-row cmplz-details-row__buttons"},(0,a.createElement)("button",{disabled:l,onClick:e=>E(),className:"button button-default"},(0,c.__)("Save","complianz-gdpr")),(0,a.createElement)("button",{disabled:l,className:"button button-default cmplz-reset-button",onClick:e=>y()},(0,c.__)("Delete","complianz-gdpr"))))})(f,e.type)})):(0,a.createElement)(n.default,{summary:"..."})}))},25364:(e,t,l)=>{l.r(t),l.d(t,{default:()=>o});var a=l(69307),n=l(65736),c=l(60849),r=l(65294),s=l(20384),i=l(85671);const o=e=>{const{setScript:t,fetching:l}=(0,i.default)(),o=e.script,d=e.type;let p=o.hasOwnProperty("urls")?Object.entries(o.urls):[""];return(0,a.createElement)("div",{className:"cmplz-details-row"},(0,a.createElement)("label",null,"block_script"===d&&(0,n.__)("URLs that should be blocked before consent.","complianz-gdpr"),"whitelist_script"===d&&(0,a.createElement)(a.Fragment,null,(0,n.__)("URLs that should be whitelisted.","complianz-gdpr"),(0,c.default)("https://complianz.io/whitelisting-inline-script/"))),p.map(((n,c)=>{let[i,d]=n;return(0,a.createElement)("div",{key:c,className:"cmplz-scriptcenter-url"},(0,a.createElement)(r.default,{disabled:l,value:d||"",onChange:l=>((l,a)=>{let n={...o},c={...n.urls};c[l]=a,n.urls=c,t(n,e.type)})(i,l),id:c+"_url",name:"url"}),0===c&&(0,a.createElement)("button",{className:"button button-default",onClick:()=>(()=>{let l={...o},a=Object.keys(l.urls).length,n={...l.urls};n[a+1]="",l.urls=n,t(l,e.type)})()}," ",(0,a.createElement)(s.default,{name:"plus",size:14})),0!==c&&(0,a.createElement)("button",{className:"button button-default",onClick:()=>(l=>{let a={...o},n={...a.urls};delete n[l],a.urls=n,t(a,e.type)})(i)}," ",(0,a.createElement)(s.default,{name:"minus",size:14})))})))}},34573:(e,t,l)=>{l.r(t),l.d(t,{default:()=>c});var a=l(69307),n=l(20384);const c=e=>(0,a.createElement)("div",{className:"cmplz-panel__list__item",key:e.id,style:e.style?e.style:{}},(0,a.createElement)("details",null,(0,a.createElement)("summary",null,e.icon&&(0,a.createElement)(n.default,{name:e.icon}),(0,a.createElement)("h5",{className:"cmplz-panel__list__item__title"},e.summary),(0,a.createElement)("div",{className:"cmplz-panel__list__item__comment"},e.comment),(0,a.createElement)("div",{className:"cmplz-panel__list__item__icons"},e.icons),(0,a.createElement)(n.default,{name:"chevron-down",size:18})),(0,a.createElement)("div",{className:"cmplz-panel__list__item__details"},e.details)))},60849:(e,t,l)=>{l.r(t),l.d(t,{default:()=>r});var a=l(69307),n=l(65736),c=l(99950);const r=e=>(0,a.createElement)(a.Fragment,null," ",(0,a.createElement)(c.default,{url:e,text:(0,n.__)("For more information, please read this %sarticle%s.","complianz-gdpr")})," ")}}]);