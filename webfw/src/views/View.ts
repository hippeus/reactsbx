import { Model } from "../models/Model";

export abstract class View<T extends Model<K>, K> {
  abstract template(): string;

  regions: { [key: string]: Element } = {};

  constructor(public parent: Element, public model: T) {
    this.bindModel();
  }

  eventsMap(): { [key: string]: () => void } {
    return {};
  }

  regionsMap = (): { [key: string]: string } => {
    return {};
  };

  render(): void {
    this.parent.innerHTML = "";
    const tpl = document.createElement("template");
    tpl.innerHTML = this.template();

    this.bindEvents(tpl.content);
    this.bindRegions(tpl.content);

    this.onRender();

    this.parent.append(tpl.content);
  }

  onRender(): void {}

  bindModel(): void {
    this.model.on("change", () => {
      this.render();
    });
  }

  bindRegions(fragment: DocumentFragment): void {
    const regionsMap = this.regionsMap();

    for (let key in regionsMap) {
      const selector = regionsMap[key];
      const elem = fragment.querySelector(selector);
      if (elem) {
        this.regions[key] = elem;
      }
    }
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(":");
      fragment.querySelectorAll(selector).forEach((element) => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }
}
