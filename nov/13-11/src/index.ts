import { Tea } from "./objects/Tea";
import { Todo, WindowEnum, WindowStates } from "./types";

import * as fs from "fs";

//declare a variable of type string
let variableName2: string = "Hello typescript";
console.log(variableName2);

//                         parameter type    return type string = function returns a string
//                              |               |
//                              v               v
const myFirstFunction = (content: string): string => {
  return `My content is ${content}`;
};

const result: string = myFirstFunction("testing");
console.log(result);

//example todo type
const todo: Todo = { title: "Testing", id: 1, completed: true };
todo.completed = false;

//example widowstates
const w: WindowStates = "closed";
const t: WindowEnum = WindowEnum.minimized;

//declare object Tea
const tea = new Tea(2.2, "GREENTEA", false);
tea.setTasty();
console.log("the tea is now tasty:", tea.isTasty);

//we installed @types/node for this.
fs.writeFileSync("hello.txt", `The tea is tasty: ${tea.isTasty}`);
