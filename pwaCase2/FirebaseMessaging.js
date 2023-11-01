// import { initializeApp } from "firebase/app";
// import { getMessaging, getToken } from "firebase/messaging";

// const firebaseConfig = {
//     apiKey: "AIzaSyB8au7XOcxkABG92etJgqbvgSZ2aP8XCHQ",
//     authDomain: "may-i-interrupt-you.firebaseapp.com",
//     projectId: "may-i-interrupt-you",
//     storageBucket: "may-i-interrupt-you.appspot.com",
//     messagingSenderId: "463416516667",
//     appId: "1:463416516667:web:c4c9a896758b2a87977c1e",
//     measurementId: "G-1EDSFMZT7H",
// };

// function requestPermission() {
//   console.log("Requesting permission...");
//   Notification.requestPermission().then((permission) => {
//     if (permission === "granted") {
//       console.log("Notification permission granted.");
//       const app = initializeApp(firebaseConfig);

//       const messaging = getMessaging(app);
//       getToken(messaging, {
//         vapidKey:
//           "BDkt4IMepC_AFWCXeOiRRu5zZvHquOsvkI2ag5HUvU4B5Z58niPt4qvUgD085aWllPH14wJC1A5-XVjKFiZ_a8I",
//       }).then((currentToken) => {
//         if (currentToken) {
//           console.log("currentToken: ", currentToken);
//         } else {
//           console.log("Can not get token");
//         }
//       });
//     } else {
//       console.log("Do not have permission!");
//     }
//   });
// }

// requestPermission();
