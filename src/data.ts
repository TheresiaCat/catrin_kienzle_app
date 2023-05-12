import { Stuff } from "./interface";

    let stuff: Stuff[] = [
        {
          description: "Kreditkarte",
          id: "1",
          finished: false,
          category: "money"
        }
      ];
      
      let geld: Stuff = {
        description: "Geld",
        id: "2",
        finished: false,
        category: "money"
      };
      
      let ticket: Stuff = {
        description: "Reiseticket",
        id: "3",
        finished: false,
        category: "papers"
      };
      
      let ausweis: Stuff = {
        description: "Ausweis/Reisepass",
        id: "4",
        finished: false,
        category: "papers"
      };
      
      let zahnbürste: Stuff = {
        description: "Zahnbürste",
        id: "5",
        finished: false,
        category: "hygiene"
      };
      
      let shampoo: Stuff = {
        description: "Shampoo",
        id: "6",
        finished: false,
        category: "hygiene"
      };
      
      let shirt: Stuff = {
        description: "Shirt",
        id: "7",
        finished: false,
        category: "clothing"
      };
      
      let jeans: Stuff = {
        description: "jeans",
        id: "8",
        finished: false,
        category: "clothing"
      };
      stuff.push(geld, ticket, ausweis, zahnbürste, shampoo, shirt, jeans);



  export {stuff}; 
  