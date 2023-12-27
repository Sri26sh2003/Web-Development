// Uss Id p ko Phele pakado document hain pura usmai se get element by id us karke usse pakado jispe manipulate karna hain
// Phele pura element ko pakdo


// 1. Using ID ID is unique
let var1 = document.getElementById("one");
console.log(var1);
// Element ko pakadne ke baad uske andar ka text ko lake do
console.log(var1.innerText);
// Element ko padkado uske baad uss mai jitne bhi html use huye hain usko bhi leke ata hain content ke saath
console.log(var1.innerHTML);// Two methods to extract the texts from the element
console.log(var1.innerText);


// 2. Using Class they can be duplicate
// Phele pura ek variable main pakdo
let var2 = document.getElementsByClassName("tech");
console.log(var2);
// Treat them as array
console.log(var2[1].innerText);
console.log(var2[1].innerHTML);
// Manipulation js ke madad se html elements ko manipulate kar sakte hoo
var2[1].innerText = "Nodejs";


// 3. Using TagName
let var3 = document.getElementsByTagName("h4");
console.log(var3);
var3[2].innerText = "Hello Developers";
console.log(var3[2].innerText);
// Adding css to the element
var3[2].style.color = "red";


// JS ke madad se 
// 1. Hum html elements ko extract kar sakte hain
//      1. getElementById
//      2. getElementByClassName
//      3. getElementByTagName
//      4. querySelector
// 2. Manipulate kar sakte hain
// 3. CSS add Kar sakte hain
// 4. Class , id name change ya update kar sakte hain
// 5. Setting Attributes to the elements


// Query Selector
// for class
let var4 = document.querySelector(".class1");
console.log(var4);
// for id
let var5 = document.querySelector("#id1");
console.log(var5);
// for tagname
let var6 = document.querySelector("h2");
console.log(var6);

// class name updation or change
var4.className = "Hello";
console.log(var4);
var4.classList = "helo hello helloo";
console.log(var4);

// setting attributes
// targetvaribale.setAttribute("attributename","attributevalue");
var4.setAttribute("id","js");
console.log(var4);

// By default sab ke saath window conected hota hain
// window.document.getElementById("Idname");