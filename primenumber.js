prime problem
let num=13
check the given number is prime or not
  let count=0;
    for (i=1;i<=num;i++){
        if(num%i==0)
        count++;
    
    }
    if(count==2){
console.log("Yes");
}else {
console.log("No");

}