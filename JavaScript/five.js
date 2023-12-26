// Objects
// Key Value Pairs
// Real life Entity
// Objects contains Properties also Called as Attributes
// For 25 different properties we need 25 diff variables 
// Using objects we can use one object with 25 diff properties
// At once we can initialize more then one values using key value pairs


// Creating objects 
// 1.
let obj = {id:101 , name:"Srisha" , salary:1000000};
console.log(obj);
//2.
let emp = new Object();//In js their exsists a global object by which we can make other objects;
console.log(emp);
emp.id = 102;
emp.name = "Sangeeta";
emp.salary = 200000;
console.log(emp);
//3.
function EMP(i,n,s){
    this.id = i;        //this points to that empty object and 
    this.name = n;
    this.salary = s;
}
const e = new EMP(103,"Jayateerth",960000);  //1st it creats new empty object in that empty objects add new key value pairs
console.log(e);
// Accessing and Updating and deleting the key values in object
emp.status = "Mom"; // Adding new
emp["Call"] = "mummy";
console.log(emp);
console.log(emp.name); // Accessing
console.log(emp["name"]);
emp.name = "Sangita"; // Updating
emp["name"] = "Sangi";
console.log(emp);
delete emp.salary; // Deleting
console.log(emp);


// Objects Methods
let obj2 = {
    id : 1000,
    name : "Soap",
    price : 45
}
console.log(obj2);
// their is a object keywords which returns a arrays
let keys = Object.keys(obj2);
console.log(keys);
let values = Object.values(obj2);
console.log(values);
let entities = Object.entries(obj2);
console.log(entities);
Object.freeze(obj2);// updation , deletion , entry not allowed
obj2.id = 101;
obj2.cost = 30;
delete obj2.price;
console.log(obj2);
let obj3 = {
    id : 10002,
    name : "Sandals",
    price : 60
}
console.log(obj3);
Object.seal(obj3);// updation allowed but deletion and entry not allowed
obj3.id = 10005;
obj3.sell = 600;
delete obj3.id;
console.log(obj3);
let obj4 = Object.assign({},obj3);// creats obj4 a copy of obj3
console.log(obj4);
let obj5 = Object.assign({cost:43,sell:55},obj3);// creats obj5 a copy of obj3 with two new entries
console.log(obj5);