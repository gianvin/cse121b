/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2){
    return number1 + number2;
}
let addNumber1 = Number(document.querySelector('#add1').value);
document.querySelector('#sum').value = add(addNumber1, addNumber2);
document.querySelector("#addNumbers").addEventListener('click', addNumbers);
/* Function Expression - Subtract Numbers */
function subtract (subtract1, subtract2){
    return subtract1 -subtract2;
}
let subtractNumber1 = Number(document.querySelector('#subtract1').value);
document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);
/* Arrow Function - Multiply Numbers */
function multiply (factor1, factor2){
    return factor1 * factor2;
}
let multiplyNumber1 = Number(document.querySelector('#multiply1').value);
document.querySelector('#product').value = multiply(multiplyNumber1, multiplyNumber2);
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);
/* Open Function Use - Divide Numbers */
function divide (dividend, divisor){
    return dividend / divisor;
}
let divideNumber1 = Number(document.querySelector('#divide1').value);
document.querySelector('#quotient').value = divide(divideNumber1, divideNumber2);
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);
/* Decision Structure */
getTotalButton.addEventListener("click", function(){
    const subtotalValue = parseFloat(subtotalInput.value);
})
const applyDiscount = membership.checked;
let totalDue;
if (applyDiscount) {
    totalDue = subtotalValue * 0.85;
}else{
    totalDue = subtotalValue;
}

totalDueValue.textContent = 'Total Due: $(totalDue.toFixed(2)';
/* ARRAY METHODS - Functional Programming */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
/* Output Source Array */
let arrayElement = document.getElementById("Array");
arrayElement.innerHTML = numbersArray.join(', ')
/* Output Odds Only Array */
numbersArray.sort(function(a, b){
    const isOdd = num => num % 2 === 1;
    if (isOdd(a) && isOdd(b)) {
        return a - b;
    }   else if (isOdd(a)) {
        return -1;
    }   else if (isOdd(b)) {
        return 1;
    }   else {
        return a - b;
    }
})
/* Output Evens Only Array */
numbersArray.sort(function(a, b){
    const isEven = num => num % 2 === 1;
    if (isEven(a) && isEven(b)) {
        return a - b;
    }   else if (isEven(a)) {
        return -1;
    }   else if (isEven(b)) {
        return 1;
    }   else {
        return a - b;
    }
})
/* Output Sum of Org. Array */
numbersArray.reduce((sum, number) => sum + number);

/* Output Multiplied by 2 Array */
numbersArray.map(number => number * 2);

/* Output Sum of Multiplied by 2 Array */
const doubledNumbers = numbersArray.map((number) => number * 2);
const sumOfMultiplied = doubledNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sumOfMultiplied);