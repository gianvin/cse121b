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
        const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
       const templesData = await response.json();
       templeList = templesData;
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