import { Collection } from "../models/Collection";
import { View } from "./View";

export abstract class CollectionView<T, K> {
  constructor(public parent: Element, public collection: Collection<T, K>) {}

  abstract renderItem(model: T, itemParent: Element): void;

  render(): void {
    this.parent.innerHTML = "";

    const tpl = document.createElement("template");

    for (let item of this.collection.items) {
      const itemParent = document.createElement("div");
      this.renderItem(item, itemParent);
      tpl.content.append(itemParent);
    }

    this.parent.append(tpl.content);
  }
}
