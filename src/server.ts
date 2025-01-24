import mongoose from "mongoose";
import app from "./app";
import config from "./app/config";

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    app.listen(config.port || 5000, () => {
      console.log(`Example app listening on port ${config.port || 5000}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
