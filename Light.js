// selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');




// add event listener
todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteCheck)





// functions
function addTodo(event) {
    // prevent form from submitting
    event.preventDefault();

    // todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    // create li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    // create submit and delete button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    // append todo div
    todoList.appendChild(todoDiv);

    // clear todo input
    todoInput.value = '';
}

function deleteCheck(e) {
    const item = e.target;

    // delete
    if(item.classList[0] === 'trash-btn'){
        item.remove();
    }
}