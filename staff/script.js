// script.js
function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            window.location.href = "/staff/dashboard.html"; // Redirect to dashboard page within the /staff/ folder
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            if (errorCode === 'auth/user-not-found' || errorCode === 'auth/wrong-password') {
                document.getElementById("error-message").innerText = "Invalid email or password.";
            } else {
                document.getElementById("error-message").innerText = errorMessage;
            }
        });
}
