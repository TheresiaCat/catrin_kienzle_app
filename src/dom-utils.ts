const newStuffInput = document.querySelector(
    "#newStuffInput"
  ) as HTMLInputElement;
  const newStuffBtn = document.querySelector("#newStuffBtn") as HTMLButtonElement;
  const validatorMessage = document.querySelector(
    "#validatorMessage"
  ) as HTMLSpanElement;
  const stuffsContainer = document.querySelector(
    "#stuffsContainer"
  ) as HTMLDivElement;
  
  export { newStuffInput, newStuffBtn, stuffsContainer, validatorMessage };