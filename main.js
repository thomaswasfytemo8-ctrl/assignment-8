import express from "express";
import { connectiondb } from "./db/db.connection.js";
import { AuthorRouter, BookRouter, LogRouter } from "./modules/index.js";
const app= express()
const port =5000
connectiondb()
app.use(express.json())
app.use("/books",BookRouter)
app.use("/authors",AuthorRouter)
app.use("/log",LogRouter)

app.listen(port,()=>{
    console.log("app is working on port ", port)
})