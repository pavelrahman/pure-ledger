//* External Imports *//
import fs from "fs";
import path from "path";

//* Internal Imports *//
import { userService } from "../../src/services/UserService.js";

const { users } = JSON.parse(
  fs.readFileSync(
    path.resolve(import.meta.dirname, "..", "userData.json"),
    "utf-8",
  ),
);

export async function seedUser() {
  await userService.deleteAllUser();
  console.log("All Users Deleted!");

  for (const user of users) {
    await userService.createUser(user);
  }
  console.log("New Users Inserted!");
}

export async function deleteUsers() {
  await userService.deleteAllUser();
  console.log("All Users Deleted!");
}
