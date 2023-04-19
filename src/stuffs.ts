import { newStuffInput , stuffsContainer} from "./dom-utils";
import { Stuff as Stuff } from "./interface";
import { validateInput } from "./validator";

let stuff: Stuff[] = [{
  description: "Kreditkarte",
  id: "1",
  finished: false,
  timestamp: new Date()
}];

let newStuff: Stuff = {
  description: "Geld",
  id: "2",
  finished: false,
  timestamp: new Date()
};

stuff.push(newStuff);

function addStuff() {
  if (!validateInput()) {
    return; // if input is not valid, we wont add a new stuff by returning here
  }
  const timestamp = new Date();
  const newStuff: Stuff = {
    description: newStuffInput.value,
    // generate a new id in the format UNIXTIMESTAMP-rn-999
    id: `${timestamp.getTime()}-rn-${Math.floor(Math.random() * 999)}`,
    finished: false,
    timestamp,
  };
  stuff.push(newStuff);
  reloadStuff();
  //empty input
  newStuffInput.value = "";
}

function deleteStuff(id: string) {
  // let all stuffs pass except the one with the id that will be deleted
  stuff = stuff.filter((stuff: Stuff) => stuff.id !== id);
  reloadStuff();
}

//alters status (abgehakt?)
function ChangeStatus(id: string) { 
  stuff = stuff.map((stuffStatus) => {
    if (stuffStatus.id === id) {
      stuffStatus.finished = !stuffStatus.finished; // opposite finished State
    }
    return stuffStatus;
  });
  reloadStuff();
}

function reloadStuff() {//insert Parameter Array
  //empty the stuff list
  stuffsContainer.innerHTML = "";
  // Iterate through Stuffs to refresh HTML
  stuff//Array
    .sort((stuff1, stuff2) => {
      //sort stuff by date
      return stuff1.timestamp.getTime()-stuff2.timestamp.getTime();
    })
    .forEach((stuff) => {
      //create container for Stuff
      const singleStuffContainer = document.createElement("div");
      singleStuffContainer.id = stuff.id;
      singleStuffContainer.innerHTML = `
    <p style="${stuff.finished && "text-decoration: line-through;"}">
    ${stuff.description}</p>`;

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
      stuffsContainer.appendChild(singleStuffContainer);
      //separator between each item
      stuffsContainer.appendChild(document.createElement("hr"));
    });
}

export { addStuff, deleteStuff, reloadStuff}; 