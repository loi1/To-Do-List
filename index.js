console.log('My code is running');
// view all of the to-do tasks
// add a to-do to the list of to-do tasks
// mark a task as completed by crossing it out on click
// remove to-do tasks by removing those elements from the DOM
// aesthetically pleasing (aka be styled)

// Create a variable that will hold your to-do list items.
let todo = [];

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const list = document.getElementById("list1");
let inputthing = '';
// Add a function that takes in a string as input and adds it to the to-do list.
let inputListener = document.querySelector('#input1').addEventListener(
  'input',
  (eventObject) => inputthing = eventObject.target.value
)

btn1.addEventListener('click', function addInput(){
  // Add an event handler to populate an HTML element with your to-do list when the user clicks the appropriate button.
  list.innerHTML += "<input type = 'checkbox' class = 'strikethrough'></input><label for ='strikethrough'>"+inputthing+"</label><br>";
});

btn2.addEventListener('click', function remove_(){
  console.log(list.children)
  for (let i = 0; i < list.children.length; i++){
    if (list.children[i].checked == true){
      list.removeChild(list.children[i]);
      list.removeChild(list.children[i]);
      list.removeChild(list.children[i]);
    }
  }
})

// Etc... break down the big problems into baby steps and solve them systematically. Test as you go.