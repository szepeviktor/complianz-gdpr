"use strict";(globalThis.webpackChunkcomplianz_gdpr=globalThis.webpackChunkcomplianz_gdpr||[]).push([[1306,8667,2640],{18667:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d,useDate:()=>l});var r=a(30270),o=a(49546),s=a(69119),n=a(7069),c=a(83894);const l=(0,r.Ue)((e=>({startDate:(0,o.default)((0,s.default)((0,n.Z)(new Date,7)),"yyyy-MM-dd"),setStartDate:t=>e((e=>({startDate:t}))),endDate:(0,o.default)((0,c.default)((0,n.Z)(new Date,1)),"yyyy-MM-dd"),setEndDate:t=>e((e=>({endDate:t}))),range:"last-7-days",setRange:t=>e((e=>({range:t})))}))),d=l},68338:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l});var r=a(69307),o=a(65736),s=a(82640),n=a(43684),c=a(18667);const l=(0,a(99196).memo)((()=>{const{noData:e,startExport:t,exportLink:l,fetchExportDatarequestsProgress:d,generating:u,progress:i}=(0,s.default)(),[p,g]=(0,r.useState)(null),{startDate:f,endDate:m}=(0,c.default)();return(0,r.useEffect)((()=>{Promise.all([a.e(5543),a.e(7410),a.e(6717)]).then(a.bind(a,6717)).then((e=>{let{default:t}=e;g((()=>t))}))}),[]),(0,r.useEffect)((()=>{d(!0)}),[]),(0,r.useEffect)((()=>{i<100&&u&&d(!1,f,m)}),[i]),(0,r.createElement)(r.Fragment,null,(0,r.createElement)("div",{className:"cmplz-table-header-controls"},p&&(0,r.createElement)(p,null),(0,r.createElement)("button",{disabled:u,className:"button button-default cmplz-field-button",onClick:()=>t()},(0,o.__)("Export to CSV","complianz-gdpr"),u&&(0,r.createElement)(r.Fragment,null,(0,r.createElement)(n.default,{name:"loading",color:"grey"})," ",i,"%"))),i>=100&&(""!==l||e)&&(0,r.createElement)("div",{className:"cmplz-selected-document"},!e&&(0,o.__)("Your Data Requests Export has been completed.","complianz-gdpr"),e&&(0,o.__)("Your selection does not contain any data.","complianz-gdpr"),(0,r.createElement)("div",{className:"cmplz-selected-document-controls"},!e&&(0,r.createElement)("a",{className:"button button-default",href:l},(0,o.__)("Download","complianz-gdpr")))))}))},82640:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});var r=a(30270),o=a(48399),s=a(12902);const n=(0,r.Ue)(((e,t)=>({recordsLoaded:!1,searchValue:"",setSearchValue:t=>e({searchValue:t}),fetching:!1,generating:!1,progress:!1,records:[],totalRecords:0,totalOpen:0,exportLink:"",noData:!1,deleteRecords:async a=>{let r=t().records.filter((e=>a.includes(e.ID)));e((e=>({records:e.records.filter((e=>!a.includes(e.ID)))})));let s={};s.records=r,await o.doAction("delete_datarequests",s).then((e=>e)).catch((e=>{console.error(e)}))},resolveRecords:async a=>{e((0,s.ZP)((e=>{e.records.forEach((function(t,r){a.includes(t.ID)&&(e.records[r].resolved=!0)}))})));let r={};r.records=t().records.filter((e=>a.includes(e.ID))),await o.doAction("resolve_datarequests",r).then((e=>e)).catch((e=>{console.error(e)}))},fetchData:async(a,r,s,n)=>{if(t().fetching)return;e({fetching:!0});let c={};c.per_page=a,c.page=r,c.order=n.toUpperCase(),c.orderBy=s,c.search=t().searchValue;const{records:l,totalRecords:d,totalOpen:u}=await o.doAction("get_datarequests",c).then((e=>e)).catch((e=>{console.error(e)}));e((()=>({recordsLoaded:!0,records:l,totalRecords:d,totalOpen:u,fetching:!1})))},startExport:async()=>{e({generating:!0,progress:0,exportLink:""})},fetchExportDatarequestsProgress:async(t,a,r)=>{(t=void 0!==t&&t)||e({generating:!0});let s={};s.startDate=a,s.endDate=r,s.statusOnly=t;const{progress:n,exportLink:c,noData:l}=await o.doAction("export_datarequests",s).then((e=>e)).catch((e=>{console.error(e)}));let d=!1;n<100&&(d=!0),e({progress:n,exportLink:c,generating:d,noData:l})}})))}}]);