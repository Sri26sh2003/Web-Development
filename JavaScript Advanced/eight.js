let obj = {
    x:10,
    fun(){
        console.log(this.x);
    }
}

obj.fun();
// fun is normal function when fun is called by obj this points to calling context that is obj so x is assigned 10 and output is 10 

let obj2 = { 
    y:9,
    fun:()=>{
        console.log(this.y);
    }
}
obj2.fun();// undefined bcz when fun is arrow function