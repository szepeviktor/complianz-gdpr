"use strict";(globalThis.webpackChunkcomplianz_gdpr=globalThis.webpackChunkcomplianz_gdpr||[]).push([[6495],{26495:(t,e,n)=>{n.r(e),n.d(e,{Bar:()=>h,Bubble:()=>A,Chart:()=>b,Doughnut:()=>C,Line:()=>E,Pie:()=>w,PolarArea:()=>m,Radar:()=>v,Scatter:()=>y,getDatasetAtEvent:()=>i,getElementAtEvent:()=>d,getElementsAtEvent:()=>f});var r=n(99196),a=n(69449);const s="label";function o(t,e){"function"==typeof t?t(e):t&&(t.current=e)}function u(t,e){t.labels=e}function l(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s;const r=[];t.datasets=e.map((e=>{const a=t.datasets.find((t=>t[n]===e[n]));return a&&e.data&&!r.includes(a)?(r.push(a),Object.assign(a,e),a):{...e}}))}function c(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s;const n={labels:[],datasets:[]};return u(n,t.labels),l(n,t.datasets,e),n}function i(t,e){return t.getElementsAtEventForMode(e.nativeEvent,"dataset",{intersect:!0},!1)}function d(t,e){return t.getElementsAtEventForMode(e.nativeEvent,"nearest",{intersect:!0},!1)}function f(t,e){return t.getElementsAtEventForMode(e.nativeEvent,"index",{intersect:!0},!1)}function g(t,e){const{height:n=150,width:s=300,redraw:i=!1,datasetIdKey:d,type:f,data:g,options:b,plugins:p=[],fallbackContent:E,updateMode:h,...v}=t,C=(0,r.useRef)(null),m=(0,r.useRef)(),A=()=>{C.current&&(m.current=new a.Chart(C.current,{type:f,data:c(g,d),options:b&&{...b},plugins:p}),o(e,m.current))},w=()=>{o(e,null),m.current&&(m.current.destroy(),m.current=null)};return(0,r.useEffect)((()=>{!i&&m.current&&b&&function(t,e){const n=t.options;n&&e&&Object.assign(n,e)}(m.current,b)}),[i,b]),(0,r.useEffect)((()=>{!i&&m.current&&u(m.current.config.data,g.labels)}),[i,g.labels]),(0,r.useEffect)((()=>{!i&&m.current&&g.datasets&&l(m.current.config.data,g.datasets,d)}),[i,g.datasets]),(0,r.useEffect)((()=>{m.current&&(i?(w(),setTimeout(A)):m.current.update(h))}),[i,b,g.labels,g.datasets,h]),(0,r.useEffect)((()=>{m.current&&(w(),setTimeout(A))}),[f]),(0,r.useEffect)((()=>(A(),()=>w())),[]),r.createElement("canvas",Object.assign({ref:C,role:"img",height:n,width:s},v),E)}const b=(0,r.forwardRef)(g);function p(t,e){return a.Chart.register(e),(0,r.forwardRef)(((e,n)=>r.createElement(b,Object.assign({},e,{ref:n,type:t}))))}const E=p("line",a.LineController),h=p("bar",a.BarController),v=p("radar",a.RadarController),C=p("doughnut",a.DoughnutController),m=p("polarArea",a.PolarAreaController),A=p("bubble",a.BubbleController),w=p("pie",a.PieController),y=p("scatter",a.ScatterController)}}]);