import { reloadList } from "./stuffs";
import { stuff } from "./data";
import { Stuff } from "./interface";

//create nuew variable bcs cant edit inported "stuff" array
let editableStuff = [...stuff]; 
//imported variables can't get assigned 


/*
function deleteStuff(id: string) {
    // let all stuffs pass except the one with the id that will be deleted
    editableStuff = stuff.filter((stuff: Stuff) => stuff.id !== id);
    reloadList();
  }
  */

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
    editableStuff = stuff.map((stuffStatus) => {
      if (stuffStatus.id === id) {
        stuffStatus.finished = !stuffStatus.finished; // opposite finished State
      }
      return stuffStatus;
    });
    reloadList();
  }

  export {deleteStuff, ChangeStatus}