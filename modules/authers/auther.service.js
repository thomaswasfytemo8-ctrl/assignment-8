import { AuthorModel } from "../../db/models/author.model.js"

 export const authorcollection=async(userdata)=>{
    return await AuthorModel.insertOne(userdata)
 }
