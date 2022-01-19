// install nodemon globally in your computer

// create a new folder and do initialise a node project

// add a script in your package.json that allows you to run nodemon so that you don't have to do node app.js again and again

// You will need to create an application that shows a menu to the customer which has following options like below Press 1, 2 or 3 to do the below actions based on your selection 1 - Show all books 2 - Add a new book 3 - Quit

// when person selects 1 from the terminal then an event should be emitted which will prompt the system to return a list of all books to the customer and the options menu should be shown again

// when person selects 2 then event will be emitted which will give another input prompt to the customer that asks him to add the name of the book and then book added successfully message and the options menu should be shown again

// when 3 is pressed then an event should be emitted which will prompt the system to send a confirmation message like "Are you sure you want to quit - press Y to quit" and if the customer presses Y then the createInterface should be closed with a Bye Bye message to the customer

// If customer presses anything other then 1, 2 or 3 then an event should be emitted which will prompt the system to send a message saying "You have selected an invalid entry so please press 1, 2 or 3" and show the options menu to him

//  ***********************************************




//1.To install nodemon globally we use command "npm i -g nodemon" which is successfully installed

//2.created  assignment folder inside that we used command "npm init -y" which create package.json file in it.

//3.In json file there is key value pair in scripts object where server has been written in which we can edit the  key value pair. here i edited key(server) as myserver and key value as nodemon index.js. And then we use command "npm run myserver" which execute index.js file and inside that whatever we written over there will execute. this will avoid to execute file again and again it automatically execute whenever we do any changes server.

//4.

const readline = require("readline");

const EventEmitter = require("events");

const eventEmitter = new EventEmitter();
let books = ["Harry potter", "Juggle book"];
function  showbooks()
{
  console.log("event listened")
  console.log(books);
  return;
}

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



function interactWithUSer()
{
  r1.question(
    "Press 1, 2 or 3 to do the below actions based on your selection \n1 - Show all books \n2 - Add a new book \n3 - Quit \n",
    (selectedOption) => {
      eventEmitter.on("show book pressed", showbooks)
      if (selectedOption === "1") {
        eventEmitter.emit("show book pressed")
       
        interactWithUSer();
      }
      else if (selectedOption === "2") {
        r1.question("please provide name of the book", (bookName) => {
          books.push(bookName)
          //     // books=[...books,bookName]
          eventEmitter.emit("Show books pressed");
          interactWithUSer();
        });
      }
       else if (selectedOption === "3")
      {
        
        eventEmitter.emit("question")
        console.log("Are you sure want to quit?")
        r1.close();
       // interactWithUSer();
      }
      else {
        console.log("You have selected an invalid entry so please press 1, 2 or 3")
        eventEmitter.emit("question")
        interactWithUSer();
      }
    }
    
  );
  
}
r1.on("close", () => {
  console.log("bye bye")
  process.exit(0);
});

interactWithUSer();

//  console.log("kajal");





















