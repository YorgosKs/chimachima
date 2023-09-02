import { MongoClient } from "mongodb";
import { env } from "$env/dynamic/private";

const uri = env.DB_URI;

const client = new MongoClient(uri);
try {
  await client.connect();
  console.log(true);
} catch (e) {
  console.error(e);
}

export default client.db("chimachima");
