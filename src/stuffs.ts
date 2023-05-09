import { Stuff } from "./interface";
import { validateInput } from "./validator";
import { stuff } from "./data"; 

//create nuew variable bcs cant edit inported "stuff" array
let editableStuff = [...stuff]; 
//imported variables can't get assigned 


//"this" is the actual clicked button
//get the right container by the button that is clicked

/**
 * FEEDBACK-JS: Das ergibt so nicht wirklich viel Sinn, weil der Container ja nie wirklich definiert ist
 * Ich habe jetzt einfach mal den ersten als Zuweisung genommen.
 */
let container = document.querySelector(".stuffsContainer") as HTMLDivElement;

function handleButtonClick(relatedInput: HTMLInputElement) {
  addStuff(relatedInput);
}

function addStuff(targetInp: HTMLInputElement) {
  // const category = targetInp.parentElement!.id;
  if (validateInput(targetInp)) {
    const id = `${new Date().getTime()}-rn-${Math.floor(Math.random() * 999)}`;
    const newStuff: Stuff = {
      description: targetInp.value,
      id,
      finished: false,
      timestamp: new Date()
    };

    stuff.push(newStuff);

    try {
      reloadList();
    } catch (error) {
      console.error(error);
    }

    // empty input
    targetInp.value = "";
  }
}

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

function reloadList() {
  //insert Parameter Array
  //empty the stuff list
  //FEEDBACK-JS: truthy prüfung
  if (container) {
    //nur zugreifen wenn container definiert ist
    container.innerHTML = "";
    // Iterate through Stuffs to refresh HTML
    stuff.forEach((stuff) => {
      //create container for Stuff
      const singleStuffContainer = document.createElement("div");
      singleStuffContainer.id = stuff.id;
      singleStuffContainer.innerHTML = `<p style="${
        stuff.finished && "text-decoration: line-through;"
      }">${stuff.description}</p>`;

      //create Delete Button
      const deleteBtn = document.createElement("button");
      deleteBtn.addEventListener("click", () => deleteStuff(stuff.id));
      deleteBtn.style.backgroundColor = "red";
      deleteBtn.innerHTML = "X";

      //create finished Button
      const finishedBtn = document.createElement("button");
      finishedBtn.addEventListener("click", () => ChangeStatus(stuff.id));
      if (stuff.finished) {
        finishedBtn.innerHTML = "set unfinished";
      } else {
        finishedBtn.innerHTML = "set finished";
      }

      //get the delete btn in
      singleStuffContainer.appendChild(deleteBtn);
      singleStuffContainer.appendChild(finishedBtn);
      //append it to the wrapper
      container.appendChild(singleStuffContainer); //insert in chosen container
      //separator between each item
      container.appendChild(document.createElement("hr"));
    });
  }
}

export { addStuff, deleteStuff, reloadList, handleButtonClick };
