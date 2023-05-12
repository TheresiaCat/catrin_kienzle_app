import { stuff } from "./data";

//imported variables can't get assigned 
let editableStuff = [...stuff]; 

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
      finishedBtn.innerHTML = editableStuff[index].finished ? "is not in suitcase" : "put in suitcase";
    }
  }  

  export {deleteStuff, ChangeStatus}