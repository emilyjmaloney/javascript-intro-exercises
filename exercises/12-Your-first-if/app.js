var user = prompt('How much money do you have in your pocket');
let output = "";
// Your code below:
if (user > 100) {
    console.log("Give me your money!");
    output = "Give me your money!";
} 
else if (user > 50) {
    console.log("Buy me some coffee, you cheapster!");
    output = "Buy me some coffee, you cheapster!";
} 
else if (user <= 50) {
    console.log("You are a poor guy, go away!");
    output = "You are a poor guy, go away!";
}