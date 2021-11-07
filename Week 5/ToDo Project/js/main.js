import Todos from './todo.js';

//create our Todos object
// it knows everyting in order to manage a list of todos
const todo = new Todos('tasks');

window.addEventListener('load', () => {
    todo.showToDoList();
    todo.addTabListeners();
});

//  when the ADD button is pressed...
const nTask = document.getElementById('addBtn');
nTask.addEventListener('click', () => todo.addToDo());