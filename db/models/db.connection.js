import { MongoClient}  from "mongodb";
const client =new MongoClient("mongodb://localhost:27017/")
 export const db= client.db("library")
export function connectiondb() {
    client.connect().then(()=>{
        console.log("db is connected sucessfully")
    }).catch(err=>{
        console.log("no connection")
     }) 