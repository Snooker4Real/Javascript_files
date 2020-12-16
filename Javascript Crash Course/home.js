console.log('hello');


// Variables
var b = 'smoothie';
console.log(b);

var someNumber = 45;
console.log(someNumber);

//var age = prompt('What is your age ?');

//document.getElementById('someText').innerHTML = age;

// Numbers in Javascript
var num1 = 10;

// Increment num1 by 1
num1 ++;
console.log(num1);

// Decrement num1 by 1
num1 --;
console.log(num1);

// Devide, multiply *, remanainder %
console.log(num1%5);

// Increment/decrement by 10
num1 +=10;
console.log(num1);

/* Functions
1. Create a function
2. Call the function
*/
// Create
function fun() {
    console.log('This is a function');
}

// Call
fun();

/* Let's create a function that takes the name and
says hello followed by your name

For example
Name: Jonathan
Return: "Hello Jonathan"
*/

function greeting(yourName) {
    var result = 'Hello ' + name; // String Concatenation
    console.log(result);
}
var name = prompt("What's your name ?");
greeting(name);

// How do arguments work in functions ?
// How do we add 2 numbers together in a function ?

function sumNumbers(num1, num2) {
    var result = num1 + num2;
    console.log(result);
}
sumNumbers(5,6);

// While loops

var num = 0;

while (num<100) {
    num++;
    console.log(num);
}