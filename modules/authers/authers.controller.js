import { Router } from "express";
import { authorcollection } from "./authors.services.js";
const router=Router()
router.post("/collection/authors",async(req,res,next)=>{

try {
    const{insertedId} = await authorcollection(req.body)
    return res.status(200).json({message:"author created sussfully",data:{book:insertedId}})
} catch (error) {
    return res.status(500).json({message:error.message})
    
}

})
export default router
