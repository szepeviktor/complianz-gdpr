"use strict";(globalThis.webpackChunkcomplianz_gdpr=globalThis.webpackChunkcomplianz_gdpr||[]).push([[2640],{82640:(e,r,t)=>{t.r(r),t.d(r,{default:()=>c});var o=t(30270),a=t(48399),s=t(12902);const c=(0,o.Ue)(((e,r)=>({recordsLoaded:!1,searchValue:"",setSearchValue:r=>e({searchValue:r}),fetching:!1,generating:!1,progress:!1,records:[],totalRecords:0,totalOpen:0,exportLink:"",noData:!1,deleteRecords:async t=>{let o=r().records.filter((e=>t.includes(e.ID)));e((e=>({records:e.records.filter((e=>!t.includes(e.ID)))})));let s={};s.records=o,await a.doAction("delete_datarequests",s).then((e=>e)).catch((e=>{console.error(e)}))},resolveRecords:async t=>{e((0,s.ZP)((e=>{e.records.forEach((function(r,o){t.includes(r.ID)&&(e.records[o].resolved=!0)}))})));let o={};o.records=r().records.filter((e=>t.includes(e.ID))),await a.doAction("resolve_datarequests",o).then((e=>e)).catch((e=>{console.error(e)}))},fetchData:async(t,o,s,c)=>{if(r().fetching)return;e({fetching:!0});let n={};n.per_page=t,n.page=o,n.order=c.toUpperCase(),n.orderBy=s,n.search=r().searchValue;const{records:d,totalRecords:l,totalOpen:i}=await a.doAction("get_datarequests",n).then((e=>e)).catch((e=>{console.error(e)}));e((()=>({recordsLoaded:!0,records:d,totalRecords:l,totalOpen:i,fetching:!1})))},startExport:async()=>{e({generating:!0,progress:0,exportLink:""})},fetchExportDatarequestsProgress:async(r,t,o)=>{(r=void 0!==r&&r)||e({generating:!0});let s={};s.startDate=t,s.endDate=o,s.statusOnly=r;const{progress:c,exportLink:n,noData:d}=await a.doAction("export_datarequests",s).then((e=>e)).catch((e=>{console.error(e)}));let l=!1;c<100&&(l=!0),e({progress:c,exportLink:n,generating:l,noData:d})}})))}}]);