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



    /*function for school2*/
function add (number1, number2){
    return number1 + number2;
}
document.querySelector("#addNumbers2").addEventListener('click', function (){
    let addNumber1 = Number(document.querySelector('#add1_school2').value);
    let addNumber2 = Number(document.querySelector('#add2_school2').value);
    document.querySelector('#sum2').value = add(addNumber1, addNumber2);})


    /*function for school3*/
function add (number1, number2){
    return number1 + number2;
}
document.querySelector("#addNumbers3").addEventListener('click', function (){
    let addNumber1 = Number(document.querySelector('#add1_school3').value);
    let addNumber2 = Number(document.querySelector('#add2_school3').value);
    document.querySelector('#sum3').value = add(addNumber1, addNumber2);})



    /*function for school4*/
function add (number1, number2){
    return number1 + number2;
}
document.querySelector("#addNumbers4").addEventListener('click', function (){
    let addNumber1 = Number(document.querySelector('#add1_school4').value);
    let addNumber2 = Number(document.querySelector('#add2_school4').value);
    document.querySelector('#sum4').value = add(addNumber1, addNumber2);})


    /*function for school5*/
function add (number1, number2){
    return number1 + number2;
}
document.querySelector("#addNumbers5").addEventListener('click', function (){
    let addNumber1 = Number(document.querySelector('#add1_school5').value);
    let addNumber2 = Number(document.querySelector('#add2_school5').value);
    document.querySelector('#sum5').value = add(addNumber1, addNumber2);})
 
 
/*function for district totals*/
function add (number1, number2, number3, number4, number5){
    return number1 + number2 + number3 + number4 + number5;
}
document.querySelector("#addNumbers6").addEventListener('click'), function (){
    let addNumber1 = Number(document.querySelector('#add1_school1').value);
    let addNumber2 = Number(document.querySelector('#add1_school2').value);
    let addNumber3 = Number(document.querySelector('#add1_school3').value);
    let addNumber4 = Number(document.querySelector('#add1_school4').value);
    let addNumber5 = Number(document.querySelector('#add1_school5').value);
    document.querySelector('#districtMaleTotal').value = add(addNumber1, addNumber2, addNumber3, addNumber4, addNumber5)};

function add (number1, number2, number3, number4, number5){
        return number1 + number2 + number3 + number4 + number5;
    }
    document.querySelector("#addNumber7").addEventListener('click'), function (){
        let addNumber1 = Number(document.querySelector('#add2_school1').value);
        let addNumber2 = Number(document.querySelector('#add2_school2').value);
        let addNumber3 = Number(document.querySelector('#add2_school3').value);
        let addNumber4 = Number(document.querySelector('#add2_school4').value);
        let addNumber5 = Number(document.querySelector('#add2_school5').value);
        document.querySelector('#districtFemaleTotal').value = add(addNumber1, addNumber2, addNumber3, addNumber4, addNumber5)};
       
        function add (number1, number2){
            return number1 + number2 ;
        }
        document.querySelector("#addNumber8").addEventListener('click'), function (){
            let addNumber1 = Number(document.querySelector('#districtMaleTotal').value);
            let addNumber2 = Number(document.querySelector('#districtFemaleTotal').value);
            document.querySelector('#districtTotal').value = add(addNumber1, addNumber2)};

       
    