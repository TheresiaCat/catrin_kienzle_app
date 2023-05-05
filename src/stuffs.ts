import { newStuffInput , moneyContainer,papersContainer,hygieneContainer,clothingContainer, moneyBtn, papersBtn, hygieneBtn, clothingBtn} from "./dom-utils";
import { Stuff as Stuff } from "./interface";
import { validateInput } from "./validator";

let stuff: Stuff[] = [{
  description: "Kreditkarte",
  id: "1",
  finished: false,
  timestamp: new Date(),
}];

let geld: Stuff = {
  description: "Geld",
  id: "1",
  finished: false,
  timestamp: new Date(),
}

let ticket: Stuff = {
  description: "Reiseticket",
  id: "1",
  finished: false,
  timestamp: new Date(),
};

let ausweis: Stuff = {
  description: "Ausweis/Reisepass",
  id: "1",
  finished: false,
  timestamp: new Date(),
}

let zahnbürste: Stuff = {
  description: "Zahnbürste",
  id: "1",
  finished: false,
  timestamp: new Date(),
}

let shampoo: Stuff = {
  description: "Shampoo",
  id: "1",
  finished: false,
  timestamp: new Date(),
}

let shirt: Stuff = {
  description: "Shirt",
  id: "1",
  finished: false,
  timestamp: new Date(),
}

let jeans: Stuff = {
  description: "jeans",
  id: "1",
  finished: false,
  timestamp: new Date(),
}
stuff.push(geld, ticket, ausweis,zahnbürste,shampoo,shirt,jeans);

//"this" is the actual clicked button
//get the right container by the button that is clicked 
let container: HTMLDivElement | null;

function handleButtonClick(this: HTMLButtonElement) {
  const buttonid = this.getAttribute("id");
  if (buttonid !== null) {
    container = document.querySelector("." + buttonid);
    return container;
  }
}

function addStuff() {
  function validateInput(this: HTMLInputElement): boolean {
    if (this.value === '') {
      // handle empty input
      return false;
    }
    // handle valid input
    return true;
  } 
  

  const id = `${new Date().getTime()}-rn-${Math.floor(Math.random() * 999)}`;
  const newStuff: Stuff = {
    description: newStuffInput.value,
    id,
    finished: false,
    timestamp: new Date(),
  };

  stuff.push(newStuff);

  try {
    reloadList(container);
  } catch (error) {
    console.error(error);
  }

  // empty input
  newStuffInput.value = "";
}

function deleteStuff(id: string) {
  // let all stuffs pass except the one with the id that will be deleted
  stuff = stuff.filter((stuff: Stuff) => stuff.id !== id);
  reloadList(container);
}

// alters status (abgehakt?)
function ChangeStatus(id: string) {
  stuff = stuff.map((stuffStatus) => {
    if (stuffStatus.id === id) {
      stuffStatus.finished = !stuffStatus.finished; // opposite finished State
    }
    return stuffStatus;
  });
  reloadList(container);
}

function reloadList(container:HTMLDivElement|null) {//insert Parameter Array
  //empty the stuff list
  if (container !== null) {//nur zugreifen wenn container definiert ist 
    container.innerHTML = "";
 
  // Iterate through Stuffs to refresh HTML
  stuff.forEach((stuff) => {
      //create container for Stuff
      const singleStuffContainer = document.createElement("div");
      singleStuffContainer.id = stuff.id;
      singleStuffContainer.innerHTML = `<p style="${stuff.finished && "text-decoration: line-through;"}">${stuff.description}</p>`;

      //create Delete Button
      const deleteBtn = document.createElement("button");
      deleteBtn.addEventListener("click", () => deleteStuff(stuff.id));
      deleteBtn.style.backgroundColor = "red";
      deleteBtn.innerHTML = "X";

      //create finished Button
      const finishedBtn = document.createElement("button");
      finishedBtn.addEventListener("click", () => ChangeStatus(stuff.id));
      if (stuff.finished) {
        finishedBtn.innerHTML = "set unfinished";
      } else {
        finishedBtn.innerHTML = "set finished";
      }

      //get the delete btn in
      singleStuffContainer.appendChild(deleteBtn);
      singleStuffContainer.appendChild(finishedBtn);
      //append it to the wrapper
      container.appendChild(singleStuffContainer);//insert in chosen container 
      //separator between each item
      container.appendChild(document.createElement("hr"));
    });
  }
}

export { addStuff, deleteStuff, reloadList, handleButtonClick, container}; 