
function displayUserObject(){
    let user = {     
        name: "John",
        age: 30,
        isAdmin: true 
      };
      //user.isAdmin = true;
      console.log(user.name);
      console.log(user.age);
      console.log(user.isAdmin);
}
//displayUserObject();



function multiWordPropertyNames(){
    let user = {
        name: "John",
        age: 30,
        likes_birds: true  
      };
      let key = prompt("What do you want to know about the user?", "name");
      console.log(user.name);
      console.log(user.age);
      console.log(user.likes_birds);
}

//multiWordPropertyNames();


function squareBracketNotation(){
    let user={};
    user["like birds"] = true;
    console.log(user["like birds"]);
}
//squareBracketNotation();


function computedProperty(){
    let fruit = prompt("which fruit is to buy?","apple");
    let bag = {
        [fruit] : 5,
    };
    console.log(bag[fruit]);
}

//computedProperty();


/*function makeUser(name,age){
    return{
        name : name,
        age : age,
    };
}

let user = makeUser("Pranav",24);
console.log(user.name);
console.log(user.age);*/

function propertyNameLimitation(){
    let obj = {
        for : 1,
        let : 2,
        return : 3
    };
    console.log(obj.for + obj.let + obj.return);
}
//propertyNameLimitation();

function propertyNameDisplay(){
    let user = {name:"Pranav",age:24};
    console.log("name" in user);
    console.log("age" in user);
}

//propertyNameDisplay();


function propertyAgeDisplay(){
    let user = {age:24};

    let key = "age";
    console.log(key in user);
}
//propertyAgeDisplay();

function propertiesOfUser(){
    let user = {
        name : "Pranav",
        age : 24,
        isAdmin : true
    };
    for(let key in user){
        console.log(key);
        console.log(user[key]);
    }
}
//propertiesOfUser();

//function start
function phoneCodes(){
    let codes = {
        "49" : "Germany",
        "56" : "India",
        "86" : "Australia",
        "1" : "USA"
    };

    let codesWithPlusSign = {
        "49" : "Germany",
        "56" : "India",
        "+86" : "Australia",
        "1" : "USA",
        "+76" : "CH",
    };

    for (let phoneCode in codes){
        console.log(phoneCode);
    }
    console.log("--------------");
    for (let phCode in codesWithPlusSign){
        console.log(phCode);
    }
}
//function end

//phoneCodes();


function addProperties(){
    let user = {};
    user.name = "Pranav";
    user.surname = "Sarode";
    user.name = "smith";
    delete user.surname;

    for ( let addProperties in user){
    
        console.log(user.name);
        console.log(user.surname);
    }
};


//addProperties();

//----------------------------------//

function objectReference(){
    let message = "Hello!";
    let phrase = message;
    console.log(message);
    console.log(phrase);
}
//objectReference();


function objectAssignAddress(){
    let user = {
        name : "Pranav",
        age : 24,
        email : "pranav28@gmail.com"

    };
    console.log(user.name);
    console.log(user.age);
    console.log(user.email);
}
//objectAssignAddress();


function accessObject(){
    let user = {name : "John"};
    let admin = user;
    admin.name = "Pranav";
    console.log(user.name);
}
//accessObject();


function comparisonByReference(){
    let a = {};
    let b = a;
    let c = {};

    console.log(a==b);
    console.log(a===b);

    console.log(a==c);
    console.log(c==b);
}
    

   /* let a = {};
    let b = {};
    console.log(a==b);*/
//comparisonByReference();


function objectReferenceModified(){
    const user = {
        name : "John"
    };
    user.name = "Pranav";
    console.log(user.name);
}
//objectReferenceModified();

function cloneObject(){
    let user = {
        name : "John",
        age : 24
    };    
    let clone = {};
    for (let key in user){
        clone[key] = user[key];
    }
    clone.name = "Pranav";
    console.log(user.name);
    console.log(user.age);
    console.log(clone.name);
    console.log(clone.age);

    let otherUser = structuredClone(user);

    console.log(otherUser);
}
//cloneObject();


function propertiesOfObject(){
    let user = {name : "John"}

    let permission1 = {canview : true};
    let permission2 = {canedit : true};

    Object.assign(user, permission1, permission2);

    console.log(user.name);
    console.log(user.canview);
    console.log(user.canedit);
}
//propertiesOfObject();


function propertyOfObjectExist(){
    let user = {name : "John"}

    Object.assign(user, {name:"Petter"});
    console.log(user.name);
}
//propertyOfObjectExist();

function simpleObjectCloning(){
    let user = {
        name : "John",
        age : 24,
    };
    let clone = Object.assign({}, user);

    console.log(clone.name);
    console.log(clone.age);
}
//simpleObjectCloning();


function nestedCloning(){
    let user = {
        name : "Pranav",
        age : 24,
        sizes : {
            height : 180,
            width : 20
        }
    };
    console.log(user.name);
    console.log(user.sizes.height);
    console.log(user.sizes.width);
}
//nestedCloning();

//<----------------------------------------------->//

function methods(){
    let user = {
        name : "John",
        age : 24
    };
    user.sayhi = function(){
        console.log("Hello!");
    };
    user.sayhi();  
}

//methods();


function reverseMethod(){
    let user = {

    };
    function sayhi(){
        console.log("Hello");
    };
    user.sayhi = sayhi;
    user.sayhi();
}
//reverseMethod();

function objectBeforeDot(){
    let user = {
        name : "Pranav",
        age : 24,
        email : "pranav28@gmail.com",
        
        sayhi(){
            console.log(this.name);
            console.log(this.age);
            console.log(this.email);
        }
    };
    user.sayhi();
}
//objectBeforeDot();


function arrows(){
    let user = {
        firstName: "Ilya",
        lastName: "Pilya",
        sayHi() {
          let arrow = () => console.log(this.firstName);
          console.log(this.lastName);
          arrow();
        }
      };
      
      user.sayHi();
}
//arrows();

/*
function User(name) {
    this.name = name;
    this.isAdmin = false;
  }
  
  let user = new User("Jack");
  
  console.log(user.name);
  console.log(user.isAdmin);
*/
  
  function primitiveObject(){
    let John = {
        name : "john",
        age : 25,
        email : "pranav28@gmail.com",
        sayhi : function(){
            console.log("Hello");
            console.log(24);
            console.log("pranav28@gmail.com");
        }
    }
    John.sayhi();
  }
//primitiveObject();


function upperCase(){
    let user = "javascript";
    console.log(user.toUpperCase());
}
//upperCase();


function lowerCase(){
    let user = "JAVASCRIPT";
    console.log(user.toLowerCase());
}
//lowerCase();


function toFixed(){
    let n = 1.2345;
    console.log(n.toFixed(2));
}
//toFixed();


function convertValue(){
    let num = Number("123546789");
}
//convertValue();


function stringProperty(){
    let str = "Hello";

        str.test = 5;

        console.log(str.test);
}
//stringProperty();


function numbers(){
    let billion = 1e9;

        console.log( 5.12e9 );
}
//numbers();


function impreciseCalculatoin(){
    console.log( 1e500 );
}
//impreciseCalculatoin();


function toFixed(n){
    let sum = 0.10 + 0.25 ;
    console.log(sum.toFixed(2));
}
//toFixed();


function isFinite(){
    console.log( isNaN(NaN) ); 
    console.log( isNaN("str") );
}
//isFinite();


function toCompare(){
    console.log(NaN === NaN);
}
//toCompare();


function isFiniteValue(){
    console.log("is finite 15 : "+isFinite("15"));
    console.log("is finite str : "+isFinite("str"));
    console.log("is finite Infinity : "+isFinite(Infinity));

    console.log("is finite 22/7 : "+isFinite(22/7));
}
//isFiniteValue();


function toValidate(){
    let num = +prompt("Enter a number", '');
    console.log("is finite num :" + isFinite(num) );
}
//toValidate();


function numberIsNaN(){
    console.log("number is NaN : " +Number.isNaN(NaN));
    console.log("number is str : " +Number.isNaN("str" / 2));

    console.log("number is str : "+ Number.isNaN("str"));
    console.log("is NaN is str : "+ isNaN("str"));
}
//numberIsNaN();


function numberIsFinite(){
    console.log("is finite num :" + Number.isFinite(123));
    console.log("is finite Infinity :" + Number.isFinite(Infinity));
    console.log("is finite num :" + Number.isFinite(2 / 0));

    console.log("is finite num :" + Number.isFinite("123"));
    console.log("is finite num :" + isFinite("123"));
}
//numberIsFinite();


function sum(a, b) {
    return a + b;   
  }
  //console.log(`1 + 5 = ${sum(1, 5)}.`);
  //sum(); 


  function guest(){
    let guestList = `Guests:
    * John
    * Pete
    * Mary
    `;
    console.log(guestList);
  }
  //guest();


  /*function multipleGuestLines(){
    let guestsLists = "Guests:
  * John";
    console.log(guestsLists);
  }
  //multipleGuestLines();*/


  function newLine(){
/*    let guestlists = "Guests:\n * John\n * Pete\n * Mary";
    console.log(guestlists);*/

    let guestlists = "Guests:\t * John\t * Pete\t * Mary";
    console.log(guestlists);
  }
  //newLine();


function equalTwoLines(){
    let str1 = "Hello\nWorld"; 
    let str2 = `Hello
    World`;
    
    console.log(str1 == str2);
}
//equalTwoLines();


function stringLength(){
    console.log( `Myself Pranav Sarode\n`.length );
}
//stringLength();


function atPosition(){
    let str = "Pranav";

//    console.log(str.at(2));
  //  console.log(str.at(3));


    console.log(str[str.length-1]);
}
//atPosition();


function negativeIndex(){
    let str = `Hello`;

    console.log(str[-2]);
    console.log(str.at(-2));
}
//negativeIndex();


function characterUsingFor(){
    for (let char of "Hello") {
        console.log("character is : "+ char);
      }
}
//characterUsingFor();


function immutableString(){
    let str = "Pranav";

    str[0] = "P";
    console.log(str[0]);
}
//immutableString();


function replaceString(){
    let str = "Pranav";

    str = 'P' + str[1];
    console.log(str);
}
//replaceString();


function changingCase(){
    let str = "Pranav";
    console.log("to upper case : "+str.toUpperCase());
    console.log("to lower case : "+str.toLowerCase());
}
//changingCase();


function indexOf(){
    let str = "Widget for id";

    console.log("found at index 0 : " +str.indexOf('Widget'));
    console.log("not found at index 0 : " +str.indexOf('widget'));
    console.log("found at index 0 : " +str.indexOf("id"));
}
//indexOf();


function occurenceOfIndex(){
    let str = "Widget with id";

    console.log("next occurence found at : "+str.indexOf('id',2));

   // str.indexOf("next occurence found at : "+'id',2);
}
//occurenceOfIndex();


function foundAllOccurence(){
                
        let str = 'As sly as a fox, as strong as an ox';

        let target = 'as'; 

        let pos = 0;
        while (true) {
        let foundPos = str.indexOf(target, pos);
        if (foundPos == -1) break;

        //console.log("target found at position : "+ `Found at ${foundPos}` );

        console.log(`target found at position : Found at ${foundPos}` );

        pos = foundPos + 1; 
        }
}
//foundAllOccurence();


function lastIndexOf(){
    let str = "Widget with id";

    if (str.indexOf("Widget") != -1) {
        console.log("found it : "+"We found it at (-1)"); 
    }
}
//lastIndexOf();


function includeStartWith(){
    let str = "Widget with id";
    
    console.log(str.startsWith("Widget"));
}
//includeStartWith();


function includeEndWith(){
    let str = "Widget with id";

    console.log(str.endsWith("id"))
}
//includeEndWith();


function startSearchingFrom(){
    let str = "Widget with id";

    console.log("Widget".includes("id"));
    console.log("Widget".includes("id",3));
}
//startSearchingFrom();


function startWithEndWithAtSameTime(){
    let str = "Widget with id";
    
    console.log("Widget".startsWith("Wid"));
    console.log("Widget".endsWith("get"));
}
//startWithEndWithAtSameTime();


//<----Arrays------->//

function defineArray(){
    let arr = new Array();
    arr = ["Pranav","Rajaram","Bhagyesh"];
    console.log(arr);
}
//defineArray();


function getElementByItsIndex(){
    let names = ["Pranav","Avadhut","Rajaram","Bhagyesh","Sahil"];
    console.log("Names of Peoples : "+names[0],names[1],names[2],names[3],names[4]);
}
//getElementByItsIndex();


function numberOfElementsInArray(){
    let fruits = ["Mango","Apple","Banana","Grapes","Orange"];
    console.log(fruits.length);
}
//numberOfElementsInArray();


function namesOfEmployee(){
    let EmpName = ["Pranav","Hrishikesh","Pratik"];
    console.log(EmpName);
}
//namesOfEmployee();


function mixElementsOfArray(){
    let Employee = ['Apple',{name : 'John'}, true, function(){console.log('Hello');}];

    console.log(Employee[1].name);
    Employee[3]();
}
//mixElementsOfArray();


function trailingComma(){
    let fruits = [
        "Apple",
        "Mango",
        "Banana",
        "Grapes",
        "Orange",
    ];
}
//trailingComma();


function popElementFromArray(){
    let employee = ["Pranav","Raj","Bhagyesh","Yashraj"];
    console.log(employee.pop());
    console.log(employee);
}
//popElementFromArray();


function pushElementInArray(){
    let employees = ["Pranav","Raj","Bhagyesh","Yashraj"];
    console.log(employees.shift());
    console.log(employees);
}
//pushElementInArray();


function addElementToArray(){
    let fruit = ["Apple","Grapes","Orange"];
    fruit.unshift('Banana');
    console.log(fruit);
}
//addElementToArray();


function addMultipleElementsInArray(){
    let dept = ["Computer"];
    dept.push("Civil","Mechanical");
    dept.unshift("Electrical");
    console.log(dept);
}
//addMultipleElementsInArray();


function fruitsInArray(){
    let fruit = ["Banana"];
    let arr = fruit;

    console.log(arr===fruit);
    arr.push("Grapes");
    console.log(fruit);
}
//fruitsInArray();


function assignPropertyOfArray(){
    let emp = [];
    emp[99999] = 5;
    emp.age = 25;
    console.log(emp);
}
//assignPropertyOfArray();


function arrayLoop(){
    let arr = ["Apple","Pear","Grapes"];
    for (let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }    
}
//arrayLoop();


function forOfLoopArray(){
    let fruits = ["Apple","Pear","Grapes"];
    for (let fruit of fruits){
        console.log(fruit);
    }
}
//forOfLoopArray();


function forInLoopArray(){
    let arr = ["Pranav","Ritesh","Prasad"];
    for (let key in arr){
        console.log(arr[key]);
    }
}
//forInLoopArray();


function arraySplice(){
    let arr = ["I","Go","Home"];
    console.log(arr);
    console.log(arr.length);
}
//arraySplice();


function spliceDeletion(){
    let arr = ["I","Study","JavaScript"];
    arr.splice(1,1);
    console.log(arr);
}
//spliceDeletion();


function addSpliceElement(){
    let arr = ["I","Study","JavaScript","Right","Now"];
    arr.splice(0,3,"Let's","Dance");
    console.log(arr);
}
//addSpliceElement();


function removedSpliceElements(){
    let arr = ["I","Study","JavaScript","Right","Now"];
    let removed = arr.splice(0,2);
    console.log(removed);
}
//removedSpliceElements();


function insertSpliceElement(){
    let arr = ["I", "study", "JavaScript"];
    arr.splice(2,0,"complex","language");
    console.log(arr);
}
//insertSpliceElement();


function negativeSpliceIndex(){
    let arr = [1,2,5];
    arr.splice(-1,0,3,4);
    console.log(arr);
}
//negativeSpliceIndex();

function callArrayById()
{
    let users = [
    {id : 1, name :"Mary"},
    {id : 2, name :"Petter"},
    {id : 3, name :"John"}
];
    let user = users.find(item => item.id==3);
    console.log(user.name);
}
//callArrayById();


function findIndex(){
    let users = [
        {id : 1, name :"Mary"},
        {id : 2, name :"Petter"},
        {id : 3, name :"John"},
        {id : 4, name :"Anderson"},
        {id : 5, name :"Smith"}
    ];
    console.log(users.findIndex(user => user.name == 'Smith'));
}
//findIndex();

// optional chaining //

function checkHtmlQuerySelector(){
    let html = document.querySelector('.elem').innerHTML; // error if it's null
    console.log(html);
}
//checkHtmlQuerySelector();

function checkOptionalChaining(){
    let user = {};
    console.log(user.address ? user.address.street : undefined);
}
//checkOptionalChaining();

function checkOptionalChainingAddress(){
    let user = {}; // user has no address
    console.log(user.address ? user.address.street ? user.address.street.name : null : null);
}
//checkOptionalChainingAddress();

function andOperator(){
    let user = {}; // user has no address
    console.log(user.address && user.address.street && user.address.street.name ); // undefined (no error)
}
//andOperator();

function optionlChaining(){
    let user = {}; // user has no address
    console.log( user?.address?.street ); // undefined (no error)
}
//optionlChaining();

function readingAddress(){
    let user = null;
    console.log( user?.address ); // undefined
    console.log( user?.address.street ); // undefined
}
//readingAddress();

function shortCircuiting(){
    let user = {};
    let user1 = null;
    user.sayHi = function(xVal){ console.log(xVal) };
        let x = 0;
            user?.sayHi(x++); // no "user", so the execution doesn't reach sayHi call and x++
            user1?.sayHi(x++); // no "user", so the execution doesn't reach sayHi call and x++
            console.log(x); // 0, value not incremented
}

//shortCircuiting();

function otherVariants(){
    let userAdmin = {
        admin() {
          console.log("I am admin");
        }
      };
      let userGuest = {};
         userAdmin.admin?.(); // I am admin
         userGuest.admin?.(); // nothing happens (no such method)
}
//otherVariants();

function variants(){
    let key = "firstName";

        let user1 = {
            firstName: "John"
        };

        let key2 = "MiddleName";
        let user2 = {
            MiddleName:"Smith"
        };

        
        let key3 = "LastName";
        let user3 = {
            LastName:"Cena"
        };
        let user4 = null;
            console.log( user1?.[key] ); // John
            console.log( user2?.[key2] ); // Smith
            console.log( user3?.[key3] ); // Cena
            console.log( user4?.[key4] ); // undefined
}
//variants();

function deleteVariant(){
    let user = null;

        user?.name = "John"; // Error, doesn't work
        // because it evaluates to: undefined = "John"
}
//deleteVariant();