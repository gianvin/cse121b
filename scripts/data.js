/*Enrolment by School*/
document.addEventListener("DOMContentLoaded", function(){
    const addButtons = document.querySelectorAll("#addNumbers");

    addButtons.forEach(function (button){
        button.addEventListener("click", function(){
            const article = button.closest("article");
            const maleInput = article.querySelector("input[name='add1']");
            const femaleInput = article.querySelector("input[name='add2'");
            const sumInput = article.querySelector("input[name='sum]");
        
        

        /* Ensure that the inputs are numbers*/
        const maleValue = parseFloat(maleInput.value) || 0;
        const femaleValue = parseFloat(femaleInput.value) || 0;

        /* Calculate the Total */
        const total = maleValue + femaleValue;
        sumInput.value = total;

        /*Update District Totals*/
        updateDistrictTotals();
    });
});
});



/*function to update district totals*/
function updateDistrictTotals() {
    const districtMaleTotal = calculateTotal("input[name='add1']");
    const districtFemaleTotal = calculateTotal("input[name='add2']");
    const districtTotal = districtMaleTotal + districtFemaleTotal;

    document.getElementById("districtMale").value = districtMaleTotal;
    document.getElementById("districtFemale").value = districtFemaleTotal;
    document.getElementById("districtTotal").value = districttotal;
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
