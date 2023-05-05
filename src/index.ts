import { addStuff, reloadList, handleButtonClick, container} from "./stuffs";
import { newStuffInput, btngroup, inputgroup} from "./dom-utils";
import { validateInput, handleInput } from "./validator";

//nur ein button freigeschaltet werden aktuell auf klassen 
function initApp() {
  for(let i=0; i<btngroup.length;i++){
    btngroup[i].addEventListener("click", handleButtonClick);
  }

  for(let i=0; i<inputgroup.length;i++){
    inputgroup[i].addEventListener("input", handleInput);
    inputgroup[i].addEventListener("input", validateInput);
    inputgroup[i].addEventListener("keydown", hasPressedEnterKeyOnStuffInput);
  }
  reloadList(container);
}

//add a stuff by pressing the enter key on the keyboard
function hasPressedEnterKeyOnStuffInput(e: KeyboardEvent) {
  if (e.key === "Enter") {
    addStuff(); 
  }
}

initApp(); // init everything
