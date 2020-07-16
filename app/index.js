import document from "document";

let homeScreen = document.getElementById("home-screen");
let presetTasks =  document.getElementById("quickstart-tasks");

// add tasks button
let addTasks = document.getElementById("add-task");
addTasks.onactivate = function(evt) {
    presetTasks.style.display = "inline";
    homeScreen.style.display = "none";
}
// back button
let backButton = document.getElementById('back-button');
backButton.onactivate = function(evt) {
    presetTasks.style.display = "none";
    homeScreen.style.display = "inline";
}