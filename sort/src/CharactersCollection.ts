import { Sorter } from "./Sorter";

export class CharactersCollection extends Sorter {
  constructor(public data: string) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  swap(i: number, j: number): void {
    const characters = this.data.split("");
    const leftHand = characters[i];
    characters[i] = characters[j];
    characters[j] = leftHand;
    this.data = characters.join("");
  }

  less(i: number, j: number): boolean {
    return this.data[i].toLowerCase() < this.data[j].toLowerCase();
  }
}
