import { createDiv } from "../studentProfile.js";
import {db, doc, setDoc, collection, storage, ref, getDownloadURL, uploadBytes} from '../../../core/firebase.js';

let imageURL = '';
const dbRef = "Griffindor";

document.querySelector('#file').addEventListener('change', function(){
  let file = this.files[0];
  const reader = new FileReader();

  reader.onload = (event) => {
    const studentImage = document.querySelector('.studentImage');
    studentImage.style.backgroundImage = `url('${event.target.result}')`;
  }
  reader.readAsDataURL(file);

  const storageRef = ref(storage, `${dbRef}/${file.name}`);

  uploadBytes(storageRef, file).then((snapshot) => {
    getDownloadURL(storageRef).then((downloadURL) => {
      imageURL = downloadURL;
    });
  });
})

const addStudentButton = document.querySelector('.addStudentButton');

async function createStudent(dbRef) {
  const studentName = document.querySelector('.nameInput').value;

  if(studentName.length >= 13) {
    alert("이름은 13자 이하로 작성해주세요.");
  } else {
    await setDoc(doc(collection(db, dbRef), studentName), {
      name: studentName, 
      imageURL: imageURL
    });
  
    location.reload();
  }
} 

addStudentButton.addEventListener('click', createStudent);


createDiv(dbRef);
