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
    getrating(){
        console.log(this.#rating);
    }
    setrating(r){
        if(r<0) return;
        this.#rating = r;
    }
    get priceinrs(){
        console.log(this.#price);
    }
    set setpriceinrs(p){
        if(p<0) return ;
        this.#price = p ;
    }
}
const p = new Product("Iphone15",150000,5);
p.setrating(10);
p.getrating();
// we can use getrating and set rating member functions to access
p.setpriceinrs = 143355;
p.priceinrs;
// By using get set keywords we can use to update data members like properties even if they are private
// For accessing p. in this way we creat get set methods