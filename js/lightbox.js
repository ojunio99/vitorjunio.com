// Open the modal when clicking on the resume link
document.getElementById('resume-link').onclick = function() {
    document.getElementById('resume-modal').style.display = "block";
}

// Close the modal when clicking on the close button or outside of the modal
var modal = document.getElementById('resume-modal');
var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
