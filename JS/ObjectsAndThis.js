"use strict"
let user = {
    name: "Jana",
    age: 23,

    toString(){
        return `name is: ${this.name}`;
    },
    valueOf(){
        return this.age;
    }
};
/*
alert(user);
alert(+user);
alert(user + 500);

 */


//Deleting elements from an array.
let arr = ['Vikas',
            'Jana',
            'Germany'];
let value = prompt('Enter the value to delete:');
let deletedValue = arr.splice(arr.indexOf(value), 1);
alert(`The deleted value is: ${deletedValue}`);

for (let x of arr){
    alert(x);
}