import { addStuff, reloadList, handleButtonClick } from "./stuffs";
import { allCategories } from "./dom-utils";
import { validateInput } from "./validator";

function initApp() {
  allCategories.forEach((category) => {
    //für jeweilige Kategorie 
    const btn = category.querySelector("button") as HTMLButtonElement; // btn auswählen
    const inp = category.querySelector("input") as HTMLInputElement; // inp auswählen
    inp.addEventListener("input", (e) => validateInput(e.target as HTMLInputElement));
    inp.addEventListener("keydown", hasPressedEnterKeyOnStuffInput);
    btn.addEventListener("click", () => handleButtonClick(inp));
  });
  reloadList();
}

//add a stuff by pressing the enter key on the keyboard
function hasPressedEnterKeyOnStuffInput(e: KeyboardEvent) {
  if (e.key === "Enter") {
    addStuff(e.target as HTMLInputElement);
  }
}

initApp(); // init everything
