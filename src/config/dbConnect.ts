import mongoose from "mongoose";

export default function dbConnect() {
  let mongoURI;
  if (process.env.mongo_URI) {
    mongoURI = process.env.mongo_URI;
  } else {
    console.log(" please provide correct mongo srv string in dotenv file");
    return;
  }

  mongoose
    .connect(mongoURI)
    .then((host) => {
      console.log("db Connected");
    })
    .catch((err) => {
      console.log(err);
    });
}
