//One Modal
function OpenModal() {
  //Get element with Id= "modal"
  var modal = document.getElementById("modal");
  //Change style to display = "block"
  modal.style.display = "block";
}


//This will close the modal once you click on it
window.onclick = function(event) {

  //For single modal
  var modal = document.getElementById("modal");
  //If the click was on the modal the modal style display = "none"
  if (event.target == modal) {
      modal.style.display = "none";
  }

}