
// Problem 1

var mindGame = 50;
var result1 = mindGame * 3;
var result2 = result1 + 10; 
var result3 = result2 / 2;
var totalResult = result3 - 5;
console.log(totalResult);

//problem 2

var evenOdd = "Javascript"
var itsLength = 10;

if(evenOdd = itsLength){
    console.log("even")
}

//problem 3

var isLGSeven = 12;
var numbers = 7;
var totalnumbers = isLGSeven - numbers;

if(totalnumbers <= 7){
    console.log(totalnumbers);
}

else{
    console.log(totalnumbers * 2)
}

// Problem 4
var numbers = [15, 17, 19, -14, -2]
numbers = numbers.filter(function(findingBadData){
    return findingBadData < -1
});

console.log(numbers.length);