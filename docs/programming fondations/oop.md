# OOP - Object oriented programming
Object-oriented programming allows concepts from the real world to be represented by code that contains both the data and related behavior. The concepts are normally modeled as **classes**, with **properties** for data and **methods** for the behavior, and the specific instances of these classes are called **objects**.

:::note
The contents about OOP below are explained with Java examples.
:::

## Class and object
A class represents or models a real object in code via a blueprint, which contains a set of attributes and behaviors that define that object.

For example, to define a tree class, it may have attributes such as height, trunkDiameter, treeType and behavior such as growing.
```java title="Tree.java"
import java.awt.*;

public class Tree {
    double height;
    double trunkDiameter;
    TreeType treeType;

    static Color TRUNK_COLOR = new Color(102, 51, 0);

    Tree(double height, double trunkDiameter, TreeType treeType){
        this.height = height;
        this.trunkDiameter = trunkDiameter;
        this.treeType = treeType;
    }

    void grow() {
        this.height = this.height + 10;
        if (this.treeType == TreeType.OAK) {
            this.trunkDiameter = this.trunkDiameter + 5;
        }
        if (this.treeType == TreeType.MAPLE) {
            this.trunkDiameter = this.trunkDiameter + 10;
        }
        if (this.treeType == TreeType.PECAN) {
            this.trunkDiameter = this.trunkDiameter + 15;
        }
        if (this.treeType == TreeType.WALNUT) {
            this.trunkDiameter = this.trunkDiameter + 20;
        }
        if (this.treeType == TreeType.PINE) {
            this.trunkDiameter = this.trunkDiameter + 25;
        }
    }

    void announceTallTree() {
        if (this.height > 100) {
            System.out.println("That is a tall tree" + this.treeType);
        } else {
            System.out.println("That is a short tree" + this.treeType);
        }
    }
}
```
```java title="TreeType.java"
public enum TreeType {
    OAK,
    MAPLE,
    PECAN,
    WALNUT,
    PINE
}
```
Remember that the class is just a blueprint, no tree has been created by this tree class yet. This class is telling us: if we want to create a tree, this is how it will look like.

It is the method constructor that brings the blueprint to life. Constructor normally has the same class name. When the constructor is used, it will create a tree with the corresponding parameters.

We can then call the constructor (normally in another class to keep code separate) to create the tree object. `new Tree()` creates a tree from the tree class, but it will be thrown away if it is not assigned to any variable. Assign it to a variable called myTree, then this object can access all attributes and methods of the tree class.
```java title="Main.java"
public class Main {
    public static void main(String[] args) {
        Tree myTree = new Tree(25, 5, TreeType.PINE);

        myTree.grow();

        myTree.announceTallTree();

        System.out.println(myTree.treeType);
        System.out.println(myTree.height);
        System.out.println(myTree.trunkDiameter);
        System.out.println(Tree.TRUNK_COLOR);

    }
}
```
### Static member
Static member is part of a class that is **accessible through the class and belongs to that class**, means that attribute or behavior is not based on any particular instance, but rather belongs to all instances of that class. The static member is marked with `static` and is accessed with class directly, such as `Tree.TRUNK_COLOR`.

### Non-static member
Non-static member is part of a class that is **accessible with an instance and belongs to that instance**, means that we have to create an instance in order to access the value of a non-static attribute or method. `height`, `trunkDiameter`, `treeType` are all non-static attributes. The method `announceTallTree`() is a non-static method that uses instance’s height and treeType to calculate.

Non-static members are referred as instance members, because an instance must be created to use or access those members, such as `myTree.height`, `myTree.announceTallTree()`.

## OOP 4 main principles
OOP helps programmers to create complex programs by grouping together related data and functions. Four main principles of OOP are: encapsulation, abstraction, inheritance, polymorphism.

### Encapsulation
It refer to binding state and behavior together into a single unit, essentially means to **hide data within a class, preventing anyone outside the class from directly interacting with it**. It doesn’t mean that other classes can’t interact at all, but they should only interact with attributs of another object through that class methods, which are getter and setter.

`myTree.height` is directly accessing the tree class attribute, if the attribute changes (e.g. name or the way it's stored), any class that uses the tree class will also have to change. This makes code heavily dependent on each other.

To achieve the encapsulation, we need a clear interface through public methods between a given class and the rest of the program, to prevent other classes having direct access to certain attributes.

#### Access modifier
Different access modifier determine where certain variables and methods can be accessed in our code.
- private: only visible in the class where the member lives in
- no modifier: visible in the package where the member lives in
- protected: visible in the package and all subclasses
- public: accessible everywhere within the program

Access modifiers allow other classes to access data indirectly through a known pathway:
1) restrict each attribute as `private`
2) write `public` getters and setters

```java title="Tree.java"
public class Tree {
  private double height;
  private double trunkDiameter;
  private TreeType treeType;

  public double getHeight() {
    return height;
  }

  public double getTrunkDiameter() {
    return trunkDiameter;
  }

  public TreeType getTreeType() {
    return treeType;
  }
}
```

You may also want some attributes to be read-only from the outside, which means you only define a getter but not a setter. The variable can be only referenced but not changed.

### Inheritance
Inheritance allows us to create class hierarchies where classes inherit properties and behaviors from other classes. The class that inherits the properties is called the **subclass** or child class. The class that's being inherited from is called the **superclass** or the parent class. That's to say, the subclass inherits from the superclass.

Benefits of inheritance
- Promote code reusibility, avoid duplicating code in two different places
- Additions or modifications to the superclass will automatically affect all subclasses

#### Different types of inheritance
**Single-level inheritance**

One superclass (e.g.employee) has only one subclass (e.g.salesperson)

**Hierarchical inheritance**

One superclass (e.g.employee) has many subclasses (e.g.salesperson, analyst)

**Multi-level inheritance**

A class can inherit from one class, but also be the parent of another class. e.g. The employee class can inherit from another class called person.

:::tip
In Java, a class can only have one super class, but multiple subclasses.
:::

```java
public class Employee {
    private String name;
    protected double salary;
    private int age;

    public Employee(String name, double salary, int age) {
        this.name = name;
        this.salary = salary;
        this.age = age;
    }
    public String getName() {
        return this.name;
    }

    public double getSalary() {
        return this.salary;
    }

    public int getAge() {
        return this.age;
    }

    public void raiseSalary() {
        this.salary = this.salary * 1.5;
    }
}
```

Use keyword `extends` to achieve inheritance in the subclass. Modify the subclass constructor to use properties from the superclass by using keyword `super`, which refers to the superclass constructor.

```java
public class Salesperson extends Employee {

    private double commissionPercentage;

    public Salesperson (String name, double salary, int age, double commissionPercentage) {
        super(name, salary, age);
        this.commissionPercentage = commissionPercentage;
    }

    public double getCommissionPercentage() {
        return commissionPercentage;
    }
}
```

```java
public class Analyst extends Employee {
    public Analyst(String name, double salary, int age) {
        super(name, salary, age);
    }

    public double getAnnualBonus() {
        return super.salary * .5;
    }
}
```
:::tip
To make certain attribute available to the subclasses, use access modifier `protected`. And the subclass can access by using `super.`, such as super.salary.
:::

### Abstraction
Abstraction helps to hide implementation complexity, which may come from an algorithm, API or design. Think of it as a coffee machine which hides the implementation details of how coffee is made. To make a coffee, we only need to interact with the interface, by providing inputs - coffee pod and water, we get outputs - a cup of coffee.

A system with abstraction only shows essential details and keeps everything else hidden. When multiple programmers work together on one program, it’s best if our section is able to function without knowledge of the inner workings of another colleague’s section. All we need to know are the inputs, outputs, and a general idea of what the system does.

There are 2 ways to achieve abstraction: abstract class, and interface.

#### Abstract class
In Java, an abstract class allows us to add abstraction. An abstract class is like a template class where some of the functionality is not implemented yet. This means we cannot instantiate an abstract class but other classes **extends** the abstract class and implement the appropriate functionality.

For example,to read a file possibily in different ways, we can create an abstract class `AbstractFileReader`. This class will have the basic operations for interacting with the file and retrieving the files contents. To implement, we'll need to create a subclass that extends AbstractFileReader class in order to use it, e.g. `DigitsOnlyFileReader` - a concrete class that extends AbstractFileReader.

Other concrete file reader classes can use the algorithm without worrying about the implementation. They just have to override the parse line method. With the AbstractFileReader, we can easily create functionality that reads the file and converts its contents to all uppercase, lowercase or whatever we want. All we need to do is create a new class that extends the AbstractFileReader class and implements the parse line functionality.

#### Interface
An interface is a set of method signatures for to-be-implemented functionality. It's kind of like a specification for a set of behavior without the implementation. Same as an abstract class, an interface cannot be instantiated.

To use an interface, another class implements it, using the `implements` keyword.


### Polymorphism
Polymorphism is the ability for an object or function to take many forms. It helps reducing complexity and promotes reusable code.

Java supports two types of polymorphism, runtime polymorphism and compile-time polymorphism.

oddListy and Listy are both ArrayLists. They both have all the functionality of an ArrayList, including that add functionality. However, the implementations of each add algorithm are different and are determined at runtime based on the instances original type, hence why it's called runtime polymorphism.