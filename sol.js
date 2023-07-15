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

**Question 2**

You have a list `arr` of all integers in the range `[1, n]` sorted in a strictly increasing order. Apply the following algorithm on `arr`:

- Starting from left to right, remove the first number and every other number afterward until you reach the end of the list.
- Repeat the previous step again, but this time from right to left, remove the rightmost number and every other number from the remaining numbers.
- Keep repeating the steps again, alternating left to right and right to left, until a single number remains.

Given the integer `n`, return *the last number that remains in* `arr`.

**Example 1:**

Input: n = 9
Output: 6
Explanation:
arr = [1, 2,3, 4,5, 6,7, 8,9]
arr = [2,4, 6,8]
arr = [2, 6]
arr = [6]


**Example 2:**

Input: n = 1
Output: 1

*/

// Solution

const lastRemaining = (n) => {
	if (n === 1) {
		return 1;
	} else if (n % 2 === 1) {
		return lastRemaining(n - 1);
	} else {
		return 2 * (n / 2 + 1 - lastRemaining(n / 2));
	}
};

/*

**Question 3**

****Given a set represented as a string, write a recursive code to print all subsets of it. The subsets can be printed in any order.

**Example 1:**

Input :  set = “abc”

Output : { “”, “a”, “b”, “c”, “ab”, “ac”, “bc”, “abc”}

**Example 2:**

Input : set = “abcd”

Output : { “”, “a” ,”ab” ,”abc” ,”abcd”, “abd” ,”ac” ,”acd”, “ad” ,”b”, “bc” ,”bcd” ,”bd” ,”c” ,”cd” ,”d” }

*/

// Solution

function generateSubsets(set, index, subset) {
	// Base case: Print the current subset
	if (index === set.length) {
		console.log(subset);
		return;
	}

	// Recursive case: Generate subsets with and without including the current character
	generateSubsets(set, index + 1, subset); // Exclude current character
	generateSubsets(set, index + 1, subset + set[index]); // Include current character
}

function printSubsets(set) {
	generateSubsets(set, 0, "");
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

**Question 5**

We are given a string S, we need to find count of all contiguous substrings starting and ending with same character.

**Examples :**

Input  : S = "abcab"
Output : 7
There are 15 substrings of "abcab"
a, ab, abc, abca, abcab, b, bc, bca
bcab, c, ca, cab, a, ab, b
Out of the above substrings, there
are 7 substrings : a, abca, b, bcab,
c, a and b.

Input  : S = "aba"
Output : 4
The substrings are a, b, a and aba

*/

// Solution

function countSubstrings(S) {
	const n = S.length;

	// Base cases
	if (n === 0) {
		return 0;
	}

	if (n === 1) {
		return 1;
	}

	if (S[0] === S[n - 1]) {
		return countSubstrings(S.slice(1, n - 1)) + 1;
	} else {
		return countSubstrings(S.slice(0, n - 1));
	}
}

/*

Question 6

The [tower of Hanoi] is a famous puzzle where we have three rods and **N** disks. The objective of the puzzle is to move the entire stack to another rod. You are given the number of discs **N**. Initially, these discs are in the rod 1. You need to print all the steps of discs movement so that all the discs reach the 3rd rod. Also, you need to find the total moves.**Note:** The discs are arranged such that the **top disc is numbered 1** and the **bottom-most disc is numbered N**. Also, all the discs have **different sizes** and a bigger disc **cannot** be put on the top of a smaller disc. Refer the provided link to get a better clarity about the puzzle.

**Example 1:**

```
Input:
N = 2
Output:
move disk 1 from rod 1 to rod 2
move disk 2 from rod 1 to rod 3
move disk 1 from rod 2 to rod 3
3
Explanation:For N=2 , steps will be
as follows in the example and total
3 steps will be taken.
```

**Example 2:**

Input:
N = 3
Output:
move disk 1 from rod 1 to rod 3
move disk 2 from rod 1 to rod 2
move disk 1 from rod 3 to rod 2
move disk 3 from rod 1 to rod 3
move disk 1 from rod 2 to rod 1
move disk 2 from rod 2 to rod 3
move disk 1 from rod 1 to rod 3
7
Explanation:For N=3 , steps will be
as follows in the example and total
7 steps will be taken.

*/

// Solution

function towerOfHanoi(N, sourceRod, destinationRod, auxiliaryRod) {
	if (N === 1) {
		console.log(
			"Move disk 1 from rod " + sourceRod + " to rod " + destinationRod
		);
		return;
	}

	towerOfHanoi(N - 1, sourceRod, auxiliaryRod, destinationRod);
	console.log(
		"Move disk " + N + " from rod " + sourceRod + " to rod " + destinationRod
	);
	towerOfHanoi(N - 1, auxiliaryRod, destinationRod, sourceRod);
}

function solveTowerOfHanoi(N) {
	towerOfHanoi(N, 1, 3, 2);
	return Math.pow(2, N) - 1;
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

/*

**Question 8**

Given a string, count total number of consonants in it. A consonant is an English alphabet character that is not vowel (a, e, i, o and u). Examples of constants are b, c, d, f, and g.

**Examples :**
Input : abc de
Output : 3
There are three consonants b, c and d.

Input : geeksforgeeks portal
Output : 12

*/

// Solution

function countConsonantsRecursive(str, index) {
	if (index >= str.length) {
		return 0;
	}

	let ch = str[index].toLowerCase();
	if (
		ch >= "a" &&
		ch <= "z" &&
		!(ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u")
	) {
		return 1 + countConsonantsRecursive(str, index + 1);
	}

	return countConsonantsRecursive(str, index + 1);
}

function countConsonants(str) {
	return countConsonantsRecursive(str, 0);
}
