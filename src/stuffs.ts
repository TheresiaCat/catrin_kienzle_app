import { Stuff } from "./interface";
import { validateInput } from "./validator";
import { stuff } from "./data"; 
import { deleteStuff, ChangeStatus } from "./editStuffElement";


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
      timestamp: new Date(),
      category: "money"
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

/*
function reloadList() {
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
*/
function reloadList() {
  // Iterate through Stuffs to refresh HTML
  stuff.forEach((stuff) => {
    // create container for Stuff
    const singleStuffContainer = document.createElement("div");
    singleStuffContainer.id = stuff.id;
    singleStuffContainer.innerHTML = `<p style="${
      stuff.finished && "text-decoration: line-through;"
    }">${stuff.description}</p>`;

    // create Delete Button
    const deleteBtn = document.createElement("button");
    deleteBtn.addEventListener("click", () => deleteStuff(stuff.id));
    deleteBtn.style.backgroundColor = "red";
    deleteBtn.innerHTML = "X";

    // create finished Button
    const finishedBtn = document.createElement("button");
    finishedBtn.addEventListener("click", () => ChangeStatus(stuff.id));
    if (stuff.finished) {
      finishedBtn.innerHTML = "set unfinished";
    } else {
      finishedBtn.innerHTML = "set finished";
    }

    // get the container based on the category
    let container: HTMLDivElement | null = null;
    switch (stuff.category) {
      case "money":
        container = document.querySelector(".money") as HTMLDivElement;
        break;
      case "papers":
        container = document.querySelector(".papers") as HTMLDivElement;
        break;
      case "hygiene":
        container = document.querySelector(".hygiene") as HTMLDivElement;
        break;
      case "clothing":
        container = document.querySelector(".clothing") as HTMLDivElement;
        break;
    }

    // insert the buttons into the container
    if (container) {
      singleStuffContainer.appendChild(deleteBtn);
      singleStuffContainer.appendChild(finishedBtn);
      container.appendChild(singleStuffContainer);
      container.appendChild(document.createElement("hr"));
    }
  });
}

export { addStuff, deleteStuff, reloadList, handleButtonClick };
