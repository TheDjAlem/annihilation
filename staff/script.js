// script.js
function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            window.location.href = "dashboard.html"; // Redirect to dashboard page
        })
        .catch((error) => {
            const errorMessage = error.message;
            document.getElementById("error-message").innerText = errorMessage;
        });
}
