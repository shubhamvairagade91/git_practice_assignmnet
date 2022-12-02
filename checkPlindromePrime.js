//Checking prime
let count = 0;
let num = 7;
for(let i = 1; i<=num; i++){
  if(num%i==0){
    count++;
  }
}
if(count == 2){
  console.log("prime");
}
else{
  console.log("not prime");
}

//Checking palindrome
let bag = "";
let str = "mmaamm";
for(let i = str.length-1; i>=0 ; i--){
    bag += str[i];
}
if(bag == str){
  console.log("palindrome");
}
else{
  console.log("not palindrome");
}