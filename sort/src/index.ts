import { Sorter } from "./Sorter";
import { CharactersCollection } from "./CharactersCollection";
import { NumbersCollection } from "./NumbersCollection";
import { LinkedList } from "./LinkedList";

const numbers = new NumbersCollection([10, 3, -5, 0]);
numbers.sort();
console.log(numbers.data);

const characters = new CharactersCollection("CccBamA");
characters.sort();
console.log(characters.data);

const ll = new LinkedList();
ll.add(500);
ll.add(-10);
ll.add(-3);
ll.add(4);

ll.sort();
ll.print();
