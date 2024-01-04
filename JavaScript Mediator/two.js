// Array InBuilt Functions

// 1. forEach
const arr = [1 , 2 , 3, 4, 5];
// By normal Function
arr.forEach(function(element,index,arr){
    console.log(element,index,arr);
})
// By arrow Function 
arr.forEach((ele,ind,ar)=>{
    console.log("Arrow:",ele,ind,ar);
})

// 2. map
arr.map(function(ele,ind,ar){
    console.log("Map:",ele,ind,ar);
})
arr.map((ele,ind,ar)=>{
    console.log("Map-Arrow:",ele,ind,ar);
})
const heros = ["shah-ruk-khan","sunny","salman khan","hrithik"];
heros.map((h)=>console.log(h.toUpperCase()));

// 3. Filter
const herosWithKhan = heros.filter((f)=>{return f.endsWith('khan')});
console.log(herosWithKhan);

// 4. Reduce
const cartBill = [100,200,300,250,350];
const sumOfCartBill = cartBill.reduce((prev,curr)=>prev + curr,0);
console.log(sumOfCartBill);

// 5.Every
const gamescore = [200,300,310,250,150];
console.log(typeof(gamescore[1]));
const gameScoreCheck = gamescore.every((v)=> typeof(v)==='number');
console.log(gameScoreCheck);

// 6.Find
const above200 = gamescore.find((el)=> el > 200);
console.log(above200);

// 7.FindIndex

// 8.Some

// 9.Sort