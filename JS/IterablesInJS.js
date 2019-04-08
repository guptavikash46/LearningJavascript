"use strict"
/*
let start = prompt('Enter the start value:');
let end = prompt('Enter the end value:');

let range = { begin: start,
              to: end,}

range[Symbol.iterator] = function (){

    return{
        current: this.begin,
        last: this.to,

    next(){
        if (this.current <= this.last){
            return {done: false, value: this.current++}
        }
        else{
            return {done: true}
        }
    }

    }
}
for (let x of range){
    alert(x);
}

let str = 'vikas';
let itr = str[Symbol.iterator]();
while (true){
    let result = itr.next();
    if (result.done) break;
    alert((result.value));

}

//Array from method
let arrayLike = {
    0: "Hello",
    1: "World",
    2: "Vikas",
    3: "Jana.",
    length: 4
};

let arr = Array.from(arrayLike); // (*)
alert(arr.pop()); // World (method works)

let date = new Date("2019-04-03");
alert(date);



let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null
};

let json = JSON.stringify(student);

alert(typeof json); // we've got a string!

alert(json);
 */
function text(phrase){
   return class{
       sayHi(){
           alert(phrase);
       }
   }
}
class A extends text("Hello world from vikas"){}
new A().sayHi();
