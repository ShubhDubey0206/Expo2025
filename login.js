// document.getElementById('loginForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;
//     if (email && password) {
//         if (password.length < 8) {
//             alert('Password must be at least 8 characters long!');
//             return; 
//         }
//         localStorage.setItem('email', email);
//         localStorage.setItem('password', password);
//         window.location.href = 'home.html';  
//     } else {
//         alert('Please enter both email and password!');
//     }
// });
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
// import {getFirestore, setDoc, doc} from "firebase/firestore";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDPOrG53CynOacd3dOaHKI7IbHPd0770UU",
//   authDomain: "expo2k25.firebaseapp.com",
//   projectId: "expo2k25",
//   storageBucket: "expo2k25.firebasestorage.app",
//   messagingSenderId: "314416632052",
//   appId: "1:314416632052:web:14380e4d75e12e7a8f4ea1",
//   measurementId: "G-1BHTN6XSLY"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// function showMessage(message, divId){
//     var messageDiv=document.getElementById(divId);
//     messageDiv.style.display="block";
//     messageDiv.innerHTML=message;
//     messageDiv.style.opacity=1;
//     setTimeout(function(){
//         messageDiv.style.opacity=0;
//     },5000);
// }
// const analytics = getAnalytics(app);
// const login=document.getElementById('submit');
// login.addEventListener('click', (event) => {
//     event.preventDefault();
//     const email=document.getElementById('email').value;
//     const password=document.getElementById('password').value;
//     const username=document.getElementById('username').value;
    
//     const auth=getAuth();
//     const db= getFirestore();

//     createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential)=>{
//         const user=userCredential.user;
//         const userData={
//             email: email,
//             username: username,   
//         };
//         showMessage('Account Created Successfully', 'signUpMessage');
//         const docRef=doc(db, "users, user.uid");
//         setDoc(docRef, userData)
//         .then(()=> {
//             window.location.href='home.html';
//         })
//         .catch((error)=>{
//             console.error("error writing document", error);
//         })
//     })
//     .catch((error)=>{
//         const errorCode=error.code;
//         if(errorCode=='auth/email-already-in-use'){
//             showMessage('Email Address Already Exists!', 'signUpMessage');
//         }
//         else{
//             showMessage('unable to create User', 'signUpMessage');
//         }
//     })
// })

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("loginForm");

    if (form) {
        form.addEventListener("submit", async function (event) {
            event.preventDefault();

            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            if (password.length < 8) {
                alert("Password must be at least 8 characters long!");
                return;
            }

            const hashedPassword = await sha256(password);
            const storedUser = JSON.parse(localStorage.getItem("user"));

            if (!storedUser || storedUser.email !== email) {
                alert("User not found!");
                return;
            }

            if (storedUser.password !== hashedPassword) {
                alert("Incorrect password!");
                return;
            }

            // ✅ Set login status instead of deleting user data
            localStorage.setItem("loggedIn", "true");
            alert("Login successful! Redirecting to home...");
            window.location.href = "home.html";
        });
    }
});

// Hashing function remains the same
async function sha256(message) {
    const msgUint8 = new TextEncoder().encode(message);
    const hashBuffer = await crypto.subtle.digest("SHA-256", msgUint8);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(byte => byte.toString(16).padStart(2, "0")).join("");
}




// document.getElementById('loginForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;

//     if (email && password) {
//         if (password.length < 8) {
//             alert('Password must be at least 8 characters long!');
//             return;
//         }
        
//         let user = {
//             email: email,
//             password: password
//         };

//         localStorage.setItem('user', JSON.stringify(user)); // Store user details
//         window.location.href = 'home.html';  
//     } else {
//         alert('Please enter both email and password!');
//     }
// });

// // Home Page Functionality
// document.addEventListener("DOMContentLoaded", function () {
//     let storedUser = JSON.parse(localStorage.getItem("user"));
//     if (storedUser) {
//         document.getElementById("welcomeMsg").innerText = `Welcome, ${storedUser.email}`;
//     }
// });

// // Show user details when clicking "My Account"
// document.getElementById("myAccountBtn").addEventListener("click", function () {
//     let storedUser = JSON.parse(localStorage.getItem("user"));
//     if (storedUser) {
//         document.getElementById("accountDetails").innerHTML = `
//             <p><strong>Email:</strong> ${storedUser.email}</p>
//         `;
//     } else {
//         document.getElementById("accountDetails").innerHTML = "<p>No user logged in</p>";
//     }
// });

// document.getElementById('loginForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;

//     let storedUser = JSON.parse(localStorage.getItem("user"));

//     if (storedUser && storedUser.email === email && storedUser.password === password) {
//         alert("Login Successful!");
//         window.location.href = 'home.html';  
//     } else {
//         alert("Invalid email or password!");
//     }
// });

// document.addEventListener("DOMContentLoaded", function () {
//     let storedUser = JSON.parse(localStorage.getItem("user"));
//     if (storedUser) {
//         document.getElementById("welcomeMsg").innerText = `Welcome, ${storedUser.username}`;
//     }
// });

// document.getElementById("myAccountBtn").addEventListener("click", function () {
//     let storedUser = JSON.parse(localStorage.getItem("user"));
//     if (storedUser) {
//         document.getElementById("accountDetails").innerHTML = `
//             <p><strong>Username:</strong> ${storedUser.username}</p>
//             <p><strong>Email:</strong> ${storedUser.email}</p>
//         `;
//     } else {
//         document.getElementById("accountDetails").innerHTML = "<p>No user logged in</p>";
//     }
// });

// document.getElementById('loginForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;

//     let storedUser = JSON.parse(localStorage.getItem("user"));

//     if (storedUser && storedUser.email === email && storedUser.password === password) {
//         alert("Login Successful!");
//         window.location.href = 'D:\Frontend (htmlcss)\Expo2k25\home.html';  
//     } 
//     // else {
//     //     alert("Invalid email or password!");
//     // }
// });

// document.addEventListener("DOMContentLoaded", function () {
//     let storedUser = JSON.parse(localStorage.getItem("user"));
//     if (storedUser) {
//         document.getElementById("welcomeMsg").innerText = `Welcome, ${storedUser.username}`;
//     }
// });

// document.getElementById("myAccountBtn").addEventListener("click", function () {
//     let storedUser = JSON.parse(localStorage.getItem("user"));
//     if (storedUser) {
//         document.getElementById("accountDetails").innerHTML = `
//             <p><strong>Username:</strong> ${storedUser.username}</p>
//             <p><strong>Email:</strong> ${storedUser.email}</p>
//         `;
//     } else {
//         document.getElementById("accountDetails").innerHTML = "<p>No user logged in</p>";
//     }
// });
