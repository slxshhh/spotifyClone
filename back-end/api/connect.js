// Javascript Assincrono
// await async
// Fullfilled
import { MongoClient } from "mongodb";

const URI =
    "mongodb+srv://slxshh:G13122004g@cluster0.j2msf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotifyAula");
// const songCollection = await db.collection("songs").find({}).toArray();

