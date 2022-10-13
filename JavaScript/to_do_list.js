// Todo List
// "new" - Add a Todo
// "list" - List all Todos
// "delete" - Remove Specific Todo
// "quit" - Quit App

// 1. Prompt user "What would you like Todo?"
//     Have logic to check if user entered correct value
// 2. If "new" > prompt("Enter new Todo")
//     console.log(value is added to the list)
//     index must be added for each value
// 3. If "list" > will console log all Todos
// 4. If "delete" > will delete Todo based on Index
//     console log("Todo removed")
// 5. If "quit" > Quits the app and console log something

const todoList = ["eat", "sleep", "drink"];

let command = prompt("What would you like Todo?").toLowerCase();
const validCommands = ["new", "list", "delete", "quit"];
let isValidCommand = validCommands.includes(command);

while (!isValidCommand) {
    command = prompt("What would you like Todo?");
    isValidCommand = validCommands.includes(command);
}

while (command !== "quit") {
    switch (command) {
        case "new":
            let newItem = prompt("Enter new Todo");
            todoList.push(newItem);
            console.log(`Todo ${newItem} is added. Updated list: ${todoList}`);
            console.log("**********");
            break;
        
        case "list":
            console.log(todoList);
            console.log("**********");
            break;
        
        case "delete":
            let deleteItem = prompt("Enter Item Index to Delete");
            let isValidIndex = todoList[deleteItem];
            
            if (!isValidIndex) {
                console.log(`Index '${deleteItem}' is not valid`);
                break;
            }
            console.log(`Todo '${todoList[deleteItem]}' Removed`);
            todoList.splice(deleteItem, 1);
            console.log("**********");
            break;
    }

    command = prompt("What would you like Todo?");
    isValidCommand = validCommands.includes(command);
}

console.log("Thank you. Come again.");
