//* External Imports *//
import "dotenv/config";
import connectMongo from "./src/config/mongoDB.js";

//* Internal Imports *//
import app from "./src/app.js";

const port = process.env.PORT || 5000;

connectMongo().then(() => {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});
