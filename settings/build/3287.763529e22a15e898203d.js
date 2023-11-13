"use strict";(self.webpackChunkcomplianz_gdpr=self.webpackChunkcomplianz_gdpr||[]).push([[3287,4573,7853],{34573:function(e,t,a){a.r(t);var l=a(69307),n=a(23361);t.default=e=>(0,l.createElement)("div",{className:"cmplz-panel__list__item",key:e.id,style:e.style?e.style:{}},(0,l.createElement)("details",null,(0,l.createElement)("summary",null,e.icon&&(0,l.createElement)(n.default,{name:e.icon}),(0,l.createElement)("h5",{className:"cmplz-panel__list__item__title"},e.summary),(0,l.createElement)("div",{className:"cmplz-panel__list__item__comment"},e.comment),(0,l.createElement)("div",{className:"cmplz-panel__list__item__icons"},e.icons),(0,l.createElement)(n.default,{name:"chevron-down",size:18})),(0,l.createElement)("div",{className:"cmplz-panel__list__item__details"},e.details)))},17853:function(e,t,a){a.r(t);var l=a(30270),n=a(12902),i=a(48399),c=a(75169);const s=(0,l.Ue)(((e,t)=>({documentsLoaded:!1,region:"",fileName:"",serviceName:"",fetching:!1,updating:!1,loadingFields:!1,documents:[],regions:[],fields:[],editDocumentId:!1,resetEditDocumentId:t=>{e({editDocumentId:!1,region:"",serviceName:""})},editDocument:async t=>{e({updating:!0}),await i.doAction("load_processing_agreement",{id:t}).then((t=>{e({fields:t.fields,region:t.region,serviceName:t.serviceName,updating:!1,fileName:t.file_name})})).catch((e=>{console.error(e)})),e({editDocumentId:t})},setRegion:t=>{e({region:t})},setServiceName:t=>{e({serviceName:t})},updateField:(a,l)=>{let i=!1,s=!1;e((0,n.ZP)((e=>{e.fields.forEach((function(e,t){e.id===a&&(s=t,i=!0)})),!1!==s&&(e.fields[s].value=l)})));let r=(0,c.updateFieldsListWithConditions)(t().fields);e({fields:r})},save:async(a,l)=>{e({updating:!0});let n=t().editDocumentId;await i.doAction("save_processing_agreement",{fields:t().fields,region:a,serviceName:l,post_id:n}).then((t=>(e({updating:!1}),t))).catch((e=>{console.error(e)})),t().fetchData()},deleteDocuments:async a=>{let l=t().documents.filter((e=>a.includes(e.id)));e((e=>({documents:e.documents.filter((e=>!a.includes(e.id)))})));let n={};n.documents=l,await i.doAction("delete_processing_agreement",n).then((e=>e)).catch((e=>{console.error(e)}))},fetchData:async()=>{if(t().fetching)return;e({fetching:!0});const{documents:a,regions:l}=await i.doAction("get_processing_agreements",{}).then((e=>e)).catch((e=>{console.error(e)}));e((()=>({documentsLoaded:!0,documents:a,regions:l,fetching:!1})))},fetchFields:async t=>{let a={region:t};e({loadingFields:!0});const{fields:l}=await i.doAction("get_processing_agreement_fields",a).then((e=>e)).catch((e=>{console.error(e)}));let n=(0,c.updateFieldsListWithConditions)(l);e((e=>({fields:n,loadingFields:!1})))}})));t.default=s},63287:function(e,t,a){a.r(t);var l=a(69307),n=a(65736),i=a(23361),c=a(34573),s=a(56293),r=a(17853),o=a(82485);t.default=(0,l.memo)((e=>{const{updateField:t,setChangedField:a,saveFields:d}=(0,s.default)(),{documentsLoaded:m,documents:u}=(0,r.default)(),{selectedMainMenuItem:p}=(0,o.default)(),[g,_]=wp.element.useState(e.processor.name?e.processor.name:""),[f,v]=wp.element.useState(e.processor.purpose?e.processor.purpose:""),[E,h]=wp.element.useState(e.processor.country?e.processor.country:""),[y,z]=wp.element.useState(e.processor.data?e.processor.data:""),N=(l,n)=>{let i=[...e.field.value];Array.isArray(i)||(i=[]);let c={...i[e.index]};c[n]=l,i[e.index]=c,t(e.field.id,i),a(e.field.id,i)};(0,l.useEffect)((()=>{const e=setTimeout((()=>{N(g,"name")}),500);return()=>{clearTimeout(e)}}),[g]),(0,l.useEffect)((()=>{const e=setTimeout((()=>{N(y,"data")}),500);return()=>{clearTimeout(e)}}),[y]),(0,l.useEffect)((()=>{const e=setTimeout((()=>{N(E,"country")}),500);return()=>{clearTimeout(e)}}),[E]),(0,l.useEffect)((()=>{const e=setTimeout((()=>{N(f,"purpose")}),500);return()=>{clearTimeout(e)}}),[f]);let w=m?[...u]:[];w.push({id:-1,title:(0,n.__)("A Processing Agreement outside Complianz Privacy Suite","complianz-gdpr"),region:"",service:"",date:""});let C={...e.processor};return C.processing_agreement||(C.processing_agreement=0),(0,l.createElement)(l.Fragment,null,(0,l.createElement)(c.default,{summary:g,details:(c=>(0,l.createElement)(l.Fragment,null,(0,l.createElement)("div",{className:"cmplz-details-row"},(0,l.createElement)("label",null,(0,n.__)("Name","complianz-gdpr")),(0,l.createElement)("input",{onChange:e=>_(e.target.value),type:"text",placeholder:(0,n.__)("Name","complianz-gdpr"),value:g})),(0,l.createElement)("div",{className:"cmplz-details-row"},(0,l.createElement)("label",null,(0,n.__)("Country","complianz-gdpr")),(0,l.createElement)("input",{onChange:e=>h(e.target.value),type:"text",placeholder:(0,n.__)("Country","complianz-gdpr"),value:E})),(0,l.createElement)("div",{className:"cmplz-details-row"},(0,l.createElement)("label",null,(0,n.__)("Purpose","complianz-gdpr")),(0,l.createElement)("input",{onChange:e=>v(e.target.value),type:"text",placeholder:(0,n.__)("Purpose","complianz-gdpr"),value:f})),(0,l.createElement)("div",{className:"cmplz-details-row"},(0,l.createElement)("label",null,(0,n.__)("Data","complianz-gdpr")),(0,l.createElement)("input",{onChange:e=>z(e.target.value),type:"text",placeholder:(0,n.__)("Data","complianz-gdpr"),value:y})),(0,l.createElement)("div",{className:"cmplz-details-row"},(0,l.createElement)("label",null,(0,n.__)("Processing Agreement","complianz-gdpr")),m&&(0,l.createElement)("select",{onChange:e=>N(e.target.value,"processing_agreement"),value:c.processing_agreement},(0,l.createElement)("option",{value:"0"},(0,n.__)("Select an option","complianz-gdpr")),w.map(((e,t)=>(0,l.createElement)("option",{key:t,value:e.id},e.title)))),!m&&(0,l.createElement)("div",{className:"cmplz-documents-loader"},(0,l.createElement)("div",null,(0,l.createElement)(i.default,{name:"loading",color:"grey"})),(0,l.createElement)("div",null,(0,n.__)("Loading...","complianz-gdpr")))),(0,l.createElement)("div",{className:"cmplz-details-row__buttons"},(0,l.createElement)("button",{className:"button button-default cmplz-reset-button",onClick:l=>(async l=>{let n=e.field.value;Array.isArray(n)||(n=[]);let i=[...n];i.hasOwnProperty(e.index)&&i.splice(e.index,1),t(e.field.id,i),a(e.field.id,i),await d(p,!1,!1)})()},(0,n.__)("Delete","complianz-gdpr")))))(C)}))}))}}]);