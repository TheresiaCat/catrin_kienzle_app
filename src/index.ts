import { addStuff, reloadList } from "./stuffs";
import { newStuffInput, btn} from "./dom-utils";
import { validateInput } from "./validator";

function initApp() {
  btn.disabled = true;
  btn.addEventListener("click", addStuff);
  newStuffInput.addEventListener("input", validateInput);
  newStuffInput.addEventListener("keydown", hasPressedEnterKeyOnStuffInput);
  reloadList();
}

function hasPressedEnterKeyOnStuffInput(e: KeyboardEvent) {
  if (e.key === "Enter") {
    addStuff(); // try to add a stuff by pressing the enter key on the keyboard
  }
}

initApp(); // init everything
