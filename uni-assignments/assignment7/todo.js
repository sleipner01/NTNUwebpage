// Getting all elements I need for the program to work as intended
inputEl = document.getElementById('input');
buttonEl = document.getElementById('addTask');
buttonEl.addEventListener('click', function(e) { e.preventDefault(); addTask(e) } );
outputEl = document.getElementById('output');
toDoListEl = document.getElementById('toDoList');

// Array where toDo objects get stored
var tasks = [];
// Variable to keep track of executed tasks
var executedTasks = 0; 

function addTask(e) {
    // Getting the task from the input field
    let task = inputEl.value.toString();

    // Checks if we got something from the input field, if not, exit the function and focus the input field
    if (task == '' || undefined) return inputEl.focus();

    // Adding task to tasks array
    tasks.push({toDo: task, timestamp: Date.now()});

    // Creating a list element with a checkbox and a label element with the task
    liEl = document.createElement('li');

    checkboxEl = document.createElement('input');
    checkboxEl.type = 'checkbox';
    checkboxEl.id = 'checkbox' + tasks.length;
    checkboxEl.addEventListener('click', markTask);

    labelEl = document.createElement('label');
    labelEl.htmlFor = checkboxEl.id;
    labelEl.innerText = task;

    liEl.appendChild(checkboxEl);
    liEl.appendChild(labelEl);
    toDoListEl.insertBefore(liEl, toDoListEl.firstChild);
    // Not supported by all browsers and is not stock in JS: toDoListEl.prepend(liEl);

    // Clear input field so the user easily can add more tasks
    inputEl.value = '';
    // If the user clicked the button instead of pressing "enter"
    inputEl.focus();

    // Update the output element
    updateOutputElement();
}

function markTask(e) {
    if(e.target.checked == true) {
        e.target.nextSibling.style.textDecoration = 'line-through';
        executedTasks++;
    } else {
        e.target.nextSibling.style.textDecoration = 'none';
        executedTasks--;
    }

    // Update output element
    updateOutputElement();
}

function updateOutputElement () {
    let numberOfTasks = tasks.length.toString();

    outputEl.innerText = executedTasks + '/' + numberOfTasks +  ' completed';

    // To count completed tasks, I could also give the checkboxes the same class,
    // then get them in this function, loop through to see which ones are checked, and store that as a value.
    // but for this assignment, a simple variable does the trick. 
    // If we were to use a database, I would add an attribute to the object to store the state of the tasks and focus the script around the array.
}