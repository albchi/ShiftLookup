// A JavaScript to look up shift by hour
// Use node to compile & run


console.log("ShiftLookup.JS");
funcGreetings();

var loop = 5; // must declaration, and initizliation optional
var dateObj = new Date();
var hour = dateObj.getHours();
var nameArray  = ["Able","Bob","Carl","Dick", "Erik", "Frank", "Geo", "Harry", "Ian", "Jake", "Kirk", "Larry"];

console.log("It is", hour,":",dateObj.getMinutes(), "'o clock");
console.log("Time for", nameArray[hour], "to work");

var probOfCallInSick = (Math.random()); // works! no need to include or install??!!

console.log("But he has a", probOfCallInSick, "of calling in sick");


function funcGreetings() {
   console.log("This JS program will look up shift owner");
}
