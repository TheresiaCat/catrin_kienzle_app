import { reloadList } from "./stuffs";
import { stuff } from "./data";
import { Stuff } from "./interface";

//create nuew variable bcs cant edit inported "stuff" array
let editableStuff = [...stuff]; 
//imported variables can't get assigned 


function deleteStuff(id: string) {
    // let all stuffs pass except the one with the id that will be deleted
    editableStuff = stuff.filter((stuff: Stuff) => stuff.id !== id);
    reloadList();
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