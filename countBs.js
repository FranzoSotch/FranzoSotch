function countBs(string){
    let j=0;
    for(i=0;i<=string.length-1;i=i+1){
     if(string[i] == "B"){
            j=1+j;
        }
    }
    return j; 
}
console.log(countBs("thread"));