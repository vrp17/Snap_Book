// // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// import {
//   getAuth,
//   createUserWithEmailAndPassword,
// } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBrpEzez9g-QJx5ITCm4Js3plAfTqtsmew",
//   authDomain: "snapbook-14563.firebaseapp.com",
//   projectId: "snapbook-14563",
//   storageBucket: "snapbook-14563.appspot.com",
//   messagingSenderId: "462386839927",
//   appId: "1:462386839927:web:1976c9dbc6976f16ffe172",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// //submit button

// const submit = document.getElementById("submit");
// submit.addEventListener("click", function (event) {
//   event.preventDefault();
//   //inputs
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;

//   createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       // Signed up
//       const user = userCredential.user;
//       alert("Creating Account...Please wait!");
//       window.location.href = "grand.html"
//       // ...
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       alert(errorMessage);
//       // ..
//     });
// });
