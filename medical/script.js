
// Configurația Firebase
const firebaseConfig = {
    apiKey: "AIzaSyD8qVawENLpjkz0jRiaiOAS-TF06FMpevM",
    authDomain: "medicalproject-607c4.firebaseapp.com",
    projectId: "medicalproject-607c4",
    storageBucket: "medicalproject-607c4.appspot.com",
    messagingSenderId: "168487695175",
    appId: "1:168487695175:web:a9ac93198c057436a21262",
    measurementId: "G-YBHSGCP2BJ"
};

// Inițializarea Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const firestore = firebase.firestore();

// Funcția pentru înregistrare
const registerForm = document.getElementById('register-form');
if (registerForm) {
    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = registerForm['email'].value;
        const password = registerForm['password'].value;
        
        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Dacă înregistrarea este reușită
                const user = userCredential.user;
                console.log('Registered user:', user);
                window.location.href = 'login.html'; // Redirecționează către pagina de login
            })
            .catch((error) => {
                // Dacă apare o eroare
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error('Error:', errorMessage);
                alert(errorMessage);
            });
    });
}

// Funcția pentru autentificare
const loginForm = document.getElementById('login-form');
if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = loginForm['email'].value;
        const password = loginForm['password'].value;
        
        auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Dacă autentificarea este reușită
                const user = userCredential.user;
                console.log('Logged in user:', user);
                window.location.href = 'profile.html'; // Redirecționează către pagina de profil
            })
            .catch((error) => {
                // Dacă apare o eroare
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error('Error:', errorMessage);
                alert(errorMessage);
            });
    });
}

// Funcția pentru deconectare
const logoutBtn = document.getElementById('logout-btn');
if (logoutBtn) {
    logoutBtn.addEventListener('click', function() {
        auth.signOut().then(() => {
            // Dacă deconectarea este reușită
            console.log('User signed out');
            window.location.href = 'login.html'; // Redirecționează către pagina de login
        }).catch((error) => {
            // Dacă apare o eroare
            console.error('Error:', error);
            alert('Could not logout. Please try again.');
        });
    });
}

// Funcția pentru a afișa informațiile utilizatorului autentificat în profil
const profilePage = document.getElementById('user-info');
if (profilePage) {
    auth.onAuthStateChanged((user) => {
        if (user) {
            // Dacă utilizatorul este autentificat
            const email = user.email;
            document.getElementById('user-email').textContent = email;
            profilePage.style.display = 'block';
        } else {
            // Dacă utilizatorul nu este autentificat
            console.log('No user logged in');
            window.location.href = 'login.html'; // Redirecționează către pagina de login
        }
    });
}
