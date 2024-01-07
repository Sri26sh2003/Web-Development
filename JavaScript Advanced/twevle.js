class complexnumbers{
    #real;
    #img;
    constructor(r,i){
        this.#real = r;
        this.#img = i;
    }
    display(){
        console.log(this.#real,"+",this.#img,"i");
    }
    get real(){
        return this.#real;
    }
    get img(){
        return this.#img;
    }
    addtwocomplexnumbers(c2){
        this.#real += c2.real;
        this.#img += c2.img;
    }
}
const c1 = new complexnumbers(2,3);
c1.display();
const c2 = new complexnumbers(4,5);
c1.addtwocomplexnumbers(c2);
c1.display();