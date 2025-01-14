# Subtle Bug in Euclidean Algorithm Implementation

This repository demonstrates a subtle bug in a JavaScript implementation of the Euclidean algorithm for finding the greatest common divisor (GCD) of two numbers. The bug occurs when the inputs are large and lead to stack overflow errors.  The solution demonstrates a robust, iterative approach to solve this problem. 

## Bug

The provided `bug.js` file contains a recursive implementation of the Euclidean algorithm. While it works correctly for smaller numbers, it suffers from stack overflow errors for larger inputs due to the deeply nested recursive calls.

## Solution

The `bugSolution.js` file provides an iterative version of the Euclidean algorithm. This iterative approach avoids the recursive calls which solves the stack overflow problem and ensures the algorithm works correctly for all valid integer inputs.