"use strict";(self.webpackChunkdev_journal=self.webpackChunkdev_journal||[]).push([[228],{5071:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>n,metadata:()=>c,toc:()=>l});var i=r(4848),a=r(8453);const n={},o="Architecture patterns",c={id:"software/architecture-patterns",title:"Architecture patterns",description:"Applications lacking a formal architecture are generally tightly coupled, brittle, difficult to change, and without a clear vision or direction. Basic questions about deployment and maintenance are:",source:"@site/docs/software/architecture-patterns.md",sourceDirName:"software",slug:"/software/architecture-patterns",permalink:"/dev-journal/software/architecture-patterns",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docuSidebar",previous:{title:"Storage systems",permalink:"/dev-journal/hardware/storage"},next:{title:"Reactive programming",permalink:"/dev-journal/software/reactive-programming"}},s={},l=[{value:"Layered architecture",id:"layered-architecture",level:2},{value:"Microservices architecture",id:"microservices-architecture",level:2},{value:"Ways to implement microservices architecture",id:"ways-to-implement-microservices-architecture",level:3},{value:"Event-driven architecture",id:"event-driven-architecture",level:2}];function h(e){const t={h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"architecture-patterns",children:"Architecture patterns"}),"\n",(0,i.jsx)(t.p,{children:"Applications lacking a formal architecture are generally tightly coupled, brittle, difficult to change, and without a clear vision or direction. Basic questions about deployment and maintenance are:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Does the architecture scale?"}),"\n",(0,i.jsx)(t.li,{children:"What are the performance characteristics of the application?"}),"\n",(0,i.jsx)(t.li,{children:"How easily does the application respond to change?"}),"\n",(0,i.jsx)(t.li,{children:"What are the deployment characteristics of the application?"}),"\n",(0,i.jsx)(t.li,{children:"How responsive is the architecture?"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"We must always justify our architecture decisions, particularly when it comes to choosing a particular architecture pattern or approach."}),"\n",(0,i.jsx)(t.h2,{id:"layered-architecture",children:"Layered architecture"}),"\n",(0,i.jsxs)(t.p,{children:["Components within the layered architecture pattern are organized into horizontal layers, each layer performing a specific role within the application. Most layered architectures consist of four standard layers: ",(0,i.jsx)(t.strong,{children:"presentation, business, persistence, and database"}),". The business layer\nand persistence layer may be combined into a single business layer."]}),"\n",(0,i.jsxs)(t.p,{children:["One of the powerful features of the layered architecture pattern is the separation of concerns among components. Each layer is closed, means that as a request moves from layer to layer, it must go through the layer right below it to get to the next layer below that one. The reason why not allow the presentation layer direct access to either the persistence layer or database layer, is due to the concept ",(0,i.jsx)(t.strong,{children:"layers of isolation"}),", means that:"]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Changes made in one layer of the architecture generally don\u2019t impact or affect components in other layers: the change is isolated to the components within that layer."}),"\n",(0,i.jsx)(t.li,{children:"Each layer is independent of the other layers, thereby having little or no knowledge of the inner workings of other layers in the architecture."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The layered architecture pattern is a solid general-purpose pattern, making it a good starting point for most applications, particularly when we are not sure what architecture pattern is best suited for\nour application."}),"\n",(0,i.jsx)(t.h2,{id:"microservices-architecture",children:"Microservices architecture"}),"\n",(0,i.jsxs)(t.p,{children:["One concept of microservices architecture is the notion of ",(0,i.jsx)(t.strong,{children:"separately deployed units"}),", means that each component of the microservices architecture is deployed as a separate unit, allowing for easier deployment through an effective and streamlined delivery pipeline, increased scalability, and a high degree of application and component decoupling within the application."]}),"\n",(0,i.jsxs)(t.p,{children:["Another key concept within the microservices architecture pattern is that it is a ",(0,i.jsx)(t.strong,{children:"distributed architecture"}),", meaning that all the components within the architecture are fully decoupled from one other and accessed through some sort of remote access protocol (e.g.JMS, AMQP, REST, SOAP, RMI, etc)."]}),"\n",(0,i.jsx)(t.p,{children:"The microservices architecture style naturally evolved from two main sources: monolithic applications developed using the layered architecture pattern and distributed applications developed through the service-oriented architecture pattern. The evolutionary path from monolithic applications to a microservices architecture style was prompted primarily through the development of continuous delivery."}),"\n",(0,i.jsx)(t.h3,{id:"ways-to-implement-microservices-architecture",children:"Ways to implement microservices architecture"}),"\n",(0,i.jsx)(t.p,{children:"There are three main topologies: the API REST-based topology, application REST-based topology, and the centralized messaging topology."}),"\n",(0,i.jsx)(t.h2,{id:"event-driven-architecture",children:"Event-driven architecture"}),"\n",(0,i.jsx)(t.p,{children:"The event-driven architecture pattern is used to produce highly scalable applications. It is also highly adaptable and can be used for small applications and as well as large, complex ones. The event-driven\narchitecture is made up of highly decoupled, single-purpose event processing components that asynchronously receive and process events."})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>c});var i=r(6540);const a={},n=i.createContext(a);function o(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);