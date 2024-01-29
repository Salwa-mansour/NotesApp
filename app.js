"use strict";
const notesContainer = document.querySelector('.notes-container');
const createBtn = document.querySelector('#create-btn');
let notes = document.querySelectorAll('.input-box');

createBtn.addEventListener("click",generteNote);
showNotes();
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
        updateStorage();
    }else if(e.target.className === "input-box"){
      
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt=>{
           
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
});
//----------- Local Storage ------------
//save all html as text becouase the notes html is generated from javascprt!?
function updateStorage(){
    localStorage.setItem("notes",notesContainer.innerHTML);
}
function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes")
}
document.addEventListener("keydown",event=>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})