"use strict";
const notesContainer = document.querySelector('.notes-container');
const createBtn = document.querySelector('#create-btn');
let notes = document.querySelectorAll('.input-box');

createBtn.addEventListener("click",generteNote);
function generteNote(){
    let inputBox =document.createElement("p");
    let deletBtnImg=document.createElement("img");
    inputBox.className="input-box";
    inputBox.setAttribute("contenteditable","true");
    deletBtnImg.src="./media/delete.svg";
    deletBtnImg.className="delete-btn";
    notesContainer.appendChild(inputBox).appendChild(deletBtnImg);

}

notesContainer.addEventListener("click",function(e){
    if(e.target.className=="delete-btn"){
        e.target.parentElement.remove();
    }
});