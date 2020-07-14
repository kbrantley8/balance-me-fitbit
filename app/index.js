import document from "document";

let mybutton = document.getElementById("mybutton");
mybutton.onactivate = function(evt) {
  console.log("Activated!");
}