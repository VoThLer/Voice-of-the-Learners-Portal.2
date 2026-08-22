// ============================================================
// PASTE YOUR OWN CONFIG FROM THE FIREBASE CONSOLE HERE.
// (Project settings > General > Your apps > Web app > Config)
// ============================================================
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
export { firebaseConfig };

import { initializeApp, getApps } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Fake internal email domain so students log in with just a Student ID,
// while Firebase Auth still works the normal email/password way under the hood.
export const EMAIL_DOMAIN = "@vol.app";
export function studentIdToEmail(studentId){
  return studentId.trim().toLowerCase() + EMAIL_DOMAIN;
}
export function usernameToEmail(username){
  return username.trim().toLowerCase() + EMAIL_DOMAIN;
}
