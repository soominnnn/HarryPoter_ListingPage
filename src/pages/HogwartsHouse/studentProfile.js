import {db, getDocs, collection, deleteDoc} from '../../core/firebase.js';

const main = document.getElementsByClassName("main")[0];

const createDiv = async (dbRef) => {
  const querySnapshot = await getDocs(collection(db, dbRef));

  querySnapshot.forEach((student) => {
    const profileHTML = `
    <div class="profileContainer">
      <div class="deleteButton">X</div>
      <div class="profile" id="${student.id}" 
      onclick="openUpdateModal()" style="background-image: url('${student.data().imageURL}')">
        <img class="profileFrame">
        <p class="name">${student.data().name}</p>
        <img class="underBarImg">
      </div>
    </div>`;
  
    main.insertAdjacentHTML('beforeend', profileHTML);
  });

  async function deleteStudent() {
    const profileContainer = this.closest('.profileContainer');
  
    const profile = profileContainer.querySelector('.profile');
    
    const profileId = profile.getAttribute('id');
  
    await deleteDoc(doc(db, dbRef, profileId));
    location.reload();
  };
  
  let deleteButton = document.querySelectorAll(".deleteButton");

  if(deleteButton.length !== 0) {
    for(let i = 0; i < deleteButton.length; i++) {
      deleteButton[i].addEventListener('click', deleteStudent);
    }
  }
};

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

export {createDiv};