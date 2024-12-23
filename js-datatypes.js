function primitiveMethods(){
    let john = {
        name: "John",
        sayHi: function() {
          console.log("Hi Pranav!");
        }
    };
      
    john.sayHi(); // Hi Pranav!

    let smith = {
        name: "Smith",
        sayHi: function() {
          console.log("Hi Panya!");
        }
    };
      
    smith.sayHi(); // Hi Pranav!
}
//primitiveMethods();

function toUpperCase(){
    let str = "panya";

    console.log( str.toUpperCase() ); // HELLO
    console.log(str.toLowerCase());
}
//toUpperCase();

function toFixed(){
    let n = 1.23456;

    console.log( n.toFixed(2) ); // 1.23
}
//toFixed();

function numberObject(){
    
    console.log( typeof 0 ); // "number"
    console.log( typeof new Number(0) ); // "object"!
}
//numberObject();

function numFromString(){
    let str = "123";
    console.log(typeof str + " " + str);
    let num = Number(str);
    console.log(typeof num + " " + num);
}
//numFromString();

function truthlyObject(){
    let zero = new Number();
    //let zero = 0;
    let zero1 = null;
    let zero2 = undefined;

    if (zero || zero1 || zero2) { // zero is true, because it's an object
        console.log( "zero is truthy!?! : "+zero);
    } else {
        console.log( "zero is untruthy!?! : " +zero);
    }
}
//truthlyObject();

//a, b, c three integer
//Case 1: a = 5, b = 5, c = 3
//Case 2: a = 5, b = 4, c = 3
//Case 3: a = 5, b = 5, c = 7
//It should print OK if a == b and b > c else NOT OK

function checkThreeNo(a, b, c){
    if( a == b && b > c){
        console.log("OK")
    } else {
        console.log("NOT OK")
    }
}
//checkThreeNo(5, 5, 3);
//checkThreeNo(5, 4, 3);
//checkThreeNo(5, 5, 7);

function numberAppending(){
    let billion = 1e3;  // 1 billion, literally: 1 and 9 zeroes

    console.log( 7.3e3 );  // 7.3 billions (same as 7300000000 or 7_300_000_000)
}
//numberAppending();
////////////////////////////////
function waysToWriteNumber(){
    let billion = 1000000000;
    console.log(billion);
    let billion1 = 1_000_000_000;
    console.log(billion1);

    billion === billion1

    console.log("1e3 === 1 * 1000 true");
}
waysToWriteNumber();
