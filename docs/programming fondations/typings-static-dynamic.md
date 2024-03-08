---
sidebar_position: 1
---

# Static vs dynamic typing

:::note

**Typing** refers to how data and variables are categorized based on the data type, such as string, boolean, integer.

:::

## Static typing
Variables are bound to data types **during compilation**, once the type is assigned, it remains unchanged throughout the execution. Static typing helps promoting type safety and detects errors at the early stage, therefore to reduce runtime errors.

Languages that use static typing: C, C++, Java

## Dynamic typing

Variables are bound to data types **at runtime** instead of during compilation. You as developer don't need to explicitly specify types when coding, it simplifies the coding process but compromises on type safety.

Languages that use static typing: Python, JavaScript, PHP

*Most scripting languages are dynamic typing as there's no compiler to do static type-checking.*

### Risk of type errors from dynamic typing
In dynamically typed languages like Python, variables can hold values of any type, and the type of a variable is determined at runtime based on the value it holds. Some type errors may never surface during runtime if certain code paths are not executed.


```python
def foo(a):
  if a > 0:
    print('Hi')
  else:
    print("3" + 5)

foo(2)
```

:::warning

There's type error in the code, but why the error will not throw?

Dynamically typed languages don't check types until execution. Python is also interpreted, which means code is executed line by line, as opposed to compilation, where the entire code is translated into machine code before execution. If **a** always happens to be greater than 0 during the runtime, then the if condition will always be evaluated to True, and the type error in the else branch (print("3" + 5)) will never be encountered. In thia case, that line of else block is never even looked at!

:::


## Static vs dynamic, compiled vs interpreted
This two groups of concepts are similar and related. *Static or dynamic* focus on: when typed are checked, *compiled or interpreted* focus on: when source code is translated. A closer look:
- At **compile-time**
  - Compiled: code is translated before runtime
  - Static: type is checked before runtime
- At **runtime**
  - Interpreted: code is translated on the fly, during execution
  - Dynamic: typed is checked on the fly, during execution

:::tip

It's not entirely correct to say that static typed languages are always compiled and dynamic typed languages are always interpreted. It may feel right, but it's not a strict rule.

C and C++ are statically typed and compiled. Python is dynamically typed and interpreted.

Java is statically typed, **compiled** to bytecode, which is then **interpreted** by the Java Virtual Machine (JVM) at runtime. So, while Java is statically typed, it uses a combination of compilation and interpretation.

:::

