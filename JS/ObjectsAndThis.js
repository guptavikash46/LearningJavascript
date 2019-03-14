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

alert(user);
alert(+user);
alert(user + 500);