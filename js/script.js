const team = [
    {
        name: 'Wayne Barnett',
        role:  'Founder & CEO',
        image: 'img/wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role:  'Chief Editor',
        image:  'img/angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role:  'Office Manager',
        image: 'img/walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role:  'Social Media Manager',
        image: 'img/angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role:  'Developer',
        image: 'img/scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role:  'Graphic Designer',
        image: 'img/barbara-ramos-graphic-designer.jpg'
    }
];

// ciclo for per prendermi tutti gli oggetti singolarmente
for(let i = 0; i < team.length; i++){
    thisTeammate = team[i];

    // ogni elemento lo prendo dal sample nel dom
    const teammate = `
    <div class="team-card">
        <div class="card-image">
            <img
            src="${thisTeammate.image}"
            alt="Wayne Barnett"
            />
        </div>
        <div class="card-text">
            <h3>${thisTeammate.name}</h3>
            <p>${thisTeammate.role}</p>
        </div>
        </div>
    `;

    // lo appendo al container
    const containerDom = document.querySelector('.team-container');
    containerDom.innerHTML += teammate;
}


// Utilizzare gli input presenti nella pagina per permettere all'utente 
// di aggiungere nuovi membri del team: 
// cliccando sul pulsante "add" viene creato un nuovo oggetto, 
// il quale viene inserito nell'array iniziale e viene stampata una nuova card 
// con tutte le informazioni inserite dall'utente.

const addMemberButton = document.getElementById('addMemberButton')
addMemberButton.addEventListener('click', 
    function(){
        const newName = document.getElementById('name').value;
        const newRole = document.getElementById('role').value;
        const newImage = document.getElementById('image').value;

        const newMember = [
            {
                name: newName,
                role: newRole,
                image: newImage
            }
        ];
    }
);

