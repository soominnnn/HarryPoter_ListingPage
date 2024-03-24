import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getFirestore, doc, setDoc, getDocs, collection, deleteDoc } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";
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


// 프로필 컨테이너 요소를 가져오기
const main = document.getElementsByClassName("main")[0];

const createDiv = async () => {
  const querySnapshot = await getDocs(collection(db, "Griffindor"));
  querySnapshot.forEach((student) => {
    const profileHTML = `
    <div class="profileContainer">
    <div class="deleteButton">X</div>
    <div class="profile" id="${student.id}" onclick="openUpdateModal()" style="background-image: url('${student.data().imageURL}')">
      <img class="profileFrame">
      <p class="name">${student.data().name}</p>
      <img class="underBarImg">
    </div>
  </div>
    `;
  
    main.insertAdjacentHTML('beforeend', profileHTML);
    console.log(student.data().imageURL)
    document.getElementById(`${student.data().name}`).style.backgroundImage = `url(${student.data().imageURL})`;
  });

  async function deleteStudent() {
    const profileContainer = this.closest('.profileContainer');
  
    const profile = profileContainer.querySelector('.profile');
    
    const profileId = profile.getAttribute('id');
  
    await deleteDoc(doc(db, "Griffindor", profileId));
    location.reload();
  }
  
  let deleteButton = document.querySelectorAll(".deleteButton");

  if(deleteButton.length !== 0) {
    for(let i = 0; i < deleteButton.length; i++) {
      deleteButton[i].addEventListener('click', deleteStudent);
    }
  }
}

createDiv();

const modal = document.querySelector('.addStudentModal');
const closeModalButton = document.querySelector('.closeModal');

const openModal = () => {
modal.style.display = 'flex';
}

const closeModal = () => {
modal.style.display = 'none';
}

closeModalButton.addEventListener("click", closeModal);

const createButton = document.querySelector(".createButton");
const deleteButton = document.querySelector(".deleteButton");

createButton.addEventListener("click", openModal);

let imageURL = '';

document.querySelector('#file').addEventListener('change', function(){
  let file = this.files[0];
  const reader = new FileReader();

reader.onload = (event) => {
  const studentImage = document.querySelector('.studentImage');
  studentImage.style.backgroundImage = `url('${event.target.result}')`;
}

reader.readAsDataURL(file);


const storageRef = ref(storage, `Griffindor/${file.name}`);

uploadBytes(storageRef, file).then((snapshot) => {
  console.log(snapshot)

  getDownloadURL(storageRef).then((downloadURL) => {
    imageURL = downloadURL;
  });
});
})

const addStudentButton = document.querySelector('.addStudentButton');

const createStudent = async () => {
  const studentName = document.querySelector('.nameInput').value;

  try {
    await setDoc(doc(collection(db, "Griffindor"), studentName), {
      name: studentName, imageURL: imageURL
    });
  } catch (e) {
    console.log(e);
  }

  location.reload();
}

addStudentButton.addEventListener('click', createStudent);

const search = (e) => {
  const searchTarget = e.target.value;
  const mainDiv = document.querySelectorAll('.profile');

  for(let i = 0; i < mainDiv.length; i += 1) {
    if(mainDiv[i].getAttribute('id').includes(searchTarget)) {
      mainDiv[i].style.display = 'flex';
    } else {
      mainDiv[i].style.display = 'none';
    }
  }
}

document.querySelector('.searchBar').addEventListener('change', search);