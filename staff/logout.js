// logout.js
function logout() {
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        window.location.href = "/staff/index.html"; // Redirect to login page within the /staff/ folder
    }).catch((error) => {
        // An error happened.
        console.error(error);
    });
}
