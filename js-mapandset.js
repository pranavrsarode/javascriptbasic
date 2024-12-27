function map(){
    let map1 = new Map();

    map1.set('1', 'str1');   // a string key
    map1.set(1, 'num1');     // a numeric key
    map1.set(true, 'bool1'); // a boolean key

    // remember the regular Object? it would convert keys to string
    // Map keeps the type, so these two are different:
    console.log( map1.get(1)); // 'num1'
    console.log( map1.get('1')); // 'str1'
    console.log( map1.size ); // 3

    for (let entry of map1) { // the same as of recipeMap.entries()
        console.log(entry); // cucumber,500 (and so on)
      }
    
      map1.set('1','Z');
      for (let entry of map1) { // the same as of recipeMap.entries()
        console.log(entry); // cucumber,500 (and so on)
      }  
}
//map();

function iterationOverMap(){
    let recipeMap = new Map([
        ['cucumber', 500],
        ['tomatoes', 350],
        ['onion',    50]
    ]);
      
      // iterate over keys (vegetables)
    for (let vegetable of recipeMap.keys()) {
        console.log(vegetable); // cucumber, tomatoes, onion
    }
      
      // iterate over values (amounts)
    for (let amount of recipeMap.values()) {
        console.log(amount); // 500, 350, 50
    }
      
      // iterate over [key, value] entries
    for (let entry of recipeMap) { // the same as of recipeMap.entries()
        console.log(entry); // cucumber,500 (and so on)
    }
}
//iterationOverMap();

function objectEntriesFromMap(){
    let prices = Object.fromEntries([
        ['banana', 1],
        ['orange', 2],
        ['meat', 4],
        ['apple',9]
      ]);
      
      // now prices = { banana: 1, orange: 2, meat: 4 }
      
      console.log(prices.apple); // 2
}
//objectEntriesFromMap();

function set(){
    let set = new Set();

    let john = { name: "John" };
    let pete = { name: "Pete" };
    let mary = { name: "Mary" };
    let smith = { name: "Smith" };

    // visits, some users come multiple times
    set.add(john);
    set.add(pete);
    set.add(mary);
    set.add(john);
    set.add(mary);
    set.add(smith);

    // set keeps only unique values
    console.log( set.size ); // 3

    for (let user of set) {
    console.log(user.name); // John (then Pete and Mary)
    }
}
//set();

function iterationOversSet(){
    let set = new Set(["oranges", "apples", "bananas"]);

    for (let value of set) console.log(value);

    // the same with forEach:
    set.forEach((value, valueAgain, set) => {
    console.log(value);
    });
}
//iterationOversSet();
