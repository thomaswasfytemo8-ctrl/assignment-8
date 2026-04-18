import { db } from "../db.connection.js";
const BOOKScheme={
bsonType:"object",
required:["title","author","year","genders"],
properties:{

title:{
    bsonType:"string",
    description:"must be a non-empty string" // validation rule to not be empty
    
},
author:{
   bsonType:"string" 
},
year:{ bsonType:"int" },
genders:{
    bsonType:"array",
  items:{
        bsonType:"string"
    } ,
    description:"must be array of strings"
    
}


}




}
export const BookModel=await db.createCollection("books",{validator:{$jsonSchema:BOOKScheme}})