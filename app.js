// app.js
document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    // Get form field values
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Clear previous error messages
    document.getElementById('fullNameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('phoneError').innerText = '';
    document.getElementById('passwordError').innerText = '';
    document.getElementById('confirmPasswordError').innerText = '';

    // Flag to check if form is valid
    let isValid = true;

    // Name Validation
    if (fullName.length < 5) {
        document.getElementById('fullNameError').innerText = 'Full Name must be at least 5 characters.';
        isValid = false;
    }

    // Email Validation
    if (!email.includes('@')) {
        document.getElementById('emailError').innerText = 'Enter a valid email.';
        isValid = false;
    }

    // Phone Number Validation
    if (phone === '1234567890' || phone.length !== 10 || isNaN(phone)) {
        document.getElementById('phoneError').innerText = 'Enter a valid 10-digit phone number.';
        isValid = false;
    }

    // Password Validation
    if (password.length < 8) {
        document.getElementById('passwordError').innerText = 'Password must be at least 8 characters.';
        isValid = false;
    } else if (password.toLowerCase() === 'password' || password.toLowerCase() === fullName.toLowerCase()) {
        document.getElementById('passwordError').innerText = 'Password cannot be "password" or your name.';
        isValid = false;
    }

    // Confirm Password Validation
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').innerText = 'Passwords do not match.';
        isValid = false;
    }

    // If the form is valid, show a success message with animation
    if (isValid) {
        alert('Registration Successful!');
        document.getElementById('registrationForm').reset();
        // Add animation effect
        document.querySelector('.container').classList.add('animate');
        setTimeout(() => {
            document.querySelector('.container').classList.remove('animate');
        }, 1000);
    }
});
