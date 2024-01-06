// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// SPREAD --> Converts each ele of array into new ele and the prev array is lost
const onearray = [1,2,3,4];
const twoarray = [5,6,7,8];
// concat both the arrays
// Method one
const threearray = onearray.concat(twoarray);
console.log(threearray);
// Method two 
const threearray2 = [onearray,twoarray];
console.log(threearray2);
// Method three Spreading or using spread operator ...
const threearray3 = [...onearray,...twoarray];
// ...onearray = breaks each ele into new ele that is 1 , 2 , 3 , 4
// ...twoarray = 5 , 6 , 7 , 8
// putting both into [] gives us a new array with all 8 elements


// Remember type of array is always an object 

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// REST --> Takes all the elements and wraps into a new array
// type of a function is also an object
function testone(){
    console.log(typeof arguments);
}
testone(1,2,3);
testone([1,3,4]);

// We want all the arguements in an array
function myarray(){
    console.log(typeof arguments);
    let args = Array.from(arguments);// Converts an object into array
    let finalarray = args.map(ele => ele);
    console.log(finalarray);
}
myarray(1,2,4);
myarray(1,2,3,4,5,6,7);

function myarray2(...args2){
    console.log(typeof args2);
    let finalarray2 = args2.map(ele => ele);
    console.log(finalarray2);
}
myarray2(1,2,3);
myarray2(1,2,3,4,5,6,7);

// Examples on Spread
const names = ["supernam","batman","spiderman"]
const mynames = ["Srisha",...names,"Bussinessman"]
console.log(mynames);

const webdevelopers = "Frontend-developer";
console.log([...webdevelopers]);

// Examples on Rest
function first(...variable){
    return variable;
}
console.log(first("x","y","z"));