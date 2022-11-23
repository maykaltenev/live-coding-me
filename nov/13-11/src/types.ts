//example todo type
export type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

//union of multiple types
export type WindowStates = "open" | "closed" | "minimized";

//example of enumeration
export enum WindowEnum {
  open = 1,
  closed = 2,
  minimized = 3,
}
