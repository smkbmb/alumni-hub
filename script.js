// Shared Data (Simulate a backend using localStorage)
const DONATION_GOAL = 10000; // RM 10,000 goal
let pendingDonations = JSON.parse(localStorage.getItem("pendingDonations")) || [];
let approvedDonations = JSON.parse(localStorage.getItem("approvedDonations")) || [];

// Update Progress Bar
function updateProgressBar() {
  const totalRaised = approvedDonations.reduce((sum, donation) => sum + donation.amount, 0);
  const progress = (totalRaised / DONATION_GOAL) * 100;

  // Update progress bar on index.html
  const progressBar = document.getElementById("progress");
  if (progressBar) {
    progressBar.style.width = `${progress}%`;
  }

  // Update raised amount on index.html
  const raisedAmount = document.getElementById("raised-amount");
  if (raisedAmount) {
    raisedAmount.textContent = totalRaised;
  }

  // Update total raised on admin.html
  const totalRaisedElement = document.getElementById("total-raised");
  if (totalRaisedElement) {
    totalRaisedElement.textContent = totalRaised;
  }
}

// Admin: Approve Donation
function approveDonation(index) {
  const donation = pendingDonations[index];
  approvedDonations.push(donation); // Move to approved list
  pendingDonations.splice(index, 1); // Remove from pending list

  // Save to localStorage
  localStorage.setItem("pendingDonations", JSON.stringify(pendingDonations));
  localStorage.setItem("approvedDonations", JSON.stringify(approvedDonations));

  // Update UI
  renderPendingDonations();
  renderApprovedDonations();
  updateProgressBar();
}

// Render Pending Donations (Admin Dashboard)
function renderPendingDonations() {
  const pendingList = document.getElementById("pending-list");
  if (pendingList) {
    pendingList.innerHTML = pendingDonations
      .map(
        (donation, index) => `
          <li>
            ${donation.name || "Anonymous"} donated RM ${donation.amount}
            <button onclick="approveDonation(${index})">Approve</button>
          </li>
        `
      )
      .join("");
  }
}

// Render Approved Donations (Admin Dashboard)
function renderApprovedDonations() {
  const approvedList = document.getElementById("approved-list");
  if (approvedList) {
    approvedList.innerHTML = approvedDonations
      .map(
        (donation) => `
          <li>${donation.name || "Anonymous"} donated RM ${donation.amount}</li>
        `
      )
      .join("");
  }
}

// Donor: Submit Donation
document.getElementById("donationForm")?.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const amount = parseInt(document.getElementById("item").value);
  const receipt = document.getElementById("receipt").files[0];

  // Add to pending donations
  pendingDonations.push({ name, amount, receipt });
  localStorage.setItem("pendingDonations", JSON.stringify(pendingDonations));

  alert("Thank you for your donation! It is pending approval.");
  document.getElementById("donationForm").reset();
});

// Initialize
updateProgressBar();
renderPendingDonations();
renderApprovedDonations();
