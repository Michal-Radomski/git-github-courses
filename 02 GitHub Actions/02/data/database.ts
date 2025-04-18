import * as dotenv from "dotenv";
dotenv.config();

import { MongoClient } from "mongodb";

// const connectionProtocol = process.env.MONGODB_CONNECTION_PROTOCOL as string;
const clusterAddress = process.env.MONGODB_CLUSTER_ADDRESS as string;
const dbUser = process.env.MONGODB_USERNAME as string;
const dbPassword = process.env.MONGODB_PASSWORD as string;
const dbName = process.env.MONGODB_DB_NAME as string;

const uri: string = `mongodb+srv://${dbUser}:${dbPassword}@${clusterAddress}/?retryWrites=true&w=majority`;
// const uri = `${connectionProtocol}://${dbUser}:${dbPassword}@${clusterAddress}/?retryWrites=true&w=majority`;
const client: MongoClient = new MongoClient(uri);

console.log("Trying to connect to db");

(async function (): Promise<void> {
  try {
    await client.connect();
    await client.db(dbName).command({ ping: 1 });
    console.log("Connected successfully to MongoDB server");
  } catch (error) {
    console.log("Connection failed.");
    await client.close();
    console.log("Connection closed.");
    process.exit(1);
  }
})();

const database = client.db(dbName);

export default database;
