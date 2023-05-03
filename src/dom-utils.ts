const newStuffInput = document.querySelector("#newStuffInput") as HTMLInputElement;
const validatorMessage = document.querySelector("#validatorMessage") as HTMLSpanElement;

//Buttons
const btngroup = document.querySelectorAll(".btn") as NodeListOf<HTMLButtonElement>; //all buttons in group 
const moneyBtn = document.querySelector("#moneyBtn") as HTMLButtonElement;
const papersBtn = document.querySelector("#papersBtn") as HTMLButtonElement;
const hygieneBtn = document.querySelector("#hygieneBtn") as HTMLButtonElement;
const clothingBtn = document.querySelector("#clothingBtn") as HTMLButtonElement;

//Container
const stuffsContainer = document.querySelector(".stuffsContainer") as HTMLDivElement;
const moneyContainer = document.querySelector("#moneyContainer") as HTMLDivElement;
const papersContainer = document.querySelector("#papersContainer") as HTMLDivElement;
const hygieneContainer = document.querySelector("#hygieneContainer") as HTMLDivElement;
const clothingContainer = document.querySelector("#clothingContainer") as HTMLDivElement;

export {
  newStuffInput,
  btngroup,
  moneyContainer,
  papersContainer,
  hygieneContainer,
  clothingContainer,
  moneyBtn,
  papersBtn,
  hygieneBtn,
  clothingBtn,
  validatorMessage
};