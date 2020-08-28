import { Sorter } from "./Sorter";

class N {
  next: N | null = null;

  constructor(public data: number) {}
}

export class LinkedList extends Sorter {
  head: N | null = null;

  add(data: number): void {
    const node = new N(data);

    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }
    tail.next = node;
  }

  get length(): number {
    if (!this.head) {
      return 0;
    }

    let length = 1;
    let node = this.head;
    while (node.next) {
      length++;
      node = node.next;
    }
    return length;
  }

  at(index: number): N {
    if (!this.head) {
      throw new Error("index out of bounds");
    }

    let counter = 0;
    let node: N | null = this.head;

    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    throw new Error("index ouf of bounds");
  }

  less(i: number, j: number): boolean {
    if (!this.head) {
      throw new Error("List is empty");
    }

    return this.at(i).data < this.at(j).data;
  }

  swap(i: number, j: number): void {
    const lh = this.at(i);
    const rh = this.at(j);

    const tmp = lh.data;
    lh.data = rh.data;
    rh.data = tmp;
  }

  print(): void {
    if (!this.head) {
      return;
    }

    let node: N | null = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}
