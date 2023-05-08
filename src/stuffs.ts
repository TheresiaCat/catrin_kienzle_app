import { Stuff } from "./interface";
import { validateInput } from "./validator";

//FEEDBACK-JS - vorgefertigte items kannst du z.b in ein modul data.ts verlagern
let stuff: Stuff[] = [
  {
    description: "Kreditkarte",
    id: "1",
    finished: false,
    timestamp: new Date()
  }
];

let geld: Stuff = {
  description: "Geld",
  id: "1",
  finished: false,
  timestamp: new Date()
};

let ticket: Stuff = {
  description: "Reiseticket",
  id: "1",
  finished: false,
  timestamp: new Date()
};

let ausweis: Stuff = {
  description: "Ausweis/Reisepass",
  id: "1",
  finished: false,
  timestamp: new Date()
};

let zahnbürste: Stuff = {
  description: "Zahnbürste",
  id: "1",
  finished: false,
  timestamp: new Date()
};

let shampoo: Stuff = {
  description: "Shampoo",
  id: "1",
  finished: false,
  timestamp: new Date()
};

let shirt: Stuff = {
  description: "Shirt",
  id: "1",
  finished: false,
  timestamp: new Date()
};

let jeans: Stuff = {
  description: "jeans",
  id: "1",
  finished: false,
  timestamp: new Date()
};
stuff.push(geld, ticket, ausweis, zahnbürste, shampoo, shirt, jeans);

//"this" is the actual clicked button
//get the right container by the button that is clicked

/**
 * FEEDBACK-JS: Das ergibt so nicht wirklich viel Sinn, weil der Container ja nie wirklich definiert ist
 * Ich habe jetzt einfach mal den ersten als Zuweisung genommen.
 */
let container = document.querySelector(".stuffsContainer") as HTMLDivElement;

function handleButtonClick(relatedInput: HTMLInputElement) {
  addStuff(relatedInput);
}

function addStuff(targetInp: HTMLInputElement) {
  // const category = targetInp.parentElement!.id;
  if (validateInput(targetInp)) {
    const id = `${new Date().getTime()}-rn-${Math.floor(Math.random() * 999)}`;
    const newStuff: Stuff = {
      description: targetInp.value,
      id,
      finished: false,
      timestamp: new Date()
    };

    stuff.push(newStuff);

    try {
      reloadList();
    } catch (error) {
      console.error(error);
    }

    // empty input
    targetInp.value = "";
  }
}

function deleteStuff(id: string) {
  // let all stuffs pass except the one with the id that will be deleted
  stuff = stuff.filter((stuff: Stuff) => stuff.id !== id);
  reloadList();
}

// alters status (abgehakt?)
function ChangeStatus(id: string) {
  stuff = stuff.map((stuffStatus) => {
    if (stuffStatus.id === id) {
      stuffStatus.finished = !stuffStatus.finished; // opposite finished State
    }
    return stuffStatus;
  });
  reloadList();
}

function reloadList() {
  //insert Parameter Array
  //empty the stuff list
  //FEEDBACK-JS: truthy prüfung
  if (container) {
    //nur zugreifen wenn container definiert ist
    container.innerHTML = "";
    // Iterate through Stuffs to refresh HTML
    stuff.forEach((stuff) => {
      //create container for Stuff
      const singleStuffContainer = document.createElement("div");
      singleStuffContainer.id = stuff.id;
      singleStuffContainer.innerHTML = `<p style="${
        stuff.finished && "text-decoration: line-through;"
      }">${stuff.description}</p>`;

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
      container.appendChild(singleStuffContainer); //insert in chosen container
      //separator between each item
      container.appendChild(document.createElement("hr"));
    });
  }
}

export { addStuff, deleteStuff, reloadList, handleButtonClick };
