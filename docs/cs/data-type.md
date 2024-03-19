# Data type (Java 17)

Everything in the computer is stored in binary, a type tells Java how to interpret each chunk of data. A type tells us how much data we can store in the type and the meaning of the data.

Java separates its data types into two main categories that then break down further into more distinct data types.

## Primitive types
- `Boolean`
- `Int` - a whole number
- `Double` - a decimal number
- `Char` - a single letter or symbol (e.g.initial)

These data types are primitive types, because they're the basis and foundation for all other data types within the Java programming language. There’re 8 primitive types (byte, short, int, long, float, double, boolean, char) in Java, everything else is a reference type.

Given varialbes y and x, y=x means “copy all the bits from x into y”
```java
int x = 5;
int y = x;
x = 2;

// x = 2, y = 5
```

## Reference types
- `String` - a sequence of ordered characters

What makes a string a reference type? A string is built out of character. It's not a basic data type. It's created out of organizing char pieces of data in a significant way.

When we instantiate an object, Java first allocates a box of bits for each instance variable of the class and fills them with a default value (e.g. 0, null). The constructor then fills each box with some other value.
```java
public static class Walrus {
	public int weight;
	public double tuskSize;

	public Walrus(int w, double ts) {
		weight = w;
		tuskSize = ts;
	}
}

new Walrus(1000, 8.3);

/*
once calling new, two boxes are created with default value
walrus instance
---------|-------
weight   | 0
---------|-------
tuskSize | 0.0
---------|-------

then pass to constructor, the value will be reset

walrus instance
---------|-------
weight   | 1000
---------|-------
tuskSize | 8.3
---------|-------
*/
```
Different from the primitive types (where the equal sign means copying the bits), the reference types copy the arrow by making the arrow in the b box pointing at the same instance as a.
```java
Walrus a;
a = new Walrus(1000, 8.3)
Walrus b;
b = a;

// b and a point at the same address
```

## Primitives vs objects
Primitives are stored in fixed-sized memory units, limited in range of values. They are accessed directly via primitive variables (named storage).

Objects can grow and shrink in size, they can't be accessed directly, only indirectly accessed via references (pointer to objects). Each reference variable stores the location or the pointer to an object in memory, not the object itself. Object references can be copied from one variable to another, but it simply copies addresses, not actual objects. Because of this, we cannot modify objects directly but only indirectly via object references.