var person = {
    name: "John",                //String
    lastname: "Doe",
    age: 35,                     //Number
    gender: "male",
    lucky_numbers: [ 7, 11, 13, 17], //Array
    significant_other: person2   //Object, yes the same variable/object defined after
};
person.lucky_numbers[3]=33
// console.log("line 10: ",person.lucky_numbers)

var person2 = {
    name: "Jane",
    lastname: "Doe",
    age: 38,
    gender: "female",
    lucky_numbers: [ 2, 4, 6, 8],
    significant_other: person
};
var person3 = {
    name: "Jimmy",
    lastname: "Doe",
    age: 13,
    gender: "male",
    lucky_numbers: [ 1, 2, 3, 4],
    significant_other: null
};
// console.log("line 28",person2.lucky_numbers[1])
var family = {
    lastname: "Doe",
    members: [person, person2]   //Array of objects, don't forget to add Jimmy
};
family.members.push(person3);
// console.log("line 34",family.members);
// console.log("line 35",family.members[1].lucky_numbers[1])


function addAllFamilyLuckyNumbers(anArray){
  var sumOfAllLuckyNumbers = 0; //sumOfAllLuckyNumbers is a number, the sum of all lucky numbers.
for(let i of anArray){
    for (let x of i.lucky_numbers){
        sumOfAllLuckyNumbers += x
    }
}
  //To-Do: loop and add; consider nested loops
  //Hint: use the anArray variable to get all of the lucky numbers
  
  return sumOfAllLuckyNumbers;
}

//Enter all your code here:


//Do not make changes below:
console.log(addAllFamilyLuckyNumbers(family.members)); 
