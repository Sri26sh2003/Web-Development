class Product{
    #name;
    #price;
    #rating;
    static custom(){
        console.log("This is static method");
    }
    constructor(n,p,r){
        this.#name = n;
        this.#price = p;
        this.#rating = r;
    }
    display(){
        console.log("Name:",this.#name);
        console.log("Price:",this.#price);
        console.log("Rating:",this.#rating);
    }
}
const p = new Product("Iphone15",150000,5);
p.display();
Product.custom();
// #name implies name is private now and it is oonly accessed by member functions using this.#name
// Static methods are attached to classes and refers to class and accessed by dot class name