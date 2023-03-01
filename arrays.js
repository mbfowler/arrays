var stringArray = ["totally", "absoultely", "agreed", "yep"];
var numberArray = [2, 5, 7, 12];
var boolArray = [true, true, false, false];

stringArray.pop();
// This will destructively return the final element of the array. So this returns "yep"

console.log(numberArray.slice(1, 3));
// This will non-destructively return an array including the elements at index 1 and up to but not including element 3.  So this returns [5, 7].

boolArray.unshift(false);
// This will add another element false to the front of (index 0) our boolArray