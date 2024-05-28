# Data structure

Data structures are where we store and group the data together.

In a to-do app, the to-do items are the **data**, and the list we put them in is the **data structure**, where gives us a way to access and modify the data.

Data structures also tell us how the items relate to each other. For example, is order important? Are duplicates allowed or do they all have to be unique and different? The answers to these questions will vary for different use cases, and the data structure we choose will be determined by answers to those questions.

## How to choose a data structure?
Things to consider:
- Do we know in advance how many items are going to be in the data structure?
- Do we care duplicates? Or only unique is allowed.
- Is order important?
- Performance consideration. Some is quicker at deleting, another is quicker at retrieving. Think about what will be done with the data. Are we going to change and update it a lot, or is it going to stay the same the whole time.
- Think of memory.

## Array
Array contains a *fixed* number of elements of the *same type*. Upon creating an array, we have to say upfront how many elements are going to be in it, means that we have to set the length and it can't be changed later.
```java
String[] weekdays = new String[7]
```
When creating an array, if we don't say what kind of values are going to be, Java will just use the default value `null` for that type.

We can set values by accessing index, but it won't be efficient to acess index one by one.
```java
weekdays[0] = "Mon";
```

Another way to set arrays is when we create them, instead of saying how many values are going to be in it, we can say straight away, what all the values are.
```java
weekdays = new String[]{"Mon", "Tue", "Wed"}
```

## Collections
Most Java data structure implements the Collection interface. **List**, **Queue** and **Set** are sub interfaces that are **extended** from the Collection interface. There are concrete classes that **implement** those sub interfaces, such as: ArrayList implements List, PriorityQueue implements Queue, HashSet implements Set.

This structure is referred as the **Collections Framework**, which is a backbone of the Java data structure. It's handy when most classes are extended from the Collections, means the consistent API and the same methods used across all classes such as add(), remove(), contains() etc.

Above the Collection interface, there is another interface: **Iterable**, the very top of the collections framework, means that any class in this framework can be iterated over such as forEach().

There are many difference between Array adn Collections.
- Collections can change size, no need to specify the items needed upon creation.
- Collections can not hold primitive types, `List<int>` is wrong, `List<Integer>` is correct.

### LinkedList
Each element in the list has a reference to the next element and the previous elements. **LinkedList keeps items in the same order when adding them**. An item can be added between the existed items by passing the index to `add()`.

```java
import java.util.LinkedList;

public class LinkedListExample {
    public static void main(String[] args) {
      //highlight-start
        LinkedList<String> shoppingList = new LinkedList<>();
      //highlight-end

        shoppingList.add("apple");
        shoppingList.add("banana");
        shoppingList.add("pear");

        System.out.println(shoppingList); //[apple, banana, pear]

        shoppingList.add(1, "mango");

        System.out.println(shoppingList); //[apple, mango, banana, pear]
    }
}
```

LinkedLists also comes with some handy methods called `addFirst`, `addLast`, `removeFirst` and `removeLast` to add or remove elements to the front or the back of the list.

:::tip
LinkedList and ArrayList look similar, but behind the scene differences are:
ArrayList uses an array, which allows for fast random access but slow insertion and deletion. While LinkedList uses a doubly linked list, which allows for fast insertion and deletion but slow random access (because linkedList has to go through and see what one comes next until it gets to the one).
:::

LinkedList is NOT synchronized, which is a good thing in terms of performance and memory. But it does mean that it's not thread safe. So if we've got multiple threads trying to modify the list at the same time, they might overwrite each other's changes. Luckily, there is way to make LinkedLists synchronized.

```java
import java.util.Collections;
import java.util.List;

List<String> syncShippingList = Collections.synchronizedList(shoppingList);
```
Create a new List and make a copy of the shopping list, put it in a list that is synchronized, this syncShippingList is the same as the old shoppingList. Now it's thread safe and we can continue using LinkedList.

### Stack
The first element added is the last one being taken out. Think of it like a real life stack of plates. When we stack plates on top of each other, and we want to pick one up, we would take it from the top of the pile.

There are multiple ways to create a stack in Java. And neither of them are perfect. There is a stack class, but it has a few limitations. For example, it lets us remove elements from anywhere in the stack. If we imagine a real life stack of plates, this isn't very stack-like behavior. So it's generally recommended to use the `Deque` interface instead.
```java
import java.util.ArrayDeque;
import java.util.Deque;

public class StackExample {
    public static void main(String[] args) {
      //highlight-start
        Deque<String> stack = new ArrayDeque<>();
      //highlight-end
        stack.push("first request");
        stack.push("second request");
        stack.push("third request");
        System.out.println(stack); // [third request, second request, first request]
        System.out.println(stack.peek()); //third request
        stack.pop();
        System.out.println(stack); //[second request, first request]
    }
}
```
`Deque` is an interface, and the concrete type could be `ArrayDeque`.

`peek()` is to get the first element from the top of the stack.

`pop()` is to remove the first element from the top of the stack.

### Queue
The first item we add is the first item we take out. Think of it like a real queue of people waiting outside a store. The first person that joins the queue is the first person that gets served.

One way to make a queue is with an `ArrayDeque`, which is the same class used to create a stack.
```java
import java.util.ArrayDeque;
import java.util.Queue;

public class QueueExample {
    public static void main(String[] args) {
      // implement queue with ArrayDeque
      //highlight-start
        Queue<String> queue = new ArrayDeque<>();
      //highlight-end
      // or with LinkedList
      //highlight-start
        Queue<String> queue = new LinkedList<>();
      //highlight-end
        queue.offer("person one");
        queue.offer("person two");
        queue.offer("person three");
        System.out.println(queue); //[person one, person two, person three]
        System.out.println(queue.peek()); //person one
        queue.poll();
        System.out.println(queue); //[person two, person three]
    }
}
```

`offer()` is to add items to a queue.

`peek()` is to the see the first element of the queue, same as the way in stack. However there's no `pop()` in queue, the same behavior is achieved by `poll()`, to remove the first element.

We could actually change this `ArrayDeque` class to some other concrete implementation, such as `LinkedList`. And nothing else will be changed. LinkedList is quite a common implementation to use for a queue. But in most cases, the ArrayDeque has better performance. Linkedlist is better if we're removing the current element during iteration.

### TreeSet
TreeSet stores unique elements in a sorted order.
```java
import java.util.Set;
import java.util.TreeSet;

public class TreeSetExample {
    public static void main(String[] args) {
      //highlight-start
        Set<Integer> treeSet = new TreeSet<>();
      //highlight-end
        treeSet.add(1);
        treeSet.add(300);
        treeSet.add(47);
        treeSet.add(6);
        treeSet.add(47);
        System.out.println(treeSet); //[1, 6, 47, 300]

      //highlight-start
        Set<String> wordSet = new TreeSet<>();
      //highlight-end
        wordSet.add("tiger");
        wordSet.add("cat");
        wordSet.add("bear");
        System.out.println(wordSet); //[bear, cat, tiger]
    }
}
```

`add()` is to add items to a TreeSet

`remove()` is to remove items from a TreeSet.

TreeSet can't store duplicate values.

TreeSet stores elements by defaults in ascending order from lowest to highest, so it doesn't care the order that we add the items in. If strings are stored as TreeSet, they will be put in the alphabetical order.

We can define a different way to order strings, for example by length.
```java
      //highlight-start
      Set<String> wordSet = new TreeSet<>(Comparator.comparing(String:: length));
      //highlight-end
      wordSet.add("tiger");
      wordSet.add("cat");
      wordSet.add("wolf");
      wordSet.add("bear");
      System.out.println(wordSet); //[cat, wolf, tiger]
```
Bear is not showing, because both wolf and bear has 4 letter, and when we compare strings by length, the treeSet is counting that as a duplicate, so not included.

:::tip
It's good practice to use the parent's type on the left hand side. So that means that if we change mind about which concrete type to use later, we can just change the right hand side and leave the left hand side as it is.
:::