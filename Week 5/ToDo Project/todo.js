var tasks = JSON.parse(localStorage.getItem('tasks'));
if (tasks === null) {
  tasks = [];
}
tasks.forEach(task => {
  newTask(task.name, task.completed, task.id);
});

function tasksRemaining() {
  var remain = document.getElementById('taskCount')
  var taskCount = tasks.filter(task => !task.completed).length
  remain.innerText = taskCount + ' task(s) remaining'
}

// Click on a close button to hide the current list item
var closeButtons = document.getElementsByClassName("close");
for (var i = 0; i < closeButtons.length; i++) {
  closeButtons[i].onclick = function () {
    var li = this.parentElement;
    li.style.display = "none";
    var id = li.getAttribute('dataId');
    tasks = tasks.filter((task) => {
      return task.id != id
    })
    localStorage.setItem('tasks', JSON.stringify(tasks))
    tasksRemaining();
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');

function onTaskComplete(event) {
  if (event.target.tagName === 'LI') {
    toggleTaskComplete(event.target)
    var id = event.target.getAttribute('dataId');
    tasks = tasks.map((task) => {
      if (task.id == id) {
        task.completed = !task.completed
      }
      return task;
    })
    localStorage.setItem('tasks', JSON.stringify(tasks));
    tasksRemaining();
  }
}
list.addEventListener('click', onTaskComplete, false);

function setTaskComplete(li, completed) {
  if (completed) {
    li.classList.add('completed')
  } else {
    li.classList.remove('completed')
  }
}

function toggleTaskComplete(li) {
  li.classList.toggle('completed');
}

//grab value from input and make new task
function onNewTask() {
  var inputValue = document.getElementById("addTask").value;
  var id = Date.now();
  tasks.push({
    id: id,
    name: inputValue,
    completed: false
  });
  newTask(inputValue, false, id);
  document.getElementById("addTask").value = "";
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
// Create a new list item when clicking on the "Add" button
function newTask(inputValue, completed, id) {
  var li = document.createElement("li");
  setTaskComplete(li, completed)
  li.setAttribute('dataId', id)
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myList").appendChild(li);
  }
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.onclick = function(){
    var li = this.parentElement;
    li.style.display = "none";
    var id = li.getAttribute('dataId');
    tasks = tasks.filter((task) => {
      return task.id != id
    })
  span.appendChild(txt);
  li.appendChild(span);
  tasksRemaining();
  }
}

//still figuring out how to make this work 
function showAll() {
  var listAll = JSON.parse(localStorage.getItem(tasks))
  var all = Object.entries(listAll);
  var div = document.createElement('DIV');
  var att = document.createAttribute('id')
  att.value = 'display';
  console.log(typeof (listAll))
  // listAll.forEach ((item)=>{
  //   var each = document.createTextNode(item);
  //   div.appendChild(each);
  // })
}

//still figuring out how to make this work 
function showActive() {
  var listAll = JSON.parse(localStorage.getItem(tasks))
  var all = Object.entries(listAll);
  var div = document.createElement('DIV');
  var att = document.createAttribute('id')
  att.value = 'display';
}

//still figuring out how to make this work 
function showComplete() {
  let completed = localStorage.getItem(myTodoList);
  // let completedItems = completed.filter(i => i.id == 'complete');
  // console.log(completedItems);
}