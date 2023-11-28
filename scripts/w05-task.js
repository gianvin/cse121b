/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples");
const templeList = [];

/* async displayTemples Function */
const displayTemples = () => {
    templeList.forEach(function(_temples){
    })
}
const articleElement = document.createElement('article');
const h3Element = document.createElement('h3');
h3Element.textContent = templeName;
const imgElement = document.createElemenet('img');
imgElement.src = temple.imageUrl;
imgElement.alt = temple.location;
articleElement.appendChild(h3Element);
articleElement.appendChild(imgElement);
templesElement.appendChild(articleElement);


/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    displayTemples(templeLists);
    console.log(templeList);   
}



/* reset Function */
const reset = function(){
    const articleElements = templesElement.querySelectorAll('article');
    articleElements.forEach(article => {
        article.remove();
    })
}
reset();
/* sortBy Function */



getTemples();

/* Event Listener */
