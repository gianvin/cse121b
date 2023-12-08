/*variables*/
const districtName = "Malabon IV Elementary Schools";
const currentYear = new Date().getFullYear();
const profilePicture= "images/distict4.jpg";

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
const schools = ["Guillermo S. Sanchez Memorial Elementary School", "Potrero Elementary School I", "Bagong Lote Elementary School", "Tinajeros Elementary School"];
const schoolList = schools.join(",");
schoolElement.textContent = `${schoolList}`;
const anotherSchool = "Potrero Elementary School Main";
schools.push(anotherSchool);
schools.shift();
schoolElement.innerHTML += `<br>${schools}`;
schoolElement.innerHTML += `<br>${schools}`;
schools.pop();
schoolElement.innerHTML += `<br>${schools}`;