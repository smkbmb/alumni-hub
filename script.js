// Copy Bank Account Number
document.getElementById("copy-button").addEventListener("click", () => {
    const accountNumber = document.getElementById("account-number").innerText;
    navigator.clipboard.writeText(accountNumber).then(() => {
      alert("Account number copied to clipboard!");
    });
  });
  
  // Admin Login
  document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const password = document.getElementById("password").value;
    if (password === "admin123") { // Replace with a secure password
      document.getElementById("admin-dashboard").classList.remove("hidden");
    } else {
      alert("Incorrect password!");
    }
  });
  
  // Update Progress Bar
  document.getElementById("update-button").addEventListener("click", () => {
    const raisedAmount = parseFloat(document.getElementById("raised-amount").value);
    const goal = 10000;
    const progress = (raisedAmount / goal) * 100;
    document.getElementById("progress").style.width = `${progress}%`;
  });