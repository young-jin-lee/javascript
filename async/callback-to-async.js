'use strict';

// Callback Hell to Promise Example
// 1. get input(id, pw) from the user
// 2. when the user tries to login, get valid pairs of id and pw from the server and check if the user is valid.
// 3. return his/her id
// 4. get david's role from the server with his id.
// 5. if the logged in user is david, return his role info 

class UserStorage {
  async loginUser(id, password) {
    await delay(1000);
    if (
      (id === "david" && password === "123") ||
      (id === "coder" && password === "academy")
    ) {
      return id;
    } else {
      return new Error("not found");
    }
  }

  async getRoles(user) {
    await delay(1000);
    if (user === "david") {
      return "admin" ;
    } else {
      return new Error("no access");
    }
  }

  async getUserWithRole(user, password) {
    const userPromise = await this.loginUser(user, password);
    const role = await this.getRoles(userPromise);
    return alert(`Hello ${userPromise}, you have the ${role} role`);
  }
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");
userStorage //
  .getUserWithRole(id, password)
  .catch(console.log)
  .then(console.log);