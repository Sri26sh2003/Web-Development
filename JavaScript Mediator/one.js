// Higher Order Functions or First Class Functions
// A Function is behaved as a variable and passed as the arguements
const powerTwo = (n) => {
    return n ** 2;
}

function powerThree(powerTwo,n){
    return powerTwo(n) * n;
}

console.log(powerThree(powerTwo,5));

// A Function Return A Function
function sayHello(){
    return () => {
        console.log("Hello Srisha");
    }
}
let toPrint = sayHello();
console.log(toPrint);
toPrint();

// Higher order funcitons complex
const higherOrder = (n) => {
    const oneFun = (m) => {
        const twoFun = (p) => {
            return n + m + p;
        }
        return twoFun;
    }
    return oneFun;
}
console.log(higherOrder(2)(3)(4));

// Example Of Higher Oder Function
const mynames = [2 ,3 , 4, 5];
let total = 0;
function sumOFArrays(arr){
    arr.forEach(function(element){
        total += element;
    });
    return total;
}
console.log(sumOFArrays(mynames));

// Methods in js
const greet = () => {
    console.log("Hello Web Developers", Math.random());
}

function greet2(){
    console.log("Hello Srisha 2.0");
}

// setTimeout executes the code once after a particular time
setTimeout(greet2,1000);

// setInterval executes the code repeatedly after a particular interval of time
setInterval(greet,4000);

