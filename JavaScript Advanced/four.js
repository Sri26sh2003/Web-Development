try{
    let x = undefined;
    console.log(x[0]);
    console.log("This will not be executed bcz error has occured");
}
catch(err){// we can see what error has occured in the form of arguement error ke details
    console.log("Error is handled in catch block",err);
}
finally{
    console.log("Finally always executes no matter try will execute full or catch will execute full");
}
console.log("End of the code");