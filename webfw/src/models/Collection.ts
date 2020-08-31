import axios, { AxiosResponse } from "axios";
import { Eventing } from "./Eventing";

export class Collection<T, K> {
  items: T[] = [];
  events: Eventing = new Eventing();

  constructor(public rootUrl: string, public unmarshal: (json: K) => T) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    axios.get(this.rootUrl).then((resp: AxiosResponse) => {
      resp.data.forEach((value: K) => {
        const item = this.unmarshal(value);
        this.items.push(item);
      });
      this.trigger("change");
    });
  }
}
