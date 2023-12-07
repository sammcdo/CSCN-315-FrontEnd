function submitForm() {
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
  
    // Validate form fields
    if (name === '' || email === '' || message === '') {
      alert('Please fill out all fields.');
      return;
    }
  
    // Additional validation (e.g., email format)
  
    // If all validations pass, you can proceed to submit the form to the server or perform other actions
    alert('Form submitted successfully!');
    // You might want to send the data to a server using AJAX or perform other actions here
  }