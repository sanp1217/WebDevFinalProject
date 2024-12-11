import { MongoClient, ServerApiVersion } from "mongodb";
import credentials from "../../../credentials.dev.json" with { type: "json"};

const uri = credentials.mongodb.uri;

const client = new MongoClient(uri, {
  serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
 
let _db;
 

  export const connectToServer = async() => {
    await client.connect();
    _db = client.db("finalProj");
  }
 
  export const getDb = function () {
    return _db;
  }
