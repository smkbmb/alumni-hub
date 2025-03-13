// Admin Login
document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form submission
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("login-error");

  // Check if the password is correct
  if (password === "admin123") { // Replace with a secure password
    // Hide login form and show admin dashboard
    document.getElementById("admin-login").classList.add("hidden");
    document.getElementById("admin-dashboard").classList.remove("hidden");
    errorMessage.classList.add("hidden"); // Hide error message if visible
  } else {
    // Show error message
    errorMessage.classList.remove("hidden");
  }
});

// Update Progress Bar
document.getElementById("update-button").addEventListener("click", () => {
  const raisedAmount = parseFloat(document.getElementById("raised-amount").value);
  const goal = 10000;
  const progress = (raisedAmount / goal) * 100;
  document.getElementById("progress").style.width = `${progress}%`;
});
