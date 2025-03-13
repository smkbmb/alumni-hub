// Login Functionality
document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form submission
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("login-error");

  // Check if the password is correct
  if (password === "admin123") { // Replace with a secure password
    // Redirect to the admin dashboard
    window.location.href = "admin.html";
  } else {
    // Show error message
    errorMessage.classList.remove("hidden");
  }
});

// Update Progress Bar (Admin Dashboard)
document.getElementById("update-button").addEventListener("click", () => {
  const raisedAmount = parseFloat(document.getElementById("raised-amount").value);
  const goal = 10000;
  const progress = (raisedAmount / goal) * 100;
  document.getElementById("progress").style.width = `${progress}%`;
});
