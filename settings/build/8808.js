"use strict";(globalThis.webpackChunkcomplianz_gdpr=globalThis.webpackChunkcomplianz_gdpr||[]).push([[8808,1789,3252],{71789:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});var s=a(30270),o=a(48399);const n=(0,s.Ue)(((e,t)=>({licenseStatus:cmplz_settings.licenseStatus,processing:!1,licenseNotices:[],noticesLoaded:!1,getLicenseNotices:async()=>{const{licenseStatus:t,notices:a}=await o.doAction("license_notices",{}).then((e=>e));e((e=>({noticesLoaded:!0,licenseNotices:a,licenseStatus:t})))},activateLicense:async t=>{let a={};a.license=t,e({processing:!0});const{licenseStatus:s,notices:n}=await o.doAction("activate_license",a);e((e=>({processing:!1,licenseNotices:n,licenseStatus:s})))},deactivateLicense:async()=>{e({processing:!0});const{licenseStatus:t,notices:a}=await o.doAction("deactivate_license");e((e=>({processing:!1,licenseNotices:a,licenseStatus:t})))}})))},38808:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l});var s=a(69307),o=a(56293),n=a(23252),i=a(71789);const l=(0,a(99196).memo)((()=>{const{fields:e,getFieldValue:t}=(0,o.default)(),[l,c]=(0,s.useState)(!1),[r,d]=(0,s.useState)(!1),{consentType:g,setConsentType:b,statisticsData:u,emptyStatisticsData:f,consentTypes:p,loaded:m,fetchStatisticsData:h,statisticsLoading:k}=(0,n.default)(),[C,_]=(0,s.useState)(null),{licenseStatus:y}=(0,i.default)();(0,s.useEffect)((()=>{a.e(9449).then(a.bind(a,69449)).then((e=>{let{Chart:t,CategoryScale:a,LinearScale:s,BarElement:o,Title:n,Tooltip:i,Legend:l}=e;t.register(a,s,o,n,i,l)})),Promise.all([a.e(9449),a.e(6495)]).then(a.bind(a,26495)).then((e=>{let{Bar:t}=e;_((()=>t))}))}),[]),(0,s.useEffect)((()=>{!m&&l&&h()}),[m,l]),(0,s.useEffect)((()=>{1==t("a_b_testing")?c(!0):c(!1)}),[e]),(0,s.useEffect)((()=>{d("valid"===y&&l?f[g]:u[g])}),[]),(0,s.useEffect)((()=>{l&&d(u[g])}),[g,l,m]);const T=k?"cmplz-loading":"";return(0,s.createElement)(s.Fragment,null,p.length>1&&(0,s.createElement)("select",{value:g,onChange:e=>b(e.target.value)},p.map(((e,t)=>(0,s.createElement)("option",{key:t,value:e.id},e.label)))),r&&C&&(0,s.createElement)(C,{className:`burst-loading-container ${T}`,options:{responsive:!0,plugins:{legend:{position:"top"}}},data:r}))}))},23252:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l});var s=a(30270),o=a(48399);const n={optin:{labels:["Functional","Statistics","Marketing","Do Not Track","No choice","No warning"],categories:["functional","statistics","marketing","do_not_track","no_choice","no_warning"],datasets:[{data:["0","0","0","0","0","0"],backgroundColor:"rgba(255, 99, 132, 1)",borderColor:"rgba(255, 99, 132, 1)",label:"A (default)",fill:"false",borderDash:[0,0]},{data:["0","0","0","0","0","0"],backgroundColor:"rgba(255, 159, 64, 1)",borderColor:"rgba(255, 159, 64, 1)",label:"B",fill:"false",borderDash:[0,0]}],max:5},optout:{labels:["Functional","Statistics","Marketing","Do Not Track","No choice","No warning"],categories:["functional","statistics","marketing","do_not_track","no_choice","no_warning"],datasets:[{data:["0","0","0","0","0","0"],backgroundColor:"rgba(255, 99, 132, 1)",borderColor:"rgba(255, 99, 132, 1)",label:"A (default)",fill:"false",borderDash:[0,0]},{data:["0","0","0","0","0","0"],backgroundColor:"rgba(255, 159, 64, 1)",borderColor:"rgba(255, 159, 64, 1)",label:"B",fill:"false",borderDash:[0,0]}],max:5}},i={optin:{labels:["Functional","Statistics","Marketing","Do Not Track","No choice","No warning"],categories:["functional","statistics","marketing","do_not_track","no_choice","no_warning"],datasets:[{data:["29","747","174","292","30","10"],backgroundColor:"rgba(255, 99, 132, 1)",borderColor:"rgba(255, 99, 132, 1)",label:"Demo A (default)",fill:"false",borderDash:[0,0]},{data:["3","536","240","389","45","32"],backgroundColor:"rgba(255, 159, 64, 1)",borderColor:"rgba(255, 159, 64, 1)",label:"Demo B",fill:"false",borderDash:[0,0]}],max:5},optout:{labels:["Functional","Statistics","Marketing","Do Not Track","No choice","No warning"],categories:["functional","statistics","marketing","do_not_track","no_choice","no_warning"],datasets:[{data:["29","747","174","292","30","10"],backgroundColor:"rgba(255, 99, 132, 1)",borderColor:"rgba(255, 99, 132, 1)",label:"A (default)",fill:"false",borderDash:[0,0]},{data:["3","536","240","389","45","32"],backgroundColor:"rgba(255, 159, 64, 1)",borderColor:"rgba(255, 159, 64, 1)",label:"Demo B",fill:"false",borderDash:[0,0]}],max:5}},l=(0,s.Ue)(((e,t)=>({consentType:"optin",setConsentType:t=>{e({consentType:t})},statisticsLoading:!1,consentTypes:[],regions:[],defaultConsentType:"optin",loaded:!1,statisticsData:i,emptyStatisticsData:n,bestPerformerEnabled:!1,daysLeft:"",abTrackingCompleted:!1,labels:[],setLabels:t=>{e({labels:t})},fetchStatisticsData:async()=>{if(e({saving:!0}),t().loaded)return;const{daysLeft:a,abTrackingCompleted:s,consentTypes:n,statisticsData:i,defaultConsentType:l,regions:c,bestPerformerEnabled:r}=await o.doAction("get_statistics_data",{}).then((e=>e)).catch((e=>{console.error(e)}));e({saving:!1,loaded:!0,consentType:l,consentTypes:n,statisticsData:i,defaultConsentType:l,bestPerformerEnabled:r,regions:c,daysLeft:a,abTrackingCompleted:s})}})))}}]);