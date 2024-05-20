// Function to open the side navigation bar
function openNavbar() {
    document.getElementById("sideNavigationBar").style.width = "250px";
}

// Function to close the side navigation bar
function closeNavbar() {
    document.getElementById("sideNavigationBar").style.width = "0";
}

// Function to handle form submission
function handleSignUp(event) {
    event.preventDefault();
    const name = document.querySelector('input[placeholder="Enter your Name here"]').value;
    const email = document.querySelector('input[placeholder="Enter your Email here"]').value;
    const password = document.querySelector('input[placeholder="Enter your Password here"]').value;
    
    // Simple form validation
    if (name && email && password) {
        alert(`Welcome, ${name}! Your sign-up is complete.`);
    } else {
        alert('Please fill in all fields.');
    }
}

// Adding event listener to the Sign-Up button
document.querySelector('.button button').addEventListener('click', handleSignUp);
