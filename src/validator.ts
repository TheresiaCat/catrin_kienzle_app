import { validatorMessage } from "./dom-utils";

//select the button to enable and to proof which input to validate
//FEEDBACK-JS overworked function
function validateInput(el: HTMLInputElement) {
  const relatedBtn = el.parentElement!.querySelector("button")!;
  if (!el.value) {
    // Kein Wert
    relatedBtn.disabled = true;
    setValidatorMessage(ValidatorMessages.INPUT_EMPTY, true);
    return false;
  } else {
    // go back to parent (div.listcategory) and select button (addBtn)
    relatedBtn.disabled = false;
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
  INPUT_VALID: "Great, Press the Button or 'Enter' to add"
};

export { validateInput };
