/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2){
    return number1 + number2;
}
document.querySelector("#addNumbers").addEventListener('click', function (){
let addNumber1 = Number(document.querySelector('#add1').value);
let addNumber2 = Number(document.querySelector('#add2').value);
document.querySelector('#sum').value = add(addNumber1, addNumber2);})

/* Function Expression - Subtract Numbers */
function subtract (subtract1, subtract2){
    return subtract1 -subtract2;
}
document.querySelector('#subtractNumbers').addEventListener('click', function(){
let subtractNumber1 = Number(document.querySelector('#subtract1').value);
let subtractNumber2 = Number(document.querySelector('#subtract2').value);
document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);})

/* Arrow Function - Multiply Numbers */
function multiply (factor1, factor2){
    return factor1 * factor2;
}
document.querySelector('#multiplyNumbers').addEventListener('click', function(){
let factor1 = Number(document.querySelector('#multiply1').value);
let factor2 = Number(document.querySelector('#multiply2').value);
document.querySelector('#product').value = multiply(factor1, factor2);})

/* Open Function Use - Divide Numbers */
function divide (dividend, divisor){
    return dividend / divisor;
}
document.querySelector('#divideNumbers').addEventListener('click', function(){
let dividend = Number(document.querySelector('#divide1').value);
let divisor = Number(document.querySelector('#divide1').value);
document.querySelector('#quotient').value = divide(dividend, divisor);})

/* Decision Structure */
const getTotalButton = document.getElementById("getTotalButton");
const subtotalInput = document.getElementById("subtotalInput");
const membership = document.getElementById("membership");
const totalDueValue = document.getElementById("totalDueValue");
getTotalButton.addEventListener("click", function(){
    const subtotalValue = parseFloat(subtotalInput.value);
    const applyDiscount =membership.checked;
    let totalDue;

if (applyDiscount) {
    totalDue = subtotalValue * 0.85;
}else{
    totalDue = subtotalValue;
}

totalDueValue.textContent = 'Total Due: $${totalDue.toFixed(2)}';})
/* ARRAY METHODS - Functional Programming */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
/* Output Source Array */
let arrayElement = document.getElementById("Array");
arrayElement.innerHTML = numbersArray.join(', ')
console.log(numbersArray);
/* Output Odds Only Array */
const oddsArray = numberArray.filter(num => num % 2 === 1);
console.log(oddsArray);
/* Output Evens Only Array */
const evensArray = numberArray.filter(num => num % 2 === 0);
console.log(evensArray);
/* Output Sum of Org. Array */
const sumOfArray = numbersArray.reduce((sum, number) => sum + number, 0);
console.log(sumOfArray);

/* Output Multiplied by 2 Array */
const multipliedBy2Array =numbersArray.map(number => number * 2);
console.log(multipliedBy2Array);
/* Output Sum of Multiplied by 2 Array */
const sumOfMultiplied  = multipliedBy2Arraay.reduce((sum, number) => sum + number, 0);
console.log(sumOfMultiplied);