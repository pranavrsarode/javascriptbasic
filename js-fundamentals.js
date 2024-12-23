"use strict";
 
//console.log("Hello World!");



let message = "Outside check let";

const bigInt = 1234567890123456789012345678901234567890;

function showBigNo() {
    console.log(bigInt);
}

function checkLet(){
    let message = "Let message inside checkLet";
    console.log(message);
    let msg = "hello world"
    console.log(msg);
}

function sumNo (){
    var a = 45;
    var b = 1;
    console.log(a+b);
    console.log(nums.a+nums.b);
}

function strOps () {
    let str = "Hello";
    let str2 = 'Single quotes are ok too';
    let phrase = `can embed another ${str}`;
    console.log(phrase);
}

function checkQuoteDoubleQuote (){
    let name = "John";

    // embed a variable
    console.log( `Hello, ${name}!` ); // Hello, John!
    console.log( 'Hello, ${name}!' ); // Hello, John!

    // embed an expression
    console.log( `the result is ${1 + 2}` ); // the result is 3
    console.log( "the result is ${1 + 2}" ); // the result is 3
}

let nums = {
    "a" : 45,
    "b" : 1
};

function checkConditionUsingNo(){
    let a; // false
    let b = 5; // true
    let c = ""; // false
    let d = undefined; //fase
    let e = "some"; //true
    let f = "5";
    let g = null;
    let h = "5";

    let i = {
        "a" : 45,
        "b" : 1
    };
    if (nums == i) {
        console.log("nums == i");
    }
    if (nums === i) {
        console.log("nums === i");
    }

    if(Object.is(nums,i)) {
        console.log( "nums equals i");
    }

    if (g) {
        console.log(g);
    }
    if (b == f) {
        console.log("b == f");
    }

    console.log(typeof b);
    console.log(typeof f);

    if (b === f) {
        console.log("b === f");
    }
    if (b === eval(h)) {
        console.log("b === h");
    }
    if(2){
        console.log(2);
    }
    if(1){
        console.log(1)
    }
    if(0){
        console.log(0)
    }
    if(a){
        console.log(a);
    }
    if(b){
        console.log(b);
    }
    if(c){
        console.log(c);
    }
    if(d){
        console.log(d);
    }
    if(e){
        console.log(e);
    }
}

//checkConditionUsingNo();
//checkLet();
//console.log(message);
//sumNo();
//showBigNo();
//strOps();


// alert, prompt, confirm

function showPopups() {
    alert ("from show popup");

    let age = prompt("Your age?");
    console.log("Age : "+age);

    let height = prompt("Your height?", 180);
    console.log("Height : "+height);

    let crazy = confirm("Are you crazy?");
    console.log("Crazy : "+crazy);
}

//showPopups();

/*function askBeforeLeavingPage(){

}

window.addEventListener('beforeunload', (event) => {
    event.preventDefault();
    alert("Bye");
});
*/
//coding style


function powRecursive(num, raiseToPower) {
    if( raiseToPower < 1){
        return 1;
    } else {
        return num * powRecursive(num, raiseToPower-1);
    }
}

function pow(num, raiseToPower){

    console.log(`${num} raise to ${raiseToPower} : `+ powRecursive(num,raiseToPower));


    if(raiseToPower < 0) {
        console.log("Get Lost");
    } else {
        let answer = 1;
        for (let index = 0; index < raiseToPower; index++) {
            answer = answer * num;
        }
        console.log(answer);
    }
}

// pow(5, 3); // 125
// pow(4, -3); // ja ghari
// pow(4, 2); // 16
// pow(3, 4); // 81

/*
function longStrs() {
    let str = `
    ECMA International's TC39 is a group of JavaScript developers,
    implementers, academics, and more, collaborating with the community
    to maintain and evolve the definition of JavaScript.
  `;
    console.log(str);

    let str1 = "ECMA International's TC39 is a group of JavaScript developers, "+
    "implementers, academics, and more, collaborating with the community "+
    "to maintain and evolve the definition of JavaScript. ";
    console.log(str1);
}

longStrs();

function some() {
    if(a>0) {
        
    }    
}*/

////

function loopExamples(n) {
    console.log("print number 1 to n");
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
    console.log("print number divisible by 2(even number) up to n");
    for (let i = 1; i <= n; i++) {
        if(i % 2 == 0) {
            console.log(i);
        }
    }
    console.log("print odd number up to n");
    for (let i = 1; i <= n; i++) {
        if(i % 2 != 0) {
            console.log(i);
        }
        if(i % 2 != 0) {
            console.log(i);
        }
    }
    
}

//loopExamples(10);

// prime numbers
function showPrime(n){

    console.log(1);
    for (let i = 2; i <= n; i++) {
         let isDivisible = false;
        for (let j = 2; j <= n && j < i/2 && !isDivisible; j++) {

           if(i % j == 0){
                isDivisible = true;
           }
           console.log("inner loop : "+i +" "+j);
        }
        if(!isDivisible)
            console.log(i);        
    }
}
//showPrime(20);


//Print First 10 natural numbers using while loop
function firsttennaturalNumber(n){
    console.log("print first 10 natural numbers to n");
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}
//firsttennaturalNumber(10);


//Calculate the sum of all numbers from 1 to a given number
function sumOfAllNumbers(n){ 
    let ans = 0 ;
    for(i = 0; i <= n; i++){
        ans += i;
    }
    console.log(ans);
}

//sumofallnumbers(8);


function sumOfAllNumbersUsingFormula(num){ 
    console.log((num * (num+1))/2);
}
//sumOfAllNumbersUsingFormula(10);

//Write a program to print multiplication table of a given number
function multiplicationofnumber(n){
    let ans = 1;
    for(i = 1; i <= n; i++){
        ans *= i;
    }
    console.log(ans);
}

//multiplicationofnumber(4);

//Display numbers from a list using loop
function displayNumbers(){
    let arr = [8,1,5,2,3,6];
    console.log("print array");
    //8
    //1
    //5
    //2
    //3
    //6

    for (let i = 0; i < arr.length-1; i++) {
        console.log(arr[i]);
    }

    for (let i = arr.length-1; i > -1; i--) {
        console.log(arr[i]);
    }
}
//displayNumbers();

///Count the total number of digits in a number
// input 535 -> output : 3
function countTotalNumber(num){
    console.log(num.toString().length);
}

//countTotalNumber(143);

