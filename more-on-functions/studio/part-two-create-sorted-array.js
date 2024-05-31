function findMinValue(arr){
  let min = arr[0];
  for (i = 0; i < arr.length; i++){
    if (arr[i] < min){
      min = arr[i];
    }
  }
  return min;
}

// //Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];
//Create a function with an array of numbers as its parameter. This function will return a new array with the numbers sorted from least to greatest value.

/*Within the function:
1) Define a new, empty array to hold the final sorted numbers.
2) Use the findMinValue function to find the minimum value in the old array.
3) Add the minimum value to the new array, and remove the minimum value from the old array.
4) Repeat parts b & c until the old array is empty.
5) Return the new sorted array.
6) Be sure to print the results in order to verify your code.*/

//Your function here...
function sortArray(oldArray) {
    let newArray = [];
  
    while (oldArray.length > 0) {
      let min = findMinValue(oldArray);
      newArray.push(min);
      // console.log(`newArray:  ` + newArray)
      oldArray.splice(oldArray.indexOf(min), 1);
      // console.log(`oldArray:  ` + oldArray)
    }
    return newArray;
}

// console.log(sortArray(nums1));
// console.log(sortArray(nums2));
// console.log(sortArray(nums3));





/* BONUS MISSION: Refactor your sorting function to use recursion below:
 */
// let finalArray = [];
// function recursion(arr) {
//   if (arr.length === 0) {
//     return finalArray;
//   } else {
//     let min = findMinValue(arr);
//     finalArray.push(min);
//     arr.splice(arr.indexOf(min), 1);
//     return recursion(arr);
//   }
// }

let finalArray = [];
function recursion(arr) {
  if (arr.length === 0) {
    let output = finalArray;
    finalArray = [];
    return output;
  } else {
    let min = findMinValue(arr);
    finalArray.push(min);
    arr.splice(arr.indexOf(min), 1);
    return recursion(arr);
  }
}



// console.log(recursion(nums1));
// console.log(recursion(nums1));
// // finalArray = [];
// console.log(recursion(nums2));
// // finalArray = [];
// console.log(recursion(nums3));

let firstTime = recursion(nums1);
let secondTime = recursion(nums2)
console.log(firstTime);
console.log(firstTime);
console.log(secondTime);
console.log(secondTime);

//-------------------------------------
// How do use recursion without having to reset the array variable between function calls?






