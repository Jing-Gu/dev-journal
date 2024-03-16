# Infrastructure
What is infrastructure? In terms of a community, we need roads, airports, energy, utilities, and railways, among other things, to live efficiently. There are also certain operations and regulations that tie these facilities together. All of those are included in the infrastructure.

Same for the computers, there are a variety of tools and processes that allow computers to talk to each other across the world. **IT infrastructure includes all the hardware, software, networks, and facilities used to develop, deliver, and support a given application or information technology service**.

## Internet
### How computers communicate over the Internet
The internet allows computers to communicate with each other. When a computer requests information, we say the computer is a **client**. When a computer sends information based on a request, we say the computer is a **server**, since this computer waits for requests and serves information to its clients.

The internet connects computers through physical cables, including telephone wires, TV cables, and fiber-optic cables. Wireless connections such as wifi rely on these physical cables so that we can access the internet. When we send and receive requests on our computers, it ultimately comes down to these wires. These wires connect the clients with the servers in the data centers.

### Use IP addresses to access websites
Each computer has an identifier when it requests and sends information over the Internet. This identifier is called an IP address, or Internet Protocol Address. IP address is unique so that every computer on the Internet knows exactly where to find every other machine.

Both **IPv4** and **IPv6** are internet identifiers for a given computer. To request information from another computer on the Internet, we can simply use its IP address. Test with `ping` command, we can find out if we can connect to the server and see the roundtrip time between our computer and a given server.

### Use DNS to access websites
Domain name is another identifier to access websites, similar to an IP address. Domain name and IP address are linked by a system called DNS (Domain Name Service) that enables a computer to look up an IP address for any given website or domain name.

When we access a website using a domain name, our computer will send out a request to a DNS and the DNS will resolve the domain name to an IP address. The server will then send a response back to our computer with the IP address so that our computer can send its initial request to the website using the appropriate IP address.

## Localhost
A server and a client can be together in one computer. We can create a server on our computer and ping the IP address of this server on our computer.

When we hit the IP address `127.0.0.1` or its equivalent in IPv6, we are communicating with our own computer. No one else can access `127.0.0.1` on our machine, except our machine, which is why some refer to `localhost` as a loop back. Think of localhost as a domain name for our own machine, except our machine is the only one that can access it.

### Setup a server with Node.js
```js
var http = require('http');

var server = http.createServer((req, res) => {
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.end("Hello from Node!");
})
```

The server is created, but it can't hear any requests uet, because we haven't opened up a **port** for the server to receive requests. **A server listens for incoming traffic on a specific port**, and this port is just a number. Traffic comes into ports and traffic goes out of ports.

```js
server.listen(3000);
```

## On-premise infrastructure vs IaaS
When creating infrastructure to run our application on a remote server, we have two options: on-premise infrastructure or infrastructure as a service (IaaS).

### On-premise infrastructure
- We own and maintain the remote servers for applications to run.
- We are in charge of keeping the hardware up to date and ensuring our servers stay up and running.
- Need an internal support team to manage the complicated on-premise infrastructure solution.

### IaaS
- Hardware becomes virtualized, elsewhere in the world
- A Cloud provider holds our infrastructure components, such as servers, storage and network hardware
- IaaS examples: Amazon Web Services, the Google Cloud Platform and Azure.

### Why companies are moving to cloud?
IaaS is much more scalable and has lower costs. If we want to scale with an on-premise solution, we have to buy more hardware and set up more servers. With a Cloud provider we can scale up or down based on how much traffic we are getting, easily assign or unassign another server.

With on-premise infrastructure, servers are on site, if there is a local network outage, these servers are affected and all applications go down. However, servers from a Cloud provider are located all throughout the world, it's much less likely for all of these servers to have outages at the same time, encouraging high availability.

## Add additional servers to infrastructure
Depending on how many users are accessing our application, we may need more servers to serve clients. To add more servers, we'll need a load **balancer**.

### Load balancer
A load balancer helps distributing the traffic between servers, so one server isn't overloaded. These servers can be in a single availability zone or across multiple availability zones, but these servers should be in the same region, and the load balancer will be in that region as well. That means if we have servers in US West 2 that we want to use a load balancer with, the load balancer should also be in US West 2. Or if we have servers in two different regions, we'll need two load balancers.

### How does a loadbalancer work
A load balancer has two main components, a **listener** and a **target group**. The listener on the load balancer listens for requests from clients on a specific port. Common listeners run on Port 80 for HTTP traffic and Port 443 for HTTPS traffic. When a listener receives traffic, the listener forwards the request to a target group. Think of a target group as an assigned set of servers we want to respond to the request. The target group is used to route the request to one or more of these registered servers. When a server is selected by a target group, the server receives the request and sends a response back to the client. The load balancer provides an additional layer between the client traffic and servers.

The load balancer is itself an EC2, but it just has the special job of listening for requests using a listener, and forwarding it to a registered server using a target group. This forwarding is typically done on a different port than the port used for incoming traffic on the load balancer.

## Deployment

### What is deployment
When we build an app at the beginning, it's only accessible on our own computer, local dev environment, aka **localhost**. When working on localhost, our code lives on our computers and is accessed only by us.

If we want to release the local app to users, we need to make it available on a public computer, aka **server**. Those web servers keep our code, run it and deliver pages to anyone who requests them. The process of moving the code from local computer to the remote public host is called **deployment**, which eventually allows others users across the Internet to access the app.

### Deployment environment
The main three environments are: development, staging, and production.

#### Development
Usually short as dev,this is the environment on our computer, where all of our commits and branches live. Nothing we do in the dev environment affects what users currently see when they pull up the website. This is just for us and the other web devs to see how new features will work and to try out improvements. We don't want to release our code before we make sure it works locally at least. The development environment is usually configured differently from the environment that users work in.

#### Staging
The staging environment is as similar to the production environment as it can be. We'll have all of the code on a server this time instead of a local machine. It'll connect to as many services as it can without touching the production environment.

All of the hard core testing happens here. Any database migrations will be tested here and so will any configuration changes. When we have to do major version updates, the staging environment helps us find and fix any issues that come up too.

If we have a client, this is where we would be able to give them a demo of how things work and look. Think of the staging environment as the place where we do the last checks and polish things up.

#### Production
Usually short as prod, this is where users access the final code after all of the updates and testing. Of all the environments, this one is the most important as this is where companies make their money so we can't have any crippling mistakes here. That's why we have to go through the other two environments with all of the testing first. Once we're in production, any bugs or errors that remain will be found by a user and we can only hope it's something minor.

:::info
A single page application is super-simple to deploy if compared to more traditional server-side rendered applications: it is really just one index.html file, with a CSS bundle and a Javascript bundle.
:::

## Containerization
Every application requires dependencies and special configurations, but these can be complicated to set up as code moves through different environments and platforms. Containers are great tools to separate application logic and dependencies with deployment and server management.

Containerization involves bundling an application together with all of its related configuration files, dependencies and libraries required for it to run. With this bundled container, the application can run efficiently and bug-free across different environments.

### Docker
One common containerization ecosystem is called Docker. To create a container, we need a Dockerfile, which defines the libraries, dependencies and configurations required by the application as well as a link to the current app version. In the Dockerfile, each of their requirements is listed as a step to produce the Docker image.

### Docker vs VM
What makes Docker different from virtual machine? We could have multiple applications in different containers running on the same OS. Virtual machines require a separate OS per application. Ultimately, containerization is great for distributed applications and microservices because each container is independent, preventing interdependencies, and a single point of failure.

## Automated pipelines
Pipelines automate certain steps of the deployment process, anything from running a series of tests of the application to building the docker image, to pushing the latest version of code to servers.

A pipeline is made up of a series of steps, where each step is a command (e.g. docker build, npm install). Phases of the pipeline include: Source, Build, Test, and Deploy. In each phase, there're steps which contain one command or several commands such as: git push, Docker build, unit test, smoke test.

Pipeline technologies examples are: Jenkins, CircleCI.