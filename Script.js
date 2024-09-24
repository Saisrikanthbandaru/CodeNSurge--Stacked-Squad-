document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault(); 
  const emailOrPhone = document.getElementById('emailOrPhone').value;
  const password = document.getElementById('password').value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^\d{10}$/;

  if (!emailOrPhone || !password) {
    displayError('Please enter both login details and password.');
    return;
  }
  if (!emailPattern.test(emailOrPhone) && !phonePattern.test(emailOrPhone)) {
    displayError('Please enter a valid email or 10-digit phone number.');
    return;
  }
  if ((emailOrPhone === 'user@123.com' || emailOrPhone === '9398284994') && password === '12345') {
    window.location.href = 'login.html';
  } else {
    displayError('Invalid login credentials.');
  }
});
function displayError(message) {
  const errorMessage = document.getElementById('errorMessage');
  errorMessage.textContent = message;
  errorMessage.style.display = 'block';
}
document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault();
  
  const emailOrPhone = document.getElementById("emailOrPhone").value;
  const password = document.getElementById("password").value;
  if (emailOrPhone === "test@example.com" && password === "password123") {
    window.location.href = "login.html";
  } else {
    document.getElementById("errorMessage").textContent = "Invalid credentials, please try again.";
    document.getElementById("errorMessage").style.display = "block";
  }
});
