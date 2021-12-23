//FELAKTIGT SLUMPTAL
let randomNumber = "";
let roundedNumber = "";
let count = 0;
let zero = [];
let one = [];
let two = [];

while(count < 1000000) {
    randomNumber = Math.random();
    randomNumber = randomNumber * 2;
    roundedNumber = Math.round(randomNumber);
    if(roundedNumber == 0) {
        zero.push("line")
    }
    if(roundedNumber == 1) {
        one.push("line")
    }
    if(roundedNumber == 2) {
        two.push("line")
    }
    count++;
}

let runs = zero.length + one.length + two.length;
console.log("runs with Math.random " + runs);
console.log("zero " + zero.length);
console.log("one " + one.length);
console.log("two " + two.length);




console.log("-------------------------------------");
//KORREKT SLUMPTAL
randomNumber = "";
roundedNumber = "";
count = 0;
zero = [];
one = [];
two = [];

while(count < 1000000) {
    randomNumber = Math.floor(Math.random() * 3);
    roundedNumber = Math.round(randomNumber);
    if(roundedNumber == 0) {
        zero.push("line")
    }
    if(roundedNumber == 1) {
        one.push("line")
    }
    if(roundedNumber == 2) {
        two.push("line")
    }
    count++;
}

runs = zero.length + one.length + two.length;
console.log("runs with Math.floor" + runs);
console.log("zero " + zero.length);
console.log("one " + one.length);
console.log("two " + two.length);