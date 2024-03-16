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