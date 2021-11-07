import * as lsH from './ls.js';

let todoList = [];

export default class Todos {
  constructor(id) {
    this.element = document.getElementById(id);
    this.key = id;
    this.error = document.getElementById("error");
    todoList = getToDo(this.key);
  }

  showToDoList() {
    renderToDoList(this.element, todoList);
    this.addEventListeners();
  }

  addToDo() {
    this.error.innerHTML = "";
    const task = document.getElementById('addTask');
    if (task.value === "") {
      this.error.innerHTML = "Please enter a new task";
      return;
    }
    saveTodo(task, this.key);
    this.showToDoList();
  }

  addEventListeners() {
    const ls = Array.from(this.element.children);
    ls.forEach(item => {
      item.children[0].addEventListener('click', event => this.completeToDo(item.id));
      item.children[2].addEventListener('click', event => this.removeItem(item.id));
    })
  }

  completeToDo(itId) {
    let task = todoList.findIndex(task => task.id == itId);
    todoList[task].completed = !todoList[task].completed;
    lsH.writeToLS(this.key, todoList);
    markDone(itId);
  }

  removeItem(itID) {
    let task = todoList.findIndex(task => task.id == itID);
    todoList.splice(task, 1);
    lsH.writeToLS(this.key, todoList);
    this.showToDoList();
  }

  filterToDos(category) {
    category = filterBy(category);
    const f = todoList.filter(task => (category != null) ? task.completed === category : task);
    renderToDoList(this.element, f);
    this.addEventListeners();
  }

  addTabListeners() {
    const actionButtons = Array.from(document.querySelectorAll('.tab'));
    actionButtons.forEach(tab => {
      tab.addEventListener('click', event => {
        for (let btn of actionButtons) {
          btn.classList.remove('selected-tab');

        }
        event.currentTarget.classList.add('selected-tab');
        this.filterToDos(event.currentTarget.id);

      });
    });
  }
}

function filterBy(category) {
  switch (category) {
    case 'active':
      return false;
    case 'complete':
      return true;
    case 'all':
      return null;
    default:
      return null;
  }
}

function getToDo(key) {
  let ls = lsH.readFromLS(key);
  return ls === null ? [] : ls;
}

function saveTodo(task, key) {
  let timestamp = Date.now();

  const newTodo = {
    id: timestamp,
    content: task.value,
    completed: false
  };
  todoList.push(newTodo);
  lsH.writeToLS(key, todoList);
  task.value = '';
  task.focus();
}

function renderToDoList(ul, ls) {
  ul.innerHTML = '';

  ls.forEach(taskObject => ul.innerHTML += renderOneToDo(taskObject));
  updateCount(ls);
}

function renderOneToDo(task) {
  return `<li id="${task.id}" ${task.completed ? 'class="completed"' : ''}>
    <input name="${task.content}" type="checkbox" value="none" ${task.completed ? 'checked' : ''}>
    <p>${task.content}</p>
    <div class='delete'>X</div>
    </li>`;
}

function updateCount(ls) {
  document.getElementById('num-task').innerHTML = `${(ls != null) ? ls.length : 0} tasks left`;
}

function markDone(itId) {
  document.getElementById(itId).classList.toggle('completed');
}


// This is my old code that I was confused on

// var tasks = JSON.parse(localStorage.getItem('tasks'));
// if (tasks === null) {
//   tasks = [];
// }
// tasks.forEach(task => {
//   newTask(task.name, task.completed, task.id);
// });

// function tasksRemaining() {
//   var remain = document.getElementById('taskCount')
//   var taskCount = tasks.filter(task => !task.completed).length
//   remain.innerText = taskCount + ' task(s) remaining'
// }

// // Click on a close button to hide the current list item
// var closeButtons = document.getElementsByClassName("close");
// for (var i = 0; i < closeButtons.length; i++) {
//   closeButtons[i].onclick = function () {
//     var li = this.parentElement;
//     li.style.display = "none";
//     var id = li.getAttribute('dataId');
//     tasks = tasks.filter((task) => {
//       return task.id != id
//     })
//     localStorage.setItem('tasks', JSON.stringify(tasks))
//     tasksRemaining();
//   }
// }

// // Add a "checked" symbol when clicking on a list item
// var list = document.querySelector('ul');

// function onTaskComplete(event) {
//   if (event.target.tagName === 'LI') {
//     toggleTaskComplete(event.target)
//     var id = event.target.getAttribute('dataId');
//     tasks = tasks.map((task) => {
//       if (task.id == id) {
//         task.completed = !task.completed
//       }
//       return task;
//     })
//     localStorage.setItem('tasks', JSON.stringify(tasks));
//     tasksRemaining();
//   }
// }
// list.addEventListener('click', onTaskComplete, false);

// function setTaskComplete(li, completed) {
//   if (completed) {
//     li.classList.add('completed')
//   } else {
//     li.classList.remove('completed')
//   }
// }

// function toggleTaskComplete(li) {
//   li.classList.toggle('completed');
// }

// //grab value from input and make new task
// function onNewTask() {
//   var inputValue = document.getElementById("addTask").value;
//   var id = Date.now();
//   tasks.push({
//     id: id,
//     name: inputValue,
//     completed: false
//   });
//   newTask(inputValue, false, id);
//   document.getElementById("addTask").value = "";
//   localStorage.setItem('tasks', JSON.stringify(tasks));
// }
// // Create a new list item when clicking on the "Add" button
// function newTask(inputValue, completed, id) {
//   var li = document.createElement("li");
//   setTaskComplete(li, completed)
//   li.setAttribute('dataId', id)
//   var t = document.createTextNode(inputValue);
//   li.appendChild(t);
//   if (inputValue === '') {
//     // alert("You must write something!");
//   } else {
//     document.getElementById("myList").appendChild(li);
//   }
//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   // span.onclick = function(){
//   //   var ls = this.parentElement;

//   //   console.log(ls);

//   //   ls.style.display = "none";
//   //   var id = ls.getAttribute('dataId');
//   //   tasks = tasks.filter((task) => {
//   //     return task.id != id
//   //   })
//   span.appendChild(txt);
//   li.appendChild(span);
//   tasksRemaining();
//   // }
// }

// //still figuring out how to make this work 
// function showAll() {
//   var listAll = JSON.parse(localStorage.getItem(tasks))
//   var all = Object.entries(listAll);
//   var div = document.createElement('DIV');
//   var att = document.createAttribute('id')
//   att.value = 'display';
//   console.log(typeof (listAll))
//   // listAll.forEach ((item)=>{
//   //   var each = document.createTextNode(item);
//   //   div.appendChild(each);
//   // })
// }

// //still figuring out how to make this work 
// function showActive() {
//   var listAll = JSON.parse(localStorage.getItem(tasks))
//   var all = Object.entries(listAll);
//   var div = document.createElement('DIV');
//   var att = document.createAttribute('id')
//   att.value = 'display';
// }

// //still figuring out how to make this work 
// function showComplete() {
//   let completed = localStorage.getItem(myTodoList);
//   // let completedItems = completed.filter(i => i.id == 'complete');
//   // console.log(completedItems);
// }