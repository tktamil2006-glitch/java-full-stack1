let amount=4300;
let notes=0;
let rem=0;
if(amount>=500){
    notes=Math.floor(amount/500);
    rem=amount%500;
    console.log("Number of 500 notes in the amount: "+notes);
    console.log("Remaining amount: "+rem);
}
    if(rem>=200){ 
        notes=Math.floor(rem/200); 
        rem=rem%200; 
        console.log("Number of 200 notes in the amount: "+notes);
        console.log("Remaining amount: "+rem);
    }
    if(rem>=100){
        notes=Math.floor(rem/100);
        rem=rem%100;
        console.log("Number of 100 notes in the amount: "+notes);
        console.log("Remaining amount: "+rem);
    }
    else{
        console.log("try again!");
    }
    



