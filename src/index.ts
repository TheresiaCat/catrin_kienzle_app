import { addStuff, reloadList } from "./stuffs";
import { newStuffInput, btngroup} from "./dom-utils";
import { validateInput } from "./validator";

//nur ein button freigeschaltet werden aktuell auf klassen 
function initApp() {
  btn.disabled = true;
  for(let i=0; i<btngroup.length;i++){
    btngroup[i].addEventListener("click",handleButtonClick);
  }
  newStuffInput.addEventListener("input", validateInput);
  newStuffInput.addEventListener("keydown", hasPressedEnterKeyOnStuffInput);
  reloadList();
}

//add a stuff by pressing the enter key on the keyboard
function hasPressedEnterKeyOnStuffInput(e: KeyboardEvent) {
  if (e.key === "Enter") {
    addStuff(); 
  }
}

initApp(); // init everything
