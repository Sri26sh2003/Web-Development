document.addEventListener("click",hello);
function hello(){
    let var1 = document.getElementById("id1");
    var1.innerText = "Hello Audience From Banglore"
    var1.style.textAlign = "center";
}
// document.addEventListener Applies on Whole document
// pass two things event and kisko call karna hain
// function defination and kya karna hain
// Events
// click , dblClick , mouseenter etc refer mdn referrance


// For button no need of event listener now already event mentioned in html 
function Submission(){
    let var1 = document.getElementById("id2");
    var1.innerText = "Log Out";
    var1.style.color = "red";
    var1.style.textAlign = "center";
    var1.style.backgroundColor = "gray";
    var1.style.padding = "16px";
    var1.style.border = "5px solid yellow";
}