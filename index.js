function toggleSidebar() {
    const sidebar = document.getElementById('mySidebar');
    const content = document.getElementById('mainContent');

    // Toggle the width of the sidebar and adjust content margin
    sidebar.style.width = sidebar.style.width === '250px' ? '0' : '250px';
    content.style.marginLeft = sidebar.style.width === '250px' ? '250px' : '0';
}
function showRegistrationForm() {
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('registration-container').style.display = 'block';
}

function showLoginForm() {
    document.getElementById('registration-container').style.display = 'none';
    document.getElementById('login-container').style.display = 'block';
}

document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if the user exists in local storage
    const storedUser = localStorage.getItem(username);
console.log(username);
    if (storedUser) {
        const userData = JSON.parse(storedUser);
console.log(storedUser);
        if (userData.password === password) {
           
            localStorage.setItem("loggedInUser", username);

            alert('Login successful!');
            window.location.href = 'Pages/Home.html';
        } else {
            alert('Invalid password');
        }
    } else {
        alert('User not found');
    }
});
document.getElementById('registration-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const newUsername = document.getElementById('new-username').value;
    const newPassword = document.getElementById('new-password').value;
    const securityQuestion = document.getElementById('security-question').value;

    const newUser = {
        username: newUsername,
        password: newPassword,
        securityQuestion: securityQuestion,
    };

    localStorage.setItem(newUsername, JSON.stringify(newUser));
    alert('Registration successful!');

    // Redirect to the login form after successful registration
    showLoginForm();
});
