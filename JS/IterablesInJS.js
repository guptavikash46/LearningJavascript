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
*/
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

