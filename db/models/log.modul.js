import { db } from "../db.connection.js";

export const LogModel= db.collection("logs",{capped:true,size:1000000})