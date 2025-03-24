import  Express  from "express";
import {Client }from "pg";

const app=Express();
app.use(Express.json());
const pgClient=new Client("postgresql://neondb_owner:npg_2JXtDm4VeWOn@ep-wispy-rain-a52ybm1u-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require");
pgClient.connect();

app.post("/signup",async (req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    const email=req.body.email;
    
    const insertQuery= `INSERT INTO users(username,email,password)Values('${username}','${email}','${password}');`
    const response=await pgClient.query(insertQuery);

    res.json({
        message:"You have signed up"
    })
})
app.listen(8080);