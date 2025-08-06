// JavaScript code for sign-up and login functionality

// Sign-Up Page Script
if (window.location.pathname.includes('signup.html')) {
    document.querySelector('form').addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent default form submission

        const email = document.querySelector('.input-field').value; // Get email input value
        
        // Store email in local storage
        if (email) {
            localStorage.setItem('userEmail', email);
            alert('Sign-up successful! You can now log in.');
            window.location.href = 'login.html'; // Redirect to login page
        } else {
            alert('Please enter a valid email address.');
        }
    });
}

// Login Page Script
if (window.location.pathname.includes('login.html')) {
    document.querySelector('form').addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent default form submission

        const email = document.querySelector('.input-field').value; // Get email input value
        const storedEmail = localStorage.getItem('userEmail'); // Get stored email from local storage

        if (email === storedEmail) {
            alert('Login successful!'); // Success message
            window.location.href="index.html"
        } else {
            alert('Email not found. Please sign up first.'); // Error message
        }
    });
}
