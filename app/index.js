import document from "document";

// what the current task is
var task = '';

// screens
let homeScreen = document.getElementById("home-screen");
let presetTasks =  document.getElementById("quickstart-tasks");
let taskDetail = document.getElementById("task-detail-screen");
let timePicker = document.getElementById("tumbler");

function showScreen(string) {
   (string === 'home') ? homeScreen.style.display = "inline" : homeScreen.style.display = "none";
   (string === 'preset') ? presetTasks.style.display = "inline" : presetTasks.style.display = "none";
   (string === 'detail') ? taskDetail.style.display = "inline" : taskDetail.style.display = "none";
   (string === 'time') ? timePicker.style.display = "inline" : timePicker.style.display = "none";
}

/********** MY TASKS SCREEN ************/
// add tasks button
let addTasks = document.getElementById("add-task");
addTasks.onactivate = function(evt) {
    showScreen('preset');
}




/********** QUICKSTART TASKS SCREEN ************/
// todo: add in header, make footer button work
let list = document.getElementById("my-list");
let items = list.getElementsByClassName("tile-list-item");

items.forEach((element, index) => {
  let touch = element.getElementById("touch-me");
  touch.onclick = (evt) => {
    //grab the name of the task, save it, and then set the next screen name to the task
    task = element.getElementById('text').text;
    taskDetail.getElementById('task-detail-text').text = task;
    console.log(task);
    showScreen('detail');
  }
});
// back button (does not work rn, only when you remove the footer use)
let backButton = document.getElementById('back-button');
backButton.onclick = function(evt) {
    showScreen('home');
}


/********** TASK DETAIL SCREEN ************/
let btnLeft = taskDetail.getElementById("btnLeft");
let btnRight = taskDetail.getElementById("btnRight");

btnLeft.onactivate = function(evt) {
    console.log('left');
    showScreen('time');
    // go to later screen
}
btnRight.onactivate = function(evt) {
    console.log('right');
    // go to now screen
}






/********** TIME PICKER SCREEN ************/
// does not work yet
let selectedIndex = timePicker.value;
let selectedItem = timePicker.getElementById("item" + selectedIndex);
let selectedValue = selectedItem.getElementById("content").text;

console.log(`index: ${selectedIndex} :: value: ${selectedValue}`);

selectedItem.getElementById("content").text = "New Value";