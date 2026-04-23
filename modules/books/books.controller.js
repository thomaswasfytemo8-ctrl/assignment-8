import { Router } from "express";
import { aggregate, aggregate2, aggregate3, booksbefore200, craeteManyBooks, createbook, createindex, findspeceficgenders, geners2, getbookbetween, getspecificbook, integerbooksyear, skipbooks, Updatebook } from "./books.services.js";
import { BookModel } from "../../db/models/book.model.js";
const router=Router()
//4 craete book index
router.post("/collection/books/index",async(req,res,next)=>{
    try {
         const indexname= await createindex({title:1})
         return res.status(200).json({message:"index created",index:indexname})
    } catch (error) {
        return res.status(500).json({message:error.message})
        
    }
