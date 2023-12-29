// Functions
// They are called as first Class Citizens in JavaScript
// funtion keyword is used to declear
function greet(){
    console.log("Hi There");
    console.log("Srisha This Side");
}
greet();
// We can pass a placeholder called parameter in the function 
function sqr(x){//x is a parameter
    console.log(x*x);
}
sqr(6);// 6 is the arguement
// We can return something from a particular function
function sqrt(x){
    return x*x;// We can return a value or anything if we dont return then in js undefined funciton is returned
}
let a = sqrt(7);
console.log(a);


// Functions without parameters
// If no Parameters then no Arguements
function msg(){
    console.log("Hello World");
}
// Function with return where the execution of the function terminates
function message(){
    return "Hey Web Developer";
}
msg();
let b = message();
console.log(b);
let c = b + " How Are You";
console.log(c);


// Functions with parameters single and multiple
// Single parameter
function display(messageToBeDisplayed){
    return messageToBeDisplayed;
}
console.log(display("WhatsApp"));
console.log(display("How was your day"));
// Multiple parameters
function add(x,y){
    return x+y;
}
console.log(add(3,4));
// Default Parameters
function sub(x=10,y=8){
    return x-y;
}
console.log(sub(7,5));
console.log(sub());
// Always remember arguement allocation left to right
function mul(x,y=6){
    return x*y;
}
console.log(mul(3));// here 3 is assigned to x
function div(x=9,y){
    return x/y;
}
console.log(div(5));//error bcz 5 is assigned to x not y left to right
// Arrays as arguements
function sumOfArray([num1,num2,num3]){
    return num1 + num2 + num3;
}
let nums = [3,4,5];
console.log(sumOfArray(nums));
// If array size is more then the parameters given then other values of array are no effected
function sumOfArray_2([num1,num2,num3]){
    return num1 + num2 + num3;
}
let nums2 = [6,7,8,9,19];
console.log(sumOfArray_2(nums2));
console.log(nums2);


// Functions with unlimited arguements
// arguements is a key word and object which stores all the arguements passed to a function it has .lenght property we can access it as array where we have access to all the parameters
function sumOfAllParameters(){
    let sum = 0;
    for(let i=0; i<arguments.length; i++){
        sum = sum + arguments[i];
    }
    return sum;
}
let result = sumOfAllParameters(1,2,3,4,5,6);
console.log(result);
// If you already defined the function with 2 parameters and you are getting more then 2 arguements in the funciton call even then you can access them using arguements key word


// Arrow Functions
// Single parameter x and return statement x*x decleration of arrow function
// If single parameter then no need of paranthesis also let res = x => x*x;
// If single single line of code then no need of return word also just x*x
let res = (x) => x*x;
console.log(res(9));// While calling arrow function use the variable assigned to it to call it
// Multiple parameters
// If multiple parameters then paranthesis is must 
let res2 = (x,y) => x+y;
console.log(res2(5,6));
// If multiple line of statements then return word is must
let res3 = (x,y) => {
    console.log("Adding " + x + " and " + y + " We get");
    return x+y;
}
console.log(res3(9,8));
// Use () To Wrap the objects
let res4 = (x,y) => ({Sum:x+y,diff:x-y});
console.log(res4(5,3));


// Anonymous Function
// It is need to be handled like arrow function it is assigned to a variable for further use
let x = function(){
    console.log("Hi");
}
x();// While debugging it is found difficult
// Immediately Invoke Function(IFE)
// Whole function is wraped in () and for calling at the end call by ()
(function exec(){
    console.log("I am IFE");
})();
// If any arguements is need to be passed then pass it at the end in ()
(function (x){
    console.log(x*x);
})(5);// arguements is passed here


// Function Experssion
// Directly if a function is decleared in normal form then it is not a function expression
// If a function is defined using a variable like in case of anonymous or anonymous or IFE then it is a funciton expression
// A normal funciton is decleared when it is used many times 
// Or if a function is need to be passed as a parameter or IFE use occurs then funciton expression is used
// Funciton expression are 2 types
// 1. Named function expression 
(function fun1(){
    console.log("Hi i am fun1");
})();// It is a IFE named function expression
let s = function fun1(){
    console.log("Hi even i am fun1");
}
s();// It is a named funciton expression
// 2. Anonymous function expression
let sp = function (){
    console.log("Hi i am fun2");
}
sp();// anonymous funciton expression 
(function (){
    console.log("Hi even i am fun2");
})();// IFE anonymous funciton expression


// Self Invoking Functions
// IFE's are also called as self invoking funcitons
// no need to call the function

// Arrow functions , Anonymous needs a variable to call the function