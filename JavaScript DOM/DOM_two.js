// Creating New Elements Using DOM of JavaScript
// 1. Creat a element
// 2. Add the required styles and classes and content
// 3. Append the created child into the parent


// Append Child
//1st phele banana hain aur phir jodna hain
let title = document.createElement("h1");
title.className = "Class1";
title.style.fontSize = "25px";
title.style.textAlign = "center";
title.textContent = "Hello Web Developers";
document.body.appendChild(title);
// document.Parent.appendChild(CreatedElementByDOM);


// Remove Child
// Phele pakadna padega jisko remove karna ho usko
// 1st phele pakadna hain aur phir 2nd nikalna hain
let ul = document.querySelector("ul");
console.log(ul);
// Sabhi All lists ko Pakadna Hain
let lists = document.querySelectorAll("li");
console.log(lists);
// for of loop runs on all the elements in an array
for(list of lists){
    ul.removeChild(list);
}
// ul ko pakdo joki parent hain
// lists ko ek array mai pakdo name lists
// use for of loop to iterate every list present in lists
// parent(ul).removeChild(list);