"use strict";(self.webpackChunkcomplianz_gdpr=self.webpackChunkcomplianz_gdpr||[]).push([[3187,1828,7040,1273,6549,7980,9837,6527,1424,5070,9713,3539,70,6356,3909,6147,4868,7499,6057,3709,3652,938,2640,2588,5671,1789,3252,4064],{31828:function(e,t,a){a.r(t);var l=a(69307),n=a(20382),s=a(19837),i=a(57980),c=a(23361),r=a(65736),o=a(56293),d=a(14531);a(5070);const m=e=>{const{document:t}=e,{showSavedSettingsNotice:a}=(0,o.default)();let n="sync"===t.status?"green":"grey",s="sync"===t.status?(0,r.__)("Document is kept up to date by Complianz","complianz-gdpr"):(0,r.__)("Document is not kept up to date by Complianz","complianz-gdpr"),i=t.exists?"green":"grey",d=t.exists?(0,r.__)("Validated","complianz-gdpr"):(0,r.__)("Missing document","complianz-gdpr"),m=t.required?(0,r.__)("Click to copy the document shortcode","complianz-gdpr"):(0,r.__)("Not enabled","complianz-gdpr");return t.required&&t.exists||(i=n="grey",d=s=(0,r.__)("Not enabled","complianz-gdpr")),(0,l.createElement)("div",{className:"cmplz-single-document"},(0,l.createElement)("div",{className:"cmplz-single-document-title"},t.permalink&&(0,l.createElement)("a",{href:t.permalink},t.title),!t.permalink&&(0,l.createElement)("a",{href:t.readmore},t.title)),(0,l.createElement)(c.default,{name:"sync",color:n,tooltip:s,size:14}),(0,l.createElement)(c.default,{name:"circle-check",color:i,tooltip:d,size:14}),(0,l.createElement)("div",{onClick:e=>((e,t)=>{let l;e.target.classList.add("cmplz-click-animation");let n=window.document.createElement("input");window.document.getElementsByTagName("body")[0].appendChild(n),n.value=t,n.select();try{l=window.document.execCommand("copy")}catch(e){l=!1}n.parentElement.removeChild(n),l&&a((0,r.__)("Copied shortcode","complianz-gdpr"))})(e,t.shortcode)},(0,l.createElement)(c.default,{name:"shortcode",color:i,tooltip:m,size:14})))};t.default=()=>{const{region:e,documentDataLoaded:t,getDocuments:a,documents:c}=(0,n.default)(),{documentsChanged:p}=(0,o.default)(),[u,g]=(0,l.useState)([]),f=[{title:(0,r.__)("Privacy Statements","complianz-gdpr"),readmore:"https://complianz.io/definition/what-is-a-privacy-statement/"},{title:(0,r.__)("Impressum","complianz-gdpr"),readmore:"https://complianz.io/definition/what-is-an-impressum/"}];return(0,l.useEffect)((()=>{t||a()}),[]),(0,l.useEffect)((()=>{a()}),[p]),(0,l.useEffect)((()=>{let t=c.filter((t=>t.region===e))[0];t&&(t=t.documents,cmplz_settings.is_premium||f.forEach((e=>{t.find((t=>t.title===e.title))||t.push(e)})),g(t))}),[e,c]),t?(0,l.createElement)(l.Fragment,null,u.map(((e,t)=>(0,l.createElement)(m,{key:t,document:e}))),!cmplz_settings.is_premium&&(0,l.createElement)(s.default,null),cmplz_settings.is_premium&&(0,l.createElement)(i.default,null)):(0,l.createElement)(d.default,{lines:"3"})}},20382:function(e,t,a){a.r(t);var l=a(30270),n=a(48399);const s=(0,l.Ue)(((e,t)=>({documents:[],documentDataLoaded:!1,processingAgreementOptions:[],proofOfConsentOptions:[],dataBreachOptions:[],region:"",setRegion:t=>{"undefined"!=typeof Storage&&(sessionStorage.cmplzSelectedRegion=t),e((e=>({region:t})))},getRegion:()=>{let t="all";"undefined"!=typeof Storage&&sessionStorage.cmplzSelectedRegion&&(t=sessionStorage.cmplzSelectedRegion),e((e=>({region:t})))},getDocuments:async()=>{const{documents:t,processingAgreementOptions:a,proofOfConsentOptions:l,dataBreachOptions:s}=await n.doAction("documents_block_data").then((e=>e));e((e=>({documentDataLoaded:!0,documents:t,processingAgreementOptions:a,proofOfConsentOptions:l,dataBreachOptions:s})))}})));t.default=s},1273:function(e,t,a){a.r(t);var l=a(69307),n=a(65736),s=a(23361);t.default=()=>(0,l.createElement)(l.Fragment,null,(0,l.createElement)("div",{className:"cmplz-legend"},(0,l.createElement)(s.default,{name:"sync",color:"green",size:14}),(0,l.createElement)("span",null,(0,n.__)("Synchronized","complianz-gdpr"))),(0,l.createElement)("div",{className:"cmplz-legend"},(0,l.createElement)(s.default,{name:"circle-check",color:"green",size:14}),(0,l.createElement)("span",null,(0,n.__)("Validated","complianz-gdpr"))))},16549:function(e,t,a){a.r(t);var l=a(69307),n=a(65736),s=a(56293),i=a(20382),c=a(32588);t.default=e=>{const{getFieldValue:t,fieldsLoaded:a}=(0,s.default)(),{getRegion:r,setRegion:o,region:d}=(0,i.default)();if((0,l.useEffect)((()=>{r()}),[]),!a)return null;let m=t("regions");Array.isArray(m)||(m=[m]),0===m.length&&(m=["eu"]),m||(m=[]);let p=[];for(const e of m){if(!cmplz_settings.regions.hasOwnProperty(e))continue;let t={};t.label=cmplz_settings.regions[e].label_full,t.value=e,p.push(t)}let u={};return u.label=(0,n.__)("General","complianz-gdpr"),u.value="all",p.push(u),(0,l.createElement)(l.Fragment,null,(0,l.createElement)("h3",{className:"cmplz-grid-title cmplz-h4"},(0,n.__)("Documents","complianz-gdpr")),(0,l.createElement)("div",{className:"cmplz-grid-item-controls"},(0,l.createElement)(c.default,{defaultValue:"all",canBeEmpty:!1,onChange:e=>o(e),value:d,options:p})))}},57980:function(e,t,a){a.r(t);var l=a(69307),n=a(65736),s=a(20382),i=a(56293),c=a(26527);t.default=()=>{const{getFieldValue:e,fields:t}=(0,i.default)(),[a,r]=(0,l.useState)(!1);(0,l.useEffect)((()=>{r(e("records_of_consent"))}),[t]);const{processingAgreementOptions:o,dataBreachOptions:d,proofOfConsentOptions:m}=(0,s.default)();return(0,l.createElement)(l.Fragment,null,(0,l.createElement)("h3",{className:"cmplz-h4"},(0,n.__)("Other documents")),(0,l.createElement)(c.default,{type:"processing-agreements",link:"#tools/processing-agreements",name:(0,n.__)("Processing Agreement","complianz-gdpr"),options:o}),(0,l.createElement)(c.default,{type:"data-breaches",link:"#tools/data-breach-reports",name:(0,n.__)("Data Breach","complianz-gdpr"),options:d}),(0,l.createElement)(c.default,{type:"proof-of-consent",link:a?"#tools/records-of-consent":"#tools/proof-of-consent",name:(0,n.__)("Proof of Consent","complianz-gdpr"),options:m}))}},19837:function(e,t,a){a.r(t);var l=a(69307),n=a(65736),s=a(20382);const i=e=>{let{document:t,index:a}=e;const{region:n}=(0,s.default)();let i=t.regions.filter((e=>e!==n));return(0,l.createElement)("div",{key:a,className:"cmplz-single-document-other-regions"},(0,l.createElement)("a",{href:t.readmore,target:"_blank"},t.title),i.map(((e,t)=>(0,l.createElement)("div",{key:t,className:"cmplz-region-indicator"},(0,l.createElement)("img",{alt:e,width:"16px",height:"16px",src:cmplz_settings.plugin_url+"/assets/images/"+e+".svg"})))))};t.default=()=>(0,l.createElement)(l.Fragment,null,(0,l.createElement)("div",{className:"cmplz-document-header"},(0,l.createElement)("h3",{className:"cmplz-h4"},(0,n.__)("Other regions")),(0,l.createElement)("a",{href:"https://complianz.io/features/",target:"_blank"},(0,n.__)("Read more","complianz-gdpr"))),[{id:"privacy-statement",title:"Privacy Statements",regions:["eu","us","uk","ca","za","au","br"],readmore:"https://complianz.io/definition/what-is-a-privacy-statement/"},{id:"cookie-statement",title:"Cookie Policy",regions:["eu","us","uk","ca","za","au","br"],readmore:" https://complianz.io/definition/what-is-a-cookie-policy/"},{id:"impressum",title:"Impressum",regions:["eu"],readmore:"https://complianz.io/definition/what-is-an-impressum/"},{id:"do-not-sell-my-info",title:"Opt-out preferences",regions:["us"],readmore:"https://complianz.io/definition/what-is-do-not-sell-my-personal-information/"},{id:"privacy-statement-for-children",title:"Privacy Statement for Children",regions:["us","uk","ca","za","au","br"],readmore:"https://complianz.io/definition/what-is-a-privacy-statement-for-children/"}].map(((e,t)=>(0,l.createElement)(i,{key:t,index:t,document:e}))))},26527:function(e,t,a){a.r(t);var l=a(69307),n=a(23361),s=a(65736),i=a(32588);t.default=e=>{const[t,a]=(0,l.useState)(!1),[c,r]=(0,l.useState)(!1),[o,d]=(0,l.useState)(!1);(0,l.useEffect)((()=>{let t=e.options;if(0===t.length){let a={label:e.name,value:0};t.unshift(a)}else if(!t.filter((e=>0===e.value)).length>0){let a={label:e.name,value:0};t.unshift(a)}d(t)}),[e.options]);const m=()=>{if(c||!t||0===t)return;r(!0);let e=new XMLHttpRequest;e.responseType="blob",e.open("get",t,!0),e.send(),e.onreadystatechange=function(){if(4==this.readyState&&200==this.status){var e=window.URL.createObjectURL(this.response),a=window.document.createElement("a");a.setAttribute("href",e),a.setAttribute("download",o.filter((e=>e.value===t))[0].label),window.document.body.appendChild(a),a.click(),setTimeout((function(){window.URL.revokeObjectURL(e)}),6e4)}},e.onprogress=function(e){r(!0)}};return(0,l.createElement)("div",{className:"cmplz-single-document-other-documents"},(0,l.createElement)(i.default,{onChange:e=>a(e),defaultValue:"0",canBeEmpty:!1,value:t,options:o}),(0,l.createElement)("div",{onClick:()=>m()},(0,l.createElement)(n.default,{name:"file-download",color:0==t||c?"grey":"black",tooltip:(0,s.__)("Download file","complianz-gdpr"),size:14})),o.length>0&&(0,l.createElement)("a",{href:e.link},(0,l.createElement)(n.default,{name:"circle-chevron-right",color:"black",tooltip:(0,s.__)("Go to overview","complianz-gdpr"),size:14})),0===o.length&&(0,l.createElement)("a",{href:e.link},(0,l.createElement)(n.default,{name:"plus",color:"black",tooltip:(0,s.__)("Create new","complianz-gdpr"),size:14})))}},63187:function(e,t,a){a.r(t);var l=a(69307),n=a(65736),s=a(83539),i=a(30070),c=a(86356),r=a(31828),o=a(16549),d=a(1273),m=a(83709),p=a(50938),u=a(83652),g=a(91424),f=a(76147),h=a(24868),_=a(29713),z={ProgressBlock:s.default,ProgressHeader:i.default,ProgressFooter:c.default,DocumentsBlock:r.default,DocumentsHeader:o.default,DocumentsFooter:d.default,TipsTricks:f.default,TipsTricksFooter:h.default,ToolsHeader:p.default,ToolsFooter:u.default,Tools:m.default,OtherPluginsHeader:_.default,OtherPlugins:g.default};t.default=e=>{let{block:t}=e;const a=t,s="cmplz-grid-item "+a.class+" cmplz-"+a.id,i=!!t.footer&&t.footer.data;return(0,l.createElement)("div",{key:"block-"+a.id,className:s},(0,l.createElement)("div",{className:"cmplz-grid-item-header"},"text"===a.header.type&&(0,l.createElement)(l.Fragment,null,(0,l.createElement)("h3",{className:"cmplz-grid-title cmplz-h4"},a.header.data),(0,l.createElement)("div",{className:"cmplz-grid-item-controls"},a.controls&&"url"===a.controls.type&&(0,l.createElement)("a",{href:a.controls.data},(0,n.__)("Instructions","complianz-gdpr")),a.controls&&"react"===a.controls.type&&wp.element.createElement(z[a.controls.data]))),"react"===a.header.type&&(0,l.createElement)(l.Fragment,null,wp.element.createElement(z[a.header.data]))),(0,l.createElement)("div",{className:"cmplz-grid-item-content"},wp.element.createElement(z[t.content.data])),!i&&(0,l.createElement)("div",{className:"cmplz-grid-item-footer"}),i&&(0,l.createElement)("div",{className:"cmplz-grid-item-footer"},wp.element.createElement(z[t.footer.data])))}},91424:function(e,t,a){a.r(t);var l=a(69307),n=a(65736),s=a(14531),i=a(5070);t.default=()=>{const{dataLoaded:e,pluginData:t,pluginActions:a,fetchOtherPluginsData:c,error:r}=(0,i.default)();return(0,l.useEffect)((()=>{e||c()}),[]),!e||r?(0,l.createElement)(s.default,{lines:"3",error:r}):(0,l.createElement)("div",{className:"cmplz-other-plugins-container"},t.map(((e,t)=>((e,t)=>(0,l.createElement)("div",{key:t,className:"cmplz-other-plugins-element cmplz-"+e.slug},(0,l.createElement)("a",{href:e.wordpress_url,target:"_blank",title:e.title},(0,l.createElement)("div",{className:"cmplz-bullet"}),(0,l.createElement)("div",{className:"cmplz-other-plugins-content"},e.title)),(0,l.createElement)("div",{className:"cmplz-other-plugin-status"},"upgrade-to-premium"===e.pluginAction&&(0,l.createElement)("a",{target:"_blank",href:e.upgrade_url},(0,n.__)("Upgrade","complianz-gdpr")),"upgrade-to-premium"!==e.pluginAction&&"installed"!==e.pluginAction&&(0,l.createElement)("a",{href:"#",onClick:t=>a(e.slug,e.pluginAction,t)},e.pluginActionNice),"installed"===e.pluginAction&&(0,n.__)("Installed","complianz-gdpr"))))(e,t))))}},5070:function(e,t,a){a.r(t);var l=a(30270),n=a(48399),s=a(65736);const i=(0,l.Ue)(((e,t)=>({error:!1,dataLoaded:!1,pluginData:[],updatePluginData:(a,l)=>{let n=t().pluginData;n.forEach((function(e,t){e.slug===a&&(n[t]=l)})),e((e=>({dataLoaded:!0,pluginData:n})))},getPluginData:e=>t().pluginData.filter((t=>t.slug===e))[0],fetchOtherPluginsData:async()=>{const{pluginData:t,error:a}=await n.doAction("otherpluginsdata").then((e=>{let t=[];t=e.plugins;let a=e.error;return a||t.forEach((function(e,a){t[a].pluginActionNice=c(e.pluginAction)})),{pluginData:t,error:a}}));e((e=>({dataLoaded:!0,pluginData:t,error:a})))},pluginActions:(e,a,l)=>{l&&l.preventDefault();let s={};s.slug=e,s.pluginAction=a;let i=t().getPluginData(e);"download"===a?i.pluginAction="downloading":"activate"===a&&(i.pluginAction="activating"),i.pluginActionNice=c(i.pluginAction),t().updatePluginData(e,i),"installed"!==a&&"upgrade-to-premium"!==a&&n.doAction("plugin_actions",s).then((a=>{i=a,t().updatePluginData(e,i),t().pluginActions(e,i.pluginAction)}))}})));t.default=i;const c=e=>({download:(0,s.__)("Install","really-simple-ssl"),activate:(0,s.__)("Activate","really-simple-ssl"),activating:(0,s.__)("Activating...","really-simple-ssl"),downloading:(0,s.__)("Downloading...","really-simple-ssl"),"upgrade-to-premium":(0,s.__)("Downloading...","really-simple-ssl")}[e])},29713:function(e,t,a){a.r(t);var l=a(69307),n=a(65736);t.default=()=>(0,l.createElement)(l.Fragment,null,(0,l.createElement)("h3",{className:"cmplz-grid-title cmplz-h4"},(0,n.__)("Other Plugins","complianz-gdpr")),(0,l.createElement)("div",{className:"cmplz-grid-item-controls"},(0,l.createElement)("a",{className:"rsp-logo",href:"https://really-simple-plugins.com/"},(0,l.createElement)("img",{src:cmplz_settings.plugin_url+"assets/images/really-simple-plugins.svg",alt:"Really Simple Plugins"}))))},83539:function(e,t,a){a.r(t);var l=a(69307),n=a(65736),s=a(53909),i=a(14531),c=a(82387),r=a(56293);t.default=()=>{const{percentageCompleted:e,filter:t,notices:a,progressLoaded:o,fetchProgressData:d,error:m}=(0,c.default)(),{fetchAllFieldsCompleted:p,allRequiredFieldsCompleted:u,fields:g}=(0,r.default)();(0,l.useEffect)((()=>{(async()=>{o||await d(),p()})()}),[t,g]);let f="";if(e<80&&(f+="cmplz-orange"),!o||m)return(0,l.createElement)(i.default,{lines:"9",error:m});let h=a;if("remaining"===t&&(h=h.filter((function(e){return"completed"!==e.status}))),!u&&0===h.filter((e=>"all_fields_completed"===e.id)).length){let e={id:"all_fields_completed",status:"urgent",message:(0,n.__)('Not all fields have been entered, or you have not clicked the "finish" button yet.',"complianz-gdpr")};h.push(e)}u&&(h=h.filter((e=>"all_fields_completed"!==e.id))),h.sort((function(e,t){return e.status===t.status?0:e.status<t.status?1:-1}));let _=h.filter((e=>"open"===e.status||"urgent"===e.status));return(0,l.createElement)("div",{className:"cmplz-progress-block"},(0,l.createElement)("div",{className:"cmplz-progress-bar"},(0,l.createElement)("div",{className:"cmplz-progress"},(0,l.createElement)("div",{className:"cmplz-bar "+f,style:Object.assign({},{width:e+"%"})}))),(0,l.createElement)("div",{className:"cmplz-progress-text"},(0,l.createElement)("h1",{className:"cmplz-progress-percentage"},e,"%"),(0,l.createElement)("h5",{className:"cmplz-progress-text-span"},e<100&&(0,n.__)("Consent Management is activated on your site.","complianz-gdpr")+" ",e<100&&1===_.length&&(0,n.__)("You still have 1 task open.","complianz-gdpr"),e<100&&_.length>1&&(0,n.__)("You still have %s tasks open.","complianz-gdpr").replace("%s",_.length),100===e&&(0,n.__)("Well done! Your website is ready for your selected regions.","complianz-gdpr"))),(0,l.createElement)("div",{className:"cmplz-scroll-container"},h.map(((e,t)=>(0,l.createElement)(s.default,{key:t,index:t,notice:e})))))}},30070:function(e,t,a){a.r(t);var l=a(69307),n=a(65736),s=a(82387);t.default=()=>{const{setFilter:e,filter:t,fetchFilter:a,notices:i,progressLoaded:c}=(0,s.default)();(0,l.useEffect)((()=>{a()}),[]);let r=0,o=0;return r=c?i.length:0,o=i.filter((function(e){return"completed"!==e.status})).length,(0,l.createElement)(l.Fragment,null,(0,l.createElement)("h3",{className:"cmplz-grid-title cmplz-h4"},(0,n.__)("Progress","complianz-gdpr")),(0,l.createElement)("div",{className:"cmplz-grid-item-controls"},(0,l.createElement)("div",{className:"cmplz-task-switcher-container cmplz-active-filter-"+t},(0,l.createElement)("a",{href:"#",className:"cmplz-task-switcher cmplz-all-tasks",onClick:()=>e("all"),"data-filter":"all"},(0,n.__)("All tasks","really-simple-ssl"),(0,l.createElement)("span",{className:"rsssl_task_count"},"(",r,")")),(0,l.createElement)("a",{href:"#",className:"cmplz-task-switcher cmplz-remaining-tasks",onClick:()=>e("remaining"),"data-filter":"remaining"},(0,n.__)("Remaining tasks","really-simple-ssl"),(0,l.createElement)("span",{className:"rsssl_task_count"},"(",o,")")))))}},86356:function(e,t,a){a.r(t);var l=a(69307),n=a(65736),s=a(23361),i=a(56293),c=a(82387);t.default=()=>{const{fields:e,getFieldValue:t}=(0,i.default)(),{showCookieBanner:a,fetchProgressData:r,progressLoaded:o}=(0,c.default)(),[d,m]=(0,l.useState)(!1),[p,u]=(0,l.useState)(!1),[g,f]=(0,l.useState)(!1);return(0,l.useEffect)((()=>{o||r()}),[]),(0,l.useEffect)((()=>{let e="yes"===t("enable_cookie_blocker")?"green":"grey";m(e),e=1==t("dont_use_placeholders")?"grey":"green",u(e),e=a?"green":"grey",f(e)}),[e,a]),(0,l.createElement)(l.Fragment,null,(0,l.createElement)("a",{href:"#wizard",className:"button button-primary"},(0,n.__)("Continue Wizard","complianz-gdpr")),(0,l.createElement)("div",{className:"cmplz-legend cmplz-flex-push-right"},(0,l.createElement)(s.default,{name:"circle-check",color:d,size:14}),(0,l.createElement)("span",null,(0,n.__)("Cookie Blocker","complianz-gdpr"))),(0,l.createElement)("div",{className:"cmplz-legend"},(0,l.createElement)(s.default,{name:"circle-check",color:p,size:14}),(0,l.createElement)("span",null,(0,n.__)("Placeholders","complianz-gdpr"))),(0,l.createElement)("div",{className:"cmplz-legend"},(0,l.createElement)(s.default,{name:"circle-check",color:g,size:14}),(0,l.createElement)("span",null,(0,n.__)("Consent Banner","complianz-gdpr"))))}},53909:function(e,t,a){a.r(t);var l=a(69307),n=a(65736),s=a(23361),i=a(9818),c=a(48399),r=a(14064),o=a(56293),d=a(82387),m=a(82485);t.default=e=>{let{notice:t,index:a}=e;const{dismissNotice:p,fetchProgressData:u}=(0,d.default)(),{getField:g,setHighLightField:f,fetchFieldsData:h}=(0,o.default)(),{setSelectedSubMenuItem:_}=(0,m.default)();let z="premium"===t.icon,E=t.url&&-1!==t.url.indexOf("complianz.io"),b=t.status.charAt(0).toUpperCase()+t.status.slice(1);return(0,l.createElement)("div",{key:a,className:"cmplz-task-element"},(0,l.createElement)("span",{className:"cmplz-task-status cmplz-"+t.status},b),(0,l.createElement)("p",{className:"cmplz-task-message",dangerouslySetInnerHTML:{__html:t.message}}),E&&t.url&&(0,l.createElement)("a",{target:"_blank",href:t.url},(0,n.__)("More info","complianz-gdpr")),t.clear_cache_id&&(0,l.createElement)("span",{className:"cmplz-task-enable button button-secondary",onClick:()=>(async e=>{let t={};t.cache_id=e,c.doAction("clear_cache",t).then((async e=>{(0,i.dispatch)("core/notices").createNotice("success",(0,n.__)("Re-started test","complianz-gdpr"),{__unstableHTML:!0,id:"cmplz_clear_cache",type:"snackbar",isDismissible:!0}).then((0,r.default)(3e3)).then((e=>{(0,i.dispatch)("core/notices").removeNotice("rsssl_clear_cache")})),await h(),await u()}))})(t.clear_cache_id)},(0,n.__)("Re-check","complianz-gdpr")),!z&&!E&&t.url&&(0,l.createElement)("a",{className:"cmplz-task-enable button button-secondary",href:t.url},(0,n.__)("View","complianz-gdpr")),!z&&t.highlight_field_id&&(0,l.createElement)("span",{className:"cmplz-task-enable button button-secondary",onClick:()=>(async()=>{f(t.highlight_field_id);let e=g(t.highlight_field_id);await _(e.menu_id)})()},(0,n.__)("View","complianz-gdpr")),t.plus_one&&(0,l.createElement)("span",{className:"cmplz-plusone"},"1"),t.dismissible&&"completed"!==t.status&&(0,l.createElement)("div",{className:"cmplz-task-dismiss"},(0,l.createElement)("button",{type:"button",onClick:e=>p(t.id)},(0,l.createElement)(s.default,{name:"times"}))))}},76147:function(e,t,a){a.r(t);var l=a(69307);const n=e=>{let{link:t,content:a}=e;return(0,l.createElement)("div",{className:"cmplz-tips-tricks-element"},(0,l.createElement)("a",{href:t,target:"_blank",title:"{content}"},(0,l.createElement)("div",{className:"cmplz-icon"},(0,l.createElement)("svg",{"aria-hidden":"true",focusable:"false",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",height:"15"},(0,l.createElement)("path",{fill:"var(--rsp-grey-300)",d:"M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z"}))),(0,l.createElement)("div",{className:"cmplz-tips-tricks-content"},a)))};t.default=()=>(0,l.createElement)("div",{className:"cmplz-tips-tricks-container"},[{content:"Styling your cookie notice and legal documents",link:"https://complianz.io/docs/customization/"},{content:"Why plugins are better in consent management",link:"https://complianz.io/consent-management-wordpress-native-plugin-versus-cloud-solution/"},{content:"Configure Tag Manager with Complianz",link:"https://complianz.io/definitive-guide-to-tag-manager-and-complianz/"},{content:"Self-hosting Google Fonts",link:"https://complianz.io/self-hosting-google-fonts-for-wordpress/"},{content:"Translating your cookie notice and legal documents",link:"https://complianz.io/?s=translations&lang=en"},{content:"Debugging issues with Complianz",link:"https://complianz.io/debugging-issues/"}].map(((e,t)=>(0,l.createElement)(n,{key:"trick-"+t,link:e.link,content:e.content}))))},24868:function(e,t,a){a.r(t);var l=a(69307),n=a(65736);t.default=()=>(0,l.createElement)("a",{href:"https://complianz.io/docs/",className:"button button-default cmplz-flex-push-left",target:"_blank"},(0,n.__)("View all","complianz-gdpr"))},17499:function(e,t,a){a.r(t);var l=a(69307),n=a(23361),s=a(65736),i=a(23252);t.default=()=>{const[e,t]=(0,l.useState)(!1),[a,c]=(0,l.useState)(1),[r,o]=(0,l.useState)(0),[d,m]=(0,l.useState)(0),{consentType:p,statisticsData:u,loaded:g,fetchStatisticsData:f,labels:h,setLabels:_}=(0,i.default)();return(0,l.useEffect)((()=>{!g&&cmplz_settings.is_premium&&f()}),[]),(0,l.useEffect)((()=>{if(""===p||!g)return;if(!u||!u.hasOwnProperty(p))return;let e=[...u[p].labels],t=u[p].categories;t="optin"===p?t.filter((e=>"functional"===e||"no_warning"===e||"do_not_track"===e)):t.filter((e=>"functional"===e||"marketing"===e||"statistics"===e||"preferences"===e));let a=t.map((e=>u[p].categories.indexOf(e)));for(let t=a.length-1;t>=0;t--)e.splice(a[t],1);_(e)}),[g,p]),(0,l.useEffect)((()=>{if(""===p||!g||!u)return;let e=u[p].datasets.filter((e=>e.default));if(e.length>0){let a=e[0].data,l=a.reduce(((e,t)=>parseInt(e)+parseInt(t)),0);l=l>0?l:1,c(l),o(e[0].full_consent),m(e[0].no_consent),a=a.slice(2),t(a)}}),[g,p]),(0,l.createElement)("div",{className:"cmplz-statistics"},(0,l.createElement)("div",{className:"cmplz-statistics-select"},(0,l.createElement)("div",{className:"cmplz-statistics-select-item"},(0,l.createElement)(n.default,{name:"dial-max-light",color:"green",size:"22"}),(0,l.createElement)("h2",null,r),(0,l.createElement)("span",null,(0,s.__)("Full Consent","complianz-gdpr"))),(0,l.createElement)("div",{className:"cmplz-statistics-select-item"},(0,l.createElement)(n.default,{name:"dial-min-light",color:"red",size:"22"}),(0,l.createElement)("h2",null,d),(0,l.createElement)("span",null,(0,s.__)("No Consent","complianz-gdpr")))),(0,l.createElement)("div",{className:"cmplz-statistics-list"},h.length>0&&h.map(((t,s)=>{return(0,l.createElement)("div",{className:"cmplz-statistics-list-item",key:s},(e=>{let t="dial-med-low-light";return 1===e?t="dial-med-light":2===e?t="dial-light":3===e?t="dial-off-light":4===e&&(t="dial-min-light"),(0,l.createElement)(l.Fragment,null,(0,l.createElement)(n.default,{name:t,color:"black"}))})(s),(0,l.createElement)("p",{className:"cmplz-statistics-list-item-text"},t),(0,l.createElement)("p",{className:"cmplz-statistics-list-item-number"},e.hasOwnProperty(s)?(i=e[s],i=parseInt(i),Math.round(i/a*100)):0,"%"));var i}))))}},26057:function(e,t,a){a.r(t);var l=a(69307),n=a(56293),s=a(85671),i=a(23361),c=a(99196),r=a(65736),o=a(71789);t.default=e=>{const{fields:t,getFieldValue:a}=(0,n.default)(),[d,m]=(0,c.useState)(!1),{integrationsLoaded:p,plugins:u,fetchIntegrationsData:g}=(0,s.default)(),{licenseStatus:f}=(0,o.default)();(0,c.useEffect)((()=>{let t=e.item;if(t.field){let e=a(t.field.name)==t.field.value;m(e)}}),[t]),(0,c.useEffect)((()=>{p||g()}),[]);let h=e.item;if(h.plugin)return u.filter((e=>e.id===h.plugin)).length>0?(0,l.createElement)("div",{className:"cmplz-tool"},(0,l.createElement)("div",{className:"cmplz-tool-title"},h.title),(0,l.createElement)("div",{className:"cmplz-tool-link"},(0,l.createElement)("a",{href:h.link,target:"_blank"},(0,l.createElement)(i.default,{name:"circle-chevron-right",color:"black",size:14})))):null;let _=cmplz_settings.is_premium&&"valid"===f,z=(0,r.__)("Read more","complianz-gdpr"),E=h.link;_&&(!d&&h.enableLink&&(z=(0,r.__)("Enable","complianz-gdpr"),E=h.enableLink),h.field&&!d||!h.viewLink||(z=(0,r.__)("View","complianz-gdpr"),E=h.viewLink));let b=-1!==E.indexOf("https://"),k=b?"_blank":"_self",v=b?"external-link":"circle-chevron-right";return(0,l.createElement)("div",{className:"cmplz-tool"},(0,l.createElement)("div",{className:"cmplz-tool-title"},h.title,h.plusone&&h.plusone),(0,l.createElement)("div",{className:"cmplz-tool-link"},(0,l.createElement)("a",{href:E,target:k},b&&z,!b&&(0,l.createElement)(i.default,{name:v,color:"black",size:14}))))}},83709:function(e,t,a){a.r(t);var l=a(69307),n=a(56293),s=a(65736),i=a(82640),c=a(17499),r=a(26057);const o=e=>(0,l.createElement)("div",{className:"cmplz-plusone"},e.count);t.default=()=>{const{fields:e,getFieldValue:t}=(0,n.default)(),[a,d]=(0,l.useState)(!1),[m,p]=(0,l.useState)(!1),{recordsLoaded:u,fetchData:g,totalOpen:f}=(0,i.default)();(0,l.useEffect)((()=>{u||g(10,1,"ID","ASC")}),[u]),(0,l.useEffect)((()=>{let e=1==t("a_b_testing");d(e);let a=1==t("a_b_testing_buttons");p(a)}),[e]);const h=[{title:(0,s.__)("Data requests","complianz-gdpr"),viewLink:"#tools/data-requests",enableLink:"#wizard/security-consent",field:{name:"datarequest",value:"yes"},link:"https://complianz.io/definition/what-is-a-data-request/",plusone:(0,l.createElement)(o,{count:f})},{title:(0,s.__)("Records of Consent","complianz-gdpr"),viewLink:"#tools/records-of-consent",enableLink:"#wizard/security-consent",field:{name:"records_of_consent",value:"yes"},link:"https://complianz.io/records-of-consent/"},{title:(0,s.__)("Processing agreements","complianz-gdpr"),viewLink:"#tools/processing-agreements",link:"https://complianz.io/definition/what-is-a-processing-agreement/"},{title:(0,s.__)("Consent Statistics","complianz-gdpr"),viewLink:"#tools/ab-testing",link:"https://complianz.io/a-quick-introduction-to-a-b-testing/"},{title:(0,s.__)("A/B Testing","complianz-gdpr"),viewLink:"#tools/ab-testing",link:"https://complianz.io/a-quick-introduction-to-a-b-testing/"},{title:(0,s.__)("Documentation","complianz-gdpr"),link:"https://complianz.io/support/"},{title:(0,s.__)("Premium Support","complianz-gdpr"),viewLink:"#tools/support",link:"https://complianz.io/about-premium-support/"},{title:(0,s.__)("WooCommerce","complianz-gdpr"),plugin:"woocommerce",link:cmplz_settings.admin_url+"admin.php?page=wc-settings&tab=account"},{title:(0,s.__)("Multisite","complianz-gdpr"),link:"#tools/multisite",viewLink:"#tools/multisite"},{title:(0,s.__)("Security","complianz-gdpr"),link:"#tools/security",viewLink:"#tools/security"}];return a?(0,l.createElement)(l.Fragment,null,(0,l.createElement)(c.default,{abTestingEnabled:m})):(0,l.createElement)(l.Fragment,null,h.map(((e,t)=>(0,l.createElement)(r.default,{key:t,item:e}))))}},83652:function(e,t,a){a.r(t),t.default=()=>null},50938:function(e,t,a){a.r(t);var l=a(69307),n=a(65736),s=a(56293),i=a(23252),c=a(32588);t.default=()=>{const{consentType:e,setConsentType:t,consentTypes:a,fetchStatisticsData:r,loaded:o}=(0,i.default)(),{fields:d,getFieldValue:m}=(0,s.default)(),[p,u]=(0,l.useState)(!1);(0,l.useEffect)((()=>{let e=1==m("a_b_testing");u(e)}),[m("a_b_testing")]),(0,l.useEffect)((()=>{p&&!o&&r()}),[p]);let g=[];return a&&(g=a.map((e=>({value:e.id,label:e.label})))),(0,l.createElement)(l.Fragment,null,(0,l.createElement)("h3",{className:"cmplz-grid-title cmplz-h4"},p&&(0,n.__)("Statistics","complianz-gdpr"),!p&&(0,n.__)("Tools","complianz-gdpr")),(0,l.createElement)("div",{className:"cmplz-grid-item-controls"},p&&g&&g.length>1&&(0,l.createElement)(c.default,{canBeEmpty:!1,value:e,onChange:e=>t(e),options:g})))}},82640:function(e,t,a){a.r(t);var l=a(30270),n=a(48399),s=a(12902);const i=(0,l.Ue)(((e,t)=>({recordsLoaded:!1,searchValue:"",setSearchValue:t=>e({searchValue:t}),fetching:!1,generating:!1,progress:!1,records:[],totalRecords:0,totalOpen:0,exportLink:"",noData:!1,deleteRecords:async a=>{let l=t().records.filter((e=>a.includes(e.ID)));e((e=>({records:e.records.filter((e=>!a.includes(e.ID)))})));let s={};s.records=l,await n.doAction("delete_datarequests",s).then((e=>e)).catch((e=>{console.error(e)}))},resolveRecords:async a=>{e((0,s.ZP)((e=>{e.records.forEach((function(t,l){a.includes(t.ID)&&(e.records[l].resolved=!0)}))})));let l={};l.records=t().records.filter((e=>a.includes(e.ID))),await n.doAction("resolve_datarequests",l).then((e=>e)).catch((e=>{console.error(e)}))},fetchData:async(a,l,s,i)=>{if(t().fetching)return;e({fetching:!0});let c={};c.per_page=a,c.page=l,c.order=i.toUpperCase(),c.orderBy=s,c.search=t().searchValue;const{records:r,totalRecords:o,totalOpen:d}=await n.doAction("get_datarequests",c).then((e=>e)).catch((e=>{console.error(e)}));e((()=>({recordsLoaded:!0,records:r,totalRecords:o,totalOpen:d,fetching:!1})))},startExport:async()=>{e({generating:!0,progress:0,exportLink:""})},fetchExportDatarequestsProgress:async(t,a,l)=>{(t=void 0!==t&&t)||e({generating:!0});let s={};s.startDate=a,s.endDate=l,s.statusOnly=t;const{progress:i,exportLink:c,noData:r}=await n.doAction("export_datarequests",s).then((e=>e)).catch((e=>{console.error(e)}));let o=!1;i<100&&(o=!0),e({progress:i,exportLink:c,generating:o,noData:r})}})));t.default=i},32588:function(e,t,a){a.r(t);var l=a(69307),n=a(99196),s=a(79552),i=a(23361),c=a(65736);t.default=(0,n.memo)((e=>{let{value:t=!1,onChange:a,required:n,defaultValue:r,disabled:o,options:d={},canBeEmpty:m=!0,label:p,innerRef:u}=e;if(Array.isArray(d)){let e={};d.map((t=>{e[t.value]=t.label})),d=e}return m?(""===t||!1===t||0===t)&&(d={0:(0,c.__)("Select an option","complianz-gdpr"),...d}):t||(t=Object.keys(d)[0]),(0,l.createElement)("div",{className:"cmplz-input-group cmplz-select-group",key:p},(0,l.createElement)(s.fC,{value:t,defaultValue:r,onValueChange:a,required:n,disabled:o&&!Array.isArray(o)},(0,l.createElement)(s.xz,{className:"cmplz-select-group__trigger"},(0,l.createElement)(s.B4,null),(0,l.createElement)(i.default,{name:"chevron-down"})),(0,l.createElement)(s.VY,{className:"cmplz-select-group__content",position:"popper"},(0,l.createElement)(s.u_,{className:"cmplz-select-group__scroll-button"},(0,l.createElement)(i.default,{name:"chevron-up"})),(0,l.createElement)(s.l_,{className:"cmplz-select-group__viewport"},(0,l.createElement)(s.ZA,null,Object.entries(d).map((e=>{let[t,a]=e;return(0,l.createElement)(s.ck,{disabled:Array.isArray(o)&&o.includes(t),className:"cmplz-select-group__item",key:t,value:t},(0,l.createElement)(s.eT,null,a))})))),(0,l.createElement)(s.$G,{className:"cmplz-select-group__scroll-button"},(0,l.createElement)(i.default,{name:"chevron-down"})))))}))},85671:function(e,t,a){a.r(t);var l=a(30270),n=a(12902),s=a(48399);const i=(0,l.Ue)(((e,t)=>({integrationsLoaded:!1,fetching:!1,services:[],plugins:[],scripts:[],placeholders:[],blockedScripts:[],setScript:(t,a)=>{e((0,n.ZP)((e=>{if("block_script"===a){let a=e.blockedScripts;if(t.urls){for(const[e,l]of Object.entries(t.urls)){if(!l||0===l.length)continue;let e=!1;for(const[t,n]of Object.entries(a))l===t&&(e=!0);e||(a[l]=l)}e.blockedScripts=a}}const l=e.scripts[a].findIndex((e=>e.id===t.id));-1!==l&&(e.scripts[a][l]=t)})))},fetchIntegrationsData:async()=>{if(t().fetching)return;e({fetching:!0});const{services:a,plugins:l,scripts:n,placeholders:s,blocked_scripts:i}=await c();let r=n;r.block_script&&r.block_script.length>0&&r.block_script.forEach(((e,t)=>{e.id=t})),r.add_script&&r.add_script.length>0&&r.add_script.forEach(((e,t)=>{e.id=t})),r.whitelist_script&&r.whitelist_script.length>0&&r.whitelist_script.forEach(((e,t)=>{e.id=t})),e((()=>({integrationsLoaded:!0,services:a,plugins:l,scripts:r,fetching:!1,placeholders:s,blockedScripts:i})))},addScript:a=>{e({fetching:!0}),e((0,n.ZP)((e=>{e.scripts[a].push({name:"general",id:e.scripts[a].length,enable:!0})})));let l=t().scripts;return s.doAction("update_scripts",{scripts:l}).then((t=>(e({fetching:!1}),t))).catch((e=>{console.error(e)}))},saveScript:(a,l)=>{e({fetching:!0}),e((0,n.ZP)((e=>{const t=e.scripts[l].findIndex((e=>e.id===a.id));-1!==t&&(e.scripts[l][t]=a)})));let i=t().scripts;return s.doAction("update_scripts",{scripts:i}).then((t=>(e({fetching:!1}),t))).catch((e=>{console.error(e)}))},deleteScript:(a,l)=>{e({fetching:!0}),e((0,n.ZP)((e=>{const t=e.scripts[l].findIndex((e=>e.id===a.id));-1!==t&&e.scripts[l].splice(t,1)})));let i=t().scripts;return s.doAction("update_scripts",{scripts:i}).then((t=>(e({fetching:!1}),t))).catch((e=>{console.error(e)}))},updatePluginStatus:async(t,a)=>{e({fetching:!0}),e((0,n.ZP)((e=>{const l=e.plugins.findIndex((e=>e.id===t));-1!==l&&(e.plugins[l].enabled=a)})));const l=await s.doAction("update_plugin_status",{plugin:t,enabled:a}).then((e=>e)).catch((e=>{console.error(e)}));return e({fetching:!1}),l},updatePlaceholderStatus:async(t,a,l)=>{e({fetching:!0}),l&&e((0,n.ZP)((e=>{const l=e.plugins.findIndex((e=>e.id===t));-1!==l&&(e.plugins[l].placeholder=a?"enabled":"disabled")})));const i=await s.doAction("update_placeholder_status",{id:t,enabled:a}).then((e=>e)).catch((e=>{console.error(e)}));return e({fetching:!1}),i}})));t.default=i;const c=()=>s.doAction("get_integrations_data",{}).then((e=>e)).catch((e=>{console.error(e)}))},71789:function(e,t,a){a.r(t);var l=a(30270),n=a(48399);const s=(0,l.Ue)(((e,t)=>({licenseStatus:cmplz_settings.licenseStatus,processing:!1,licenseNotices:[],noticesLoaded:!1,getLicenseNotices:async()=>{const{licenseStatus:t,notices:a}=await n.doAction("license_notices",{}).then((e=>e));e((e=>({noticesLoaded:!0,licenseNotices:a,licenseStatus:t})))},activateLicense:async t=>{let a={};a.license=t,e({processing:!0});const{licenseStatus:l,notices:s}=await n.doAction("activate_license",a);e((e=>({processing:!1,licenseNotices:s,licenseStatus:l})))},deactivateLicense:async()=>{e({processing:!0});const{licenseStatus:t,notices:a}=await n.doAction("deactivate_license");e((e=>({processing:!1,licenseNotices:a,licenseStatus:t})))}})));t.default=s},23252:function(e,t,a){a.r(t);var l=a(30270),n=a(48399);const s={optin:{labels:["Functional","Statistics","Marketing","Do Not Track","No choice","No warning"],categories:["functional","statistics","marketing","do_not_track","no_choice","no_warning"],datasets:[{data:["0","0","0","0","0","0"],backgroundColor:"rgba(46, 138, 55, 1)",borderColor:"rgba(46, 138, 55, 1)",label:"A (default)",fill:"false",borderDash:[0,0]},{data:["0","0","0","0","0","0"],backgroundColor:"rgba(244, 191, 62, 1)",borderColor:"rgba(244, 191, 62, 1)",label:"B",fill:"false",borderDash:[0,0]}],max:5},optout:{labels:["Functional","Statistics","Marketing","Do Not Track","No choice","No warning"],categories:["functional","statistics","marketing","do_not_track","no_choice","no_warning"],datasets:[{data:["0","0","0","0","0","0"],backgroundColor:"rgba(46, 138, 55, 1)",borderColor:"rgba(46, 138, 55, 1)",label:"A (default)",fill:"false",borderDash:[0,0]},{data:["0","0","0","0","0","0"],backgroundColor:"rgba(244, 191, 62, 1)",borderColor:"rgba(244, 191, 62, 1)",label:"B",fill:"false",borderDash:[0,0]}],max:5}},i={optin:{labels:["Functional","Statistics","Marketing","Do Not Track","No choice","No warning"],categories:["functional","statistics","marketing","do_not_track","no_choice","no_warning"],datasets:[{data:["29","747","174","292","30","10"],backgroundColor:"rgba(46, 138, 55, 1)",borderColor:"rgba(46, 138, 55, 1)",label:"Demo A (default)",fill:"false",borderDash:[0,0]},{data:["3","536","240","389","45","32"],backgroundColor:"rgba(244, 191, 62, 1)",borderColor:"rgba(244, 191, 62, 1)",label:"Demo B",fill:"false",borderDash:[0,0]}],max:5},optout:{labels:["Functional","Statistics","Marketing","Do Not Track","No choice","No warning"],categories:["functional","statistics","marketing","do_not_track","no_choice","no_warning"],datasets:[{data:["29","747","174","292","30","10"],backgroundColor:"rgba(46, 138, 55, 1)",borderColor:"rgba(46, 138, 55, 1)",label:"A (default)",fill:"false",borderDash:[0,0]},{data:["3","536","240","389","45","32"],backgroundColor:"rgba(244, 191, 62, 1)",borderColor:"rgba(244, 191, 62, 1)",label:"Demo B",fill:"false",borderDash:[0,0]}],max:5}},c=(0,l.Ue)(((e,t)=>({consentType:"optin",setConsentType:t=>{e({consentType:t})},statisticsLoading:!1,consentTypes:[],regions:[],defaultConsentType:"optin",loaded:!1,statisticsData:complianz.is_premium?i:s,emptyStatisticsData:s,bestPerformerEnabled:!1,daysLeft:"",abTrackingCompleted:!1,labels:[],setLabels:t=>{e({labels:t})},fetchStatisticsData:async()=>{if(e({saving:!0}),t().loaded)return;const{daysLeft:a,abTrackingCompleted:l,consentTypes:s,statisticsData:i,defaultConsentType:c,regions:r,bestPerformerEnabled:o}=await n.doAction("get_statistics_data",{}).then((e=>e)).catch((e=>{console.error(e)}));e({saving:!1,loaded:!0,consentType:c,consentTypes:s,statisticsData:i,defaultConsentType:c,bestPerformerEnabled:o,regions:r,daysLeft:a,abTrackingCompleted:l})}})));t.default=c},14064:function(e,t,a){a.r(t),t.default=e=>function(t){return new Promise((a=>setTimeout((()=>a(t)),e)))}}}]);