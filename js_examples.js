function printNumbersDivisibleByThree() {
  var index = 1;
  while (index <= 1000) {
    if (index % 3 === 0) {
      console.log(index);
    }
    index += 1;
  }
}
// printNumbersDivisibleByThree();

function printEveryOtherItem(strings) {
  var index = 0;
  strings.forEach(function(string) {
    if (index % 2 === 0) {
      console.log(string);
    }
    index += 1;
  });
}
// printEveryOtherItem(["a", "b", "c", "d", "e"]);

function computeSum(numbers) {
  var sum = 0;
  numbers.forEach(function(number) {
    sum += number;
  });
  return sum;
}
// console.log(computeSum([2, 4, 5]));


var cityPopulations = {chi: 2700000};
cityPopulations["nyc"] = 8400000;
cityPopulations.sf = 800000;  // same as cityPopulations["sf"]
// console.log(cityPopulations);



// # Write a method that prints out every number from 1 to 100. 


// # Write a method that prints out every other number from 1 to 100. (That is, 1, 3, 5, 7 … 99).


// # Write a method that accepts an array of numbers as a parameter, and counts how many 55’s there are in the array.


// # Write a method that accepts an array of strings and returns a new array that has the string "awesomesauce" inserted between every string. 
// # For example, if the initial array is ["a", "b", "c", "d", "e"], then the returned array should be ["a", "awesomesauce", "b", "awesomesauce", "c", "awesomesauce", "d", "awesomesauce", "e"].

function awesomesauced(strings) {
  var awesomeArray = [];
  // strings.each do |string|
  strings.forEach(function(string) {
    awesomeArray.push(string);
    awesomeArray.push("awesomesauce");
  });
  awesomeArray.pop();
  return awesomeArray;
}

console.log(awesomesauced(["a", "b", "c", "d", "e"]));



// # Start with the hash: item_amounts = {chair: 5, table: 2}
// # Someone just bought two chairs. Change the hash such that the chair amount is 3.
// # The final result should be: {chair: 3, table: 2}


// # Start with the hash: item_amounts = {chair: 5, table: 2}
// # You received 7 desks to sell. Change the hash to include desks.
// # The final result should be: {chair: 5, table: 2, desk: 7}


// # Write a method that accepts a number and returns its factorial.
// # For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.


// # Write a method that accepts two arrays of numbers, and prints the sum of every combination of numbers from first and second array. 
// # For example, if the method receives [1, 5, 10] and [100, 500, 1000], the method should print a list: [101, 501, 1001, 105, 505, 1005, 110, 510, 1010].


function combinations(numbers1, numbers2) {
  // console.log(numbers1, numbers2)
  var totalCombinations = [];
  for (var i = 0; i < numbers1.length; i++) {
    for (var j = 0; j < numbers2.length; j++) {
      totalCombinations.push(numbers1[i] + numbers2[j])
    }
  }
  return totalCombinations;
}

console.log(combinations([1, 5, 10], [100, 500, 1000]));


