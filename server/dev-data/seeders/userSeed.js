//* External Imports *//
import fs from "fs";
import path from "path";

//* Internal Imports *//
import services from "../../src/services/index.js";

const { UserService } = services;

const { users } = JSON.parse(
  fs.readFileSync(
    path.resolve(import.meta.dirname, "..", "userData.json"),
    "utf-8",
  ),
);

export async function seedUser() {
  await UserService.deleteAllUser();
  console.log("All Users Deleted!");

  for (const user of users) {
    await UserService.createUser(user);
  }
  console.log("New Users Inserted!");
}

export async function deleteUsers() {
  await UserService.deleteAllUser();
  console.log("All Users Deleted!");
}
