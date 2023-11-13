function toggleSidebar() {
    const sidebar = document.getElementById('mySidebar');
    const content = document.getElementById('mainContent');

    sidebar.style.width = sidebar.style.width === '250px' ? '0' : '250px';
    content.style.marginLeft = sidebar.style.width === '250px' ? '250px' : '0';
}

document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.getElementById('mySidebar');
    const content = document.getElementById('mainContent');

    sidebar.style.width = '0';
    content.style.marginLeft = '0';

    document.getElementById('toggle-btn').addEventListener('click', function () {
        sidebar.style.width = sidebar.style.width === '250px' ? '0' : '250px';
        content.style.marginLeft = sidebar.style.width === '250px' ? '250px' : '0';
    });

    document.addEventListener('click', function (event) {
        const isClickInside = sidebar.contains(event.target) || document.getElementById('toggle-btn').contains(event.target);

        if (!isClickInside) {
            sidebar.style.width = '0';
            content.style.marginLeft = '0';
        }
    });
});


// registration and login forms javascript 
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
    const securityAnswer = document.getElementById('registration-security-answer').value; 

    const newUser = {
        username: newUsername,
        password: newPassword,
        securityQuestion: securityQuestion,
        securityAnswer: securityAnswer,
    };
    localStorage.setItem(newUsername + '_securityAnswer', securityAnswer);
    console.log(`Security answer saved for ${newUsername}: ${securityAnswer}`); // Added line


    localStorage.setItem(newUsername, JSON.stringify(newUser));
    alert('Registration successful!');

    showLoginForm();
});


function showForgotPasswordForm() {
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('registration-container').style.display = 'none';

    document.getElementById('forgotPasswordForm').style.display = 'block';
}


function recoverPassword() {
    var username = document.getElementById('forgotUsername').value;
    var securityAnswer = document.getElementById('security-answer').value;
    console.log(securityAnswer);
    console.log(username);

    if (!username || !securityAnswer) {
        alert('Please enter both username and security answer.');
        return;
    }

    var storedSecurityAnswer = localStorage.getItem(username + '_securityAnswer');
    console.log(`Stored security answer for ${username}: ${storedSecurityAnswer}`); 
    if (securityAnswer === storedSecurityAnswer) {
        var newPassword = prompt('Enter a new password:');

        if (newPassword) {
            localStorage.setItem(username + '_password', newPassword);
            alert('Password reset successful!');
        } else {
            alert('Invalid password. Please try again.');
        }
    } else {
        alert('Incorrect security answer. Please try again.');
    }

    document.getElementById('forgotUsername').value = '';
    document.getElementById('security-answer').value = '';
    document.getElementById('forgotPasswordForm').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
}
