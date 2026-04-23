import { BookModel } from "../../db/models/book.model.js"

export const createindex=async(filter)=>{
 return await BookModel.createIndex(filter)


}

export const createbook=async(databook)=>{
    return await BookModel.insertOne(databook)
}

export const craeteManyBooks=async(inputs)=>{
    const result= await BookModel.insertMany(inputs)
    return result
    if (result.insertedCount==0) {
        throw new Error("insertation failed");
        
        
    }
}

export const Updatebook=async(filter,update,opition)=>{
    const result=await BookModel.updateOne(filter,update)
    return result
}

export const getspecificbook=async(filter)=>{
    const result=await BookModel.findOne(filter)
    return result
}
export const getbookbetween=async(filter)=>{
    const result=await BookModel.find(filter).toArray()
    return result
   
   


}
export const findspeceficgenders=async(filter)=>{
    const result =await BookModel.find(filter).toArray()
    return result
}
export const skipbooks=async(filter)=>{
    const result = await BookModel.find(filter).sort({year:-1}).skip(2).toArray()
    return result
}
export const integerbooksyear=async(filter)=>{
    const result = await BookModel.find(filter).toArray()
    return result

}
export const geners2=async(filter)=>{
 const result = await BookModel.find(filter).toArray()
 return result

}

export const booksbefore200=async(filter)=>{
     const result = await BookModel.deleteMany(filter)
 return result
}
export const aggregate=async(filter)=>{
    const result= await BookModel.aggregate([
 {
    $match:{
        year:{$gt:2000}
    }
 },
 {$sort:{year:-1}},
  {$project:{"_id":0}}



    ])
.toArray()

   return result






}

export const aggregate2=async(filter)=>{
    const result= await BookModel.aggregate([
 {
    $match:{
        year:{$gt:2000}
    }
 },
 
  {$project:{"_id":0,"genders":0}}



    ])
.toArray()
return result
}

export const aggregate3=async(filter)=>{
      const result= await BookModel.aggregate([
 
 { $match:{filter}},
 {$unwind:"$genders"},
 {$project:{"_id":0,"title":1,"genders":1}}
 




    ])
.toArray()
return result
}
