import { reloadList } from "./stuffs";
import { stuff } from "./data";
import { Stuff } from "./interface";

//create nuew variable bcs cant edit inported "stuff" array
let editableStuff = [...stuff]; 
//imported variables can't get assigned 

  function deleteStuff(id: string) {
    const index = stuff.findIndex((s) => s.id === id);
    if (index !== -1) {
      editableStuff.splice(index, 1); // Remove the element from the array
      const element = document.getElementById(id);
      if (element) {
        element.remove(); // Remove the element from the DOM
      }
    }
  }
  
   // alters status (abgehakt?)
  function ChangeStatus(id: string) {
    const currentStuff = document.getElementById(id)!;
    const index = editableStuff.findIndex((stuff) => stuff.id === id);
    if (index !== -1) {
      editableStuff[index].finished = !editableStuff[index].finished;
      currentStuff.querySelector("p")!.style.textDecoration = editableStuff[index].finished ? "line-through" : "none";
      const finishedBtn = currentStuff.querySelector("button:nth-of-type(2)")!;
      finishedBtn.innerHTML = editableStuff[index].finished ? "set unfinished" : "set finished";
    }
  }  

  export {deleteStuff, ChangeStatus}