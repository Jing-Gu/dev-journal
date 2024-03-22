"use strict";(self.webpackChunkdev_journal=self.webpackChunkdev_journal||[]).push([[777],{1597:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=t(4848),s=t(8453);const i={},a="Infrastructure",o={id:"web-technology/infrastructure",title:"Infrastructure",description:"What is infrastructure? In terms of a community, we need roads, airports, energy, utilities, and railways, among other things, to live efficiently. There are also certain operations and regulations that tie these facilities together. All of those are included in the infrastructure.",source:"@site/docs/web-technology/infrastructure.md",sourceDirName:"web-technology",slug:"/web-technology/infrastructure",permalink:"/dev-journal/web-technology/infrastructure",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docuSidebar",previous:{title:"Frontend and backend communication in a nutshell",permalink:"/dev-journal/web-technology/fe-be-communication"},next:{title:"Server-side rendering",permalink:"/dev-journal/web-technology/server-side-rendering"}},l={},c=[{value:"Internet",id:"internet",level:2},{value:"How computers communicate over the Internet",id:"how-computers-communicate-over-the-internet",level:3},{value:"Use IP addresses to access websites",id:"use-ip-addresses-to-access-websites",level:3},{value:"Use DNS to access websites",id:"use-dns-to-access-websites",level:3},{value:"Localhost",id:"localhost",level:2},{value:"Setup a server with Node.js",id:"setup-a-server-with-nodejs",level:3},{value:"On-premise infrastructure vs IaaS",id:"on-premise-infrastructure-vs-iaas",level:2},{value:"On-premise infrastructure",id:"on-premise-infrastructure",level:3},{value:"IaaS",id:"iaas",level:3},{value:"Why companies are moving to cloud?",id:"why-companies-are-moving-to-cloud",level:3},{value:"Add additional servers to infrastructure",id:"add-additional-servers-to-infrastructure",level:2},{value:"Load balancer",id:"load-balancer",level:3},{value:"How does a loadbalancer work",id:"how-does-a-loadbalancer-work",level:3},{value:"Deployment",id:"deployment",level:2},{value:"What is deployment",id:"what-is-deployment",level:3},{value:"Deployment environment",id:"deployment-environment",level:3},{value:"Development",id:"development",level:4},{value:"Staging",id:"staging",level:4},{value:"Production",id:"production",level:4},{value:"Containerization",id:"containerization",level:2},{value:"Docker",id:"docker",level:3},{value:"Docker vs VM",id:"docker-vs-vm",level:3},{value:"Automated pipelines",id:"automated-pipelines",level:2}];function d(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"infrastructure",children:"Infrastructure"}),"\n",(0,r.jsx)(n.p,{children:"What is infrastructure? In terms of a community, we need roads, airports, energy, utilities, and railways, among other things, to live efficiently. There are also certain operations and regulations that tie these facilities together. All of those are included in the infrastructure."}),"\n",(0,r.jsxs)(n.p,{children:["Same for the computers, there are a variety of tools and processes that allow computers to talk to each other across the world. ",(0,r.jsx)(n.strong,{children:"IT infrastructure includes all the hardware, software, networks, and facilities used to develop, deliver, and support a given application or information technology service"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"internet",children:"Internet"}),"\n",(0,r.jsx)(n.h3,{id:"how-computers-communicate-over-the-internet",children:"How computers communicate over the Internet"}),"\n",(0,r.jsxs)(n.p,{children:["The internet allows computers to communicate with each other. When a computer requests information, we say the computer is a ",(0,r.jsx)(n.strong,{children:"client"}),". When a computer sends information based on a request, we say the computer is a ",(0,r.jsx)(n.strong,{children:"server"}),", since this computer waits for requests and serves information to its clients."]}),"\n",(0,r.jsx)(n.p,{children:"The internet connects computers through physical cables, including telephone wires, TV cables, and fiber-optic cables. Wireless connections such as wifi rely on these physical cables so that we can access the internet. When we send and receive requests on our computers, it ultimately comes down to these wires. These wires connect the clients with the servers in the data centers."}),"\n",(0,r.jsx)(n.h3,{id:"use-ip-addresses-to-access-websites",children:"Use IP addresses to access websites"}),"\n",(0,r.jsx)(n.p,{children:"Each computer has an identifier when it requests and sends information over the Internet. This identifier is called an IP address, or Internet Protocol Address. IP address is unique so that every computer on the Internet knows exactly where to find every other machine."}),"\n",(0,r.jsxs)(n.p,{children:["Both ",(0,r.jsx)(n.strong,{children:"IPv4"})," and ",(0,r.jsx)(n.strong,{children:"IPv6"})," are internet identifiers for a given computer. To request information from another computer on the Internet, we can simply use its IP address. Test with ",(0,r.jsx)(n.code,{children:"ping"})," command, we can find out if we can connect to the server and see the roundtrip time between our computer and a given server."]}),"\n",(0,r.jsx)(n.h3,{id:"use-dns-to-access-websites",children:"Use DNS to access websites"}),"\n",(0,r.jsx)(n.p,{children:"Domain name is another identifier to access websites, similar to an IP address. Domain name and IP address are linked by a system called DNS (Domain Name Service) that enables a computer to look up an IP address for any given website or domain name."}),"\n",(0,r.jsx)(n.p,{children:"When we access a website using a domain name, our computer will send out a request to a DNS and the DNS will resolve the domain name to an IP address. The server will then send a response back to our computer with the IP address so that our computer can send its initial request to the website using the appropriate IP address."}),"\n",(0,r.jsx)(n.h2,{id:"localhost",children:"Localhost"}),"\n",(0,r.jsx)(n.p,{children:"A server and a client can be together in one computer. We can create a server on our computer and ping the IP address of this server on our computer."}),"\n",(0,r.jsxs)(n.p,{children:["When we hit the IP address ",(0,r.jsx)(n.code,{children:"127.0.0.1"})," or its equivalent in IPv6, we are communicating with our own computer. No one else can access ",(0,r.jsx)(n.code,{children:"127.0.0.1"})," on our machine, except our machine, which is why some refer to ",(0,r.jsx)(n.code,{children:"localhost"})," as a loop back. Think of localhost as a domain name for our own machine, except our machine is the only one that can access it."]}),"\n",(0,r.jsx)(n.h3,{id:"setup-a-server-with-nodejs",children:"Setup a server with Node.js"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'var http = require(\'http\');\n\nvar server = http.createServer((req, res) => {\n  res.writeHead(200, {"Content-Type": "text/plain"});\n  res.end("Hello from Node!");\n})\n'})}),"\n",(0,r.jsxs)(n.p,{children:["The server is created, but it can't hear any requests uet, because we haven't opened up a ",(0,r.jsx)(n.strong,{children:"port"})," for the server to receive requests. ",(0,r.jsx)(n.strong,{children:"A server listens for incoming traffic on a specific port"}),", and this port is just a number. Traffic comes into ports and traffic goes out of ports."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"server.listen(3000);\n"})}),"\n",(0,r.jsx)(n.h2,{id:"on-premise-infrastructure-vs-iaas",children:"On-premise infrastructure vs IaaS"}),"\n",(0,r.jsx)(n.p,{children:"When creating infrastructure to run our application on a remote server, we have two options: on-premise infrastructure or infrastructure as a service (IaaS)."}),"\n",(0,r.jsx)(n.h3,{id:"on-premise-infrastructure",children:"On-premise infrastructure"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"We own and maintain the remote servers for applications to run."}),"\n",(0,r.jsx)(n.li,{children:"We are in charge of keeping the hardware up to date and ensuring our servers stay up and running."}),"\n",(0,r.jsx)(n.li,{children:"Need an internal support team to manage the complicated on-premise infrastructure solution."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"iaas",children:"IaaS"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Hardware becomes virtualized, elsewhere in the world"}),"\n",(0,r.jsx)(n.li,{children:"A Cloud provider holds our infrastructure components, such as servers, storage and network hardware"}),"\n",(0,r.jsx)(n.li,{children:"IaaS examples: Amazon Web Services, the Google Cloud Platform and Azure."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"why-companies-are-moving-to-cloud",children:"Why companies are moving to cloud?"}),"\n",(0,r.jsx)(n.p,{children:"IaaS is much more scalable and has lower costs. If we want to scale with an on-premise solution, we have to buy more hardware and set up more servers. With a Cloud provider we can scale up or down based on how much traffic we are getting, easily assign or unassign another server."}),"\n",(0,r.jsx)(n.p,{children:"With on-premise infrastructure, servers are on site, if there is a local network outage, these servers are affected and all applications go down. However, servers from a Cloud provider are located all throughout the world, it's much less likely for all of these servers to have outages at the same time, encouraging high availability."}),"\n",(0,r.jsx)(n.h2,{id:"add-additional-servers-to-infrastructure",children:"Add additional servers to infrastructure"}),"\n",(0,r.jsxs)(n.p,{children:["Depending on how many users are accessing our application, we may need more servers to serve clients. To add more servers, we'll need a load ",(0,r.jsx)(n.strong,{children:"balancer"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"load-balancer",children:"Load balancer"}),"\n",(0,r.jsx)(n.p,{children:"A load balancer helps distributing the traffic between servers, so one server isn't overloaded. These servers can be in a single availability zone or across multiple availability zones, but these servers should be in the same region, and the load balancer will be in that region as well. That means if we have servers in US West 2 that we want to use a load balancer with, the load balancer should also be in US West 2. Or if we have servers in two different regions, we'll need two load balancers."}),"\n",(0,r.jsx)(n.h3,{id:"how-does-a-loadbalancer-work",children:"How does a loadbalancer work"}),"\n",(0,r.jsxs)(n.p,{children:["A load balancer has two main components, a ",(0,r.jsx)(n.strong,{children:"listener"})," and a ",(0,r.jsx)(n.strong,{children:"target group"}),". The listener on the load balancer listens for requests from clients on a specific port. Common listeners run on Port 80 for HTTP traffic and Port 443 for HTTPS traffic. When a listener receives traffic, the listener forwards the request to a target group. Think of a target group as an assigned set of servers we want to respond to the request. The target group is used to route the request to one or more of these registered servers. When a server is selected by a target group, the server receives the request and sends a response back to the client. The load balancer provides an additional layer between the client traffic and servers."]}),"\n",(0,r.jsx)(n.p,{children:"The load balancer is itself an EC2, but it just has the special job of listening for requests using a listener, and forwarding it to a registered server using a target group. This forwarding is typically done on a different port than the port used for incoming traffic on the load balancer."}),"\n",(0,r.jsx)(n.h2,{id:"deployment",children:"Deployment"}),"\n",(0,r.jsx)(n.h3,{id:"what-is-deployment",children:"What is deployment"}),"\n",(0,r.jsxs)(n.p,{children:["When we build an app at the beginning, it's only accessible on our own computer, local dev environment, aka ",(0,r.jsx)(n.strong,{children:"localhost"}),". When working on localhost, our code lives on our computers and is accessed only by us."]}),"\n",(0,r.jsxs)(n.p,{children:["If we want to release the local app to users, we need to make it available on a public computer, aka ",(0,r.jsx)(n.strong,{children:"server"}),". Those web servers keep our code, run it and deliver pages to anyone who requests them. The process of moving the code from local computer to the remote public host is called ",(0,r.jsx)(n.strong,{children:"deployment"}),", which eventually allows others users across the Internet to access the app."]}),"\n",(0,r.jsx)(n.h3,{id:"deployment-environment",children:"Deployment environment"}),"\n",(0,r.jsx)(n.p,{children:"The main three environments are: development, staging, and production."}),"\n",(0,r.jsx)(n.h4,{id:"development",children:"Development"}),"\n",(0,r.jsx)(n.p,{children:"Usually short as dev,this is the environment on our computer, where all of our commits and branches live. Nothing we do in the dev environment affects what users currently see when they pull up the website. This is just for us and the other web devs to see how new features will work and to try out improvements. We don't want to release our code before we make sure it works locally at least. The development environment is usually configured differently from the environment that users work in."}),"\n",(0,r.jsx)(n.h4,{id:"staging",children:"Staging"}),"\n",(0,r.jsx)(n.p,{children:"The staging environment is as similar to the production environment as it can be. We'll have all of the code on a server this time instead of a local machine. It'll connect to as many services as it can without touching the production environment."}),"\n",(0,r.jsx)(n.p,{children:"All of the hard core testing happens here. Any database migrations will be tested here and so will any configuration changes. When we have to do major version updates, the staging environment helps us find and fix any issues that come up too."}),"\n",(0,r.jsx)(n.p,{children:"If we have a client, this is where we would be able to give them a demo of how things work and look. Think of the staging environment as the place where we do the last checks and polish things up."}),"\n",(0,r.jsx)(n.h4,{id:"production",children:"Production"}),"\n",(0,r.jsx)(n.p,{children:"Usually short as prod, this is where users access the final code after all of the updates and testing. Of all the environments, this one is the most important as this is where companies make their money so we can't have any crippling mistakes here. That's why we have to go through the other two environments with all of the testing first. Once we're in production, any bugs or errors that remain will be found by a user and we can only hope it's something minor."}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"A single page application is super-simple to deploy if compared to more traditional server-side rendered applications: it is really just one index.html file, with a CSS bundle and a Javascript bundle."})}),"\n",(0,r.jsx)(n.h2,{id:"containerization",children:"Containerization"}),"\n",(0,r.jsx)(n.p,{children:"Every application requires dependencies and special configurations, but these can be complicated to set up as code moves through different environments and platforms. Containers are great tools to separate application logic and dependencies with deployment and server management."}),"\n",(0,r.jsx)(n.p,{children:"Containerization involves bundling an application together with all of its related configuration files, dependencies and libraries required for it to run. With this bundled container, the application can run efficiently and bug-free across different environments."}),"\n",(0,r.jsx)(n.h3,{id:"docker",children:"Docker"}),"\n",(0,r.jsx)(n.p,{children:"One common containerization ecosystem is called Docker. To create a container, we need a Dockerfile, which defines the libraries, dependencies and configurations required by the application as well as a link to the current app version. In the Dockerfile, each of their requirements is listed as a step to produce the Docker image."}),"\n",(0,r.jsx)(n.h3,{id:"docker-vs-vm",children:"Docker vs VM"}),"\n",(0,r.jsx)(n.p,{children:"What makes Docker different from virtual machine? We could have multiple applications in different containers running on the same OS. Virtual machines require a separate OS per application. Ultimately, containerization is great for distributed applications and microservices because each container is independent, preventing interdependencies, and a single point of failure."}),"\n",(0,r.jsx)(n.h2,{id:"automated-pipelines",children:"Automated pipelines"}),"\n",(0,r.jsx)(n.p,{children:"Pipelines automate certain steps of the deployment process, anything from running a series of tests of the application to building the docker image, to pushing the latest version of code to servers."}),"\n",(0,r.jsx)(n.p,{children:"A pipeline is made up of a series of steps, where each step is a command (e.g. docker build, npm install). Phases of the pipeline include: Source, Build, Test, and Deploy. In each phase, there're steps which contain one command or several commands such as: git push, Docker build, unit test, smoke test."}),"\n",(0,r.jsx)(n.p,{children:"Pipeline technologies examples are: Jenkins, CircleCI."})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var r=t(6540);const s={},i=r.createContext(s);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);