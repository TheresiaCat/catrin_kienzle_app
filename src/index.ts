import { addStuff, reloadStuff } from "./stuffs";
import { newStuffBtn, newStuffInput } from "./dom-utils";
import { validateInput } from "./validator";

function initApp() {
  newStuffBtn.disabled = true;
  newStuffBtn.addEventListener("click", addStuff);
  newStuffInput.addEventListener("input", validateInput);
  newStuffInput.addEventListener("keydown", hasPressedEnterKeyOnStuffInput);
  reloadStuff();
}

function hasPressedEnterKeyOnStuffInput(e: KeyboardEvent) {
  if (e.key === "Enter") {
    addStuff(); // try to add a stuff by pressing the enter key on the keyboard
  }
}

initApp(); // init everything
