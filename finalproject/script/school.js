/* declare and Initialize Global Variables*/
const schoolsElement = document.getElementById("schools");

/*async displaySchools Function */
let schoolList = [];
const displaySchools = (filteredSchools) =>{
    reset();
    const schoolsToDisplay = filteredSchools || schoolList;
    schoolsToDisplay.forEach(function(school){
    const articleElement = document.createElement('article');
    const h3Element = document.createElement('h3');
    h3Element.textContent = school.schoolName;
    const imgElement = document.createElement('img');
    imgElement.src = school.imageUrl;
    imgElement.alt = school.address;
    articleElement.appendChild(h3Element);
    articleElement.appendChild(imgElement);
    schoolsElement.appendChild(articleElement);
 });
}

/*async get schoolss using fetch */
async function getSchools(){
    const response = await fetch(" https://gianvin.github.io/cse121b/images/jsonfile/district4.json");
    const data = await response.json();
    schoolList = data;


    const schoolDiv = document.getElementById("schools")
    schoolList.forEach(school => {
        const article = document.createElement("article");
        const h3Element = document.createElement("h3");
        h3Element.textContent = school.schoolName;
        const img = document.createElement("img")
        img.setAttribute("src", school.imageUrl);
        img.setAttribute("alt", school.address);
       
        article.appendChild(h3Element);
        article.appendChild(img);
        
        schoolDiv.appendChild(article);
       
    });

}
/* reset Function */
const reset = function(){
    const articleElements = schoolsElement.querySelectorAll('article');
    articleElements.forEach(article => {
        article.remove();
    })
}
/* sortBy Function */
const sortBy = (schoolList) =>{
    reset();
    const filter = document.getElementById('sortBy').value;
    
    switch (filter){
        case "gssmes":
        displaySchools(schoolList.filter (school => school.schoolName=== "Guillermo S. Sanchez Memorial Elementary School"));
            break;
        case "pes1":
            displaySchools(schoolList.filter(school => school.schoolName === "Potrero Elementary School I"));
            break;
        case "bles":
            displaySchools(schoolList.filter(school => school.schoolName === "Bagong Lote Elementary School"));
            break;
        case "pes":
            displaySchools(schoolList.filter(school => school.schoolName === "Potrero Elementary School Main"));
        break;
        case "tes":
            displaySchools(schoolList.filter(school => school.schoolName === "Tinajeros Elementary School"));
        break;
        case "all":
            displaySchools(schoolList);
            break;
    }
    
};
reset();

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => {sortBy(schoolList)});

getSchools();