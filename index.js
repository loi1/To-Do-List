console.log('My code is running');
// view all of the to-do tasks
// add a to-do to the list of to-do tasks
// mark a task as completed by crossing it out on click
// remove to-do tasks by removing those elements from the DOM
// aesthetically pleasing (aka be styled)

// Create a variable that will hold your to-do list items.
let todo = document.querySelector("#list1");

// Add a function that takes in a string as input and adds it to the to-do list.
const addInput = (input) => {
  todo.innerHTML += input;
}

let input1 = document.querySelector('#input1').addEventListener(
  'input',
  (eventObject) => console.log(eventObject.target.value)
);
// addInput(input1);

// Add an event handler to populate an HTML element with your to-do list when the user clicks the appropriate button.
const btn = document.getElementById('btn1');
const list = document.getElementById("list1");
btn.addEventListener('click', function master(){
  list.innerHTML += '<li>${input1}</li>';
});

// Etc... break down the big problems into baby steps and solve them systematically. Test as you go.