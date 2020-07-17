import document from "document";

// screens
let homeScreen = document.getElementById("home-screen");
let presetTasks =  document.getElementById("quickstart-tasks");


/********** MY TASKS SCREEN ************/
// add tasks button
let addTasks = document.getElementById("add-task");
addTasks.onactivate = function(evt) {
    presetTasks.style.display = "inline";
    homeScreen.style.display = "none";
}


/********** QUICKSTART TASKS SCREEN ************/
let list = document.getElementById("my-list");
let items = list.getElementsByClassName("tile-list-item");

items.forEach((element, index) => {
  let touch = element.getElementById("touch-me");
  touch.onclick = (evt) => {
    console.log(`touched: ${index}`);
  }
});
// back button
let backButton = document.getElementById('back-button');
backButton.onactivate = function(evt) {
    presetTasks.style.display = "none";
    homeScreen.style.display = "inline";
    console.log('back button clicked');
}