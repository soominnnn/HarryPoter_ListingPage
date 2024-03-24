import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getFirestore, doc, getDocs, collection, deleteDoc } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";
import { getStorage, ref, getDownloadURL, uploadBytes } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-storage.js"

  const firebaseConfig = {
    apiKey: "AIzaSyBAMoLqYRmYS7KhRiiv0Uh1in4CvsU49i4",
    authDomain: "harry-potter-listing-pag-f6257.firebaseapp.com",
    projectId: "harry-potter-listing-pag-f6257",
    storageBucket: "harry-potter-listing-pag-f6257.appspot.com",
    messagingSenderId: "151851960333",
    appId: "1:151851960333:web:cb686a12fcb55039c7ad44"
  };
  
  initializeApp(firebaseConfig);
  const db = getFirestore();
  const storage = getStorage();


export {db, doc, getDocs, collection, deleteDoc, storage, ref, getDownloadURL, uploadBytes};