function toggleSidebar() {
    const sidebar = document.getElementById('mySidebar');
    const content = document.getElementById('mainContent');

    sidebar.style.width = sidebar.style.width === '250px' ? '0' : '250px';
    content.style.marginLeft = sidebar.style.width === '250px' ? '250px' : '0';
}
let logoutButton;
document.addEventListener("DOMContentLoaded", function() {
    const loggedInUser = localStorage.getItem("loggedInUser");
    const logoutButton = document.querySelector('#navul li:nth-child(2)'); 

    if (loggedInUser) {
        console.log("Username retrieved:", loggedInUser);

        displayUsernameInMainContent(loggedInUser);

        hideLoginAndRegisterButtons();
    } else {
        showLoginAndRegisterButtons();
    }
    if(!loggedInUser){
        logoutButton.style.display = 'none';
    
    }
    else{
        logoutButton.style.display = 'block';
    
    }
    
});

function displayUsernameInMainContent(username) {
    const mainContent = document.querySelector('.Maincontent');

    const usernameParagraph = document.createElement('p');

    usernameParagraph.innerHTML = `Welcome, ${username}!`;

    mainContent.appendChild(usernameParagraph);
}

function hideLoginAndRegisterButtons() {
    console.log("Hiding buttons");

    const loginButton = document.querySelector('#navul li:nth-child(1)');

    const registerButton = document.querySelector('#navul li:nth-child(3)');

    loginButton.style.display = 'none';
    registerButton.style.display = 'none';

}


function showLoginAndRegisterButtons() {
    const loginButton = document.querySelector('#navul li:nth-child(1)');
    const registerButton = document.querySelector('#navul li:nth-child(3)');
    const logoutButton = document.querySelector('#navul li:nth-child(2)'); 

    loginButton.style.display = 'block';
    registerButton.style.display = 'block';
}

function logout() {
    localStorage.removeItem("loggedInUser");

    window.location.href = '../index.html';
}

function login(){
    const loggedInUser = localStorage.getItem("loggedInUser");

if(!loggedInUser)
{
    window.location.href = '../index.html';

}
}