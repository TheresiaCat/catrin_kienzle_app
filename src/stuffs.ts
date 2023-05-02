import { newStuffInput , moneyContainer,papersContainer,hygieneContainer,clothingContainer, moneyBtn, papersBtn, hygieneBtn, clothingBtn} from "./dom-utils";
import { Stuff as Stuff } from "./interface";
import { validateInput } from "./validator";

let stuff: Stuff[] = [{
  description: "Kreditkarte",
  id: "1",
  finished: false,
  timestamp: new Date(),
  category: "money",
  container: "moneyContainer",
}];

let geld: Stuff = {
  description: "Geld",
  id: "1",
  finished: false,
  timestamp: new Date(),
  category: "money",
  container: "moneyContainer", 
}

let ticket: Stuff = {
  description: "Reiseticket",
  id: "1",
  finished: false,
  timestamp: new Date(),
  category: "papers", 
  container: "papersContainer",
};

let ausweis: Stuff = {
  description: "Ausweis/Reisepass",
  id: "1",
  finished: false,
  timestamp: new Date(),
  category: "papers",
  container: "papersContainer",
}

let zahnbürste: Stuff = {
  description: "Zahnbürste",
  id: "1",
  finished: false,
  timestamp: new Date(),
  category: "hygiene",
  container: "papersContainer",
}

let shampoo: Stuff = {
  description: "Shampoo",
  id: "1",
  finished: false,
  timestamp: new Date(),
  category: "hygiene",
  container: "hygieneContainer",
}

let shirt: Stuff = {
  description: "Shirt",
  id: "1",
  finished: false,
  timestamp: new Date(),
  category: "clothing",
  container: "clothingContainer",
}

let jeans: Stuff = {
  description: "jeans",
  id: "1",
  finished: false,
  timestamp: new Date(),
  category: "clothing",
  container: "clothingContainer", 
}
stuff.push(geld, ticket, ausweis,zahnbürste,shampoo,shirt,jeans);

//choose right container depending on which button is pressed 
let stuffsContainer:String
function getContainer(stuffsContainer:String, btn: InnerHTML):String {
  if(moneyBtn){
    stuffsContainer="moneyContainer"
  }
  else if(papersBtn){
    stuffsContainer="papersContainer"
  }
  else if(hygieneBtn){
    stuffsContainer="hygieneContainer"
  }
  else{
    stuffsContainer="clothingContainer"
  }
  console.log(stuffsContainer); 
}


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
    category: //h3 übergeben 
    container: getContainer(),//How to get value? 
  };
  stuff.push(newStuff);
  reloadList();
  //empty input
  newStuffInput.value = "";
}

function deleteStuff(id: string) {
  // let all stuffs pass except the one with the id that will be deleted
  stuff = stuff.filter((stuff: Stuff) => stuff.id !== id);
  reloadList();
}

//alters status (abgehakt?)
function ChangeStatus(id: string) { 
  stuff = stuff.map((stuffStatus) => {
    if (stuffStatus.id === id) {
      stuffStatus.finished = !stuffStatus.finished; // opposite finished State
    }
    return stuffStatus;
  });
  reloadList();
}

function reloadList() {//insert Parameter Array
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

export { addStuff, deleteStuff, reloadList}; 