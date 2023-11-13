function toggleSidebar() {
    const sidebar = document.getElementById('mySidebar');
    const content = document.getElementById('mainContent');

    // Toggle the width of the sidebar and adjust content margin
    sidebar.style.width = sidebar.style.width === '250px' ? '0' : '250px';
    content.style.marginLeft = sidebar.style.width === '250px' ? '250px' : '0';
}
let logoutButton;
document.addEventListener("DOMContentLoaded", function() {
    // Check if the user is logged in
    const loggedInUser = localStorage.getItem("loggedInUser");
    const logoutButton = document.querySelector('#navul li:nth-child(2)'); // Adjust this selector based on your actual structure

    if (loggedInUser) {
        // Display the username in the Maincontent div
        console.log("Username retrieved:", loggedInUser);

        displayUsernameInMainContent(loggedInUser);

        // Hide login and register buttons
        hideLoginAndRegisterButtons();
    } else {
        // Show login and register buttons
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

    // Create a new paragraph element
    const usernameParagraph = document.createElement('p');

    // Set the content of the paragraph with the welcome message and username
    usernameParagraph.innerHTML = `Welcome, ${username}!`;

    // Append the paragraph to the Maincontent div
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
    const logoutButton = document.querySelector('#navul li:nth-child(2)'); // Adjust this selector based on your actual structure

    loginButton.style.display = 'block';
    registerButton.style.display = 'block';
}

function logout() {
    // Clear user data from local storage
    localStorage.removeItem("loggedInUser");

    // Redirect to the login page
    window.location.href = '../index.html';
}

function login(){
    const loggedInUser = localStorage.getItem("loggedInUser");

if(!loggedInUser)
{
    window.location.href = '../index.html';

}
}