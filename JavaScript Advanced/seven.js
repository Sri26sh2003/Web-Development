// Function Constructor
function Product(n,p,r){
    this.name = n;
    this.price = p;
    this.rating = r;
}

const p = new Product("macbook",24000000,5);
console.log(p);
/*
    1. this keyword is diff in js then other language
    2. this keyword referred to the context from where it is called
    3. in the function constructor also
       --> if you return primitive it is ignored and we return the object referred by this
       --> if you return a custom obj then custom obj is returned
       --> if you dont return anything then the object referred by this is returned
*/
let x = {
    p : Product
}
x.p("airpods",2000,5);
console.log(x);
/* 
    1. x.p p Product function ko call karega
    2. this.name this points to calling context what was calling context p p ko call kon kar raha hai x obj
    3. x obj main name key and value rakh do
*/
const Product2 = function(n,p,r){// Function expression or function anonynomous or named same result
    this.name = n;
    this.price = p;
    this.rating = r;
} 
const p2 = new Product2("airpods2",4000,4);
console.log(p2);


const Product3 = (n,p,r)=>{
    this.name = n;
    this.price = p;
    this.rating = r;
} 
const p3 = new Product3("airpods2",4000,4);
console.log(p2);
// The theory of this keyword pointing to calling context is not applicable to arrow functions