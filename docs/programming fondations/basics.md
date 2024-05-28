# Basics
Some basic concepts collected progressively

## Null check
```js
// old way
if(foo !== null && foo !== underfined){}

// new way
if (foo) {}
```
`if(foo)` will evaluate to true if foo is NOT: `null`, `undefined`, `NaN`, empty string, `0` or `false`. Be careful with `0` as 0 is considered false.

## Differences between `undeclared`, `undefined`, `null` variables
**Undeclared variables** are created when you assign a value to an identifier that is NOT previously created using `var`,` let` `or const`. They are defined globally and will throw `ReferenceError` when trying to assign to an undeclared variable in strict mode.
```js
function foo() {
  x = 1; // Throws a ReferenceError in strict mode
}

foo();
console.log(x); // 1
```

**Undefined variable** is a variable that has been declared, but not assigned a value. It is of type `undefined`. If assigning a function to a variable and this function doesn’t return any value, the variable also has value undefined.
```js
var foo;
console.log(foo); // undefined
```

**Null** represents no value and is different from undefined, because a variable that is null will have been explicitly assigned to the null value.
```js
var foo = null;
console.log(foo === null); // true
```

:::warning
Never leave variables undeclared or unassigned.
Just explicitly assign null to them after declaring if you don't intend to use it yet.
:::


## `typeof` vs `isNaN`
The `typeof` *operator* is used to determine the type of a variable or expression. It returns a string indicating the data type of the operand.
```js
typeof 42; // returns "number"
typeof "hello"; // returns "string"
typeof true; // returns "boolean"
typeof []; // returns "object"
typeof {}; // returns "object"
// highlight-start
typeof null; // returns "object" (this is a known quirk in JavaScript)
// highlight-end
typeof undefined; // returns "undefined"
typeof function(){}; // returns "function"
```

The `isNaN` *function* is used to determine whether a value is NaN (Not-a-Number).
`isNaN` doesn't check the datatype, it only checks the value. In fact, `isNaN` attempts to convert the value to a number before determining whether it's NaN.
```js
isNaN(42); // returns false
isNaN("42"); // returns false (can be converted to the number 42)
isNaN(true); // returns false (true is converted to 1)
isNaN([]); // returns false (an empty array can be converted to 0)
isNaN(null); // returns false (null is converted to 0)

isNaN(undefined); // returns true
isNaN('boo'); // returns true (cannot be converted to a number)
isNaN({}); // returns true (objects cannot be converted to a number)
```