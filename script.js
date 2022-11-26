const draggable_list = document.getElementById('draggable-list');
const check = document.getElementById('check');

const richestPeople = [
    'Elon Musk',
    'Bernard Arnault',
    'Gautam Adani',
    'Jeff Bezos',
    'Bill Gates',
    'Warren Buffett',
    'Larry Ellison',
    'Mukesh Ambani',
    'Larry Page',
    'Sergey Brin'
];

const listItems = [];

let dragStartIndex;

createList();

function createList() {
    [...richestPeople].forEach((person, index) => {
        const listItem = document.createElement('li');

        listItem.setAttribute('data-index', index);

        listItem.innerHTML = `
        <span class="number">${index + 1}</span>
        <div class="draggable" draggable = "true">
            <p class="person-name">${person}</p>
            <i class="fa-light fa-grip-lines"></i>
        </div>
        `;

        listItems.push(listItem);

        draggable_list.appendChild(listItem);
    })
}