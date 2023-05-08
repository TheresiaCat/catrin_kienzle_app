const validatorMessage = document.querySelector(
  "#validatorMessage"
) as HTMLSpanElement;

//Container
const allCategories = document.querySelectorAll(".listcategory"); // FEEDBACK
const stuffscontainergroup = document.querySelectorAll(
  ".stuffsContainer"
) as NodeListOf<HTMLDivElement>;
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

//Input
/** FEEDBACK-JS: Raus
const inputgroup = allCategories.querySelectorAll(
  ".newStuffInput"
) as NodeListOf<HTMLInputElement>;

const newMoneyInput = document.querySelector(
  "#newmoneyinput"
) as HTMLInputElement;
const newPapersInput = document.querySelector(
  "#newpapersinput"
) as HTMLInputElement;
const newHygieneInput = document.querySelector(
  "#newhygieneinput"
) as HTMLInputElement;
const newClothingInput = document.querySelector(
  "#newclothinginput"
) as HTMLInputElement;

//Buttons
/** FEEDBACK-JS: Raus
const btngroup = document.querySelectorAll(
  ".btn"
) as NodeListOf<HTMLButtonElement>; //all buttons in group

const moneyBtn = document.querySelector("#money") as HTMLButtonElement;
const papersBtn = document.querySelector("#papers") as HTMLButtonElement;
const hygieneBtn = document.querySelector("#hygiene") as HTMLButtonElement;
const clothingBtn = document.querySelector("#clothing") as HTMLButtonElement;
 */
export {
  allCategories,
  stuffscontainergroup,
  moneyContainer,
  papersContainer,
  hygieneContainer,
  clothingContainer,
  validatorMessage
};
