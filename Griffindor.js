const CreateProfile = () => {
  const main = document.querySelector('main');
  const profileFrame = document.createElement('div');
  const profile = document.createElement('div');
  profileFrame.appendChild(profile);
  profile.setAttribute("class", "profile");
  
  const frame = document.createElement('img');
  frame.setAttribute("class", "profileFrame");

  const name = document.createElement('p');
  name.setAttribute("class", "name");
  name.innerHTML = "Harry Potter";

  const underBar = document.createElement("img");
  underBar.setAttribute("class", "underBarImg");

  profile.appendChild(frame);
  profile.appendChild(name);
  profile.appendChild(underBar);

  main.appendChild(profile);
}

const students = [];

const addNewStudents = (name) => {
  students.push(name);

}