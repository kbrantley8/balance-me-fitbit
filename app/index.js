import document from "document";

let homeScreen = document.getElementById("home-screen");
let presetTasks =  document.getElementById("quickstart-tasks");

presetTasks.display = 'none';
homeScreen.display = 'inline';

// function showScreen() {
//     presetTasks.style.display = "inline";
//     homeScreen.style.display = "none";
//   }

// let addTasks = document.getElementById("add-task");
// addTasks.onClick = function() {
//   showScreen();
// }