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

   
});

let logoutButton;
document.addEventListener("DOMContentLoaded", function() {
    const loggedInUser = localStorage.getItem("loggedInUser");
    const logoutButton = document.querySelector('#navul li:nth-child(2)'); 

    if (loggedInUser) {

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

    usernameParagraph.innerHTML = `Welcome, ${username}`;

    mainContent.appendChild(usernameParagraph);
}

function hideLoginAndRegisterButtons() {

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


// added quote loading below
document.addEventListener('DOMContentLoaded', function () {
    const quotes = [
      "The only way to do great work is to love what you do. - Steve Jobs",
      "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
      "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
      "In the middle of difficulty lies opportunity. - Albert Einstein",
      "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    ];
  
    const currentDate = new Date();
    const dayOfYear = currentDate.getFullYear() * 365 + currentDate.getMonth() * 30 + currentDate.getDate();
    const dailyQuoteIndex = dayOfYear % quotes.length;
  
    const quoteTextElement = document.querySelector('.quote-text');
    quoteTextElement.textContent = quotes[dailyQuoteIndex];
  });
  