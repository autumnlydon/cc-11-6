// Problem:

//Input: Array of integers
//Output: a string

// Examples:

// Sum of elements on even positions is 1 + 3 + 5 = 9.
// Sum of elements on odd positions is 2 + 4 = 6.
// 9 > 6, so the expected output is "even".
// For numbers = [-1, 4, 3, -2], the output should be solution(numbers) = "equal".

// Data Structures:
//integers, array method index of?
//pass to two variables

// Algorithm:
// Iterate over every element of the array using for each, pass to two variables
//end with an iff statement and change return value based off of that

// Code:

const solution = (numbers) => {
  let evens = 0;
  let odds = 0;
  numbers.forEach((element, index) =>
    index % 2 === 0 ? (evens += element) : (odds += element)
  );
  if (evens > odds) {
    return "even";
  } else if (odds > evens) {
    return "odd";
  } else {
    return "equal";
  }
};

//any faster way?
