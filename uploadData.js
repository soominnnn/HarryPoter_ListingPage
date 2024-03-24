import {db, doc, collection, storage, ref, getDownloadURL, uploadBytes} from './src/core/firebase.js';

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
      name: studentName, 
      imageURL: imageURL
    });
  } catch (e) {
    console.log(e);
  }
  location.reload();
}

addStudentButton.addEventListener('click', createStudent);