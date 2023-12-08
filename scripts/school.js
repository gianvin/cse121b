/*variables*/
const districtName = "Malabon IV Elementary Schools";
const districtLogo = "images/distict4.jpg";

/*element variables*/
const nameElement = document.getElementById("name");
const schoolElement = document.getElementById("school");
const logoElement = document.getElementById("img");

/*adding Content*/
nameElement.innerHTML = `<string>${districtName}<string>`;
logoElement.setAttribute('src', districtLogo);
const altText = `District Logo  of ${districtName}`;
logoElement.setAttribute("alt", altText);

/*Array*/
const schools = ["GuillermoS. Sanchez Memorial Elementary School", "Potrero Elementary School I", "Bagong Lote Elementary School", "Tinajeros Elementary School"];
const schoolList = schools.join(",");
schoolElement.textContent = `${schoolList}`;
const anotherSchool = "Potrero Elementary School Main";
schools.push(anotherSchool);
schoolElement.innerHTML += `<br>${schools}`;
schoolElement.innerHTML += `<br>${schools}`;
schools.pop();
schoolElement.innerHTML += `<br>${favoriteFoods}`;