# Architecture patterns
Applications lacking a formal architecture are generally tightly coupled, brittle, difficult to change, and without a clear vision or direction. Basic questions about deployment and maintenance are:
- Does the architecture scale?
- What are the performance characteristics of the application?
- How easily does the application respond to change?
- What are the deployment characteristics of the application?
- How responsive is the architecture?

We must always justify our architecture decisions, particularly when it comes to choosing a particular architecture pattern or approach.

## Layered architecture
Components within the layered architecture pattern are organized into horizontal layers, each layer performing a specific role within the application. Most layered architectures consist of four standard layers: **presentation, business, persistence, and database**. The business layer
and persistence layer may be combined into a single business layer.

One of the powerful features of the layered architecture pattern is the separation of concerns among components. Each layer is closed, means that as a request moves from layer to layer, it must go through the layer right below it to get to the next layer below that one. The reason why not allow the presentation layer direct access to either the persistence layer or database layer, is due to the concept **layers of isolation**, means that:
1. Changes made in one layer of the architecture generally don’t impact or affect components in other layers: the change is isolated to the components within that layer.
2. Each layer is independent of the other layers, thereby having little or no knowledge of the inner workings of other layers in the architecture.

The layered architecture pattern is a solid general-purpose pattern, making it a good starting point for most applications, particularly when we are not sure what architecture pattern is best suited for
our application.

## Microservices architecture
One concept of microservices architecture is the notion of **separately deployed units**, means that each component of the microservices architecture is deployed as a separate unit, allowing for easier deployment through an effective and streamlined delivery pipeline, increased scalability, and a high degree of application and component decoupling within the application.

Another key concept within the microservices architecture pattern is that it is a **distributed architecture**, meaning that all the components within the architecture are fully decoupled from one other and accessed through some sort of remote access protocol (e.g.JMS, AMQP, REST, SOAP, RMI, etc).

The microservices architecture style naturally evolved from two main sources: monolithic applications developed using the layered architecture pattern and distributed applications developed through the service-oriented architecture pattern. The evolutionary path from monolithic applications to a microservices architecture style was prompted primarily through the development of continuous delivery.

### Ways to implement microservices architecture
There are three main topologies: the API REST-based topology, application REST-based topology, and the centralized messaging topology.


## Event-driven architecture
The event-driven architecture pattern is used to produce highly scalable applications. It is also highly adaptable and can be used for small applications and as well as large, complex ones. The event-driven
architecture is made up of highly decoupled, single-purpose event processing components that asynchronously receive and process events.