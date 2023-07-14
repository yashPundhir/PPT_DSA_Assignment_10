/*

**Question 1**

Given an integer `n`, return *`true` if it is a power of three. Otherwise, return `false`*.

An integer `n` is a power of three, if there exists an integer `x` such that `n == 3x`.

**Example 1:**

```
Input: n = 27
Output: true
Explanation: 27 = 33
```

**Example 2:**

```
Input: n = 0
Output: false
Explanation: There is no x where 3x = 0.

```

**Example 3:**
  Input: n = -1
  Output: false
  Explanation: There is no x where 3x = (-1).
*/

// Solution

function isPowerOfThree(n) {
	if (n === 1) {
		return true;
	}
	if (n < 1 || n % 3 !== 0) {
		return false;
	}
	return isPowerOfThree(n / 3);
}

/*

**Question 4**

Given a string calculate length of the string using recursion.

**Examples:**
Input : str = "abcd"
Output :4

Input : str = "GEEKSFORGEEKS"
Output :13

*/

// Solution

function calculateLength(str) {
	if (str.length === 0) {
		return 0;
	}
	return 1 + calculateLength(str.slice(1));
}

/*

**Question 7**

Given a string **str**, the task is to print all the permutations of **str**. A **permutation** is an arrangement of all or part of a set of objects, with regard to the order of the arrangement. For instance, the words ‘bat’ and ‘tab’ represents two distinct permutation (or arrangements) of a similar three letter word.

**Examples:**

 Input: str = “cd”
 
 
 **Output:** cd dc
 
 **Input:** str = “abb”
 
 **Output:** abb abb bab bba bab bba
 
*/

// Solution

function permute(str, left, right) {
	if (left === right) {
		console.log(str);
		return;
	}

	for (let i = left; i <= right; i++) {
		str = swapChars(str, left, i);
		permute(str, left + 1, right);
		str = swapChars(str, left, i);
	}
}

function swapChars(str, i, j) {
	const chars = str.split("");
	const temp = chars[i];
	chars[i] = chars[j];
	chars[j] = temp;
	return chars.join("");
}

// Function to handle initial call
function printPermutations(str) {
	permute(str, 0, str.length - 1);
}
