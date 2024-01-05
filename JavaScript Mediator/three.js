// RegExp Regular Expression or Pattern Matching 
let pattern = 'web';
let regexone = new RegExp(pattern);
let flag = 'gi';
let regextwo = new RegExp(pattern,flag);
let strToCheck = "Web development is very easy just try to be consistent and web pages are too easy to inspect";
console.log(regextwo.test(strToCheck));

let regexthree = /web/gi;

// 1. By regExp 
console.log(regexthree.test(strToCheck));

// 2. By String 
// a. Match
console.log(strToCheck.match(regexthree));

// b. Replace
console.log(strToCheck.replace(regexthree,'W-E-B'));
console.log(strToCheck.replace(/to/gi,'to(very)'));

// Usecase
let weburl = "https://Learn%20with%20srisha.com";
let useableurl = weburl.replace(/%20/gi,'-');
console.log(useableurl);

// General Usecase 
let weburl2 = "https://Learn%20with%50srisha.com";
let useableurl2 = weburl.replace(/%\d0/gi,'-');
console.log(useableurl);

// Explore more in regexr.com