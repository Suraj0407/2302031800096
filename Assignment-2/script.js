// script.js

// Example for a simple click alert (Optional)
document.querySelector(".get-started-btn").addEventListener("click", () => {
    alert("Get Started clicked! Explore timeless art.");
  });
  
  // Log In Button Click (Optional)
  document.querySelector(".login-btn").addEventListener("click", () => {
    alert("Log In Button Clicked! Please enter your credentials.");
  });
  
  // Add any interactions if needed in script.js
console.log("Trending Collection Loaded!");

// Subscribe Form - Header Section
document.getElementById('subscribe-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    if (validateEmail(email)) {
      alert('Thank you for subscribing to our newsletter!');
      document.getElementById('subscribe-form').reset();
    } else {
      alert('Please enter a valid email address.');
    }
  });
  
  // Subscribe Form - Footer Section
  document.getElementById('footer-subscribe').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('footer-email').value;
    if (validateEmail(email)) {
      alert('You have successfully subscribed to our weekly digest!');
      document.getElementById('footer-subscribe').reset();
    } else {
      alert('Please enter a valid email address.');
    }
  });
  
  // Email Validation Function
  function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  }
  