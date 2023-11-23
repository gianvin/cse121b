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
let factor1 = Number(document.querySelector('#factor1').value);
let factor2 = Number(document.querySelector('#factor2').value);
document.querySelector('#product').value = multiply(factor1, factor2);})

/* Open Function Use - Divide Numbers */
function divide (dividend, divisor){
    return dividend / divisor;
}
document.querySelector('#divideNumbers').addEventListener('click', function(){
let dividend = Number(document.querySelector('#dividend').value);
let divisor = Number(document.querySelector('#divisor').value);
document.querySelector('#quotient').value = divide(dividend, divisor);})

/* Decision Structure */
const getTotal = function () {
    let subtotal = Number(document.querySelector('#subtotal').value);
    if (document.getElementById)('member').checked; { 
        subtotal *= .85
    }
    document.querySelector('#total').textContent = `$ ${subtotal.toFixed(2)}`;

}
document.querySelector('#getTotal').addEventListener('click', getTotal);
 
/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector('#array').textContent = numbersArray;
/* Output Odds Only Array */
document.querySelector('#odds').textContent= numbersArray.filter((num) => num % 2 === 1);
/* Output Evens Only Array */
document.querySelector('#evens').textContent= numbersArray.filter((num) => num % 2 === 0);
/* Output Sum of Org. Array */
document.querySelector('#sumOfArray').textContent = numbersArray.reduce(sumFunction);

function sumFunction(total, num){
    return total + num;
}
/* Output Multiplied by 2 Array */
document.querySelector('#multiplied').textContent = numbersArray.map(doubleFunction);

function doubleFunction(x){
    return x*2;
}
/* Output Sum of Multiplied by 2 Array */
document.querySelector('#sumOfMultiplied').textContent = numbersArray.map(doubleFunction).reduce(sumFunction);

function doubleFunctionsumFunction(total, num){
    return 2 * (total + num);
}

