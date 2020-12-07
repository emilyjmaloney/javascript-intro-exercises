// Your code here:
var lyrics = ""

var numBottles 
var bottlesWall = " bottles of milk on the wall, "
// repeat numBottles here
var bottlesOfMilk = " bottles of milk. "
var takeDown = "Take one down and pass it around, "
// numBottles minus 1 here
var bottlesEnd = " bottles of milk on the wall." + "\n"

for (let numBottles = 99; numBottles > 1; numBottles --) {
    console.log(numBottles + bottlesWall + numBottles + bottlesOfMilk + takeDown + `${numBottles -1}` + bottlesEnd);
}                                                                        // template literal: `${numBottles -1}` 
                                                                
let endLyric = "1 bottle of milk on the wall, 1 bottle of milk. Take one down, pass it around, no more bottles of milk on the wall. \n";
endLyric += "No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, 99 bottles of milk on the wall."

console.log(lyrics + endLyric);

