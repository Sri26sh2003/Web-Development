// Arrays in JavaScript
// Heterogeneous Arrays in JavaScript 
// They can store different data types at same time
// Array are represented by []

//Representation
let a = [1,2,3,4,5,"Srisha",false]
console.log(a);

let b = new Array();
console.log(b);

let c = new Array(5);
console.log(c);

let d = new Array(1,2,3,"Srisha",true)
console.log(d);

// Accessability
// indexes starts from 0 1 2 3 ..
let a1 = [1,2,3,4,5]
console.log(a1[2]);
a1[2] = 10;
console.log(a1);
console.log(a1[2]);

// Array Methods

// Pushing elements in last index
let b1 = [1,2,3,4,5,6]
console.log(b1);
b1.push(7);
console.log(b1);
b1.push(8,9);
console.log(b1);

// Getting last elements of array
let c1 = [1,2,3,4,5,6]
let last = c1.pop();
console.log(c1);
console.log(last);

// Getting first element of array
let d1 = [1,2,3,4,5,6]
let first = d1.shift();
console.log(first);
console.log(d1);

// Pushing an element at the first index
let e1 = [1,2,3,4,5,6]
e1.unshift(7);
console.log(e1);
e1.unshift(8,9);
console.log(e1);

// Concatination of two arrays
let arr1 = [1,2,3,4,5]
let arr2 = [6,7,8,9]
let arr3 = arr1.concat(arr2);
console.log(arr1);
console.log(arr2);
console.log(arr3);

// Getting index of an element
let arr4 = [1,2,3,4,5]
console.log(arr4.indexOf(3));

// Reversing an Array
let arr5 = [1,2,3,4,5,6]
let arr6 = arr5.reverse();
console.log(arr6);

// Conversion of an array into string
let arr7 = [1,2,3,4,5,6]
arr7.join();
console.log(arr7);
let arr8 = [1,2,3,4,5,6]
arr8.join("#");
console.log(arr8);

// Getting a subarray or part of array from indexes example 2,5 the elements present on indexes 2 3 and 4 will be printed
let arr9 = [1,2,3,4,5,6,7]
console.log(arr9.slice(2,5));

// Inserting an element in between the array elements
// Inserting single element at perticular index without deleting the existing elements
let ar1 = [1,2,3,4]
ar1.splice(2,0,5);
console.log(ar1);
// Inserting more then 1 element at perticular index without deleting the existing elements
let ar2 = [1,2,3,4]
ar2.splice(2,0,5,6,7);
console.log(ar2);
// Inserting single element at perticular index with deleting the existing elements at the index given
let ar3 = [1,2,3,4,5]
ar3.splice(2,1,6);
console.log(ar3);
// Inserting more then one elements at perticular index with deleting the existing elements at the index given
let ar4 = [1,2,3,4,5];
ar4.splice(2,1,6,7);
console.log(ar4);
// Inserting single element by deleting multiple elements starting from the index given
let ar5 = [1,2,3,4,5,6]
ar5.splice(2,3,7);
console.log(ar5);
// Inserting more then one elements by deleting multiple elements starting from the index given
let ar6 = [1,2,3,4,5,6]
ar6.splice(2,3,7,8,9);
console.log(ar6);