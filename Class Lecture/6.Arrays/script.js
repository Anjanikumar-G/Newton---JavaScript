// --------------- Creation of Array ------

// const arr = [1, 2, 3, 4];
// const arr2 = new Array();

// // java ->
// // int[] arr = new int[4]

// console.log(arr, arr2);

//  ---------------------- Equating Arrays ----------------

// const arr1 = [1, 2, 3, 4];
// const arr2 = [1, 2, 3, 4];

// console.log(arr1 === arr2); //false

// const arr3 = arr1;

// console.log(arr2 === arr3); // false
// console.log(arr1 === arr3); // true

//  --------------------- Operations on Array ----------------

// In-Place -> Changing the Obj on the same Address. Without creating a new Obj.

// 1. push -> In-Place

// let arr = [12, 3, 4]; // abc@123

// console.log(arr.push(100), "pushing new element 100"); // 4
// console.log(arr, "printing after Push"); // [12, 3, 4, 100]

// 2. pop -> In-Place

// console.log(arr.pop(), "Pop the last element of the array"); // 100
// console.log(arr, "printing after Pop");

// 3. slice -> it returns a shallow copy of array
// This is not In-place

// arr = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(arr, "before sliced array");

// const slicedArray = arr.slice(0, 5);
// console.log(slicedArray, "sliced array");

// const slicedArray2 = arr.slice(3, 7);
// console.log(slicedArray2, "sliced array");

// const slicedArray3 = arr.slice(3);
// console.log(slicedArray3, "sliced array");

// console.log(arr, "array after slicing"); // [1, 2, 3, 4, 5, 6, 7, 8]

// 4. splice -> In-Place

// If i want to deleted 4,5,6,7
// 3 is the index of 4
// 4 is nothing but count of element from the index 3 you want to delete.
// console.log(arr, "original array Before Splice");
// const splicedArrray = arr.splice(3, 4);
// console.log(splicedArrray, "spliced array");
// console.log(arr, "original array After Splice");

// 5. Sort -> In-Place

// arr = [9, 3, 7, 4, 8, 1, 2];
// console.log(arr, "array before sorting");
// const sortedArray = arr.sort(); // O(nlogn)
// const reverseArray = arr.reverse(); //O(n)  // why this is bad ??
// console.log(sortedArray, "sorted arrray");
// console.log(
//   sortedArray == arr,
//   "see if sortedArray and original array are same"
// );

// console.log(reverseArray, "sorted reverseArray arrray");

// ------ sort function by Default Sorts a array in LEXICOGRAPHICALLY way

// TODO: get the answer for mixed sorting. ...
// arr = [
//   1,
//   20,
//   3000,
//   8,
//   305,
//   70,
//   400,
//   5000,
//   9,
//   410,
//   999,
//   90,
//   100,
//   10000,
//   10000000,
//   1000000000,
//   100000000000,
//   "A",
// ];
// arr = ["a", "baz", "asdasdasdfasdfasdfasdfasdfasdfa"];
// console.log(arr, "before sorting original array");
// const sortedArray = arr.sort(); // this sort will sort in Loxographical way
// const ascendingOrderSortedArray = arr.sort((a, b) => a - b); // sorts in Non Loxographical  way
// const dcendingOrderSortedArray = arr.sort((a, b) => b - a);
// console.log(dcendingOrderSortedArray, "sorted array");

// 6. Shift -> In-place
// arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr, "before shift array");
// console.log(arr.shift(), "shifted value"); // 1
// console.log(arr, "afteer shift array");

// // 7. unshift -> In-place

// arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr, "before unshift array");
// console.log(arr.unshift(0), "unshifted value"); // 8
// console.log(arr, "afteer unshift array");

//  ----------------- Looping -----------------

// 1. for while

// let array = [1, 2, 3, 4, 5];
// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
//   console.log(element, "for loop");
// }

// // for of  -> value

// for (let item of array) {
//   console.log(item, "for of"); // [1,2,3,4,5]
// }

// // for in loop -> Keys (Index are the keys in the array)

// for (let item in array) {
//   console.log(item, "for in"); // 0, 1, 2, 3, 4
// }

//

//  ------------------ Array Callback FUnctions --------------------

// 1. ForEach

// let arr = [5, 8, 99, 100, 240, 6, 93, 64];

// console.log(arr);

// hey array FOR-EACH of your Member I want to do SOMETHING

// What is this something? ->
// user will decide what he wants, he need to give a function for that.

// function satbeerWants(item) {
//   alert(item + " satbeer wants");
// }

// arr = ["hello", "world", "nice", "thisngs"];

// function utkarshWants(item, i) {
//   console.log(item, i, "utkarsh want fuction");
// }

// arr.forEach(utkarshWants);

// What is the Reponsibility of forEach.
// 1. TO travel/traverse to each Item/element in array.
// 2. TO execute the callbackFunction (utkarshWants, satbeerWants) for that perticulat Item.

/*
  forEach Function must me like this 

  function forEach( fn ) {
    // Traveeling to the item
    // By travvelling to item they know about item, index 

    fn(item, index, arr);

  }

*/

// 2.  map

// const arr = [1, 2, 3, 4];

// questoin to tripple the Item of arr

// In inperative programming
// for (let index = 0; index < arr.length; index++) {
//   const element = arr[index];
//   console.log(element * 3);
// }

// function uktrashTrippleFunction(item) {
//   // return item * 3;
// }

// const mappedArray = arr.map(uktrashTrippleFunction);

// console.log(mappedArray, "mapped array 1");
// console.log(arr, "original array");

// Responsibility of Map.

// 1. Responsibility of For Each
// 2. Return the Array;

// ----------------- Why this is used --------------------
// 1. Imperative Programming
// 2. Declarative Programming.

// let arr1 = [1, 2, 3, 4, 5];

//  Question is to double the elments of the array.
// i have to take care of the whole execution. (Imperative Programming)

// for (let index = 0; index < arr1.length; index++) {
//   const element = arr1[index];
//   console.log(2 * element, "slavery");
// }

// Work you are doing//
// 1. Iteration for loop
// 2. Doubling and printing.

//2 . Declarative Programming.

// As a manager I need to do some work .....
//double the elments of the array. as a manager

// arr1.forEach((item) => {
//   console.log(2 * item, "forEach");
// });

// work done
// 1. Doubling and printing.

/*
  map Function must me like this 

  function map( fn ) {
    cosnst arr []
    // Traveeling to the item
    // By travvelling to item they know about item, index 

    const result = fn(item, index, arr);
    arr.push(result)
    return result

  }

*/

// 3.  ------------------------ Filter --------------- ---

// let arr = [19, 21, 29, 44, 1, 6, 3, 88];
// arr = [1, 2, 3];

// const filterdArray = arr.filter((item) => {
//   // console.log(item, i, arr);
//   if (item % 2 === 0) {
//     // then only include item
//     return true;
//   } else {
//     // exclude the item
//     return false;
//   }
// });

// console.log(filterdArray, "filtered array");
// console.log(arr, "real array");

// / 4.  ------ -------------- FIND --------------------

// Returns the value of the first element in the array where predicate is true, and undefined otherwise.
// gives back element if it is there.
// it gives back the undefined

// const item = [1, 2, 3, 4, 5, 6].find((item, index, array) => {
//   return item === 99;
// });
// console.log(item, "item");

// 5. --------------------- FInd Index ---------------
// Returns the index of the first element in the array where predicate is true, and -1 otherwise.

// const arr = [1, 2, 3, 4, 550, 6, 88, 99, 55];
// const index = arr.findIndex((item, index, arr) => {
//   return item === 55;
// });
// console.log(index, "returned index");

// 6. -------------------------- FIND LAst -------------

// const arr = [1, 2, 3, 4, 55, 6, 88, 99, 55];
// const index = arr.findLastIndex((item, index, arr) => {
//   return item === 55;
// });

// console.log(index, "find last item"); // 8

/*
  Algo for all of the above 
  1. Traverse 
  2. Call function fn (callback function) and store its value  fn(value, index, array/obj)
  3. Process the value map, filter 
  4. Return the Value from the function : map, filter( array) ; find, FindIndex (number) : forEach (undefined);
*/

// 7 . ------- REDUCE TODO: later in pollyfills --------------

// Ask is to DO a summation ->
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// way 1 ->
// let count = 0;
// for (let index = 0; index < arr.length; index++) {
//   const element = arr[index];
//   count += element;
// }

// console.log(count, "for loop answer");

// // Way 2 ->

// const answer = arr.reduce((previosValue, current, index, array) => {
//   return previosValue + current;
// });

// console.log(answer, "reduce answer");

// 8. Concat

// const array1 = ["a", "b", "c"];
// const array2 = ["d", "e", "f"];
// const array3 = array1.concat(array2);

// console.log(array3);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]

// 9. ---------  toString() Method ------
// const obj = {
//   name: "utkars",
//   class: 9,
// };

// const answer = obj.toString();
// console.log(answer); // '[object Object]'

// console.log(JSON.stringify(obj)); // '{name: "utkars"class: 9,}'

// let arr = [1, 2, 3, 4, 5];

// console.log(arr.toString()); // "1,2,3,4,5";
// console.log(JSON.stringify(arr)); // "[1,2,3,4,5]";

//  ----------------- JOIN -----------

// const arr = ["aero", "plane"];

// arr.join(); // //aero,plane
// arr.join(""); // //aeroplane
// arr.join(" "); // //aero plane