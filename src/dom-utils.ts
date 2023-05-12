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

export {
  allCategories,
  stuffscontainergroup,
  moneyContainer,
  papersContainer,
  hygieneContainer,
  clothingContainer,
  validatorMessage
};
