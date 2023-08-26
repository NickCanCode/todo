//vars for add
let newItem;
let listNewItem;
let appended;
let idNum;
//the variable that helps list how many items have the class name of listItem
let listItemAmount = document.getElementsByClassName("listItem");

// adds the button to the end of the new to-do items
const buttonCode = ' <br><button class="deletebutton" onclick="del(this)">🗑</button><button class="checkbutton" onclick="check(this)">✔</button>'


//vars for remove
let deleteBtns = document.getElementsByClassName("deletebutton");
//liId is also used in the "check" function
let liId;

//vars for check
let checkElement;

//listens for button click to exeute the add function
document.getElementById("addButton").addEventListener('click', add);


//add a new task
function add() {

  // get value of the new item
  newItem = prompt("What is the name of your new task?");

  //create element
  listNewItem = document.createElement('li');
  listNewItem.innerHTML = newItem + buttonCode;
  listNewItem.classList.add("listItem");
  idNum = listItemAmount.length;
  listNewItem.id = 'item' + idNum;

  //append element
  appended = document.getElementById("list");
  appended.appendChild(listNewItem);
}

//deletes a task
function del(target) {
  liId = target.parentElement.id;
  document.getElementById(liId).remove();
}

//marks a task as correct
function check(target) {
  liId = target.parentElement.id;
  checkElement = document.getElementById(liId).classList;
  //removes listItem class
  checkElement.remove("listItem");
  //adds finishedItem class (makes it green)
  checkElement.add("finishedItem");
}