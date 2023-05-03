const newStuffInput = document.querySelector("#newStuffInput") as HTMLInputElement;
const validatorMessage = document.querySelector("#validatorMessage") as HTMLSpanElement;

//Input
const inputgroup = document.querySelectorAll(".newStuffInput") as NodeListOf<HTMLInputElement>;
const newMoneyInput = document.querySelector("#newmoneyinput") as HTMLInputElement;
const newPapersInput = document.querySelector("#newpapersinput") as HTMLInputElement;
const newHygieneInput = document.querySelector("#newhygieneinput") as HTMLInputElement;
const newClothingInput = document.querySelector("#newclothinginput") as HTMLInputElement;

//Buttons
const btngroup = document.querySelectorAll(".btn") as NodeListOf<HTMLButtonElement>; //all buttons in group 
const moneyBtn = document.querySelector("#money") as HTMLButtonElement;
const papersBtn = document.querySelector("#papers") as HTMLButtonElement;
const hygieneBtn = document.querySelector("#hygiene") as HTMLButtonElement;
const clothingBtn = document.querySelector("#clothing") as HTMLButtonElement;

//Container
const stuffscontainergroup = document.querySelectorAll(".stuffsContainer") as NodeListOf<HTMLDivElement>;
const moneyContainer = document.querySelector("#moneyContainer") as HTMLDivElement;
const papersContainer = document.querySelector("#papersContainer") as HTMLDivElement;
const hygieneContainer = document.querySelector("#hygieneContainer") as HTMLDivElement;
const clothingContainer = document.querySelector("#clothingContainer") as HTMLDivElement;

export {
  newStuffInput,
  inputgroup,
  btngroup,
  stuffscontainergroup,
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