class Product {
    name;//
    price;//---> Properties--variables--data members
    rating;//
    display(){//---> Behaviours--functions--member Functions
        console.log("Displaying the member Function");
    }
}
const p = new Product();// Objects 
console.log(p);
p.display();