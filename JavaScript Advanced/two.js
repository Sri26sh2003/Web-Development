// Sets --> It is an object which stores unique vlaues
let set1 = new Set();
console.log(set1);

let set2 = new Set([1,2,3]);
console.log(set2);

let myarray = [1,2,3,4,5];
let newset = new Set([...myarray]);
console.log(newset);

console.log(set2.size);
console.log(set2.add(5));
console.log(newset.add(2));// only adds unique elements
console.log(newset.has(9));
newset.clear()
console.log(newset);

let setA = new Set();
let setB = new Set();
function setdifference(setA,setB){
    return new Set([...setA].filter(element => !setB.has(element)));
}
// First destructure the setA elements and put them in array
// Apply filter property to that array with callback function to check those elements present in setA should not be present in setB
// So to check the elements in setB use .has property 
// Hence the function also returns you a set so return it in new set

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Maps --> It is a object which holds key value pairs also keeps the original format of key value 
let map1 = new Map();
console.log(map1.size);
// convert the array into map 
let arr = [
    [1,"Mithun"],
    [2,"Hithesh"],
    [3,"Anurag"],
    [4,"Sanket"],
    [5,"Vishvamohan"]
]

arr.map((arrayitem)=>map1.set(arrayitem[0],arrayitem[1]));

console.log(map1);