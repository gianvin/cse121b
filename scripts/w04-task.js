/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Gina S. Ong",
    photo: "images/Gina Ong Photo.jpg",
    favoriteFoods: [
        'Carbonara',
        'Kare-kare',
        'Adobo',
        'Sizzling Steak',
        'Fresh Lumpia',
        'Ramen'
    ],
    hobbies: [
        'Reading',
        'Cooking',
        'Baking',
        'Travelling'
    ],
    placesLived: [],
}

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
      place: 'Malabon Metro Manila, Philippines',
      length: '37 years',
    },
    {
      place: 'Bulacan. Philippines',
      length: '12 years'
    }
  
  );

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;
document.querySelector('#photo').src = myProfile.photo;

/* Photo with attributes */
let photoElement = document.querySelector('#photo');
photoElement.src = myProfile.photo;
photoElement.alt = myProfile.name;
/* Favorite Foods List*/
function addFavoriteFoods(myProfile){
    myProfile.favoriteFoods.forEach(function(food) {
    let foodElement = document.querySelector('#favorite-foods');
    let liElement = document.createElement('li');
    liElement.textContent = food;
    foodElement.appendChild(liElement);
});
}
/* Hobbies List */
function addHobbies(myProfile){
    myProfile.hobbies.forEach(function(hobbies) {
    let hobbiesElement = document.querySelector('#hobbies');
    let liElement = document.createElement('li');
    liElement.textContent =hobby;
    hobbiesElement.appendChild(liElement);
});
}

/* Places Lived DataList */
function addPlacesLived(myProfile){
myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;
    let dd = document.createElement('dd');
    dd.textContent = place.length;
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
});
}
addElementsToList('#favorite-foods', myProfile.favoriteFoods);
addElementsToList('#hobbies',myProfile.hobbies);
addDtDdToList('#places-lived',myProfile.placesLived);


