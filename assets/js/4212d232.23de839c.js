"use strict";(self.webpackChunkdev_journal=self.webpackChunkdev_journal||[]).push([[573],{6956:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var s=t(4848),r=t(8453);const o={},a="Frontend and backend communication in a nutshell",i={id:"web-technology/fe-be-communication",title:"Frontend and backend communication in a nutshell",description:"The FE and BE work together all for one purpose: user. They are made, so a user can access them. FE and BE make this possible by sending requests and answering by responses.",source:"@site/docs/web-technology/fe-be-communication.md",sourceDirName:"web-technology",slug:"/web-technology/fe-be-communication",permalink:"/dev-journal/web-technology/fe-be-communication",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docuSidebar",previous:{title:"Reactive programming",permalink:"/dev-journal/software/reactive-programming"},next:{title:"Infrastructure",permalink:"/dev-journal/web-technology/infrastructure"}},d={},c=[{value:"BE server",id:"be-server",level:2},{value:"FE browser",id:"fe-browser",level:2},{value:"What do FE and BE send to each other?",id:"what-do-fe-and-be-send-to-each-other",level:2},{value:"Analyze JSON",id:"analyze-json",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"frontend-and-backend-communication-in-a-nutshell",children:"Frontend and backend communication in a nutshell"}),"\n",(0,s.jsx)(n.p,{children:"The FE and BE work together all for one purpose: user. They are made, so a user can access them. FE and BE make this possible by sending requests and answering by responses."}),"\n",(0,s.jsx)(n.h2,{id:"be-server",children:"BE server"}),"\n",(0,s.jsx)(n.p,{children:"Backend code is built to be running on a server and it\u2019s never running on the user\u2019s machine.\nBackend is the invisible part, it receives requests and prepares data which is then transmitted back to the user\u2019s browser."}),"\n",(0,s.jsx)(n.h2,{id:"fe-browser",children:"FE browser"}),"\n",(0,s.jsx)(n.p,{children:"Frontend is the app that is intended to be used directly by users' browsers. It sends out HTTP requests, receives responses, processes the received data, and uses it to render a view."}),"\n",(0,s.jsx)(n.h2,{id:"what-do-fe-and-be-send-to-each-other",children:"What do FE and BE send to each other?"}),"\n",(0,s.jsx)(n.p,{children:"What FE sends could be:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"http request (without body)"}),"\n",(0,s.jsx)(n.li,{children:"form data"}),"\n",(0,s.jsx)(n.li,{children:"JSON-formatted data"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"What BE sends could be:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"html-formatted responses"}),"\n",(0,s.jsx)(n.li,{children:"static files (css, js, images...)"}),"\n",(0,s.jsx)(n.li,{children:"JSON-formatted data"}),"\n",(0,s.jsx)(n.li,{children:"no body at all, just a status code and header"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"analyze-json",children:"Analyze JSON"}),"\n",(0,s.jsxs)(n.p,{children:["We often receive long JSON responses from the server and need to translate the data to extract what we need. In order to see the data more clearly, check the network response or use ",(0,s.jsx)(n.code,{children:"JSON.stringify"})," function to convert the response data into a string and output into the console."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"console.log('success - data:' + JSON.stringify(data));\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var s=t(6540);const r={},o=s.createContext(r);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);