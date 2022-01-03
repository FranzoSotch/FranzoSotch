function isEven(N){
    if (N==0){
        return "even";
    }
    if (N==1){
        return "odd";
    }
    else{
        return isEven(N-2);
    }  
}
console.log(isEven(75));