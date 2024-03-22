# Design patterns
## What and why design patterns?
Design patterns are all about reusing experience, design experience. Design patterns aren't algorithms, and they're not code. Design patterns are not specific solutions for specific kinds of software. Rather, design patterns are general solutions for common problems that crop up in all kinds of applications.

A design pattern is usually expressed by a definition, and a class diagram.

Why using design patterns? So we don't need to reinvent the wheel, we can often shortcut the design process by leveraging the hard work of other developers who have already gone through a similar exercise and found good solutions that we can use.

## What about design principles?
Principles are **general guidelines** while patterns are **specific solutions** often aimed at solving common object-oriented problems.

The principle **"encapsulate what varies"** tells us to look for parts of our code that are frequently changing and separate them from the other code that isn't changing. The principle itself doesn't tell us at all how to actually do this. Instead, principles tell us to strive for a particular quality in our design, and this is often where patterns come in. Design patterns often demonstrate different ways of, for example, separating what varies in our design. e.g.Strategy pattern shows us how to separate out an object's behavior.

The principle **"program to an interface, not an implementation"** tells us to use the super type (interface) to refer to objects rather than their specific type.

## Strategy pattern
It defines a family of algorithms, encapsulates each one and makes them interchangeable. Strategy lets the algorithm vary independently from clients that use it.

### HAS-A is better than IS-A
IS-A is an inheritance relationship: A mallard duck is a duck. HAS-A is a relationship of composition: A mallard duck has a fly behavior. Instead of ducks inheriting their fly behavior and quack behavior, we're now composing the ducks with a fly behavior and a quack behavior. When we put two classes together, with composition, instead of inheriting behavior, an object can then instead delegate that behavior, to the composed object. And this aligns with the principle **"use composition rather than inheritance"**, because the composition gives us a more flexible design, which allows us to easily reuse flying and quacking behavior.

## Adapter pattern
It converts the interface of a class into another interface that clients expect. It allows classes to work together that couldn't otherwise because of incompatible interfaces.

For example, when using a vendor's class to achieve certain goals, at some point, we may want to use a different Vendor class (perhaps that's better, cheaper or faster). The only problem is that the new Vendor class has a different interface than your existing Vendor class. How to make our system work with the new vendor? We create an Adapter class that implements the existing interface and then talks to the Vendor's class to carry out request. If we do our job right, the existing system and the new Vendor class will do what they've always done without the need for code changes. It's the Adapter class that will handle the work of translating the request to the new Vendor class.