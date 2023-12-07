const btn = document.getElementById("button");

const randomcolor = () => {
    let var1 = "0123456789ABCDEF";
    let hash = "#";
    for(let i = 0 ; i < 6 ; i++){
        hash = hash + var1[Math.floor(Math.random()*16)];
    }
    return hash;
};

console.log(randomcolor());

function colourChanger(){
    document.body.style.backgroundColor = randomcolor();
}

btn.addEventListener("click", colourChanger);