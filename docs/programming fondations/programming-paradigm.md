# Programming paradigm

## Imperative, declarative, functional programming

**Imperative programming** tells how a program should behave step by step, focuses on **how** the program should achieve its result.

**Functional programming** is a subset of **declarative programming**, focuses on **what** the programming should accomplish.

Think of functional programming as being more high-level, because we say *what* we want to achieve.

When we talk about **Functional Programming** we are talking about functions: in particular we are talking about pure functions. A pure function is a function that, given an argument, is always returning the same result; it’s predictable, easy to test, and doesn’t generate any side effect inside the program. Another important topic related to functional programming is the concept of **immutability**.

```js
// imperative programming

const originalArray = [1, 4, 8, 12];
	for(let i = 0; i < originalArray.length; i++){
			originalArray[i] = originalArray[i] + 1;
	}
console.log(originalArray) //[2, 5, 9, 13]
```
```js
// functional programming

const originalArray = [1, 4, 8, 12];
const finalArray = originalArray.map(value => value + 1);
console.log(finalArray); //[2, 5, 9, 13]
```

The imperative programming using for loop completely lost the initial value of the array. In functional programming, instead, we are working by default with immutable objects; therefore, every modification we need to apply won’t affect the original value but will generate a new one.

The functional programming is focused on what you are trying to achieve more than its implementation details.

## Reactive programming
Reactive Programming is a paradigm based on **asynchronous data streams** that propagate changes during the application life cycle. Async data streams are data whose value can arrive at any point of time.

The main concept behind this paradigm is the data flow and how an object observes and reacts to changes that happened during the life cycle of an application.

Lots of things are considered async, for example:
- fetching data over http via AJAX
- user initiated events such as scrolling, clicks
- user input search field

### When to use reactive programming?
Reactive Programming is used for handling the propagation of data during the life cycle of an application. Therefore, a perfect fit for this paradigm would be a real-time data application like a financial dashboard or any monitoring system for instance. In a nutshell, we can say that **any application that is heavily data driven could be a great fit for Reactive Programming**.

### What is reactive programming?
Implementing reactive programming means working mainly with **events streams**.
We can apply transformation to the values inside the stream via operators, which are methods to manipulate the data in the stream or the stream itself.

Since the event stream is a sequence of values (events) passed in a certain period (stream), we can assume that **everything inside an application could be a stream.**

## Functional reactive programming (FRP)

FRP is a combination of functional and reactive programming.

Using RxJS in Angular is more aligned with Functional Reactive Programming (FRP) rather than just reactive programming. RxJS is built on the principles of reactive programming, which involve working with asynchronous data streams and reacting to events. However, it also incorporates functional programming concepts by providing operators that allow you to transform and manipulate these data streams in a declarative and functional way.