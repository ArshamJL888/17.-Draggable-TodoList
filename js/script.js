let modal = document.getElementById('modal');
let sections = document.querySelectorAll('.section');
let bodies = document.querySelectorAll('.body');
let noStatus = document.getElementById('noStatus');
let noStart = document.getElementById('noStart');
let inProgress = document.getElementById('inProgress');
let completed = document.getElementById('completed');
let addTodo = document.getElementById('addTodo');
let modalName = document.getElementById('modalName');
let closeBtn = document.getElementById('close');
let plusModal = document.getElementById('plus');
let html;


bodies.forEach((body) => {
    body.addEventListener('click', (event) => {
        if (event.target.tagName === 'I') {
            event.target.parentElement.remove();
        }
    })
    body.addEventListener('dragover', (event) => {
        event.preventDefault();
    })
    body.addEventListener('drop', dropHandler)
})

closeBtn.addEventListener('click', modalCloser)
document.body.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addTodoHandler();
    }
    else if (event.key === 'Escape') {

        modalCloser();
    }
})

addTodo.addEventListener('click', addTodoHandler)
plusModal.addEventListener('click', () => {
    modal.style.display = 'block';
    modalName.focus();
})

function addTodoHandler() {
    html = '<div draggable="true" ondragstart="dragstartHandler(event)" class="todo">';
    html += modalName.value;
    html += '<i class="remove fa fa-x"></i>'
    html += '</div>';
    noStatus.insertAdjacentHTML('beforeend', html);
    modalCloser();
}

function modalCloser() {
    modalName.value = '';
    modal.style.display = 'none';
}

function dragstartHandler(event) {
    event.dataTransfer.setData('TodoDiv', event.target.className);
}


function dropHandler(event) {
    let targetClass = event.dataTransfer.getData('TodoDiv');
    let targetelement = document.querySelector('.' + targetClass);
    event.target.append(targetelement)
}