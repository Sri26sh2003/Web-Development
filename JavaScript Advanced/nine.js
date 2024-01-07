let obj = {
    x:10,
    fun(){
        y ={
            gun: ()=> {
                console.log(this.x);
            }
        }
        y.gun();
    }
}
obj.fun();
/*
    Here fun is normal function and is called by object obj and in fun we have an object y which has arrow 
    function gun in which it uses this here this refers to calling context of obj or it refers to obj
    so the value 10 is shown in output
*/