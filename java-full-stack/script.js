/*let name="Tamilselvi";
var age=20;
const city="banglore";
console.log(name);
console.log(age);
console.log(city);
console.log("my name is "+name+" and my age is "+age+" and i am from "+city);
console.log(age+5);
console.log(age-5);
console.log(age*2);
console.log(age/2); 
console.log(age%3);
age+=5;
console.log(age);
age-=5; 
console.log(age);
age*=2;
console.log(age);
age/=2;
console.log(age);
age%=3;
console.log(age);
let age1=21;
console.log(age>age1);
console.log(age<age1);
console.log(age==age1);
console.log(age!=age1);
console.log(age>=age1);
console.log(age<=age1);
console.log(age===age1);*/
/*let food="biriyani";
let breakfast="idly";
let food1="idly";
let food2="dosa";
let food3="vada";
if(food1==breakfast ){
    console.log(breakfast+" is my favourite food");
}else if(food2==breakfast){        
    console.log(breakfast+" is not my favourite food");
}
for(let i=1;i<=10;i++){
    console.log("day "+i+" completed");
}
let i=1;
while(i<=5){
    console.log(i);
    i++;
}
let username="tamilselvi";
let password="tk143";
let name="kanna"
let pin="kanna143";
let name1="bujji";
let pin1="bujji143";
if(name=="kanna"){
    console.log(name);
    if(pin=="tk143"){
        console.log("welcome "+name);
    }
}*/
/*nested for loop*/
/*
for(let i=1;i<=10;i++){
    for(let j=1;j<=10;j++){

    console.log(i + " * "+j+" = "+(i*j));

}
}*/
/*let n = 10;
let lastGiftPerson=0;

for (let i = 1; i <= n; i += 2) {
    console.log("Person " + i + " is getting gift");
    lastGiftPerson = i;
}
for(let j=2; j<=n; j+=2){
    console.log("Person " + j + " is getting gift");
    lastGiftPerson = j;
}
console.log("Last gift was given to Person " + lastGiftPerson);*/
/*let n = 10;
let last=0;
for(let i=1;i<=n;i=i+2){
    last=i;
}
console.log("last person is "+last);
function cook(){
    console.log("cooking started");
    console.log("cooking in progress");
    console.log("cooking completed");
    console.log("eating started");
    console.log("eating completed");
}
for(let i=1;i<=2;i++){
cook();
}
function dish(vessels){
    console.log("we have to wash "+vessels+" vessels");

}
dish(2);*/
/*function add(a,b){
    return a+b;
}
add(5,10);
let sum=add(5,10);
console.log(sum);
function guess(n)
{
    let guess = number(prompt("enter a number:"));
    if(guess===n){
        console.log("congratulations! you guessed the number.");
    }else if(guess<n){
        console.log("too low! try again.");
        guess(n);
    }else{
        console.log("too high! try again.");
        guess(n);
    }
}
let number=Math.floor(Math.random()*100)+1;
guess(number);
function num(n){
    if(n>10){
        return;
    }
    console.log(n);
    n+=1;
    num(n);
}
num(1);
function guess(n) {
    let userGuess = Number(prompt("Enter a number:"));

    if (userGuess == n) {
        console.log("Congratulations! You guessed the number" + userGuess);
    } else if (userGuess < n) {
        console.log("Too low! Try again" + userGuess);
        guess(n);
    } else {
        console.log("Too high! Try again" + userGuess);
        guess(n);
    }
}

let number = Math.floor(Math.random() * 100) + 1;
guess(number);*/
let chocolate=["dark chocolate","milk chocolate","white chocolate","kitkat","perk"];
let sales={
    chaithu:chocolate[0],
    tamilselvi:chocolate[1],
    bujji:chocolate[2],
    kanna:chocolate[3],
    divya:chocolate[4]
};
console.log(sales);
