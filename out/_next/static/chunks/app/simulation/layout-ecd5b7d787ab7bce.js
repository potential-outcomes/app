(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[390],{5042:function(){},2554:function(e,t,r){Promise.resolve().then(r.bind(r,8820)),Promise.resolve().then(r.bind(r,9987)),Promise.resolve().then(r.bind(r,7462))},8820:function(e,t,r){"use strict";r.d(t,{default:function(){return p}});var a=r(7437),n=r(2265),i=r(7462),s=r(1246),l=r(2391);let o=e=>{let{isBack:t=!1,children:r,className:n}=e;return(0,a.jsx)("div",{style:{position:"absolute",width:"50%",height:"100%",backfaceVisibility:"hidden",transform:t?"rotateY(180deg)":"rotateY(0deg)"},className:n,children:r})};var c=e=>{let{side:t,leftChild:r,rightChild:i}=e,s="left"===t,[c,d]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{d(!0)},[]),(0,a.jsxs)("div",{className:"relative w-full h-full",children:[(0,a.jsxs)("div",{className:"absolute inset-0 flex rounded-lg overflow-hidden",children:[(0,a.jsx)("div",{className:"w-[calc(50%-0.5px)] flex items-center justify-center transition-font-weight duration-500 ".concat(s?"font-bold":"opacity-90"),children:r}),(0,a.jsx)("div",{className:"w-px bg-light-background-tertiary dark:bg-dark-background-tertiary"}),(0,a.jsx)("div",{className:"w-[calc(50%+0.5px)] flex items-center justify-center transition-font-weight duration-500 ".concat("right"===t?"font-bold":"opacity-90"),children:i})]}),(0,a.jsxs)(l.E.div,{className:"absolute w-full top-0 h-full pointer-events-none",style:{transformStyle:"preserve-3d",transformPerspective:"500px"},initial:!1,animate:{rotateY:s?0:"none"===t?90:180},transition:c?{type:"tween",ease:"easeInOut",duration:.7}:{duration:0},children:[(0,a.jsx)(o,{className:"rounded-l-lg flex items-center justify-center overflow-hidden border-2 border-light-accent dark:border-dark-accent"}),(0,a.jsx)(o,{isBack:!0,className:"rounded-r-lg flex items-center justify-center overflow-hidden border-2 border-light-primary dark:border-dark-primary"})]})]})};let d=e=>{let{value:t,onChange:r,placeholder:n}=e;return(0,a.jsx)("input",{type:"number",value:null===t?"":t,onChange:e=>{r(e.target.value?Number(e.target.value):null)},className:"\n      w-full h-full px-2 py-1 text-center\n      bg-light-background-secondary dark:bg-dark-background-secondary\n      text-light-text-secondary dark:text-dark-text-secondary\n      placeholder:text-light-text-tertiary dark:placeholder:text-dark-text-tertiary\n      focus:outline-none focus:ring-0\n      transition-colors duration-200\n      [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none\n    ",placeholder:n})};var u=e=>{let{row:t,index:r,updateCell:n,toggleAssignment:i,addRow:l,deleteRow:o,isUnactivated:u,controlColumnIndex:x,toggleCollapse:h,isCollapsed:g}=e;return(0,a.jsxs)("div",{className:"flex items-stretch w-full h-14 py-2 bg-light-background-primary dark:bg-dark-background-primary",children:[(0,a.jsx)("div",{className:"flex items-center justify-center w-12 flex-shrink-0 text-light-text-secondary dark:text-dark-text-secondary",children:u&&h?(0,a.jsx)("button",{onClick:h,className:"focus:outline-none hover:opacity-80 transition-opacity","aria-label":g?"Expand rows":"Collapse rows",children:g?(0,a.jsx)(s.PJ.Expand,{size:5}):(0,a.jsx)(s.PJ.Collapse,{size:5})}):r+1}),(0,a.jsx)("div",{className:"flex-grow h-full",children:(0,a.jsx)(c,{side:u?"none":0===t.assignment?"left":"right",leftChild:(0,a.jsx)(d,{value:t.data[0],onChange:e=>n(r,0,e),placeholder:0===x?"Control":"Treatment"}),rightChild:(0,a.jsx)(d,{value:t.data[1],onChange:e=>n(r,1,e),placeholder:1===x?"Control":"Treatment"})})}),(0,a.jsx)("div",{className:"flex items-center justify-center w-16 flex-shrink-0",children:(0,a.jsx)("button",{onClick:()=>i(r),className:"w-6 h-6 rounded-md transition-colors duration-300\n            ".concat(u?"bg-light-background-tertiary dark:bg-dark-background-tertiary":0===t.assignment?"bg-light-accent dark:bg-dark-accent":"bg-light-primary dark:bg-dark-primary","\n            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-primary dark:focus:ring-dark-primary"),"aria-label":1===t.assignment?"Treatment assigned":"Control assigned"})}),(0,a.jsx)("div",{className:"flex items-center justify-center w-14 flex-shrink-0",children:u?(0,a.jsx)("button",{onClick:l,className:"text-light-text-tertiary hover:text-light-success dark:text-dark-text-tertiary dark:hover:text-dark-success focus:outline-none","aria-label":"Add row",children:(0,a.jsx)(s.PJ.Add,{size:5})}):(0,a.jsx)("button",{onClick:()=>o(r),className:"text-light-text-tertiary hover:text-light-error dark:text-dark-text-tertiary dark:hover:text-dark-error focus:outline-none","aria-label":"Delete row",children:(0,a.jsx)(s.PJ.Close,{size:5})})})]})};function x(e){let{children:t,content:r}=e;return(0,a.jsxs)("div",{className:"group relative inline-block",children:[t,(0,a.jsx)("span",{className:"absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-light-background-tertiary dark:bg-dark-background-tertiary text-light-text-primary dark:text-dark-text-primary text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out whitespace-nowrap",children:r})]})}let h=e=>{let{onClick:t,icon:r,label:n,primary:i=!1}=e;return(0,a.jsxs)("button",{onClick:t,className:"".concat("px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-200 flex items-center space-x-2"," ").concat(i?"bg-light-primary dark:bg-dark-primary text-light-background dark:text-dark-background hover:bg-light-primary-dark dark:hover:bg-dark-primary-light focus:ring-light-primary-dark dark:focus:ring-dark-primary-light":"bg-light-secondary dark:bg-dark-secondary text-light-background dark:text-dark-background hover:bg-light-secondary-dark dark:hover:bg-dark-secondary-light focus:ring-light-secondary-dark dark:focus:ring-dark-secondary-light"),"aria-label":n||"button",children:[r,n&&(0,a.jsx)("span",{children:n})]})};function g(e){let{isEditing:t,value:r,onChange:n,onBlur:i,onClick:l,color:o}=e;return(0,a.jsx)("div",{className:"flex items-center justify-center h-full px-2 ".concat(o),children:t?(0,a.jsx)("input",{type:"text",value:r,onChange:n,onBlur:i,className:"w-full bg-transparent text-center border-b-2 focus:outline-none ".concat(o),autoFocus:!0}):(0,a.jsx)(x,{content:"Click to edit column name",children:(0,a.jsxs)("div",{className:"flex items-center justify-center w-full cursor-pointer",onClick:l,children:[(0,a.jsx)("span",{className:"truncate text-center",children:r}),(0,a.jsx)(s.PJ.Edit,{className:"ml-1 opacity-70 hover:opacity-100"})]})})})}function m(e){let{onApply:t}=e,[r,i]=(0,n.useState)(0);return(0,a.jsxs)("div",{className:"mt-1  rounded-b-lg flex items-center justify-center space-x-4 bg-light-background-secondary dark:bg-dark-background-secondary py-4 px-3",children:[(0,a.jsx)("span",{className:"font-small text-light-text-primary dark:text-dark-text-primary",children:"Treatment Effect Under Null:"}),(0,a.jsx)("input",{type:"number",value:r,onChange:e=>i(Number(e.target.value)),className:"w-16 px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary bg-light-background dark:bg-dark-background text-light-text-primary dark:text-dark-text-primary"}),(0,a.jsx)(x,{content:"Set unobserved cells to reflect the null hypothesis effect.",children:(0,a.jsxs)("button",{onClick:()=>{isNaN(r)?alert("Please enter a valid number for the treatment effect."):t(r)},className:"flex items-center h-10 space-x-2 px-3 py-2 bg-light-primary dark:bg-dark-primary text-light-background dark:text-dark-background rounded-md hover:bg-light-primary-dark dark:hover:bg-dark-primary-light focus:outline-none focus:ring-2 focus:ring-light-primary-dark dark:focus:ring-dark-primary-light transition-colors duration-200",children:[(0,a.jsx)(s.PJ.MagicWand,{}),(0,a.jsx)("span",{children:"Apply Effect"})]})})]})}function p(){let{userData:e,simulationResults:t,isSimulating:r,dataActions:{setUserData:l,addRow:o,deleteRow:c,updateCell:d,toggleAssignment:p,undo:f,redo:k,renameColumn:b}}=(0,i.N)(),y=(0,n.useRef)(null),[j,v]=(0,n.useState)(!1),[w,N]=(0,n.useState)(e.columnNames.map(()=>!1)),C=r&&t&&t.length>0?t[t.length-1].rows:e.rows;(0,n.useEffect)(()=>{r||0!==e.rows.length&&e.rows[e.rows.length-1].data.some(e=>null===e)||o()},[e.rows,o,r]);let S=(e,t)=>{r||b(e,t.target.value.slice(0,20))},M=(0,n.useMemo)(()=>{let t=C.length<=5,n=C.map((t,n)=>(0,a.jsx)(u,{row:t,index:n,updateCell:r?()=>{}:d,toggleAssignment:r?()=>{}:p,addRow:r?()=>{}:o,deleteRow:r?()=>{}:c,isUnactivated:!r&&n===C.length-1,controlColumnIndex:e.controlColumnIndex,toggleCollapse:n===C.length-1?()=>v(!j):void 0,isCollapsed:j},n));if(j&&!t){let e=(0,a.jsx)("div",{className:"flex items-center justify-center h-12 cursor-pointer border-b border-light-background-tertiary dark:border-dark-background-tertiary",onClick:()=>v(!1),children:(0,a.jsxs)("button",{className:"flex items-center space-x-2 text-light-primary dark:text-dark-primary hover:text-light-primary-dark dark:hover:text-dark-primary-light focus:outline-none transition-colors duration-200",children:[(0,a.jsx)(s.PJ.Expand,{size:5}),(0,a.jsxs)("span",{children:["Expand ",C.length-4," hidden rows"]})]})},"expand-button");n=[n[0],n[1],e,n[n.length-2],n[n.length-1]]}return n},[C,j,d,p,c,o,r]);return(0,a.jsxs)("div",{className:"w-full max-w-4xl mx-auto px-4 text-light-text-primary dark:text-dark-text-primary",children:[(0,a.jsxs)("div",{className:"flex justify-between items-center mb-4",children:[(0,a.jsx)("h2",{className:"text-2xl font-semibold",children:"Data"}),(0,a.jsxs)("div",{className:"flex space-x-2",children:[(0,a.jsx)("input",{type:"file",accept:".csv",onChange:t=>{var a;if(r)return;let n=null===(a=t.target.files)||void 0===a?void 0:a[0];if(n){let t=new FileReader;t.onload=t=>{var r;let a=null===(r=t.target)||void 0===r?void 0:r.result;if("string"==typeof a){let t=a.split("\n").filter(e=>""!==e.trim()).map(e=>{let t=e.split(",").map(e=>e.trim()),r=parseInt(t.pop()||"0",10);return{data:t.map(e=>""===e?null:Number(e)),assignment:r}}),r=Math.max(...t.map(e=>e.data.length));l({rows:[...t,{data:Array(r).fill(null),assignment:0}],controlColumnIndex:0,columnNames:e.columnNames})}},t.readAsText(n)}},ref:y,className:"hidden"}),(0,a.jsx)(h,{onClick:()=>{var e;return null===(e=y.current)||void 0===e?void 0:e.click()},icon:(0,a.jsx)(s.PJ.Upload,{}),label:"Load from .csv",primary:!0})]})]}),(0,a.jsxs)("div",{className:"bg-light-background dark:bg-dark-background rounded-lg",children:[(0,a.jsxs)("div",{className:"flex items-stretch rounded-t-lg h-12 bg-light-background-secondary dark:bg-dark-background-secondary border-b-2 border-light-primary dark:border-dark-primary",children:[(0,a.jsx)("div",{className:"w-12 flex-shrink-0 flex items-center justify-center font-medium",children:"#"}),(0,a.jsx)("div",{className:"flex-grow flex",children:e.columnNames.map((t,n)=>(0,a.jsx)("div",{className:"flex-1",children:(0,a.jsx)(g,{isEditing:w[n],value:t,onChange:e=>S(n,e),onBlur:()=>{let e=[...w];e[n]=!1,N(e)},onClick:()=>{if(r)return;let e=[...w];e[n]=!0,N(e)},color:n===e.controlColumnIndex?"text-light-primary dark:text-dark-primary":"text-light-accent dark:text-dark-accent"})},n))}),(0,a.jsx)("div",{className:"w-16 flex-shrink-0 flex items-center justify-center font-medium",children:"Assign"}),(0,a.jsxs)("div",{className:"w-14 flex-shrink-0 flex justify-end items-center space-x-1 pr-1",children:[(0,a.jsx)(x,{content:"Undo (Cmd+Z / Ctrl+Z)",children:(0,a.jsx)(s.PJ.Undo,{className:"w-5 h-5 opacity-90 cursor-pointer text-light-text-secondary dark:text-dark-text-secondary hover:text-light-primary dark:hover:text-dark-primary transition-colors duration-200",onClick:f})}),(0,a.jsx)(x,{content:"Redo (Cmd+Shift+Z / Ctrl+Y)",children:(0,a.jsx)(s.PJ.Redo,{className:"w-5 h-5 opacity-90 cursor-pointer text-light-text-secondary dark:text-dark-text-secondary hover:text-light-primary dark:hover:text-dark-primary transition-colors duration-200",onClick:k})})]})]}),(0,a.jsx)("div",{className:"max-h-[60vh] overflow-y-auto divide-y divide-light-background-tertiary dark:divide-dark-background-tertiary",children:M}),(0,a.jsx)(m,{onApply:t=>{r||l({...e,rows:e.rows.map((r,a)=>{if(a===e.rows.length-1)return r;let n=[...r.data],i=r.assignment,s=1-i;if(null!==n[i]){let e=n[i];n[s]=e+(0===i?t:-t)}else if(null!==n[s]){let e=n[s];n[i]=e+(0===i?-t:t)}return{...r,data:n}})})}})]})]})}},1246:function(e,t,r){"use strict";r.d(t,{PJ:function(){return l}});var a=r(7437);r(2265);var n=r(1448),i=r.n(n);let s=e=>{let{size:t=5,color:r="currentColor",className:n="",onClick:i,children:s,...l}=e;return(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"h-".concat(t," w-").concat(t," ").concat(n),onClick:i,...l,children:s})};s.propTypes={size:i().number,color:i().string,className:i().string,onClick:i().func};let l={Undo:e=>(0,a.jsxs)(s,{viewBox:"0 0 24 24",...e,children:[(0,a.jsx)("path",{d:"M9 14L4 9L9 4"}),(0,a.jsx)("path",{d:"M4 9H15C18.3137 9 21 11.6863 21 15C21 18.3137 18.3137 21 15 21H12"})]}),Redo:e=>(0,a.jsxs)(s,{viewBox:"0 0 24 24",...e,children:[(0,a.jsx)("path",{d:"M15 14L20 9L15 4"}),(0,a.jsx)("path",{d:"M20 9H9C5.68629 9 3 11.6863 3 15C3 18.3137 5.68629 21 9 21H12"})]}),Expand:e=>(0,a.jsxs)(s,{viewBox:"0 0 24 24",...e,children:[(0,a.jsx)("path",{d:"M18 9L12 3L6 9"}),(0,a.jsx)("path",{d:"M18 15L12 21L6 15"})]}),Collapse:e=>(0,a.jsxs)(s,{viewBox:"0 0 24 24",...e,children:[(0,a.jsx)("path",{d:"M18 4L12 10L6 4"}),(0,a.jsx)("path",{d:"M18 20L12 14L6 20"})]}),Close:e=>(0,a.jsx)(s,{viewBox:"0 0 24 24",...e,children:(0,a.jsx)("path",{d:"M18 6L6 18M6 6l12 12"})}),Add:e=>(0,a.jsx)(s,{viewBox:"0 0 24 24",...e,children:(0,a.jsx)("path",{d:"M12 5v14M5 12h14"})}),Moon:e=>(0,a.jsx)(s,{viewBox:"0 0 24 24",...e,children:(0,a.jsx)("path",{d:"M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"})}),Sun:e=>(0,a.jsxs)(s,{viewBox:"0 0 24 24",...e,children:[(0,a.jsx)("circle",{cx:"12",cy:"12",r:"5"}),(0,a.jsx)("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),(0,a.jsx)("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),(0,a.jsx)("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),(0,a.jsx)("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),(0,a.jsx)("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),(0,a.jsx)("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),(0,a.jsx)("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),(0,a.jsx)("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]}),Upload:e=>(0,a.jsx)(s,{viewBox:"0 0 24 24",...e,children:(0,a.jsx)("path",{d:"M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12"})}),MagicWand:e=>(0,a.jsx)(s,{viewBox:"0 0 24 24",...e,children:(0,a.jsx)("path",{d:"M15 4V2M15 16v-2M8 9h2M20 9h2M17.8 11.8L19 13M17.8 6.2L19 5M3 21l9-9M12.2 6.2L11 5"})}),Edit:e=>(0,a.jsxs)(s,{viewBox:"0 0 24 24",...e,children:[(0,a.jsx)("path",{d:"M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"}),(0,a.jsx)("path",{d:"M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"})]}),Cancel:e=>(0,a.jsxs)(s,{viewBox:"0 0 24 24",...e,children:[(0,a.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,a.jsx)("line",{x1:"4.93",y1:"4.93",x2:"19.07",y2:"19.07"})]}),Flask:e=>(0,a.jsxs)(s,{viewBox:"0 0 24 24",...e,children:[(0,a.jsx)("path",{d:"M6 22a2 2 0 002 2h8a2 2 0 002-2l-3-16H9L6 22z"}),(0,a.jsx)("path",{d:"M9 2v3h6V2H9z"})]}),Play:e=>(0,a.jsx)(s,{viewBox:"0 0 24 24",...e,children:(0,a.jsx)("polygon",{points:"5 3 19 12 5 21 5 3"})}),Pause:e=>(0,a.jsxs)(s,{viewBox:"0 0 24 24",...e,children:[(0,a.jsx)("rect",{x:"6",y:"4",width:"4",height:"16"}),(0,a.jsx)("rect",{x:"14",y:"4",width:"4",height:"16"})]}),Continue:e=>(0,a.jsxs)(s,{viewBox:"0 0 24 24",...e,children:[(0,a.jsx)("rect",{x:"8",y:"4",width:"3",height:"16"}),(0,a.jsx)("polygon",{points:"15 4 23 12 15 20 15 4"})]}),Clear:e=>(0,a.jsxs)(s,{viewBox:"0 0 24 24",...e,children:[(0,a.jsx)("path",{d:"M3 6h18"}),(0,a.jsx)("path",{d:"M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"}),(0,a.jsx)("line",{x1:"10",y1:"11",x2:"10",y2:"17"}),(0,a.jsx)("line",{x1:"14",y1:"11",x2:"14",y2:"17"})]}),RewindPlay:e=>(0,a.jsxs)(s,{viewBox:"0 0 24 24",...e,children:[(0,a.jsx)("polygon",{points:"8 7 16 12 8 17 8 7"}),(0,a.jsx)("path",{d:"M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10c4.04 0 7.54-2.4 9.13-5.85",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"}),(0,a.jsx)("polygon",{points:"22 12 19 8.5 19 15.5"})]})}},9987:function(e,t,r){"use strict";r.d(t,{default:function(){return u}});var a=r(7437),n=r(2265),i=r(7462),s=r(9251),l=r(1246),o=r(7818),c=r(630);let d=(0,o.default)(()=>Promise.all([r.e(934),r.e(29)]).then(r.bind(r,2008)),{loadableGenerated:{webpack:()=>[2008]},ssr:!1});function u(){let{simulationResults:e,isSimulating:t,pValue:r,simulationSpeed:o,setSimulationSpeed:u,totalSimulations:x,setTotalSimulations:h,selectedTestStatistic:g,setSelectedTestStatistic:m,observedStatistic:p,simulationActions:f,pValueType:k,setPValueType:b}=(0,i.N)(),{theme:y}=(0,c.F)(),j=(0,n.useCallback)((e,t,r)=>{let a=Math.min(...e,t)-1,n=Math.max(...e,t)+1,i=(n-a)/20,s=Math.max(...Object.values(e.reduce((e,t)=>{let r=Math.floor((t-a)/i);return e[r]=(e[r]||0)+1,e},{})),0);return[{x:e,type:"histogram",marker:{color:"light"===r?"rgba(66, 135, 245, 0.6)":"rgba(102, 187, 255, 0.6)",line:{color:"light"===r?"rgba(66, 135, 245, 1)":"rgba(102, 187, 255, 1)",width:1}},xbins:{start:a,end:n,size:i},name:"Simulated Differences"},{x:[t,t],y:[0,s+1],type:"scatter",mode:"lines",line:{color:"light"===r?"rgba(255, 0, 0, 0.7)":"rgba(255, 102, 102, 0.7)",width:2},name:"Observed Difference"}]},[]),v={xaxis:{title:s.Fb[g].name,tickmode:"auto",nticks:10,tickfont:{color:"light"===y?"black":"white"},titlefont:{color:"light"===y?"black":"white"}},yaxis:{title:"Frequency",tickmode:"auto",nticks:10,tickfont:{color:"light"===y?"black":"white"},titlefont:{color:"light"===y?"black":"white"}},bargap:.05,showlegend:!0,legend:{x:.7,y:1,font:{color:"light"===y?"black":"white"}},paper_bgcolor:"rgba(0,0,0,0)",plot_bgcolor:"rgba(0,0,0,0)",margin:{l:45,r:35,b:35,t:0},autosize:!0},w=j(e?e.map(e=>e.getTestStatistic(g)):[],p||0,y),{icon:N,text:C}=t?{icon:(0,a.jsx)(l.PJ.Pause,{size:20}),text:"Pause"}:e&&0!==e.length?e.length<x?{icon:(0,a.jsx)(l.PJ.Continue,{size:20}),text:"Continue"}:{icon:(0,a.jsx)(l.PJ.RewindPlay,{size:20}),text:"Restart"}:{icon:(0,a.jsx)(l.PJ.Play,{size:20}),text:"Play"},S=e=>{let{title:t,value:r}=e;return(0,a.jsxs)("div",{className:"bg-light-background-secondary dark:bg-dark-background-tertiary p-3 rounded-lg",children:[(0,a.jsx)("h4",{className:"text-sm font-semibold text-light-text-secondary dark:text-dark-text-secondary mb-1",children:t}),(0,a.jsx)("p",{className:"text-m font-bold text-light-text-primary dark:text-dark-text-primary",children:r})]})};return(0,a.jsxs)("div",{className:"text-light-text-primary dark:text-dark-text-primary p-0",children:[(0,a.jsx)("div",{className:"mb-4",style:{width:"100%",height:"60vh"},children:(0,a.jsx)(d,{data:w,layout:v,config:{responsive:!0},style:{width:"100%",height:"100%"}})}),(0,a.jsxs)("div",{className:"p-4 bg-light-background-secondary dark:bg-dark-background-secondary rounded-lg",children:[(0,a.jsxs)("div",{className:"space-y-4",children:[(0,a.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[(0,a.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,a.jsx)("label",{htmlFor:"numTrials",className:"font-semibold whitespace-nowrap",children:"Number of trials:"}),(0,a.jsx)("input",{id:"numTrials",type:"number",value:x,onChange:e=>h(Math.max(0,parseInt(e.target.value))),className:"flex-grow border w-full rounded px-3 py-2 text-light-text-primary dark:text-dark-text-primary bg-light-background dark:bg-dark-background focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary"})]}),(0,a.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,a.jsx)("label",{htmlFor:"simulationSpeed",className:"font-semibold whitespace-nowrap",children:"Speed:"}),(0,a.jsx)("input",{id:"simulationSpeed",type:"range",min:"1",max:"100",value:o,onChange:e=>u(parseInt(e.target.value)),className:"flex-grow h-2 bg-light-background-tertiary dark:bg-dark-background-tertiary rounded-lg appearance-none cursor-pointer",title:"".concat(o,"%")})]})]}),(0,a.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[(0,a.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,a.jsx)("label",{htmlFor:"testStatistic",className:"font-semibold whitespace-nowrap",children:"Test Statistic:"}),(0,a.jsx)("select",{id:"testStatistic",value:g,onChange:e=>m(e.target.value),className:"flex-grow border w-full rounded px-3 py-2 text-light-text-primary dark:text-dark-text-primary bg-light-background dark:bg-dark-background focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary",children:Object.entries(s.Fb).map(e=>{let[t,{name:r}]=e;return(0,a.jsx)("option",{value:t,children:r},t)})})]}),(0,a.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,a.jsx)("label",{htmlFor:"pValueType",className:"font-semibold whitespace-nowrap",children:"P-value Type:"}),(0,a.jsxs)("select",{id:"pValueType",value:k,onChange:e=>b(e.target.value),className:"flex-grow border rounded px-3 py-2 text-light-text-primary dark:text-dark-text-primary bg-light-background dark:bg-dark-background focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary",children:[(0,a.jsx)("option",{value:"two-tailed",children:"Two-tailed"}),(0,a.jsx)("option",{value:"left-tailed",children:"Left-tailed"}),(0,a.jsx)("option",{value:"right-tailed",children:"Right-tailed"})]})]})]}),(0,a.jsxs)("div",{className:"flex justify-between gap-4",children:[(0,a.jsxs)("button",{onClick:t?f.pauseSimulation:f.proceedSimulation,className:"flex-1 h-10 bg-light-primary dark:bg-dark-primary text-light-background dark:text-dark-background px-4 rounded hover:bg-light-primary-dark dark:hover:bg-dark-primary-light focus:outline-none focus:ring-2 focus:ring-light-primary-light dark:focus:ring-dark-primary-dark focus:ring-offset-2 flex items-center justify-center gap-2",children:[N,(0,a.jsx)("span",{children:C})]}),(0,a.jsxs)("button",{onClick:f.clearSimulationData,className:"flex-1 h-10 bg-light-background-tertiary dark:bg-dark-background-tertiary text-light-text-primary dark:text-dark-text-primary px-4 rounded hover:bg-light-background-secondary dark:hover:bg-dark-background-secondary focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary focus:ring-offset-2 flex items-center justify-center gap-2",children:[(0,a.jsx)(l.PJ.Clear,{size:20}),(0,a.jsx)("span",{children:"Clear"})]})]})]}),(0,a.jsxs)("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6",children:[(0,a.jsx)(S,{title:"Observed Statistic",value:null!==p?p.toFixed(4):"N/A"}),(0,a.jsx)(S,{title:"P-value",value:null!==r?r.toFixed(4):"N/A"}),(0,a.jsx)(S,{title:"Current Progress",value:"".concat(e?e.length:0," / ").concat(x)})]})]})]})}},630:function(e,t,r){"use strict";r.d(t,{F:function(){return s},ThemeProvider:function(){return l}});var a=r(7437),n=r(2265);let i=(0,n.createContext)({theme:"dark",toggleTheme:()=>{}}),s=()=>(0,n.useContext)(i);function l(e){let{children:t}=e,[r,s]=(0,n.useState)("dark");return(0,n.useEffect)(()=>{let e=localStorage.getItem("theme");e&&s(e)},[]),(0,n.useEffect)(()=>{document.documentElement.classList.toggle("dark","dark"===r),localStorage.setItem("theme",r)},[r]),(0,a.jsx)(i.Provider,{value:{theme:r,toggleTheme:()=>{s(e=>"light"===e?"dark":"light")}},children:t})}},7462:function(e,t,r){"use strict";r.d(t,{N:function(){return k},SimulationProvider:function(){return f}});var a=r(7437),n=r(2265),i=r(9251);class s{getTestStatistic(e){return void 0===this._testStatistics[e]&&(this._testStatistics[e]=i.Fb[e].function(this.rows)),this._testStatistics[e]}constructor(e,t={}){this.rows=e,this._testStatistics=t}}let l=(0,n.createContext)(void 0),o=e=>e>=1&&e<=100,c=e=>Object.values(i.aY).includes(e),d=e=>e>=1&&e<=1e4,u=e=>["two-tailed","left-tailed","right-tailed"].includes(e),x=(e,t)=>r=>{e(e=>{let a="function"==typeof r?r(e):r;return t(a)?a:e})},h=(e,t)=>({data:Array(e).fill(null),assignment:t}),g=e=>{let t=[...e];for(let e=t.length-1;e>0;e--){let r=Math.floor(Math.random()*(e+1));[t[e],t[r]]=[t[r],t[e]]}return t},m=(e,t,r,a)=>{let n=t.length,i=0;switch(a){case"two-tailed":i=t.filter(t=>Math.abs(t.getTestStatistic(r))>=Math.abs(e)).length;break;case"left-tailed":i=t.filter(t=>t.getTestStatistic(r)<=e).length;break;case"right-tailed":i=t.filter(t=>t.getTestStatistic(r)>=e).length}return i/n},p=e=>e.slice(0,-1).filter(e=>e.data.every(e=>null!==e));function f(e){let{children:t}=e,[r,f]=(0,n.useState)({rows:[h(2,0)],controlColumnIndex:1,columnNames:["Treatment","Control"]}),[k,b]=(0,n.useState)(50),[y,j]=(0,n.useState)(i.aY.DifferenceInMeans),[v,w]=(0,n.useState)(1e3),[N,C]=(0,n.useState)("two-tailed"),[S,M]=(0,n.useState)(null),[P,E]=function(e){let[t,r]=(0,n.useState)(e),a=(0,n.useRef)(null),i=(0,n.useCallback)(e=>new Promise(t=>{r(r=>{let n="function"==typeof e?e(r):e;return a.current=()=>t(n),n})}),[]);return(0,n.useEffect)(()=>{a.current&&(a.current(t),a.current=null)},[t]),[t,i]}(!1),[L,T]=(0,n.useState)(null),[B,J]=(0,n.useState)(null),[A,z]=(0,n.useState)([]),[R,F]=(0,n.useState)([]),I=x(b,o),O=x(j,c),_=x(w,d),D=x(C,u),H=(0,n.useRef)(null),U=(0,n.useRef)(k);(0,n.useEffect)(()=>{U.current=k},[k]),(0,n.useEffect)(()=>{let e=p(r.rows),t=i.Fb[y].function(e);J(t),S&&T(m(t,S,y,N))},[r,y,N,S]);let V=(0,n.useCallback)(e=>{f(t=>{let r="function"==typeof e?e(t):e;return JSON.stringify(t)!==JSON.stringify(r)&&(z(e=>[...e,t]),F([])),r})},[]),Y=(0,n.useCallback)(()=>{V(e=>({...e,rows:[...e.rows,h(e.columnNames.length,0)]}))},[]),W=(0,n.useCallback)(e=>{V(t=>({...t,rows:t.rows.filter((t,r)=>r!==e)}))},[]),Z=(0,n.useCallback)((e,t,r)=>{V(a=>{let n=[...a.rows],i=e===a.rows.length-1&&null!==r;return JSON.stringify(n[e].data[t])!==JSON.stringify(r)?(n[e]={...n[e],assignment:i?t:n[e].assignment,data:[...n[e].data.slice(0,t),r,...n[e].data.slice(t+1)]},i&&n.push(h(a.columnNames.length,0)),{...a,rows:n}):a})},[]),q=(0,n.useCallback)(e=>{V(t=>{let r=t.rows.map((r,a)=>a===e?{...r,assignment:(r.assignment+1)%t.columnNames.length}:r);return e===t.rows.length-1&&r.push(h(t.columnNames.length,0)),{...t,rows:r}})},[]),G=(0,n.useCallback)(e=>{V(t=>({...t,controlColumnIndex:e}))},[]),K=(0,n.useCallback)((e,t)=>{V(r=>({...r,columnNames:r.columnNames.map((r,a)=>a===e?t:r)}))},[]),Q=(0,n.useCallback)(()=>{if(A.length>0){let e=[...A],t=e.pop();z(e),F(e=>[r,...e]),f(t)}},[A,r]),X=(0,n.useCallback)(()=>{if(R.length>0){let e=[...R],t=e.shift();F(e),z(e=>[...e,r]),f(t)}},[R,r]),$=(0,n.useCallback)(e=>{let t=p(e),r=g(t.map(e=>e.assignment));return new s(t.map((e,t)=>({...e,assignment:r[t]})))},[]),ee=(0,n.useCallback)(async(e,t,r,a,n)=>{let i=[...r];for(let r=i.length;r<t;r++){if(a.aborted)throw Error("Simulation aborted");let t=$(e);i.push(t);let r=m(B,i,y,N);n(i,r),await new Promise(e=>setTimeout(e,1700-10*U.current))}return i},[$,N,B,y]),et=(0,n.useCallback)(async()=>{if(S&&S.length>=v&&(M(null),T(null)),P)return;await E(!0);let e=S||[],t=new AbortController;H.current=t;try{let a=await ee(r.rows,v,e,t.signal,(e,t)=>{M(e),T(t)});M(a);let n=m(B,a,y,N);T(n)}catch(e){e instanceof Error?"Simulation aborted"!==e.message&&console.error("Simulation error:",e.message):console.error("An unknown error occurred during simulation")}finally{await E(!1),H.current=null}},[P,r.rows,v,ee,N,B,S,y,E,M,T,m]),er=(0,n.useCallback)(async()=>{H.current&&(H.current.abort(),H.current=null),await E(!1)},[E]),ea=(0,n.useCallback)(()=>{M(null),T(null)},[M,T]);return(0,a.jsx)(l.Provider,{value:{userData:r,simulationSpeed:k,setSimulationSpeed:I,selectedTestStatistic:y,setSelectedTestStatistic:O,totalSimulations:v,setTotalSimulations:_,pValueType:N,setPValueType:D,simulationResults:S,isSimulating:P,pValue:L,observedStatistic:B,dataActions:{setUserData:V,addRow:Y,deleteRow:W,updateCell:Z,toggleAssignment:q,setControlColumn:G,renameColumn:K,undo:Q,redo:X},simulationActions:{proceedSimulation:et,pauseSimulation:er,clearSimulationData:ea}},children:t})}let k=()=>{let e=(0,n.useContext)(l);if(void 0===e)throw Error("useSimulationContext must be used within a SimulationProvider");return e}},9251:function(e,t,r){"use strict";r.d(t,{Fb:function(){return l},aY:function(){return n}});var a,n,i=r(8);(a=n||(n={})).DifferenceInMeans="differenceInMeans",a.WilcoxonRankSum="wilcoxonRankSum";let s=e=>{let t=e.map((e,t)=>({value:e,index:t})).sort((e,t)=>e.value-t.value),r=Array(e.length),a=1;for(let e=0;e<t.length;e++)e>0&&t[e].value!==t[e-1].value&&(a=e+1),r[t[e].index]=a;return r},l={differenceInMeans:{name:"Difference in Means",function:e=>{if(!e||0===e.length)return 0;let t=Object.values(e.reduce((e,t)=>{let r=t.data[t.assignment];return"number"==typeof r&&(e[t.assignment]||(e[t.assignment]=[]),e[t.assignment].push(r)),e},{})).map(e=>e.length>0?e.reduce((e,t)=>e+t,0)/e.length:0);return t.length>=2?t[1]-t[0]:0},supportsMultipleTreatments:!1},wilcoxonRankSum:{name:"Wilcoxon Rank-Sum",function:e=>{if(!e||0===e.length)return 0;let t=Object.values(e.reduce((e,t)=>{let r=t.data[0];return"number"==typeof r&&(e[t.assignment]||(e[t.assignment]=[]),e[t.assignment].push(r)),e},{}));if(2!==t.length)throw Error("Wilcoxon rank-sum test requires exactly two groups.");let[r,a]=t,n=s([...r,...a]),l=(0,i.Smz)(n.slice(0,r.length)),o=r.length,c=a.length,d=l-o*(o+1)/2;return Math.min(d,o*c-d)},supportsMultipleTreatments:!1}}}},function(e){e.O(0,[618,971,23,744],function(){return e(e.s=2554)}),_N_E=e.O()}]);