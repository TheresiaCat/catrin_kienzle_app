import { newTodoInput as newStuffInput, todosContainer as stuffContainer } from "./dom-utils";
import { Todo as Stuff } from "./interface";
import { validateInput } from "./validator";

let stuff: Stuff[] = [];

function addStuff() {
  if (!validateInput()) {
    return; // if input is not valid, we wont add a new todo by returning here
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
  stuff = stuff.filter((todo: Stuff) => todo.id !== id);
  reloadStuff();
}

//ändert To-DO status 
function ChangeStatus(id: string) { 
  stuff = stuff.map((stuffStatus) => {
    if (stuffStatus.id === id) {
      stuffStatus.finished = !stuffStatus.finished; // oposite finished State
    }
    return stuffStatus;
  });
  reloadStuff();
}

function reloadStuff() {
  //empty the stuff list
  stuffContainer.innerHTML = "";
  // Iterate through Todos to refresh HTML
  stuff
    .sort((stuff1, stuff2) => {
      //sort stuff by date
      return stuff2.timestamp.getTime() - stuff1.timestamp.getTime();
    })
    .forEach((stuff) => {
      //create container for Stuff
      const singleStuffContainer = document.createElement("div");
      singleStuffContainer.id = stuff.id;
      singleStuffContainer.innerHTML = `
    <p style="${stuff.finished && "text-decoration: line-through;"}">
    ${stuff.description}</p>
    `;

      //create Delete Button
      const deleteBtn = document.createElement("button");
      deleteBtn.addEventListener("click", () => deleteStuff(stuff.id));
      deleteBtn.style.backgroundColor = "red";
      deleteBtn.innerHTML = "X";

      //create finished Button
      const finishedBtn = document.createElement("button");
      finishedBtn.addEventListener("click", () => ChangeStatus(stuff.id));
      if (stuff.finished) {
        finishedBtn.innerHTML = "set unifinished";
      } else {
        finishedBtn.innerHTML = "set finished";
      }

      //get the delete btn in
      singleStuffContainer.appendChild(deleteBtn);
      singleStuffContainer.appendChild(finishedBtn);
      //append it to the wrapper
      stuffContainer.appendChild(singleStuffContainer);
      //separator between each item
      stuffContainer.appendChild(document.createElement("hr"));
    });
}

export { addStuff, deleteStuff, reloadStuff}; 