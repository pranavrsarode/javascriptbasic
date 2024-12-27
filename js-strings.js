function sum(a, b) {
        return a + b;
}
      
//console.log(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.

function specialCharacter(){
        let guestList = "Guests:\n * John\n * Pete\n * Mary";
        console.log(guestList);
}
//specialCharacter();

function charactersUsingForOf(){
        for (let char of "Hello") {
                console.log(char); // H,e,l,l,o (char becomes "H", then "e", then "l" etc)
        }
}
//charactersUsingForOf();

function mixValueArray(){
        let arr = [ 'Apple', { name: 'John' }, true, function() { console.log('hello'); } ];
        // get the object at index 1 and then show its name
        console.log( arr[1].name ); // John

        // get the function at index 3 and run it
        arr[3](); // hello
}
//mixValueArray();

function lastElementIndex(){
        let fruits = ["Apple", "Orange", "Plum","Mango"];

        console.log( fruits[fruits.length-1] ); // Plum
}
//lastElementIndex();

function popLastElement(){
        let fruits = ["Apple", "Orange", "Pear"];

        console.log( fruits.pop() ); // remove "Pear" and alert it

        console.log( fruits ); // Apple, Orange
        
}
//popLastElement();

function pushElementInArray(){
        let fruits = ["Apple", "Orange"];

        fruits.push("Pear");
        fruits.push("Mango");

        console.log( fruits ); // Apple, Orange, Pear
}
//pushElementInArray();

function shiftFirstElementOfArray(){
        let fruits = ["Apple", "Orange", "Pear"];

        console.log( fruits.shift() );
        console.log( fruits.shift() ); // remove Apple and alert it

        console.log( fruits ); // Orange, Pear
}
//shiftFirstElementOfArray();

function addElementAtBeginingOfArray(){
        let fruits = ["Orange", "Pear"];

        fruits.unshift('Apple');
        fruits.unshift('Coconut');
        
        console.log( fruits ); // Apple, Orange, Pear
}
//addElementAtBeginingOfArray();

function addMultioleElementAtOnce(){
        let fruits = ["Apple"];

        fruits.push("Orange", "Peach","Mango");
        fruits.unshift("Pineapple", "Lemon","Coconut");

        // ["Pineapple", "Lemon", "Apple", "Orange", "Peach"]
        console.log( fruits );
        
}
//addMultioleElementAtOnce();

function forLoop(){
        let arr = ["Apple", "Orange", "Pear"];

        for (let i = 0; i < arr.length; i++) {
        console.log( arr[i] );
        }       
}
//forLoop();

function forOfLoop(){
        let fruits = ["Apple", "Orange", "Plum","Pear"];

        // iterates over array elements
        for (let fruit of fruits) {
        console.log( fruit );
        }
}
//forOfLoop();

function forInLoop(){
        let arr = ["Apple", "Orange", "Pear","Peach"];

        for (let key in arr) {
        console.log( arr[key] ); // Apple, Orange, Pear
        }
}
//forInLoop();

function createAnArray(){
        let arr = new Array("Apple", "Pear","Peach","etc");
        console.log(arr);
}
//createAnArray();

function arrayWithSingleElementNumber(){
        let arr = new Array(2); // will it create an array of [2] ?

        console.log( arr[0] ); // undefined! no elements.

        console.log( arr.length ); // length 2

}
//arrayWithSingleElementNumber();

function multiDimenstionalArray(){
        let matrix = [
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9]
        ];
              
        console.log( matrix[0][1] ); // 2, the second value of the first inner array
}
//multiDimenstionalArray();

function arrayLength(){
        let fruits = ["Apples", "Pear", "Orange"];

        // push a new value into the "copy"
        let shoppingCart = fruits;
        shoppingCart.push("Banana");

        // what's in fruits?
        console.log( fruits.length ); // ?
}
//arrayLength();

function deleteElementFromArray(){
        let arr = ["I", "go", "home"];

        delete arr[1]; // remove "go"

        console.log( arr[1] ); // undefined

        // now arr = ["I",  , "home"];
        console.log( arr.length ); // 3
}
//deleteElementFromArray();

function deleteElementFromIndex(){
        let arr = ["I", "study", "JavaScript"];

        arr.splice(1,1); // from index 1 remove 1 element

        console.log( arr ); // ["I", "JavaScript"]
}
//deleteElementFromIndex();

function replaceElementsOfArray(){
        let arr = ["I", "study", "JavaScript", "right", "now"];

        // remove 3 first elements and replace them with another
        arr.splice(0, 3, "Let's", "dance");

        console.log( arr ) // now ["Let's", "dance", "right", "now"]
}
//replaceElementsOfArray();

function insertNewElementInArray(){
        let arr = ["I", "study", "JavaScript"];

        // from index 2
        // delete 0
        // then insert "complex" and "language"
        arr.splice(2, 0, "complex", "language");

        console.log( arr ); // "I", "study", "complex", "language", "JavaScript"
}
//insertNewElementInArray();

function slice(){
        let arr = ["t", "e", "s", "t"];

        console.log( arr.slice(1, 3) ); // e,s (copy from 1 to 3)

        console.log( arr.slice(-2) ); // s,t (copy from -2 till the end)
}
//slice();

function concat(){
        let arr = [1, 2];

        // create an array from: arr and [3,4]
        console.log( arr.concat([3, 4]) ); // 1,2,3,4

        // create an array from: arr and [3,4] and [5,6]
        console.log( arr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6

        // create an array from: arr and [3,4], then add values 5 and 6
        console.log( arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6
}
//concat();

function isConcatSpreadable(){
        let arr = [1, 2];

        let arrayLike = {
        0: "something",
        1: "else",
        [Symbol.isConcatSpreadable]: true,
        length: 2
        };

        console.log( arr.concat(arrayLike) ); // 1,2,something,else
}
//isConcatSpreadable();

function positionInTargetArray(){
        ["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
                console.log(`${item} is at index ${index} in ${array}`);
        });
}
//positionInTargetArray();

function arrIndexOf(){
        let arr = [1, 0, false];

        console.log( arr.indexOf(0) ); // 1
        console.log( arr.indexOf(false) ); // 2
        console.log( arr.indexOf(null) ); // -1

        console.log("Array Includes Element (1) " + arr.includes(1) ); // true
}
//arrIndexOf();

function lastIndexOf(){
        let fruits = ['Apple', 'Orange', 'Apple']

        console.log( fruits.indexOf('Apple') ); // 0 (first Apple)
        console.log( fruits.lastIndexOf('Apple') ); // 2 (last Apple)
}
//lastIndexOf();

function findId(){
        let users = [
                {id: 1, name: "John"},
                {id: 2, name: "Pete"},
                {id: 3, name: "Mary"}
        ];
              
        let user = users.find(item => item.id == 1);
        console.log(user.name); // John
}
//findId();

function findFirstAndLastIndex(){
        let users = [
                {id: 1, name: "John"},
                {id: 2, name: "Pete"},
                {id: 3, name: "Mary"},
                {id: 4, name: "Pranav"},
                {id: 5, name: "Pallavi"}
        ];
              
        // Find the index of the first John
        console.log(users.findIndex(user => user.name == 'John')); // 0
              
        // Find the index of the last John
        console.log(users.findLastIndex(user => user.name == 'Pallavi')); // 4
}
//findFirstAndLastIndex();

function transformElementInLength(){
        let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
        console.log(lengths); // 5,7,6
}
//transformElementInLength();

function comparison(){
        let arr = [ 1, 2, 15 ];

        //arr.sort(function(a, b) { return a - b; });
        arr.sort( (a, b) => a - b );

        console.log(arr);  // 1, 2, 15
}
//comparison();

function localeCompare(){
        let countries = ['Österreich', 'Andorra', 'Vietnam'];

        console.log( countries.sort( (a, b) => a > b ? 1 : -1) ); // Andorra, Vietnam, Österreich (wrong)

        console.log( countries.sort( (a, b) => a.localeCompare(b) ) ); // Andorra,Österreich,Vietnam (correct!)
}
//localeCompare();

function reverseArrayElements(){
        let arr = [1, 2, 3, 4, 5];
        arr.reverse();

        console.log( arr ); // 5,4,3,2,1
}
//reverseArrayElements();

function splitAndJoin(){
        let names = 'Bilbo, Gandalf, Nazgul';

        let arr = names.split(', ');

        for (let name of arr) {
        console.log( `A message to ${name}.` ); // A message to Bilbo  (and other names)
        }
}
//splitAndJoin();

function splitIntoLetters(){
        let str = "Pranav";

        console.log( str.split('') ); // P,r,a,n,a,v
}
//splitIntoLetters();

function arrJoinGlueMEthod(){
        let arr = ['Bilbo', 'Gandalf', 'Nazgul'];

        let str = arr.join(';'); // glue the array into a string using ;

        console.log( str ); // Bilbo;Gandalf;Nazgul
}
//arrJoinGlueMEthod();

function reduce(){
        let arr = [1, 2, 3, 4, 5];

        let result = arr.reduce((sum, current) => sum + current, 0);

        console.log(result); // 15
}
//reduce();

function arrayIsValue(){
        console.log("Array do not have any value it is "+Array.isArray({})); // false

        console.log("Array have the value it is "+Array.isArray([])); // true
}
//arrayIsValue();

function thidArg(){
        let army = {
                minAge: 18,
                maxAge: 27,
                canJoin(user) {
                  return user.age >= this.minAge && user.age < this.maxAge;
                }
        };
              
              let users = [
                {age: 16},
                {age: 20},
                {age: 23},
                {age: 30}
              ];
              
              // find users, for who army.canJoin returns true
              let soldiers = users.filter(army.canJoin, army);
              
              console.log(soldiers.length); // 2
              console.log(soldiers[0].age); // 20
              console.log(soldiers[1].age); // 23
}
//thidArg();


