let fruitName = prompt("Enter the fruit name?");
let fruitPrice = prompt(`How much do you want to buy ${fruitName} for?`);
let fruits = {[fruitName]:[fruitPrice]};
alert(`The given price for ${fruitName} is: ${fruits[fruitName]}`);