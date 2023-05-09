import { Stuff } from "./interface";
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



  export {stuff}; 
  