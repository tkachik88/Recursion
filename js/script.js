// Task #1
function getFactorial(n){
    if (n === 1){
        return 1;
    }
    else{
         
        return n * getFactorial(n - 1);
    }
}
let  result = getFactorial(3); 
console.log(result); 

// Task #2
// pow(num, degree)
function pow(x, n){
    if(n === 1){
        return x;
    }else{
        return x * pow(x,n - 1);
    }
}
console.log(pow(2, 3));


