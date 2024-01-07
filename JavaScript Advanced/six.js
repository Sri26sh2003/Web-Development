class Product{
    constructor(n,p,r){
        console.log("Calling The Constructor");
        this.name = n;
        this.price = p;
        this.rating = r;
        // return 10; not returned if you are returning primitive value
        // return {x:10,y:2}; returned if you are returning non primitive value
    }
    display(){
        console.log("Displaying the current product",this.name,this.price,this.rating);
    }
}
const p = new Product("iphone15",100000,5);// new creats a new empty object
// above we are calling the constructor method
console.log(p);
p.display();