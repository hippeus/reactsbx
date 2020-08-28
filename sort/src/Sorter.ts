export interface Sortable {
  length: number;
  swap(i: number, j: number): void;
  less(i: number, j: number): boolean;
}

export abstract class Sorter {
  abstract less(i: number, j: number): boolean;
  abstract swap(i: number, j: number): void;
  abstract length: number;

  sort(): void {
    const { length } = this;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (!this.less(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
