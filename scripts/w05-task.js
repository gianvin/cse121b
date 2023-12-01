/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples");


/* async displayTemples Function */
let templeList = [];
const displayTemples = (filteredTemples) => {
    reset();
   const templesToDisplay = filteredTemples || templeList;
   templesToDisplay.forEach(function(temple){
   const articleElement = document.createElement('article');
   const h3Element = document.createElement('h3');
   h3Element.textContent = temple.templeName;
   const imgElement = document.createElement('img');
   imgElement.src = temple.imageUrl;
   imgElement.alt = temple.location
   articleElement.appendChild(h3Element);
   articleElement.appendChild(imgElement);
   templesElement.appendChild(articleElement);
});
};


/* async getTemples Function using fetch()*/
async function getTemples(){
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    const data = await response.json();
    templeList = data;

    const templeDiv = document.getElementById("temples")
    templeList.forEach(temple => {
        const article = document.createElement("article");
        article.textContent = temple.templeName;
        templeDiv.appendChild(article);

        const img = document.createElement("img")
        img.setAttribute("src", temple.imgageUrl);
        img.setAttribute("alt", temple.location);
        templeDiv.appendChild(img);
       
    });

}
/* reset Function */
const reset = function(){
    const articleElements = templesElement.querySelectorAll('article');
    articleElements.forEach(article => {
        article.remove();
    })
}
/* sortBy Function */
const sortBy = (templeList) =>{
    reset();
    const filter = document.getElementById('sortBy').value;
    
    switch (filter){
        case "utah":
        displayTemples(templeList.filter (temple => temple.location === "Utah"));
            break;
        case "notutah":
            displayTemples(templeList.filter(temple => temple.location !== "Utah"));
            break;
        case "older":
            displayTemples(templeList.filter(temple => new Date(temple.constructionDate) < new Date(1950, 0, 1)));
        break;
        case "all":
            displayTemples(templeList);
            break;
    }
    
};

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => {sortBy(templeList)});

getTemples();