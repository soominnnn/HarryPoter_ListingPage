import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getFirestore, doc, getDoc, getDocs, collection } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";
import { getStorage, ref, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-storage.js"

const firebaseConfig = {
  apiKey: "AIzaSyBAMoLqYRmYS7KhRiiv0Uh1in4CvsU49i4",
  authDomain: "harry-potter-listing-pag-f6257.firebaseapp.com",
  projectId: "harry-potter-listing-pag-f6257",
  storageBucket: "harry-potter-listing-pag-f6257.appspot.com",
  messagingSenderId: "151851960333",
  appId: "1:151851960333:web:cb686a12fcb55039c7ad44"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const storage = getStorage();

const storageRef = ref(storage, 'images/HarryPotter.jpg');
getDownloadURL(storageRef)
  .then((url) => {
    console.log(url);
  })
  .catch((error) => {
    // Handle any errors
  });
