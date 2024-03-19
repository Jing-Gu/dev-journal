"use strict";(self.webpackChunkdev_journal=self.webpackChunkdev_journal||[]).push([[201],{3618:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var i=n(4848),a=n(8453);const o={sidebar_position:2},s="CSS Styling",r={id:"front-end/css-styling",title:"CSS Styling",description:"grid layout",source:"@site/docs/front-end/css-styling.md",sourceDirName:"front-end",slug:"/front-end/css-styling",permalink:"/dev-journal/front-end/css-styling",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docuSidebar",previous:{title:"Tailwind Quickcode",permalink:"/dev-journal/front-end/tailwind-quickcode"},next:{title:"Frontend and backend communication in a nutshell",permalink:"/dev-journal/web-technology/fe-be-communication"}},l={},c=[{value:"grid layout",id:"grid-layout",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"css-styling",children:"CSS Styling"}),"\n",(0,i.jsx)(t.h2,{id:"grid-layout",children:"grid layout"}),"\n",(0,i.jsx)(t.p,{children:"This is an all-purpose grid layout without media query, let the browser decides the layout based on the available space."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-css",children:"grid-template-columns: repeat(auto-fit, minmax(min(100%, 200px), 1fr));\n"})}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"repeat()"})," function is to repeat a certain pattern, such as ",(0,i.jsx)(t.code,{children:"auto-fit"}),", which instructs the browser to automatically adjust the number of columns based on the available space."]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"minmax()"})," function is particularly useful in responsive layouts, as it allows columns to grow and shrink dynamically based on the viewport size. The first parameter, ",(0,i.jsx)(t.code,{children:"min(100%, 200px)"}),", sets the minimum size of each column to be the maximum of 100% of the container width or 200px. This means that each column will be at least 200px wide, but they can grow larger if there's more space available. The second parameter, ",(0,i.jsx)(t.code,{children:"1fr"}),", instructs the browser to distribute any remaining space among the columns evenly, with each column taking up an equal share of the available space."]}),"\n",(0,i.jsx)(t.p,{children:"This flexible layout can be extremely useful when you have a tons of cards and you want them to flow like flex-wrap. Cards\u2019 contents may vary, but they will all have the same height in the grid. This is because the height of the grid rows will be determined by the content of the tallest item in each row."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://codepen.io/jing-gu/pen/RwOwMNJ",children:"See the codepen example"})})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>r});var i=n(6540);const a={},o=i.createContext(a);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);