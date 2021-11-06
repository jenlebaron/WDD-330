import todos from './todo.js';

//create our Todos object
// it knows everyting in order to manage a list of todos
const todo = new todos('tasks');


/**
 *      when the page is loaded
 *          show the todo lists stored in LS
 *          add event listeners to the LIs
 */
window.addEventListener('load', () => {
    todo.showToDoList();
    todo.addTabListeners();
});

//  when the ADD button is pressed...
const nTask= document.getElementById('add');
nTask.addEventListener('click', () =>  todo.addToDo() );

