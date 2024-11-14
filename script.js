function validateEmail() {
    const emailInput = document.getElementById("email");
   
    const email = emailInput.value;

    // Basic regex for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
     
        alert("Email Sent!");
       
    } else {
        // If invalid, show error message
        if (email == '')
            alert('Please Enter Valid Email id!');
        else
        alert("Email is not valid!");
    }
}