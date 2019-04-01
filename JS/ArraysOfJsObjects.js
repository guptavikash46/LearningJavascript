"use strict"

let users = [
    {id: 1, name: 'Vikas', age: 22},
    {id: 2, name: 'Ojash', age: 21},
    {id: 3, name: 'Jana', age: 23},
    {id: 4, name: 'Aditya', age: 22},
]
let id = prompt('Enter the ID to find:');
let user = users.find(item => item.id == id);
if (user)
    alert(`Yes found ! ${user.name} ${user.age}`);
else
    alert('No such user exists.');
