const firebaseConfig = {
  apiKey: "AIzaSyDRXRs5f0HePIKndAHDHmWOEYGludoJwik",
  authDomain: "voice-of-the-learners.firebaseapp.com",
  projectId: "voice-of-the-learners",
  storageBucket: "voice-of-the-learners.firebasestorage.app",
  messagingSenderId: "731904931029",
  appId: "1:731904931029:web:ff635fe15c42e2f09a1e5c"
};
export { firebaseConfig };

import { initializeApp, getApps } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Fake internal email domain — used ONLY for student accounts, so students
// log in with just a Student ID while Firebase Auth still works the normal
// email/password way under the hood. Admin now uses a real email directly.
export const EMAIL_DOMAIN = "@vol.app";
export function studentIdToEmail(studentId){
  return studentId.trim().toLowerCase() + EMAIL_DOMAIN;
}
