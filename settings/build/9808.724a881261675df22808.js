"use strict";(self.webpackChunkcomplianz_gdpr=self.webpackChunkcomplianz_gdpr||[]).push([[9808,2175,5343,881,2588,5294,5671,5596,5364,4573,849],{32175:function(e,t,a){a.r(t),a.d(t,{UseCookieScanData:function(){return r}});var l=a(30270),n=a(48399);const r=(0,l.Ue)(((e,t)=>({initialLoadCompleted:!1,setInitialLoadCompleted:t=>e({initialLoadCompleted:t}),iframeLoaded:!1,loading:!1,nextPage:!1,progress:0,cookies:[],lastLoadedIframe:"",setIframeLoaded:t=>e({iframeLoaded:t}),setLastLoadedIframe:t=>e((e=>({lastLoadedIframe:t}))),setProgress:t=>e({progress:t}),fetchProgress:()=>(e({loading:!0}),n.doAction("get_scan_progress",{}).then((t=>(e({initialLoadCompleted:!0,loading:!1,nextPage:t.next_page,progress:t.progress,cookies:t.cookies}),t))))})))},75343:function(e,t,a){a.r(t);var l=a(69307),n=a(74981),r=(a(61549),a(42270),a(82679),a(65736)),c=a(23361);t.default=(0,l.memo)((e=>{let t=e.mode?e.mode:"css",a=e.height?e.height:"200px",i=e.field&&e.field.default?e.field.default:e.placeholder;const[s,o]=(0,l.useState)(e.value),[d,p]=(0,l.useState)(!1);(0,l.useEffect)((()=>{const t=setTimeout((()=>{e.onChange(s)}),500);return()=>{clearTimeout(t)}}),[s]);let u=e.disabled?"cmplz-editor-disabled":"";return(0,l.createElement)("div",{className:u},d&&(0,l.createElement)("div",{className:"cmplz-error-text"},(0,l.createElement)(c.default,{name:"error",size:13,color:"red"}),(0,l.createElement)("p",null,(0,r.__)("Write your JavaScript without wrapping it in script tags.","complianz-gdpr"))),(0,l.createElement)(n.ZP,{readOnly:e.disabled,placeholder:"//"+i,mode:t,theme:"monokai",width:"100%",height:a,onChange:e=>(e=>{(e.includes("<script>")||e.includes("<\/script>"))&&p(!0),e=(e=e.replace(/<script>/gi,"")).replace(/<\/script>/gi,""),o(e)})(e),fontSize:12,showPrintMargin:!0,showGutter:!0,highlightActiveLine:!0,value:s,setOptions:{enableBasicAutocompletion:!1,enableLiveAutocompletion:!1,enableSnippets:!1,showLineNumbers:!0,tabSize:2,useWorker:!1}}))}))},80881:function(e,t,a){a.r(t);var l=a(69307),n=a(48399),r=a(56293),c=a(82485),i=a(55609),s=a(32175),o=a(82387);t.default=(0,l.memo)((e=>{let{type:t="action",style:a="tertiary",label:d,onClick:p,href:u="",target:m="",disabled:f,action:h,field:g,children:b}=e;if(!d&&!b)return null;const _=(g&&g.button_text?g.button_text:d)||b,{fetchFieldsData:E,showSavedSettingsNotice:v}=(0,r.default)(),{setInitialLoadCompleted:y,setProgress:k}=(0,s.UseCookieScanData)(),{setProgressLoaded:z}=(0,o.default)(),{selectedSubMenuItem:w}=(0,c.default)(),[C,N]=(0,l.useState)(!1),S=`button cmplz-button button--${a} button-${t}`,x=async e=>{await n.doAction(g.action,{}).then((e=>{e.success&&(E(w),"reset_settings"===e.id&&(y(!1),k(0),z(!1)),v(e.message))}))},A=g&&g.warn?g.warn:"";return"action"===t?(0,l.createElement)(l.Fragment,null,i.__experimentalConfirmDialog&&(0,l.createElement)(i.__experimentalConfirmDialog,{isOpen:C,onConfirm:async()=>{N(!1),await x()},onCancel:()=>{N(!1)}},A),(0,l.createElement)("button",{className:S,onClick:async e=>{if("action"!==t||!p)return"action"===t&&h?i.__experimentalConfirmDialog?void(g&&g.warn?N(!0):await x()):void await x():void(window.location.href=g.url);p(e)},disabled:f},_)):"link"===t?(0,l.createElement)("a",{className:S,href:u,target:m},_):void 0}))},382:function(e,t,a){a.r(t),a.d(t,{default:function(){return x}});var l=a(69307),n=a(87462),r=a(99196),c=a(28771),i=a(25360),s=a(36206),o=a(77342),d=a(57898),p=a(7546),u=a(29115),m=a(75320);const f="Checkbox",[h,g]=(0,i.b)(f),[b,_]=h(f),E=(0,r.forwardRef)(((e,t)=>{const{__scopeCheckbox:a,name:l,checked:i,defaultChecked:d,required:p,disabled:u,value:f="on",onCheckedChange:h,...g}=e,[_,E]=(0,r.useState)(null),z=(0,c.e)(t,(e=>E(e))),w=(0,r.useRef)(!1),C=!_||Boolean(_.closest("form")),[N=!1,S]=(0,o.T)({prop:i,defaultProp:d,onChange:h}),x=(0,r.useRef)(N);return(0,r.useEffect)((()=>{const e=null==_?void 0:_.form;if(e){const t=()=>S(x.current);return e.addEventListener("reset",t),()=>e.removeEventListener("reset",t)}}),[_,S]),(0,r.createElement)(b,{scope:a,state:N,disabled:u},(0,r.createElement)(m.WV.button,(0,n.Z)({type:"button",role:"checkbox","aria-checked":y(N)?"mixed":N,"aria-required":p,"data-state":k(N),"data-disabled":u?"":void 0,disabled:u,value:f},g,{ref:z,onKeyDown:(0,s.M)(e.onKeyDown,(e=>{"Enter"===e.key&&e.preventDefault()})),onClick:(0,s.M)(e.onClick,(e=>{S((e=>!!y(e)||!e)),C&&(w.current=e.isPropagationStopped(),w.current||e.stopPropagation())}))})),C&&(0,r.createElement)(v,{control:_,bubbles:!w.current,name:l,value:f,checked:N,required:p,disabled:u,style:{transform:"translateX(-100%)"}}))})),v=e=>{const{control:t,checked:a,bubbles:l=!0,...c}=e,i=(0,r.useRef)(null),s=(0,d.D)(a),o=(0,p.t)(t);return(0,r.useEffect)((()=>{const e=i.current,t=window.HTMLInputElement.prototype,n=Object.getOwnPropertyDescriptor(t,"checked").set;if(s!==a&&n){const t=new Event("click",{bubbles:l});e.indeterminate=y(a),n.call(e,!y(a)&&a),e.dispatchEvent(t)}}),[s,a,l]),(0,r.createElement)("input",(0,n.Z)({type:"checkbox","aria-hidden":!0,defaultChecked:!y(a)&&a},c,{tabIndex:-1,ref:i,style:{...e.style,...o,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function y(e){return"indeterminate"===e}function k(e){return y(e)?"indeterminate":e?"checked":"unchecked"}const z=E,w=(0,r.forwardRef)(((e,t)=>{const{__scopeCheckbox:a,forceMount:l,...c}=e,i=_("CheckboxIndicator",a);return(0,r.createElement)(u.z,{present:l||y(i.state)||!0===i.state},(0,r.createElement)(m.WV.span,(0,n.Z)({"data-state":k(i.state),"data-disabled":i.disabled?"":void 0},c,{ref:t,style:{pointerEvents:"none",...e.style}})))}));var C=a(65736),N=a(23361),S=a(80881),x=(0,l.memo)((e=>{let{indeterminate:t,label:a,value:n,id:r,onChange:c,required:i,disabled:s,options:o={}}=e;const[d,p]=(0,l.useState)(!1),[u,m]=(0,l.useState)(!1);let f=n;Array.isArray(f)||(f=""===f?[]:[f]),(0,l.useEffect)((()=>{let e=1===Object.keys(o).length&&"true"===Object.keys(o)[0];p(e)}),[]),t&&(n=!0);const h=f;let g=!1;Object.keys(o).length>10&&(g=!0);const b=e=>d?n:h.includes(""+e)||h.includes(parseInt(e)),_=()=>{m(!u)};let E=s&&!Array.isArray(s);return 0===Object.keys(o).length?(0,l.createElement)(l.Fragment,null,(0,C.__)("No options found","complianz-gdpr")):(0,l.createElement)("div",{className:"cmplz-checkbox-group"},Object.entries(o).map(((e,o)=>{let[p,m]=e;return(0,l.createElement)("div",{key:p,className:"cmplz-checkbox-group__item"+(!u&&o>9?" cmplz-hidden":"")},(0,l.createElement)(z,{className:"cmplz-checkbox-group__checkbox",id:r+"_"+p,checked:b(p),"aria-label":a,disabled:E||Array.isArray(s)&&s.includes(p),required:i,onCheckedChange:e=>((e,t)=>{if(d)c(!n);else{const e=h.includes(""+t)||h.includes(parseInt(t))?h.filter((e=>e!==""+t&&e!==parseInt(t))):[...h,t];c(e)}})(0,p)},(0,l.createElement)(w,{className:"cmplz-checkbox-group__indicator"},(0,l.createElement)(N.default,{name:t?"indeterminate":"check",size:14,color:"dark-blue"}))),(0,l.createElement)("label",{className:"cmplz-checkbox-group__label",htmlFor:r+"_"+p},m))})),!u&&g&&(0,l.createElement)(S.default,{onClick:()=>_()},(0,C.__)("Show more","complianz-gdpr")),u&&g&&(0,l.createElement)(S.default,{onClick:()=>_()},(0,C.__)("Show less","complianz-gdpr")))}))},41629:function(e,t,a){a.r(t);var l=a(69307),n=a(872);t.default=(0,l.memo)((e=>{let{label:t,id:a,value:r,onChange:c,required:i,defaultValue:s,disabled:o,options:d={}}=e;return(0,l.createElement)(n.fC,{disabled:o&&!Array.isArray(o),className:"cmplz-input-group cmplz-radio-group",value:r,"aria-label":t,onValueChange:c,required:i,default:s},Object.entries(d).map((e=>{let[t,r]=e;return(0,l.createElement)("div",{key:t,className:"cmplz-radio-group__item"},(0,l.createElement)(n.ck,{disabled:Array.isArray(o)&&o.includes(t),value:t,id:a+"_"+t},(0,l.createElement)(n.z$,{className:"cmplz-radio-group__indicator"})),(0,l.createElement)("label",{className:"cmplz-radio-label",htmlFor:a+"_"+t},r))})))}))},32588:function(e,t,a){a.r(t);var l=a(69307),n=a(79552),r=a(23361),c=a(65736);t.default=(0,l.memo)((e=>{let{value:t=!1,onChange:a,required:i,defaultValue:s,disabled:o,options:d={},canBeEmpty:p=!0,label:u,innerRef:m}=e;if(Array.isArray(d)){let e={};d.map((t=>{e[t.value]=t.label})),d=e}return p?(""===t||!1===t||0===t)&&(d={0:(0,c.__)("Select an option","complianz-gdpr"),...d}):t||(t=Object.keys(d)[0]),(0,l.createElement)("div",{className:"cmplz-input-group cmplz-select-group",key:u},(0,l.createElement)(n.fC,{value:t,defaultValue:s,onValueChange:a,required:i,disabled:o&&!Array.isArray(o)},(0,l.createElement)(n.xz,{className:"cmplz-select-group__trigger"},(0,l.createElement)(n.B4,null),(0,l.createElement)(r.default,{name:"chevron-down"})),(0,l.createElement)(n.VY,{className:"cmplz-select-group__content",position:"popper"},(0,l.createElement)(n.u_,{className:"cmplz-select-group__scroll-button"},(0,l.createElement)(r.default,{name:"chevron-up"})),(0,l.createElement)(n.l_,{className:"cmplz-select-group__viewport"},(0,l.createElement)(n.ZA,null,Object.entries(d).map((e=>{let[t,a]=e;return(0,l.createElement)(n.ck,{disabled:Array.isArray(o)&&o.includes(t),className:"cmplz-select-group__item",key:t,value:t},(0,l.createElement)(n.eT,null,a))})))),(0,l.createElement)(n.$G,{className:"cmplz-select-group__scroll-button"},(0,l.createElement)(r.default,{name:"chevron-down"})))))}))},38857:function(e,t,a){a.r(t),a.d(t,{default:function(){return z}});var l=a(69307),n=a(87462),r=a(99196),c=a(36206),i=a(28771),s=a(25360),o=a(77342),d=a(57898),p=a(7546),u=a(75320);const m="Switch",[f,h]=(0,s.b)(m),[g,b]=f(m),_=(0,r.forwardRef)(((e,t)=>{const{__scopeSwitch:a,name:l,checked:s,defaultChecked:d,required:p,disabled:m,value:f="on",onCheckedChange:h,...b}=e,[_,y]=(0,r.useState)(null),k=(0,i.e)(t,(e=>y(e))),z=(0,r.useRef)(!1),w=!_||Boolean(_.closest("form")),[C=!1,N]=(0,o.T)({prop:s,defaultProp:d,onChange:h});return(0,r.createElement)(g,{scope:a,checked:C,disabled:m},(0,r.createElement)(u.WV.button,(0,n.Z)({type:"button",role:"switch","aria-checked":C,"aria-required":p,"data-state":v(C),"data-disabled":m?"":void 0,disabled:m,value:f},b,{ref:k,onClick:(0,c.M)(e.onClick,(e=>{N((e=>!e)),w&&(z.current=e.isPropagationStopped(),z.current||e.stopPropagation())}))})),w&&(0,r.createElement)(E,{control:_,bubbles:!z.current,name:l,value:f,checked:C,required:p,disabled:m,style:{transform:"translateX(-100%)"}}))})),E=e=>{const{control:t,checked:a,bubbles:l=!0,...c}=e,i=(0,r.useRef)(null),s=(0,d.D)(a),o=(0,p.t)(t);return(0,r.useEffect)((()=>{const e=i.current,t=window.HTMLInputElement.prototype,n=Object.getOwnPropertyDescriptor(t,"checked").set;if(s!==a&&n){const t=new Event("click",{bubbles:l});n.call(e,a),e.dispatchEvent(t)}}),[s,a,l]),(0,r.createElement)("input",(0,n.Z)({type:"checkbox","aria-hidden":!0,defaultChecked:a},c,{tabIndex:-1,ref:i,style:{...e.style,...o,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function v(e){return e?"checked":"unchecked"}const y=_,k=(0,r.forwardRef)(((e,t)=>{const{__scopeSwitch:a,...l}=e,c=b("SwitchThumb",a);return(0,r.createElement)(u.WV.span,(0,n.Z)({"data-state":v(c.checked),"data-disabled":c.disabled?"":void 0},l,{ref:t}))}));var z=(0,l.memo)((e=>{let{value:t,onChange:a,required:n,disabled:r,className:c,label:i}=e,s=t;return"0"!==t&&"1"!==t||(s="1"===t),(0,l.createElement)("div",{className:"cmplz-input-group cmplz-switch-group"},(0,l.createElement)(y,{className:"cmplz-switch-root "+c,checked:s,onCheckedChange:a,disabled:r,required:n},(0,l.createElement)(k,{className:"cmplz-switch-thumb"})))}))},65294:function(e,t,a){a.r(t);var l=a(69307),n=a(99196);t.default=(0,n.memo)((e=>{let{value:t,onChange:a,required:r,defaultValue:c,disabled:i,id:s,name:o,placeholder:d}=e;const p=s||o,[u,m]=(0,n.useState)("");return(0,n.useEffect)((()=>{m(t||"")}),[t]),(0,n.useEffect)((()=>{const e=setTimeout((()=>{a(u)}),400);return()=>{clearTimeout(e)}}),[u]),(0,l.createElement)("div",{className:"cmplz-input-group cmplz-text-input-group"},(0,l.createElement)("input",{type:"text",id:p,name:o,value:u,onChange:e=>(e=>{m(e)})(e.target.value),required:r,disabled:i,className:"cmplz-text-input-group__input",placeholder:d}))}))},17347:function(e,t,a){a.r(t);var l=a(69307),n=a(41629),r=a(65736),c=a(85671);t.default=e=>{const{setScript:t,fetching:a}=(0,c.default)(),i=e.script,s={statistics:(0,r.__)("Statistics","complianz-gdpr"),marketing:(0,r.__)("Marketing","complianz-gdpr")};return(0,l.createElement)(l.Fragment,null,(0,l.createElement)("label",null,(0,r.__)("Category","complianz-gdpr")),(0,l.createElement)(n.default,{disabled:a,label:(0,r.__)("Marketing","complianz-gdpr"),id:"category",value:i.category,onChange:a=>((a,l)=>{let n={...i};n.category=a,t(n,e.type)})(a),defaultValue:"marketing",options:s}))}},13863:function(e,t,a){a.r(t);var l=a(69307),n=a(65736),r=(a(38857),a(32588)),c=a(85671),i=a(382);t.default=e=>{const{setScript:t,blockedScripts:a,fetching:s}=(0,c.default)(),o=a,d=e.script,p=e=>{if(!d.dependency||0===d.dependency.length)return"";let t=Object.entries(d.dependency);for(const[a,l]of t)if(a===e)return l;return""},u=(e,t)=>{let a={...e};for(const[e,l]of Object.entries(a))if(l===t){delete a[e];break}return a};let m=d.hasOwnProperty("urls")?Object.entries(d.urls):[""];return(0,l.createElement)(l.Fragment,null,(0,l.createElement)("div",{className:"cmplz-details-row cmplz-details-row__checkbox"},(0,l.createElement)(i.default,{id:d.id+"dependency",disabled:s,value:d.enable_dependency,onChange:a=>((a,l)=>{let n={...d};n.enable_dependency=a,t(n,e.type)})(a),options:{true:(0,n.__)("Enable dependency","complianz-gdpr")}})),!!d.enable_dependency&&(0,l.createElement)("div",{className:"cmplz-details-row cmplz-details-row"},m.length>1&&m.map(((a,c)=>{let[i,m]=a;return(0,l.createElement)("div",{key:c,className:"cmplz-scriptcenter-dependencies"},(0,l.createElement)(r.default,{disabled:s,value:p(m),options:u(o,m),onChange:a=>((a,l)=>{let n={...d},r={...n.dependency};r[l]=a,n.dependency=r,t(n,e.type)})(a,m)}),(0,l.createElement)("div",null,(0,n.__)("waits for: ","complianz-gdpr"),m||(0,n.__)("Empty URL","complianz-gdpr")))})),m.length<=1&&(0,l.createElement)(l.Fragment,null,(0,n.__)("Add a URL to create a dependency between two URLs","complianz-gdpr"))))}},85671:function(e,t,a){a.r(t);var l=a(30270),n=a(12902),r=a(48399);const c=(0,l.Ue)(((e,t)=>({integrationsLoaded:!1,fetching:!1,services:[],plugins:[],scripts:[],placeholders:[],blockedScripts:[],setScript:(t,a)=>{e((0,n.ZP)((e=>{if("block_script"===a){let a=e.blockedScripts;if(t.urls){for(const[e,l]of Object.entries(t.urls)){if(!l||0===l.length)continue;let e=!1;for(const[t,n]of Object.entries(a))l===t&&(e=!0);e||(a[l]=l)}e.blockedScripts=a}}const l=e.scripts[a].findIndex((e=>e.id===t.id));-1!==l&&(e.scripts[a][l]=t)})))},fetchIntegrationsData:async()=>{if(t().fetching)return;e({fetching:!0});const{services:a,plugins:l,scripts:n,placeholders:r,blocked_scripts:c}=await i();let s=n;s.block_script&&s.block_script.length>0&&s.block_script.forEach(((e,t)=>{e.id=t})),s.add_script&&s.add_script.length>0&&s.add_script.forEach(((e,t)=>{e.id=t})),s.whitelist_script&&s.whitelist_script.length>0&&s.whitelist_script.forEach(((e,t)=>{e.id=t})),e((()=>({integrationsLoaded:!0,services:a,plugins:l,scripts:s,fetching:!1,placeholders:r,blockedScripts:c})))},addScript:a=>{e({fetching:!0}),e((0,n.ZP)((e=>{e.scripts[a].push({name:"general",id:e.scripts[a].length,enable:!0})})));let l=t().scripts;return r.doAction("update_scripts",{scripts:l}).then((t=>(e({fetching:!1}),t))).catch((e=>{console.error(e)}))},saveScript:(a,l)=>{e({fetching:!0}),e((0,n.ZP)((e=>{const t=e.scripts[l].findIndex((e=>e.id===a.id));-1!==t&&(e.scripts[l][t]=a)})));let c=t().scripts;return r.doAction("update_scripts",{scripts:c}).then((t=>(e({fetching:!1}),t))).catch((e=>{console.error(e)}))},deleteScript:(a,l)=>{e({fetching:!0}),e((0,n.ZP)((e=>{const t=e.scripts[l].findIndex((e=>e.id===a.id));-1!==t&&e.scripts[l].splice(t,1)})));let c=t().scripts;return r.doAction("update_scripts",{scripts:c}).then((t=>(e({fetching:!1}),t))).catch((e=>{console.error(e)}))},updatePluginStatus:async(t,a)=>{e({fetching:!0}),e((0,n.ZP)((e=>{const l=e.plugins.findIndex((e=>e.id===t));-1!==l&&(e.plugins[l].enabled=a)})));const l=await r.doAction("update_plugin_status",{plugin:t,enabled:a}).then((e=>e)).catch((e=>{console.error(e)}));return e({fetching:!1}),l},updatePlaceholderStatus:async(t,a,l)=>{e({fetching:!0}),l&&e((0,n.ZP)((e=>{const l=e.plugins.findIndex((e=>e.id===t));-1!==l&&(e.plugins[l].placeholder=a?"enabled":"disabled")})));const c=await r.doAction("update_placeholder_status",{id:t,enabled:a}).then((e=>e)).catch((e=>{console.error(e)}));return e({fetching:!1}),c}})));t.default=c;const i=()=>r.doAction("get_integrations_data",{}).then((e=>e)).catch((e=>{console.error(e)}))},44783:function(e,t,a){a.r(t);var l=a(69307),n=(a(38857),a(60849)),r=a(65294),c=a(32588),i=a(65736),s=a(85671),o=a(382);t.default=e=>{const{setScript:t,fetching:a,placeholders:d}=(0,s.default)(),p=e.script,u=e.type,m=(a,l)=>{let n={...p};n[l]=a,t(n,e.type)};return(0,l.createElement)(l.Fragment,null,(0,l.createElement)("div",{className:"cmplz-details-row cmplz-details-row__checkbox"},(0,l.createElement)("label",null,(0,i.__)("Placeholder","complianz-gdpr")),(0,l.createElement)(o.default,{id:p.id+"placeholder",disabled:a,value:p.enable_placeholder,onChange:e=>m(e,"enable_placeholder"),options:{true:(0,i.__)("Enable placeholder","complianz-gdpr")}})),!!p.enable_placeholder&&(0,l.createElement)(l.Fragment,null,"block_script"===u&&(0,l.createElement)("div",{className:"cmplz-details-row cmplz-details-row__checkbox"},(0,l.createElement)(o.default,{id:p.id+"iframe",disabled:a,value:p.iframe||"",onChange:e=>m(e||"","iframe"),options:{true:(0,i.__)("The blocked content is an iframe","complianz-gdpr")}})),!p.iframe&&(0,l.createElement)("div",{className:"cmplz-details-row cmplz-details-row"},(0,l.createElement)("p",null,(0,i.__)("Enter the div class or ID that should be targeted.","complianz-gdpr"),(0,n.default)("https://complianz.io/integrating-plugins/#placeholder/")),(0,l.createElement)(r.default,{disabled:a,value:p.placeholder_class||"",onChange:e=>m(e||"","placeholder_class"),name:"placeholder_class",placeholder:(0,i.__)("Your CSS class","complianz-gdpr")})),(0,l.createElement)("div",{className:"cmplz-details-row cmplz-details-row__checkbox"},(0,l.createElement)(c.default,{disabled:a,value:p.placeholder?p.placeholder:"default",options:d,onChange:e=>m(e||"default","placeholder")}))))}},79808:function(e,t,a){a.r(t);var l=a(69307),n=a(85671),r=a(56293),c=a(15596),i=a(60849),s=a(65736);t.default=(0,l.memo)((()=>{const{scripts:e,addScript:t,saveScript:a,integrationsLoaded:o,fetchIntegrationsData:d}=(0,n.default)(),[p,u]=(0,l.useState)(!1),[m,f]=(0,l.useState)(""),{getFieldValue:h}=(0,r.default)();return(0,l.useEffect)((()=>{o||d(),o&&1==h("safe_mode")&&(f((0,s.__)("Safe Mode enabled. To manage integrations, disable Safe Mode under Tools - Support.","complianz-gdpr")),u(!0))}),[o]),(0,l.createElement)(l.Fragment,null,(0,l.createElement)("p",null,(0,s.__)("The script center should be used to add and block third-party scripts and iFrames before consent is given, or when consent is revoked. For example Hotjar and embedded video’s.","complianz-gdpr"),(0,i.default)("https://complianz.io/script-center/")),p&&(0,l.createElement)("div",{className:"cmplz-settings-overlay"},(0,l.createElement)("div",{className:"cmplz-settings-overlay-message"},m)),(0,l.createElement)("h5",null,(0,s.__)("Add a third-party script","complianz-gdpr")),!o&&(0,l.createElement)(l.Fragment,null," ",(0,l.createElement)(c.default,{type:"add_script"})),o&&e.add_script.length>0&&e.add_script.map(((e,t)=>(0,l.createElement)(c.default,{type:"add_script",script:e,key:t}))),(0,l.createElement)("div",null,(0,l.createElement)("button",{onClick:()=>t("add_script"),className:"button button-default"},(0,s.__)("Add new","complianz-gdpr"))),(0,l.createElement)("h5",null,(0,s.__)("Block a script, iframe or plugin","complianz-gdpr")),!o&&(0,l.createElement)(l.Fragment,null," ",(0,l.createElement)(c.default,{type:"block_script"})),o&&e.block_script.length>0&&e.block_script.map(((e,t)=>(0,l.createElement)(c.default,{type:"block_script",script:e,key:t}))),(0,l.createElement)("div",null,(0,l.createElement)("button",{onClick:()=>t("block_script"),className:"button button-default"},(0,s.__)("Add new","complianz-gdpr"))),(0,l.createElement)("h5",null,(0,s.__)("Whitelist a script, iframe or plugin\n","complianz-gdpr")),!o&&(0,l.createElement)(l.Fragment,null," ",(0,l.createElement)(c.default,{type:"whitelist_script"})),o&&e.whitelist_script.length>0&&e.whitelist_script.map(((e,t)=>(0,l.createElement)(c.default,{type:"whitelist_script",script:e,key:t}))),(0,l.createElement)("div",null,(0,l.createElement)("button",{onClick:()=>t("whitelist_script"),className:"button button-default"},(0,s.__)("Add new","complianz-gdpr"))))}))},15596:function(e,t,a){a.r(t);var l=a(69307),n=a(34573),r=a(65736),c=a(85671),i=a(75343),s=a(38857),o=a(17347),d=a(44783),p=a(13863),u=a(25364),m=a(382);t.default=(0,l.memo)((e=>{const{setScript:t,fetching:a,saveScript:f,deleteScript:h}=(0,c.default)(),g=e.script,b=(a,l)=>{let n={...g};n[l]=a,t(n,e.type),f(n,e.type)},_=(a,l)=>{let n={...g};n[l]=a,t(n,e.type)},E=()=>{f(g,e.type)},v=()=>{h(g,e.type)};return g?(0,l.createElement)(l.Fragment,null,(0,l.createElement)(n.default,{summary:g.name,icons:(e=>(0,l.createElement)(l.Fragment,null,(0,l.createElement)(s.default,{className:"cmplz-switch-input-tiny",onChange:e=>b(e,"enable"),value:e.enable})))(g),details:((e,t)=>{const{fetching:a}=(0,c.default)();return(0,l.createElement)(l.Fragment,null,(0,l.createElement)("div",{className:"cmplz-details-row"},(0,l.createElement)("label",null,(0,r.__)("Name","complianz-gdpr")),(0,l.createElement)("input",{disabled:a,onChange:e=>_(e.target.value,"name"),type:"text",placeholder:(0,r.__)("Name","complianz-gdpr"),value:e.name})),"add_script"===t&&(0,l.createElement)("div",{className:"cmplz-details-row"},(0,l.createElement)(i.default,{disabled:a,onChange:e=>(e=>{_(e,"editor")})(e),placeholder:"Enter your script here",value:e.editor?e.editor:console.log("marketing enabled")})),("block_script"===t||"whitelist_script"===t)&&(0,l.createElement)(u.default,{script:e,type:t}),"whitelist_script"!==t&&(0,l.createElement)(l.Fragment,null,(0,l.createElement)("div",{className:"cmplz-details-row cmplz-details-row__checkbox"},(0,l.createElement)(m.default,{id:e.id,disabled:a,value:e.async,onChange:e=>_(e,"async"),options:{true:"This script contains an async attribute."}})),(0,l.createElement)("div",{className:"cmplz-details-row"},(0,l.createElement)(o.default,{script:e,type:t})),(0,l.createElement)(d.default,{script:e,type:t})),"block_script"===t&&(0,l.createElement)("div",{className:"cmplz-details-row cmplz-details-row__checkbox"},(0,l.createElement)("label",null,(0,r.__)("Dependency","complianz-gdpr")),(0,l.createElement)(p.default,{script:e,type:t})),(0,l.createElement)("div",{className:"cmplz-details-row cmplz-details-row__buttons"},(0,l.createElement)("button",{disabled:a,onClick:e=>E(),className:"button button-default"},(0,r.__)("Save","complianz-gdpr")),(0,l.createElement)("button",{disabled:a,className:"button button-default cmplz-reset-button",onClick:e=>v()},(0,r.__)("Delete","complianz-gdpr"))))})(g,e.type)})):(0,l.createElement)(n.default,{summary:"..."})}))},25364:function(e,t,a){a.r(t);var l=a(69307),n=a(65736),r=a(60849),c=a(65294),i=a(23361),s=a(85671);t.default=e=>{const{setScript:t,fetching:a}=(0,s.default)(),o=e.script,d=e.type;let p=o.hasOwnProperty("urls")?Object.entries(o.urls):[""];return(0,l.createElement)("div",{className:"cmplz-details-row"},(0,l.createElement)("label",null,"block_script"===d&&(0,n.__)("URLs that should be blocked before consent.","complianz-gdpr"),"whitelist_script"===d&&(0,l.createElement)(l.Fragment,null,(0,n.__)("URLs that should be whitelisted.","complianz-gdpr"),(0,r.default)("https://complianz.io/whitelisting-inline-script/"))),p.map(((n,r)=>{let[s,d]=n;return(0,l.createElement)("div",{key:r,className:"cmplz-scriptcenter-url"},(0,l.createElement)(c.default,{disabled:a,value:d||"",onChange:a=>((a,l)=>{let n={...o},r={...n.urls};r[a]=l,n.urls=r,t(n,e.type)})(s,a),id:r+"_url",name:"url"}),0===r&&(0,l.createElement)("button",{className:"button button-default",onClick:()=>(()=>{let a={...o},l=Object.keys(a.urls).length,n={...a.urls};n[l+1]="",a.urls=n,t(a,e.type)})()}," ",(0,l.createElement)(i.default,{name:"plus",size:14})),0!==r&&(0,l.createElement)("button",{className:"button button-default",onClick:()=>(a=>{let l={...o},n={...l.urls};delete n[a],l.urls=n,t(l,e.type)})(s)}," ",(0,l.createElement)(i.default,{name:"minus",size:14})))})))}},34573:function(e,t,a){a.r(t);var l=a(69307),n=a(23361);t.default=e=>(0,l.createElement)("div",{className:"cmplz-panel__list__item",key:e.id,style:e.style?e.style:{}},(0,l.createElement)("details",null,(0,l.createElement)("summary",null,e.icon&&(0,l.createElement)(n.default,{name:e.icon}),(0,l.createElement)("h5",{className:"cmplz-panel__list__item__title"},e.summary),(0,l.createElement)("div",{className:"cmplz-panel__list__item__comment"},e.comment),(0,l.createElement)("div",{className:"cmplz-panel__list__item__icons"},e.icons),(0,l.createElement)(n.default,{name:"chevron-down",size:18})),(0,l.createElement)("div",{className:"cmplz-panel__list__item__details"},e.details)))},60849:function(e,t,a){a.r(t);var l=a(69307),n=a(65736),r=a(99950);t.default=e=>(0,l.createElement)(l.Fragment,null," ",(0,l.createElement)(r.default,{url:e,text:(0,n.__)("For more information, please read this %sarticle%s.","complianz-gdpr")})," ")}}]);