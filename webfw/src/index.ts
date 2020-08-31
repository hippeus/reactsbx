// User update
// import { UserEdit } from "./views/UserEdit";
// import { User } from "./models/User";

// const user = User.buildUser({ name: "Maciek", age: 31 });

// const root = document.getElementById("root");
// if (root) {
//   const userEdit = new UserEdit(root, user);
//   userEdit.render();
//   console.log(userEdit);
// } else {
//   throw new Error("root element not found");
// }

// List
import { Collection } from "./models/Collection";
import { UserProps, User } from "./models/User";
import { UserList } from "./views/UserList";

const users = new Collection(
  "http://localhost:3000/users",
  (json: UserProps): User => {
    return User.buildUser(json);
  }
);

users.fetch();

users.on("change", () => {
  const root = document.getElementById("root");
  if (root) {
    new UserList(root, users).render();
  }
});
