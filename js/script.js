const team = [
    {
        name: 'Wayne Barnett',
        role:  'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role:  'Chief Editor',
        image:  'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role:  'Office Manager',
        image: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role:  'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role:  'Developer',
        image: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role:  'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg'
    }
];

// ciclo for per prendermi tutti gli oggetti singolarmente
for(let i = 0; i < team.length; i++){
    thisTeammate = team[i];

    // ogni membro lo appendo nel dom
    teammate(thisTeammate);
}

const addMemberButton = document.getElementById('addMemberButton')
addMemberButton.addEventListener('click', 
    function(){

        // prendo il valore degli elementi nel form
        let newName = document.getElementById('name').value;
        let newRole = document.getElementById('role').value;
        let newImage = document.getElementById('image').value;
    
        // li metto in un nuovo oggetto
        const newMember = {
            name: newName,
            role: newRole,
            image: newImage
        };
        
        addMember(newMember);

    }
);

// --------------
// FUNZIONI
// --------------
// funzione per appendere al dom ogni membro del team
function teammate(teamMember){
    // ogni elemento lo prendo dal sample nel dom
    const teammate = `
    <div class="team-card">
        <div class="card-image">
            <img
            src="img/${teamMember.image}"
            alt="${teamMember.name}"
            />
        </div>
        <div class="card-text">
            <h3>${teamMember.name}</h3>
            <p>${teamMember.role}</p>
        </div>
        </div>
    `;

    // lo appendo al container
    const containerDom = document.querySelector('.team-container');
    containerDom.innerHTML += teammate;
}

// funzione per appendere al dom un nuovo membro del team
function addMember(member){
    // pusho il nuovo elemento dentro l'array team
    team.push(member);

    teammate(member);
}


