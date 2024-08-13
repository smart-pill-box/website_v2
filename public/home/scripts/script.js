// Get the modal
var modal = document.getElementById("modal-interesse");

// Get the button that opens the modal
var btn = document.getElementById("btn-interesse");

var eu_quero = document.getElementById("eu-quero-header");


let open_modal = () => {
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
    setTimeout(function() {
      modal.classList.add("show");
    }, 10); // Small timeout to ensure the flex display is applied
};
// When the user clicks on the button, open the modal
btn.onclick = function() {
    open_modal();
};
eu_quero.onclick = ()=>{
    open_modal();
}

// When the user clicks anywhere outside of the modal container, close the modal
window.onclick = function(event) {
  if (event.target === modal) {
    closeModal();
  }
}

// When the user presses the Escape key, close the modal
document.onkeydown = function(event) {
  if (event.key === "Escape") {
    closeModal();
  }
}

// Function to close the modal
function closeModal() {
  modal.classList.remove("show");
  document.body.style.overflow = "visible";
  setTimeout(function() {
    modal.style.display = "none";
  }, 500); // Wait for the animation to complete before hiding
}
