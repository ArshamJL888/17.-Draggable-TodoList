let plusTodo = document.getElementById('plus');
let modal = document.getElementById('modal');
let closeAddTab = document.getElementById('close');
let addBtn = document.getElementById('addTodo');
let noStatus = document.getElementById('noStatus');
let modalInput = document.getElementById("modalName");
let removeTodo = document.querySelectorAll('.remove');
let bodies = document.querySelectorAll('.body');
bodies.forEach(function(body) {
    body.addEventListener("dragover", dragOverHandler);
})
bodies.forEach(function(body) {
    body.addEventListener("drop", dropHandler);
})
removeTodo.forEach(function (todo) {
    todo.addEventListener('click', todoRemover)
})
// let noStart = document.getElementById('noStatus');
// let inProgress = document.getElementById('noStatus');
// let completed = document.getElementById('noStatus');
plusTodo.addEventListener('click', plusModalHandler);
closeAddTab.addEventListener('click', closeTabHandler);
addBtn.addEventListener('click', addTodoHandler)
function plusModalHandler() {
    modal.style.display = 'block'
    document.body.addEventListener('keydown', function(){
        if(event.key === 'Enter') {
            addTodoHandler();
            closeTabHandler()
        }
        else if (event.key === 'Escape'){
            closeTabHandler();
        }
    });
}

function closeTabHandler() {
    modal.style.display = 'none'
}
function addTodoHandler(event) {
    let newDiv = document.createElement('div');
    newDiv.classList.add('todo');
    noStatus.append(newDiv);
    newDiv.textContent = modalInput.value;
    let newIElem = document.createElement('i');
    newIElem.classList.add('remove');
    newIElem.classList.add('fa');
    newIElem.classList.add('fa-x');
    newDiv.append(newIElem);
    newIElem.addEventListener('click', todoRemover);
    closeTabHandler();
    newDiv.setAttribute('draggable', "true")
    // console.log(newDiv);
    newDiv.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('divClass', event.target.className);
    });
    console.log(newDiv);
}
function todoRemover(event) {
    event.target.parentElement.remove();
}

function dragStartHandler(event) {
    event.dataTransfer.setData('divClass', event.target.className);
}

function dragOverHandler(event) {
    event.preventDefault();
}
function dropHandler(event) {
    let targetClass = event.dataTransfer.getData('divClass');
    let targetElem  = document.querySelector('.' + targetClass);
    event.target.append(targetElem);
}