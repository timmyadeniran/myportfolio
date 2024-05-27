function signInWithGoogle() {
    // Handle sign-in with Google
}

function signInWithApple() {
    // Handle sign-in with Apple ID
}

function signInWithInstagram() {
    // Handle sign-in with Instagram
}

function signInWithTikTok() {
    // Handle sign-in with TikTok
}

function signInWithTwitter() {
    // Handle sign-in with Twitter
}

document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // prevent form submission

    // Get username and password values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check if username and password are correct
    if (username === "yourusername" && password === "yourpassword") {
        // Redirect to dashboard or any other page on successful login
        window.location.href = "dashboard.html";
    } else {
        // Display error message
        document.getElementById("error-message").innerText = "Invalid username or password";
    }
});
