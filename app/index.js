import document from "document";

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
    console.log(`touched: ${index}`);
    showScreen('time');
  }
});
// back button (does not work rn, only when you remove the footer use)
let backButton = document.getElementById('back-button');
backButton.onclick = function(evt) {
    showScreen('home');
}


/********** TIME PICKER SCREEN ************/
// does not work yet
let selectedIndex = timePicker.value;
let selectedItem = timePicker.getElementById("item" + selectedIndex);
let selectedValue = selectedItem.getElementById("content").text;

console.log(`index: ${selectedIndex} :: value: ${selectedValue}`);

selectedItem.getElementById("content").text = "New Value";