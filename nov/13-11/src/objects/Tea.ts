import { ITea } from "./ITea";

//implement the ITea interface
export class Tea implements ITea {
  //fields
  price: number;
  type: string;
  isTasty: boolean;

  //constructor of the object
  constructor(price: number, type: string, isTasty: boolean) {
    this.price = price;
    this.type = type;
    this.isTasty = isTasty;
  }
  //method   //return type void = returns nothing.
  setTasty(): void {
    this.isTasty = true;
  }
}
