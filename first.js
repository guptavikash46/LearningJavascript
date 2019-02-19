"use strict";

/*let num1 = 54,
    num2 = 23;
alert("The sum is : "+ Number("54"));
*/

/*let age = prompt("Your age is :", 100);
alert(`So, your age is ${age}, hahaa!`);
*/
/*let num = prompt("Enter the number :",10);
let func = num => num**2;
console.log(func(num));
*/
describe("pow", function () {

  function makeTest(x) {
      let square = x*x;
      it(`The square of ${x} is ${square}`, function () {
          assert.equal(pow(x,2),square);
      });
  }
  for(let i = 0; i< 5;i++){
      makeTest(i);
  }
} );
