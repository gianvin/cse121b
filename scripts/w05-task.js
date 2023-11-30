/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples");
const templeList = [];

/* async displayTemples Function */
const displayTemples = (filteredTemples) => {
    reset();
    const templesToDisplay = filteredTemples || templeList;
   templesToDisplay.forEach(function(temple){
    const articleElement = document.createElement('article');
const h3Element = document.createElement('h3');
h3Element.textContent = temple.templeName;
const imgElement = document.createElement('img');
imgElement.src = temple.imageUrl;
imgElement.alt = temple.location;
templesElement.appendChild(h3);
templesElement.appendChild(img);
templesElement.appendChild(article);
});
};


/* async getTemples Function using fetch()*/
const getTemples = async () => {
    try{
        const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");

       const templesData = await response.json();
       templeList = templesData;
       displayTemples();
       const locationSelect = document.getElementById('locationSelect');
       const notUtahOption = document.createElement('option');
       notUtahOption.value = "notutah";
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
    reset();
    const filter = document.getElementById('sortBy').value;
    
    switch (filter){
        case "utah":
            displayTemples(Utah);
            break;
        case "nonutah":
            displayTemples();
            break;
        case "older":
            displayTemples(new Date(1950, 0, 1));
            break;
        case "all":
            displayTemples(temples);
            break;
    }
    reset();
    displayTemples();
};

   reset();

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => {sortBy(templeList)});

getTemples();