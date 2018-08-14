// //1) Can you restate the conditional more simply?
// if ((isMichaelPhelps || isMerman) && (isMichaelPhelps || hasGills))
// if ((isMichaelPhelps) || (isMerman && hasGills))
// winGoldMedals();

// //2) Can you restate the conditional to use only one negation?
// if (!rich && !happy) 
// if(!(rich || happy))
// killSelf();
// else 
// liveOn();

// //3) Can you restate the condition to use two negations and be more legible?
// if (!(urgent && important))
// if(!urgent || !important) 
// usePostOfice();
// else 
// useFedex();

// //4) Under which circumstances will doSomething run?
// if (x > 5 && x <= -5) 
// // It will never run.
// doSomething();

// //4b) Under which circumstances will doSomething run?
// if (x > 5 || x <= -5) 
// // It will only run if x is greater than 5 or if x is less than or equal to -5
// doSomething();

// //5) Can you restate the conditional to use no negations?
// if ( !(x > 10 && y < 15))
// if((x <= 10 || y >= 15))
//     alert("You got it!");
// else
//     prompt("What you need?");

// //6) Can you restate the conditional to use only one negation?
// if (!(x < 10) || y <= 10 || z <= 25 || !dead) {
//     ((x >= 10) || y <= 10 || z <= 25 || !dead)
//     console.log("You know your DeMorgan's Laws");
// }

// //7) Can you distribute the negation across the expression in parens?
// if (!(!alive || distance > 1000 || trapped || enemies < 0)) {
// if (alive && distance <= 1000 && !trapped && enemies >= 0) {
//     alert("game goes on");
// }

// //8) Can you distribute the negation across the expression in parens?
// if (!(dead && level < 99 && world == "Earth")) {
// if (!dead || level >= 99 || world !== "Earth") {
//     alert ("Life goes on");
// }

//9) Generate a random number between 0 and 1 in Javascript.
Math.random();

//10) Generate a random number between 0 and 10 in Javascript.
Math.random() * 10;

//11) Generate a random integer between 0 and 10 (inclusive).
Math.round(Math.random() * 10);

//12) Generate a random number between 5 and 10
(Math.random() * - 5) + 10;

//12b) Generate a random integer between 5 and 10
Math.round((Math.random() * - 5) + 10);

//13) Generate a random integer between -10 and 30
Math.round((Math.random() * 30) - 10);

//14) Write a coin flip function. It should return the string "heads" half the time and the string "butts" the other half
function coinFlip(num) {
    num = prompt("Please enter a number between 1 and 100.")
    if (num < 1 || num > 100) {
        alert("No, really, enter a number between 1 and 100.");
        num = prompt("Enter a number between 1 and 100");
        if (num < 1 || num > 100) {
            return alert("Game Over");
        }
    }
    if (num > 50 && num <= 100) {
        return alert("Heads!");
    } else if (num <= 50 && num >= 1) {
        return alert("Tails!");
    }
}

//15) Write a card picking function that outputs cards from a standard deck: ex 'Ace of Clubs', 'Queen of Hearts', '10 of Diamonds', '8 of Spades'
//There are 4 suits: Hearts, Diamonds, Clubs, Spades
// There are 13 cards for each suit: Ace, 2-10, Jack, King, Queen
// steps:
// generate a random number between 1-4 for suit
// set the value of a string variable depending on that 1-4 number
// generate a random number between 1-13 for the card's number
// put the number and the suit string together and return it
function pickCard() {
    var suit = Math.round(Math.random() * 3);
    if (suit === 0) suit = "Hearts";
    else if (suit === 1) suit = "Diamonds";
    else if (suit === 2) suit = "Clubs";
    else suit = "Spades";

    //your code here
    var rank = Math.ceil(Math.random() * 13);
    if (rank === 1) rank = "Ace";
    if (rank === 2) rank = "2";
    if (rank === 3) rank = "3";
    if (rank === 4) rank = "4";
    if (rank === 5) rank = "5";
    if (rank === 6) rank = "6";
    if (rank === 7) rank = "7";
    if (rank === 8) rank = "8";
    if (rank === 9) rank = "9";
    if (rank === 10) rank = "10";
    if (rank === 11) rank = "Jack";
    if (rank === 12) rank = "Queen";
    if (rank === 13) rank = "King";

    return rank + " of " + suit;
}

//16) In programming, what is the opposite of black?
//The opposite of black is !black, or not black.

//17) In programming, what is the opposite of x > y ?
//The opposite of x > y is x <= y.

//18) Given an array of numbers, add up all the elements
var arr = [5, 6, 7, 5433, 543, 53, 535, 53, 543, 543, 23, 412, 34, 45];

function sum(arr) {
    if (arr.length === 0) {
        return 0;
    }
    arr[0] + sum(arr.slice(1))
    console.log(arr[0], arr.slice(1))
}

//19) Write a function has1337s() which takes an array and returns true if the array contains the number 1337

function has1337s(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 1337) return true;
    }
    return false;
}

/*//20) Write a function that receives an array and another parameter.
It will return true if one of the elements of the array is
equal to the other param. It should return false otherwise */

var arr = ["apple", "banana", "peach", "plum", "pineapple"];
var theThing = "pineapple";

function containsThing(arr, theThing) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == theThing) return true;
    }
    return false;
}


/*21)Write a function that receives an array and another parameter. It will return true if NONE of the elements of the array is equal to the other param. It should return false otherwise*/

var arr = ["ball", "call", "wall", "all", "stall"]
var theThing = "ball"

function doesntContain(arr, theThing) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== theThing) {
            return true;
        }
        else return false;
    }
}

/*/22) Write a function that receives an array of numbers and returns
the average of those numbers*/
var arr = [1, 2, 3, 4, 5]
function getAvg(arr) {
    let sum = 0
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum / arr.length
}

/*/23) Write a function which draws a star triangle based on an input number
starz(2) =
**
*
starz(4) =
****
***
**
*/
function starz(num){
    for(var i = 1; i <= num; i++){
       for(var t = 1; t <= (num - i + 1); t++){
           document.write('* ');
       }
       document.write("<br>")   
    } 
}

/*24) Write a function which receives a parameter n and returns the sum of its half plus half of that, plus half of that, until You reach a number lower than 2
n = 100, result = 50+25+12.5+6.25+3.125+1.5625;
n = 64, result = 32+16+8+4+2+1;*/

function sumHalves(n){

}


