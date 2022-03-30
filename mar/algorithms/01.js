// Algorithm
// * Clearly defined problem statement, input, and output;
// * The steps in the algorithm need to be in a very specific order;
// * The steps also need to be distinct;
//  * The algorithm should produce a result;
//  * The algorithm should complete in a finite amount of time;
// Algorithmic Thinking:
// clearly define what the problem set is and clarify what values count as inputs
// the output should match the value we are looking for;
// Type of algorithms
// 1. linear search 
//  - start at beginning
//  - move sequently 
//  - compare current value to target
//  - reach end of list
// linear search dividing by the half works only if the list is sorted
// 2. Binary Search
// - returns the position in the list
//NB! Algorithms should produce a result;
//  When we chose a algorithm we check what works best for specific problem
// --------------------------------
// The two measurements for an algorithm
// Time complexity - amount of time 
// Space complexity - amount of space 

// Big O 
// Theoretical definition of the complexity of an algorithm as a function of the size
// O(n) - Order of magnitude of complexity
//  - O complexity are relevant
//  - A function of the size - measure complexity as input size grows (not in single data set, but all data sets)
//  - Upper Bounds - how it perform in the worst case scenarios 

// O(1) - Constant Time Operation
//  exponent
//  2 ^ 3 = 8 - how many times i need to multiply to get 8
//  the inverse of exponent is Logarithm
//  log2 8 = 3  - how many times i need to divide to get 8

// O(log n) - logarithmic runtime
// O(ln n) - logarithmic time

// Quadratic Time - x ^ 2 (of power of two)
// O(n2) - Quadratic algorithm
// Cubic Runtime n ^3

// Quasilinear Runtimes 
// O (n log n)
//  Sorting Algorithms / Merging Sort

// Polynomial Runtime
// O(n ^ k) -- k means some value(2 for quadratic, 3 for cubic and so on)
//Polynomial runtime if for a given value of n its worst case runtime is in the form of n raised to the k power
// they are considered efficient, they are likely to be used in practice

// Exponential Runtime
// O(x^n) - some number raised to the nth power
//  --- Brute Force 10 ^ n (where n = 2) and the number of value is 100
// Factorial / Combinatorial
// O(n!)
//  n! n(n-1)(n-2)...(2)(1) 3! 3 x 2 x 1 = 6