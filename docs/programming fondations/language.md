---
sidebar_position: 1
---
# Language, source code and compilation

## What makes a language?
- an **alphabet**: a set of symbols used to build words of a certain language (e.g., the Latin alphabet for English, the Cyrillic alphabet for Russian, Kanji for Japanese, and so on)
- a **lexis**: (aka a dictionary) a set of words the language offers its users (e.g., the word "computer" comes from the English language dictionary, while "cmoptrue" doesn't; the word "chat" is present both in English and French dictionaries, but their meanings are different)
- a **syntax**: a set of rules (formal or informal, written or felt intuitively) used to determine if a certain string of words forms a valid sentence (e.g., "I am a python" is a syntactically correct phrase, while "I a python am" isn't)
- **semantics**: a set of rules determining if a certain phrase makes sense (e.g., "I ate a doughnut" makes sense, but "A doughnut ate me" doesn't)

The computer responds only to a predetermined set of known commands, known as **instruction list**, aka IL. The IL is, in fact, the alphabet of a machine language. This is the simplest and most primary set of symbols we can use to give commands to a computer. It's the computer's mother tongue.

## Source code and source file
To bridge between humain and computer, we need a language which humain can write and computers can execute, one that is far more complex than machine language and yet far simpler than natural language. Such languages are called **high-level programming languages**.

A program written in a high-level programming language is called a **source code**
 (in contrast to the machine code executed by computers). Similarly, the file containing the source code is called the **source file**.

 ## Compilation vs interpretation
 There are two different ways of transforming a program from a high-level programming language into machine language:
 ### Compilation
 In compilation, the entire source code of a program is translated once by getting a file (an executable file or binary code) containing the machine code. However, this act must be repeated each time we modify the source code.

 The program that performs this translation is called a **compiler** or translator.

 ### Interpretation
 In interpretation, the source code is not directly translated into machine code. Instead, an interpreter reads and executes the code line by line during runtime.

 The program that performs this kind of transformation is called an **interpreter**, as it interprets the code every time it is intended to be executed. It also means that you cannot just distribute the source code as-is, because the end-user also needs the interpreter to execute it.

Python is an **interpreted language**. If you want to program in Python, you'll need the **Python interpreter**. You won't be able to run your code without it.

Due to historical reasons, languages designed to be utilized in the interpretation manner are often called **scripting languages**, while the source programs encoded using them are called **scripts**.