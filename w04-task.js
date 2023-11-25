/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Gina S. Ong",
    photo: "images/Gina Ong Photo.jpg",
    favoriteFoods: [
        'Rice',
        'Pasta',
        'Kare-kare',
        'Pansit',
        'Fresh Lumpia'
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
      place1: 'Bulacan. Philippines',
      length1: '12 years'
    }
  
  );
  



/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;
document.querySelector('#photo').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').setAttributeNS('src', myProfile.photo);
document.querySelector('#photo').setAttributeNS('alt', myProfile.photo);
/* Favorite Foods List*/
let foodElement = document.querySelector('#favorite-foods');
myProfile.favoriteFoods.forEach(function(food){
    let liElement = document.createElement('li');
    liElement.textContent =food;
    foodElement.appendChild(liElement);
})
/* Hobbies List */
let hobbiesElement = document.querySelector('#hobbies');
myProfile.hobbies.forEach(function(hobbies){
    let liElement = document.createElement('li');
    liElement.textContent =hobbies;
    foodElement.appendChild(liElement);
})

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;
    let dd = document.createElement('dd');
    dd.textContent = place.length;
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
})

