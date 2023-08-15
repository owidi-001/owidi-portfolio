function submitAction() {
    alert('Contact info sent successfully.!');
    document.getElementById("contactForm").reset();
}

// modal display
$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })