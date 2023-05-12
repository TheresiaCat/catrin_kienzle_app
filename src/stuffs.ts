import { Stuff } from "./interface";
import { validateInput } from "./validator";
import { stuff } from "./data"; 
import { deleteStuff, ChangeStatus } from "./editStuffElement";


function handleButtonClick(relatedInput: HTMLInputElement) {
  addStuff(relatedInput);
}


function getCategoryFromInputId(inputId: string): string {
  switch (inputId) {
    case 'newmoneyinput':
      return 'money';
    case 'newpapersinput':
      return 'papers';
    case 'newhygieneinput':
      return 'hygiene';
    case 'newclothinginput':
      return 'clothing';
    default:
      return '';
  }
}

function addStuff(targetInp: HTMLInputElement) {
  //const category = getCategoryFromInputId(targetInp.id);
  const category = targetInp.parentElement!.id
  if (validateInput(targetInp)) {
    const id = `${new Date().getTime()}-rn-${Math.floor(Math.random() * 999)}`;
    const newStuff: Stuff = {
      description: targetInp.value,
      id,
      finished: false,
      timestamp: new Date(),
      category,
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
      finishedBtn.innerHTML = "is not in Suitcase";
    } else {
      finishedBtn.innerHTML = "put in suitcase";
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
