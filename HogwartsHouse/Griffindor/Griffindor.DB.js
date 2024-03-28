import { createDiv } from "../studentProfile.js";
import { uploadFile, createStudent} from "../uploadData.js"

const dbRef = "Griffindor";

document.querySelector('#file').addEventListener('change', () => uploadFile(dbRef));
document.querySelector('.addStudentButton').addEventListener('click', () => createStudent(dbRef));

createDiv(dbRef);
