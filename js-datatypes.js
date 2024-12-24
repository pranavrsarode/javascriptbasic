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
// https://javascript.info/number
function waysToWriteNumber(){
    let billion = 1000000000;
    console.log(billion);
    let billion1 = 1_000_000_000;
    console.log(billion1);

    if(billion === billion1){
        console.log("billion === billion1 true");
    }

    

    let mсs = 0.000001;
    console.log(mсs);

    let mcs1 = 1e-6;
    console.log(mcs1);

    let user = 1e-3;

    if (1e-3 === (1 / 1000)){
        console.log("1e3 === 1 * 1000 is 0.001");
    }
    else{
        console.log("1e3 === 1 * 1000 false");
    }

    let user1 = 1.23e-6;
    if (1.23e-6 === (1.23 / 1000000))
    {
        console.log("1.23e-6 === 1.23 / 1000000 is 0.00000123");
    }
    else
    {
        console.log("1.23e-6 === 1.23 / 1000000 is false");
    }

    let user3= 1234e-2;
    if (1234e-2 === (1234 / 100))
    {
        console.log("1234e-2 === 1234 / 100 is 12.34");
    }
    else
    {
        console.log("1234e-2 === 1234 / 100 is false");
    }
}
//waysToWriteNumber();

function hexBinaryOtalNmber(){
    let a = 0b11111111; // binary form of 255
    let b = 0o377; // octal form of 255

    console.log( a == b );
}
//hexBinaryOtalNmber();

function toStringBase(){
    let num = 255;
    console.log(num.toString(16));
    console.log(num.toString(2));

    let num1 = 123456;
    console.log((123456).toString(36));
}
//toStringBase();

function multiplyDivide(){
    let num = 1.23456;
    console.log(Math.round(num * 100) / 100);
}
//multiplyDivide();

function toFixed(){
    let num = 0.1;
    console.log(num.toFixed(1));

    console.log(num.toFixed(20));
}
//toFixed();

function impreciseCalculation(){
    let user = 1e500 ;
    console.log(user);

    let a = 0.1;
    let b = 0.2;
    c = a + b;
    console.log(a +b == c);

    let a1 = 0.1;
    let b1 = 0.2;
    
    console.log(a1 + b1);

    let a2 = 0.1;
    let b2 = 0.2;
    
    console.log(a2.toString(2));
    console.log(b2.toString(2));
    console.log((a2 + b2).toString(2));

    let sum = a + b ;
    console.log(sum.toFixed(2));

    let sum1 = a + b;
    console.log(+sum1.toFixed(2));

    let p = 0.1;
    let q = 0.2;
    let z = 10;
    console.log((p * z + q * z) / z);

    let p1 = 0.28;
    let q1 = 0.14;
    let z1 = 100;
    console.log((p1 * z1 + q1 * z1) / z1);
}
//impreciseCalculation();

function testIsNan(){
    let str = NaN;
    console.log(isNaN(NaN));
    console.log(isNaN("str"));

    console.log( NaN === NaN );

    console.log("Number is Finite:"+ isFinite(15));
    console.log("Number is Nan:"+ isFinite("str"));
    console.log("Number is InFinity:"+ isFinite(Infinity));


    let num = +prompt("enter a number",'');
    console.log(isFinite(num)?"Valid number entered : YES":"Valid number entered : NO");
}
//testIsNan();

function numberIsNaN(){
    let number = NaN;
    console.log( Number.isNaN(NaN) );
    console.log( Number.isNaN("str" / 2) );

    console.log( Number.isNaN("str"));
    console.log(isNaN("str"));
}
numberIsNaN();

function numberIsFinite(){
    let number = 123;
    console.log("Number is Finite:"+ Number.isFinite(number));
    console.log("Number is InFinity:"+ Number.isFinite(Infinity));
    console.log("Number is Finite:"+ Number.isFinite(2 / 0));
}
numberIsFinite();
