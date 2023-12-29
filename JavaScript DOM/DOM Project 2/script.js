let decrementbtn = document.getElementById("decrement");
let incrementbtn = document.getElementById("increment");
let resetbutton = document.getElementById("reset");
let displayvalue = document.getElementById("result");

incrementbtn.addEventListener("click", () =>{
    const value = Number(displayvalue.innerText);
    // if(value>=10){
    //     alert("More then 10 not allowed");
    // }
    // else{
    //     displayvalue.innerText = value + 1;   
    // }
    document.getElementById("result").style.fontWeight = "1000";
    document.getElementById("result").style.fontSize = "20px";
    displayvalue.innerText = value + 1;
});

decrementbtn.addEventListener("click", () => {
    const value = Number(displayvalue.innerText);
    // if(value<=0){
    //     alert("Negative Values are not allowed");
    // }
    // else{
    //     displayvalue.innerText = value - 1;
    // }
    displayvalue.innerText = value - 1;
    document.getElementById("result").style.fontWeight = "1000";
    document.getElementById("result").style.fontSize = "20px";
});

resetbutton.addEventListener("click", () => {
    displayvalue.innerText = 0;
    document.getElementById("result").style.fontWeight = "1000";
    document.getElementById("result").style.fontSize = "20px";
});