const newStuffInput = document.querySelector(
    "#newStuffInput"
  ) as HTMLInputElement;
  const newStuffBtn = document.querySelector("#newStuffBtn") as HTMLButtonElement;
  const validatorMessage = document.querySelector(
    "#validatorMessage"
    ) as HTMLSpanElement;
  
    //Container
  const moneyContainer = document.querySelector(
    "#moneyContainer"
  ) as HTMLDivElement;
  const papersContainer = document.querySelector(
    "#papersContainer"
  ) as HTMLDivElement;
  const hygieneContainer = document.querySelector(
    "#hygieneContainer"
  ) as HTMLDivElement;
  const clothingContainer = document.querySelector(
    "#clothingContainer"
  ) as HTMLDivElement;
  
  export { newStuffInput, newStuffBtn, moneyContainer,papersContainer,hygieneContainer,clothingContainer, validatorMessage };