// logout.js
function logout() {
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        window.location.href = "index.html"; // Redirect to login page
    }).catch((error) => {
        // An error happened.
        console.error(error);
    });
}
