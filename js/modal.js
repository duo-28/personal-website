function openModal(modal) {
  // Get the modal
  var modal = document.getElementById(modal);

  modal.style.display = "block";
}

function closeModal(modal) {
  // Get the modal
  var modal = document.getElementById(modal);

  modal.style.display = "none";
}

var modalClass = document.getElementsByClassName("modal");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  for (let i = 0; i < modalClass.length; i++) {
    console.log(modalClass[i]);
    if (event.target == modalClass[i]) {
      modalClass[i].style.display = "none";
    }
  }
}