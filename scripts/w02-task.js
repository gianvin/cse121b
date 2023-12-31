/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
 const fullName = "Gina Ong";
 const currentYear = new Date().getFullYear();
 const profilePicture = "images/Gina Ong Photo.jpg";




/* Step 3 - Element Variables */
 const nameElement = document.getElementById("name");
 const foodElement = document.getElementById("food");
 const yearElement = document.querySelector("#year");
 const imageElement = document.querySelector("img");




/* Step 4 - Adding Content */

 nameElement.innerHTML = `<string>${fullName}</string>`;
 yearElement.textContent = currentYear;
 imageElement.setAttribute('src', profilePicture);
 const altText = `Profile image of ${fullName}`;
 imageElement.setAttribute("alt", altText);





/* Step 5 - Array */
 const favoriteFoods = ["Carbonara", "Kare-kare", "Adobo", "Sizzling Steak", "Fresh Lumpia", "Ramen"];
 const foodList = favoriteFoods.join(",");
 foodElement.textContent = `${foodList}`;
 const anotherFood = "Pansit";
 favoriteFoods.push(anotherFood);
 foodElement.innerHTML += `<br>${favoriteFoods}`;
 favoriteFoods.shift();
 foodElement.innerHTML += `<br>${favoriteFoods}`;
 favoriteFoods.pop();
 foodElement.innerHTML += `<br>${favoriteFoods}`;
 





