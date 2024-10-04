import { app } from "./app.js";
import connectDB from "./DB/connectDB.js";
import "dotenv/config";

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 4000, () => {
      console.log("Server is running on " + process.env.PORT);
    });
  })
  .catch((err) => console.log("DB Error " + err));
