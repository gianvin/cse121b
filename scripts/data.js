/*Enrolment by School*/
/*function add numbers for a school*/
function add (number1, number2){
    return number1 + number2;
}
/*Function to set up eventlisteners for esch school*/
document.querySelector("#addNumbers1").addEventListener('click', function (){
    let addNumber1 = Number(document.querySelector('#add1_school1').value);
    let addNumber2 = Number(document.querySelector('#add2_school1').value);
    document.querySelector('#sum1').value = add(addNumber1, addNumber2);})
 /*Update District Totals*/
 updateDistrictTotals();


    /*function for school2*/
function add (number1, number2){
    return number1 + number2;
}
document.querySelector("#addNumbers2").addEventListener('click', function (){
    let addNumber1 = Number(document.querySelector('#add1_school2').value);
    let addNumber2 = Number(document.querySelector('#add2_school2').value);
    document.querySelector('#sum2').value = add(addNumber1, addNumber2);})

/*Update District Totals*/
updateDistrictTotals();

    /*function for school3*/
function add (number1, number2){
    return number1 + number2;
}
document.querySelector("#addNumbers3").addEventListener('click', function (){
    let addNumber1 = Number(document.querySelector('#add1_school3').value);
    let addNumber2 = Number(document.querySelector('#add2_school3').value);
    document.querySelector('#sum3').value = add(addNumber1, addNumber2);})

/*Update District Totals*/
updateDistrictTotals();

    /*function for school4*/
function add (number1, number2){
    return number1 + number2;
}
document.querySelector("#addNumbers4").addEventListener('click', function (){
    let addNumber1 = Number(document.querySelector('#add1_school4').value);
    let addNumber2 = Number(document.querySelector('#add2_school4').value);
    document.querySelector('#sum4').value = add(addNumber1, addNumber2);})

    /*Update District Totals*/
 updateDistrictTotals();

    /*function for school5*/
function add (number1, number2){
    return number1 + number2;
}
document.querySelector("#addNumbers5").addEventListener('click', function (){
    let addNumber1 = Number(document.querySelector('#add1_school5').value);
    let addNumber2 = Number(document.querySelector('#add2_school5').value);
    document.querySelector('#sum5').value = add(addNumber1, addNumber2);})
 
/*Update District Totals*/
 updateDistrictTotals();

 
/*function to update district totals*/
function updateDistrictTotals() {
    const districtMaleTotal = calculateTotal("input[name='add1']");
    const districtFemaleTotal = calculateTotal("input[name='add2']");
    const districtTotal = districtMaleTotal + districtFemaleTotal;

    document.getElementById("districtMale").value = districtMaleTotal;
    document.getElementById("districtFemale").value = districtFemaleTotal;
    document.getElementById("districtTotal").value = districtTotal;
}
/* Function to calculate total based on input name*/
function calculateTotal(inputName){
    const inputs = document.querySelectorAll(inputName);
    let total = 0;

    inputs.forEach(function (input){
        total += parseFloat(input.value) || 0;
    });

    return total;
}



       
    