let inputField = document.getElementById('todoInput');
let addButton = document.getElementById('addButton');
let todoList = document.getElementById('todoList');


addButton.addEventListener('click', () => {

    let newTodoText = inputField.value.trim();

    if (newTodoText !== "") {

        let newTodoItem = document.createElement('li');

        newTodoItem.textContent = newTodoText;

        todoList.appendChild(newTodoItem);

        inputField.value = '';
    } else {
        alert('Please enter a to-do item.');
    }
});