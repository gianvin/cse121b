/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples");
const templeList = [];

/* async displayTemples Function */
const displayTemples = () => {
    templeList.forEach(function(temple){
    const articleElement = document.createElement('article');
const h3Element = document.createElement('h3');
h3Element.textContent = temple.templeName;
const imgElement = document.createElement('img');
imgElement.src = temple.imageUrl;
imgElement.alt = temple.location;
articleElement.appendChild(h3Element);
articleElement.appendChild(imgElement);
templesElement.appendChild(articleElement);
});
};


/* async getTemples Function using fetch()*/
const getTemples = async () => {
    try{
        const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
       if (!response.ok){
        throw new Error('HTTP error! Status: ${response.status}');
       }
       const templesData = await response.json();
       templeList = templesData;
       displayTemples();
       const locationSelect = document.getElementById('locationSelect');
       const notUtahOption = document.createElement('option');
       notUtahOption.ariaValueNowalue = "notutah";
       notUtahOption.textContent = "Outside of Utah";
       locationSelect.appendChild(notUtahOption);
       console.log(JSON.stringify(templeList));   
}catch (error){
    console.error('Error fetching temples', error.message);
}
};


/* reset Function */
const reset = function(){
    const articleElements = templesElement.querySelectorAll('article');
    articleElements.forEach(article => {
        article.remove();
    })
}
reset();
/* sortBy Function */
const sortBy = () =>{
    const customSort =(a,b) => {
        const caseOrder = {
            "Utah": 0,
            "notutah": 1,
            "older": 2,
            " all": 3
        };
        const aCase = caseOrder[a.location] || Infinity;
        const bCase = caseOrder[b.location] || Infinity;
        if (aCase !==bCase){
            return aCase - bCase;
        }
        return a.templeName.localeCompare(b.templeName);
    };
    templeList.sort(customSort);
    reset();
    displayTemples();
};



getTemples();

/* Event Listener */
document.getElementById("fetchTemplesButton").addEventListener("click", getTemples);
document.getElementById("sortByLocationButton".addEventListener("click", () => sortBy('location')));
reset();