import {newStuffInput, btngroup, moneyContainer,papersContainer,hygieneContainer,clothingContainer, moneyBtn, papersBtn, hygieneBtn, clothingBtn, validatorMessage } from "./dom-utils";

//select the button to enable and to proof with input to validate

function handleInput(this: HTMLInputElement) {
  let inputid: string | null = this.getAttribute("id"); 
  let button: HTMLButtonElement | null = null;
  if (inputid !== null) {
    const substring = inputid.substring(3, 8);
    button = document.querySelector("#" + substring);
  }
  return button;
}

function validateInput(this: HTMLInputElement) {
  let pressedButton: HTMLButtonElement | null = handleInput.call(this);
  if (this.value == '') { // Kein Wert
    if (pressedButton) pressedButton.disabled = true;
    setValidatorMessage(ValidatorMessages.INPUT_EMPTY, true);
    return false;
  } else {
    if (pressedButton) pressedButton.disabled = false;
    setValidatorMessage(ValidatorMessages.INPUT_VALID);
    return true;
  }
}

/** Set Message of the validator */
function setValidatorMessage(msg: string, error = false) {
  validatorMessage.innerHTML = msg;
  if (error) {
    validatorMessage.style.color = "red";
  } else {
    validatorMessage.style.color = "initial";
  }
}

const ValidatorMessages = {
  INPUT_EMPTY: "You must type something!",
  INPUT_VALID: "Great, Press the Button or 'Enter' to add",
};

export { validateInput, handleInput };