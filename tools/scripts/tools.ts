import * as Big from "big.js";

export class Tools {

  static isBig(parameter: any): boolean {
    return parameter instanceof Big;
  }
}
