import { User, UserProps } from "../models/User";
import { View } from "./View";

export class UserForm extends View<User, UserProps> {
  eventsMap = (): { [key: string]: () => void } => {
    return {
      // event:tag_type
      "mouseenter:h1": this.onHeaderHover,
      // event:.class_name
      "click:.set-age": this.onSetAgeClick,
      "click:.set-name": this.onSetNameClick,
      "click:.save-model": this.onSaveClick,
    };
  };

  onHeaderHover = (): void => {
    console.log("hover over header");
  };

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };

  onSetNameClick = (): void => {
    const input = this.parent.querySelector("input");
    if (input) {
      const name = input.value;
      this.model.set({ name });
    }
  };

  onSaveClick = (): void => {
    this.model.save();
  };

  template = (): string => {
    return `
    <div>
      <h1>User Form</h1>
      <input placeholder="${this.model.get("name")}"/>
      <button class="set-name"> Change Name </button>
      <div>
        <button class="set-age"> Set Random Age </button>
      </div>
      <div>
        <button class="save-model">Save User</button>
      </div>
    </div>
    `;
  };
}
