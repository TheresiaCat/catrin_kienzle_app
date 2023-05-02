import {newStuffInput, btn, moneyContainer,papersContainer,hygieneContainer,clothingContainer, moneyBtn, papersBtn, hygieneBtn, clothingBtn, validatorMessage } from "./dom-utils";

function validateInput() {
  if (!newStuffInput.value) {
    btn.disabled = true;
    setValidatorMessage(ValidatorMessages.INPUT_EMPTY, true);
    return false;
  }
  // Validated successfully
  else {
    btn.disabled = false;
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

export { validateInput };