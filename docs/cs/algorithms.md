# Algorithms
Algorithm: method for solving a problem

Data structure: method to store information

The primary motive to use DSA is to solve a problem effectively and efficiently. That is to say, the complexity.

- Time complexity is used to measure the amount of time required to execute the code.
- Space complexity means the amount of space required to execute successfully the functionalities of the code.

An algorithm is a function (fn: i ⇒ o)  that takes inputs and maps to a single output, and that output is expected to be correct based on the problem. So what is the algorithm, it solves the problem if it returns a correct output for every problem input.

## Time complexity and Big-O notation
Big-O notation allows us to compare algorithms that perform the same task, regardless of input size.

When we search a list, if the item we're searching for will always be the first or last element of a list, we can say it takes **constant time** or **O(1)** time. No matter what the input sizes, we just have to check the first and last element to find our answer. For both best and worst case, it's the same O(1). If the item we're searching for is somewhere in the list but we don't know where, we might have to check every single element. In the best case, the item we're looking for would be the first element we check, O(1). In the worst case, the item would not exist in the list and we would have to check every single element, **linear time,** or **O(n)**, where n is the input size.

Most algorithms have the best case and worst case performance time. And they're often not the same. In deciding which algorithm to use, we often use the worst case time complexity as a deciding factor. However, if the worst case happens only 5% of the time, then it might be useful to consider the average case or the best case as well.