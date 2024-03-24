const modal = document.querySelector('.addStudentModal');
const closeModalButton = document.querySelector('.closeModal');

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
