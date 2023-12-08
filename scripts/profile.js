/*Profile Object*/
let districtProfile = {
    district: "Malabon Iv Elementary Schools",
    logo: "images/district4.jpg",
    schools: [
        'Guillermo S. Sanchez Memorial Elementary School',
        'Potrero Elementary School - I',
        'Bagong Lote Elementary School',
        'Potrero Elementary School Main',
        'Tinajeros Elementary School'
    ],
    schoolHeads: [
        'Ms. Maria Heles V. Tiamzon',
        'Dr. Anna Grace V. Vergara',
        'Mr. Romarico P. Lopez',
        'Mr. Vicente B. Vicente',
        'Ms. Melinda C. SanPedro'
    ],
    supervisorsAssigned: [],
}
/* Profile of Supervisors for the Last Five Years*/
districtProfile.supervisorsAssigned.push(
    {
        name: 'Ms. Gina S. Ong',
        year: '2022-Present',
    },
        
    {
        name: 'Dr. Ronaldo P. Santiago',
        year: '2020-2022',
    },
    {
        name: 'Hilda C. Valencia',
        year: '2019-2020',
    },
    {
        name: 'Dr.Josefina M. Pablo.',
        year: '2018-2019',
    },
    {
        name: 'Mr. Arnulfo R. Esturas Jr.',
        year: '2017-2018'
    }
);

/*DOM Manupilation*/
/*Name*/
document.querySelector('#name').textContent = districtProfile.district;
document.querySelector('#logo').src = districtProfile.logo;

/*Logo with attributes*/
let logoElement = document.querySelector('#logo');
logoElement.src = districtProfile.logo;
logoElement.alt = districtProfile.name;

/* Schools List*/
districtProfile.schools.forEach(function(school){
    let schoolElement = document.querySelector('#elementary-schools');
    let liElement = document.createElement('li');
    liElement.textContent = school;
    schoolElement.appendChild(liElement);
});

/*School Heads List*/
districtProfile.schoolHeads.forEach(function(schoolHead){
    let schoolHeadsElement = document.querySelector('#principal');
    let liElement = document.createElement('li');
    liElement.textContent = schoolHead;
    schoolHeadsElement.appendChild(liElement);
});

/* SuperVisors for the Last Five Years Data List*/
districtProfile.supervisorsAssigned.forEach(supervisor =>{
    let dt = document.createElement('dt');
    ds.textContent = name.name;
    let dd = document.createElement('dd');
    sy.textContent =name.year;
    document.querySelector('#supervisors-assigned').appendChild(dt);
    document.querySelector('#supervisors-assigned').appendChild(dd);
});
    