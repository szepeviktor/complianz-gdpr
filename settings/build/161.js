"use strict";(globalThis.webpackChunkcomplianz_gdpr=globalThis.webpackChunkcomplianz_gdpr||[]).push([[161],{80161:(e,r,o)=>{o.r(r),o.d(r,{default:()=>s});var t=o(30270),n=o(48399);const s=(0,t.Ue)(((e,r)=>({recordsLoaded:!1,fetching:!1,generating:!1,progress:!1,records:[],exportLink:"",downloadUrl:"",regions:[],fields:[],noData:!1,deleteRecords:async o=>{let t=r().records.filter((e=>o.includes(e.id)));e((e=>({records:e.records.filter((e=>!o.includes(e.id)))})));let s={};s.records=t,await n.doAction("delete_records_of_consent",s).then((e=>e)).catch((e=>{console.error(e)}))},fetchData:async()=>{if(r().fetching)return;e({fetching:!0});const{records:o,regions:t,download_url:s}=await n.doAction("get_records_of_consent",{}).then((e=>e)).catch((e=>{console.error(e)}));e((()=>({recordsLoaded:!0,records:o,regions:t,downloadUrl:s,fetching:!1})))},startExport:async()=>{e({generating:!0,progress:0,exportLink:""})},fetchExportRecordsOfConsentProgress:async(r,o,t)=>{(r=void 0!==r&&r)||e({generating:!0});let s={};s.startDate=o,s.endDate=t,s.statusOnly=r;const{progress:c,exportLink:a,noData:d}=await n.doAction("export_records_of_consent",s).then((e=>e)).catch((e=>{console.error(e)}));let i=!1;c<100&&(i=!0),e({progress:c,exportLink:a,generating:i,noData:d})}})))}}]);