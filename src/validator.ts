import { newStuffBtn as newStuffBtn, newStuffInput as newStuffInput, validatorMessage } from "./dom-utils";

function validateInput() {
  if (!newStuffInput.value) {
    newStuffBtn.disabled = true;
    setValidatorMessage(ValidatorMessages.INPUT_EMPTY, true);
    return false;
  }
  // Validated successfully
  else {
    newStuffBtn.disabled = false;
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