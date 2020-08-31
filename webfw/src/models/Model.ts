import { AxiosPromise, AxiosResponse } from "axios";

export interface HasId {
  id?: number;
}

export interface Sync<T extends HasId> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}

export interface Events {
  on(eventName: string, callback: () => void): void;
  trigger(eventName: string): void;
}

export interface ModelAttributes<T> {
  get<K extends keyof T>(key: K): T[K];
  getAll(): T;
  set(update: T): void;
}

export class Model<T extends HasId> {
  constructor(
    private attributes: ModelAttributes<T>,
    private sync: Sync<T>,
    private events: Events
  ) {}

  // NOTE: Use commented code in case your constructor has a body with
  // configuration, as order of initialization matter. Nevertheless,
  // property promotion is neater but be mindful.
  //
  // get on() {
  //   return this.events.on;
  // }
  on = this.events.on;

  trigger = this.events.trigger;
  get = this.attributes.get;

  set = (update: T): void => {
    this.attributes.set(update);
    this.events.trigger("change");
  };

  fetch = (): void => {
    const id = this.get("id");
    if (typeof id !== "number") {
      throw new Error("Can not fetch without an id");
    }
    this.sync.fetch(id).then((response: AxiosResponse): void => {
      this.set(response.data);
    });
  };

  save = (): void => {
    this.sync
      .save(this.attributes.getAll())
      .then((response: AxiosResponse): void => {
        this.trigger("save");
      })
      .catch(() => {
        this.trigger("error");
      });
  };
}
