import document from "document";

let addTasks = document.getElementById("add-task");
addTasks.onactivate = function(evt) {
  console.log("Activated!");
}