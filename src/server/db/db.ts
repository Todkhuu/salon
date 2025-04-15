// import { connect } from "mongoose";

// export const connectMongoDB = async () => {
//   const databaseConnectionURI = process.env.MONGODB_CONNECTION_URI;

//   if (!databaseConnectionURI) {
//     throw new Error(
//       "Database Connection URI is not defined in environment variables."
//     );
//   }

//   try {
//     await connect(databaseConnectionURI);

//     console.log("Successfully connected to the MongoDB database.");
//   } catch (connectionError) {
//     console.error(
//       "Failed to connect to the MongoDB database:",
//       connectionError
//     );
//     process.exit(1);
//   }
// };

import mongoose from "mongoose";

export const connectMongoDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION_URI || "");
    console.log("Mongodb success");
  } catch (error) {
    console.log("Mongodb error");
  }
};
