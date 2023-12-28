const btn = document.getElementById("button");

const  Randomcolor = () => {
    document.body.style.backgroundColor = changerandoamcolor();
}

function changerandoamcolor(){
    let val = "0123456789ABCDEF";
    let cons = "#";

    for(let i=0; i<6; i++){
        cons = cons + val[Math.floor(Math.random()*16)];
    }

    return cons;
}
btn.addEventListener("click", Randomcolor);
// Button Ko pakdo phele
// Button pe event listener lagao ki click karne par konsa color change ho
// Uss function ko call karne ke baad uss funtion mai js ki madad se kya karna hain document mai vo define karke change bg color funtion ko call karo
// Change bg color function mai val and cons ko concat karo aur loop lagaoo to choose any 6 from val 
// Random 0 to 0.99 tak generate karta hain so 16 per multiple karne per humko 0 to 15 tak interger milta hain
// Usse return karo