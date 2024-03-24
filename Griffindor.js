// const firebaseConfig = {
//     apiKey: "AIzaSyBAMoLqYRmYS7KhRiiv0Uh1in4CvsU49i4",
//     authDomain: "harry-potter-listing-pag-f6257.firebaseapp.com",
//     projectId: "harry-potter-listing-pag-f6257",
//     storageBucket: "harry-potter-listing-pag-f6257.appspot.com",
//     messagingSenderId: "151851960333",
//     appId: "1:151851960333:web:cb686a12fcb55039c7ad44"
//   };
// initializeApp(firebaseConfig);

const modal = document.querySelector('.addStudentModal');
const closeModalButton = document.querySelector('.closeModal');
// const fileInput = document.querySelector('#file');

const openModal = () => {
  modal.style.display = 'flex';
}
const openUpdateModal = () => {
  openModal();
  document.querySelector('.studentImage').style.backgroundImage = this.backgroundImage;
  document.querySelector('.addStudentButton').innerText = 'Update';
}
const closeModal = () => {
  modal.style.display = 'none';
}

closeModalButton.addEventListener("click", closeModal);

// const createButton = document.querySelector(".createButton");
// const deleteButton = document.querySelector(".deleteButton");

// createButton.addEventListener("click", openModal);

// const uploadImage = (event) => {
//   const file = event.target.files[0];
//   const reader = new FileReader();

//   reader.onload = (event) => {
//     const studentImage = document.querySelector('.studentImage');
//     studentImage.style.backgroundImage = `url('${event.target.result}')`;
//   }

//   reader.readAsDataURL(file);

//   const storage = getStorage();
//   const storageRef = (storage, `Griffindor/${file.name}`);

//   uploadBytes(storageRef, file).then((snapshot) => {
//     console.log(snapshot);

//     getDownloadURL(storageRef).then((downloadURL) => {
//       return downloadURL;
//     });
//   });
// }

// fileInput.addEventListener('change', uploadImage);

// const addStudentButton = document.querySelector('.addStudentButton');

// const createStudent = async () => {
//   const db = getFirestore();
//   const imageURL = uploadImage();
//   const studentName = document.querySelector('.nameInput').value;

//   await setDoc(doc(collection(db, "Griffindor"), studentName), {
//     "name": studentName,
//     "imageURL": imageURL
//   });
// }

// addStudentButton.addEventListener('click', createStudent);
