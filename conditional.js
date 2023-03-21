/* 
if
if .. else 
if else .. if else 
*/

//parseInt method to convert string to number 

let a = prompt("hey this side akash")
a = Number.parseInt(a)
if (a>0){
    alert("this is good age")
}

else {
    alert("this in not good buddy")
}

let a = prompt("Hey whats you age?");
a = Number.parseInt(a); // Converting the string to a number
if(a<0){
  alert("This is an invalid age");
}
else if(a<9){
  alert("You are a kid and you cannot even think of driving");
}
else if(a<18 && a>=9){
  alert("You are a kid and you can think of driving after 18");
}
else{
  alert("You can now drive as you are above 18");
}
console.log("Done")*/
// HomeWork - Explore switch statement and write a basic program in the comments

//ternary operator
console.log("You can", (a<18? "not drive" :"drive"))