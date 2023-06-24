"use strict";(globalThis.webpackChunkcomplianz_gdpr=globalThis.webpackChunkcomplianz_gdpr||[]).push([[6854,1789],{71789:(t,e,n)=>{n.r(e),n.d(e,{default:()=>i});var o=n(30270),s=n(48399);const i=(0,o.Ue)(((t,e)=>({licenseStatus:cmplz_settings.licenseStatus,processing:!1,licenseNotices:[],noticesLoaded:!1,getLicenseNotices:async()=>{const{licenseStatus:e,notices:n}=await s.doAction("license_notices",{}).then((t=>t));t((t=>({noticesLoaded:!0,licenseNotices:n,licenseStatus:e})))},activateLicense:async e=>{let n={};n.license=e,t({processing:!0});const{licenseStatus:o,notices:i}=await s.doAction("activate_license",n);t((t=>({processing:!1,licenseNotices:i,licenseStatus:o})))},deactivateLicense:async()=>{t({processing:!0});const{licenseStatus:e,notices:n}=await s.doAction("deactivate_license");t((t=>({processing:!1,licenseNotices:n,licenseStatus:e})))}})))},76854:(t,e,n)=>{n.r(e),n.d(e,{default:()=>u});var o=n(69307),s=n(99196),i=n(65736),a=n(71789),c=n(56293);const r=()=>{const t=new URL(window.location.href);t.searchParams.delete("tour"),window.history.pushState({},"",t.href)},l={defaultStepOptions:{cancelIcon:{enabled:!0},keyboardNavigation:!1},useModalOverlay:!1,margin:15},p=t=>{let{ShepherdTourContext:e}=t;const n=(0,s.useContext)(e);return n.on("cancel",r),(0,s.useEffect)((()=>{n&&n.start()}),[n]),(0,o.createElement)(o.Fragment,null)},d=[{title:(0,i.__)("Welcome to Complianz","complianz-gdpr"),text:"<p>"+(0,i.__)("Get ready for privacy legislation around the world. Follow a quick tour or start configuring the plugin!","complianz-gdpr")+"</p>",classes:"cmplz-shepherd",buttons:[{type:"cancel",classes:"button button-default",text:(0,i.__)("Configure","complianz-gdpr"),action(){new URL(window.location.href).searchParams.delete("tour"),window.location.hash="wizard"}},{classes:"button button-primary",text:(0,i.__)("Start tour","complianz-gdpr"),action(){return window.location.hash=cmplz_settings.is_premium?"settings/license":"dashboard",this.next()}}]},{title:(0,i.__)("Dashboard","complianz-gdpr"),text:"<p>"+(0,i.__)("This is your Dashboard. When the Wizard is completed, this will give you an overview of tasks, tools, and documentation.","complianz-gdpr")+"</p>",classes:"cmplz-shepherd",buttons:[{classes:"button button-default",text:(0,i.__)("Previous","complianz-gdpr"),action(){return window.location.hash=cmplz_settings.is_premium?"settings/license":"dashboard",this.back()}},{classes:"button button-primary",text:(0,i.__)("Next","complianz-gdpr"),action(){return window.location.hash="wizard/consent",this.next()}}]},{title:(0,i.__)("The Wizard","complianz-gdpr"),text:"<p>"+(0,i.__)("This is where everything regarding cookies is configured. We will come back to the Wizard soon.","complianz-gdpr")+"</p>",classes:"cmplz-shepherd",buttons:[{classes:"button button-default",text:(0,i.__)("Previous","complianz-gdpr"),action(){return window.location.hash="dashboard",this.back()}},{classes:"button button-primary",text:(0,i.__)("Next","complianz-gdpr"),action(){return window.location.hash="banner",this.next()}}]},{title:(0,i.__)("Cookie Banner","complianz-gdpr"),text:"<p>"+(0,i.__)("Here you can configure and style your cookie banner if the Wizard is completed. An extra tab will be added with region-specific settings.","complianz-gdpr")+"</p>",classes:"cmplz-shepherd",buttons:[{classes:"button button-default",text:(0,i.__)("Previous","complianz-gdpr"),action(){return window.location.hash="wizard/consent",this.back()}},{classes:"button button-primary",text:(0,i.__)("Next","complianz-gdpr"),action(){return window.location.hash="integrations",this.next()}}]},{title:(0,i.__)("Integrations","complianz-gdpr"),text:"<p>"+(0,i.__)("Based on your answers in the Wizard, we will automatically enable integrations with relevant services and plugins. In case you want to block extra scripts, you can add them to the Script Center.","complianz-gdpr")+"</p>",classes:"cmplz-shepherd",buttons:[{classes:"button button-default",text:(0,i.__)("Previous","complianz-gdpr"),action(){return window.location.hash="banner",this.back()}},{classes:"button button-primary",text:(0,i.__)("Next","complianz-gdpr"),action(){return window.location.hash="tools/proof-of-consent",this.next()}}]},{title:(0,i.__)("Proof of Consent","complianz-gdpr"),text:"<p>"+(0,i.__)("Complianz tracks changes in your Cookie Notice and Cookie Policy with time-stamped documents. This is your consent registration while respecting the data minimization guidelines and won't store any user data.","complianz-gdpr")+"</p>",classes:"cmplz-shepherd",buttons:[{classes:"button button-default",text:(0,i.__)("Previous","complianz-gdpr"),action(){return window.location.hash="integrations",this.back()}},{classes:"button button-primary",text:(0,i.__)("Next","complianz-gdpr"),action(){return window.location.hash="wizard/visitors",this.next()}}]},{title:(0,i.__)("Let's start the Wizard","complianz-gdpr"),text:"<p>"+(0,i.__)("You are ready to start the Wizard. For more information, FAQ, and support, please visit Complianz.io.","complianz-gdpr")+"</p>",classes:"cmplz-shepherd",buttons:[{classes:"button button-default",text:(0,i.__)("Previous","complianz-gdpr"),action(){return window.location.hash="tools/proof-of-consent",this.back()}},{type:"cancel",classes:"button button-primary",text:(0,i.__)("End tour","complianz-gdpr")}]}],u=()=>{const{licenseStatus:t}=(0,a.default)(),[e,r]=(0,s.useState)(null),[u,h]=(0,s.useState)(null),{fieldsLoaded:m}=(0,c.default)();return(0,s.useEffect)((()=>{if(m&&(n.e(5778).then(n.bind(n,15778)).then((t=>{let{ShepherdTour:e,ShepherdTourContext:n}=t;r((()=>e)),h((()=>n))})),cmplz_settings.is_premium)){let e;e="valid"===t?(0,i.__)("Great, your license is activated and valid!","complianz-gdpr"):(0,i.__)("To unlock the wizard and future updates, please enter and activate your license.","complianz-gdpr");const n={title:(0,i.__)("Activate your license","complianz-gdpr"),text:"<p>"+e+"</p>",classes:"cmplz-shepherd",buttons:[{classes:"button button-default",text:(0,i.__)("Previous","complianz-gdpr"),action(){return window.location.hash="dashboard",this.back()}},{classes:"button button-primary",text:(0,i.__)("Next","complianz-gdpr"),action(){return window.location.hash="dashboard",this.next()}}]};d.splice(1,0,n)}}),[m]),e&&u?(0,o.createElement)(e,{steps:d,tourOptions:l},(0,o.createElement)(p,{ShepherdTourContext:u})):null}}}]);