/*variables*/
const districtName = "Malabon IV Elementary Schools";
const currentYear = new Date().getFullYear();
const profilePicture= "images/district4.jpg";

/*element variables*/
const nameElement = document.getElementById("name");
const schoolElement = document.getElementById("school");
const  yearElement = document.querySelector("#year");
const imageElement = document.getElementById("img");

/*adding Content*/
nameElement.innerHTML = `<string>${districtName}<string>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
const altText = `District Logo  of ${districtName}`;
imageElement.setAttribute("alt", altText);

/*Array*/
const schools = ["Guillermo S. Sanchez Memorial Elementary School", "Potrero Elementary School I", "Bagong Lote Elementary School", "PotreroElementary School Main", "Tinajeros Elementary School"];
const schoolListElement = document.createElement("ul");
schools.forEach(function(schoolName) {
    const listItem = document.createElement("li");
    listItem.textContent = schoolName;
    schoolListElement.appendChild(listItem);
});

schoolElement.appendChild(schoolListElement);
const anotherSchool = "Tugatog National High School";
schools.push(anotherSchool);
schools.shift();
schoolElement.innerHTML += `<br>${schools}`;
schoolElement.innerHTML += `<br>${schools}`;
schools.pop();
schoolElement.innerHTML += `<br>${schools}`;