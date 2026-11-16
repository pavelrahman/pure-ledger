//* External Imports *//
import path from "path";
import dotenv from "dotenv";
dotenv.config({ path: path.resolve(import.meta.dirname, "../../.env") });

//* Internal Imports *//
import utils from "../../src/utils/index.js";

import { seedUser, deleteUsers } from "./userSeed.js";

const { executeWithDB } = utils;
const command = process.argv[2];

if (command === "--seed") {
  await executeWithDB(seedUser);
} else if (command === "--delete") {
  await executeWithDB(deleteUsers);
} else {
  console.log("Please pass --seed or --delete flag.");
}
