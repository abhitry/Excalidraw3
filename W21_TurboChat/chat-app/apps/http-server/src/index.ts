import  express  from "express";

const app=express();

app.get("/signup",(req,res)=>{
    res.send("Hello World");
})

app.get("/signin",(req,res)=>{
    res.send("Hello World");
})

app.get("/C hat",(req,res)=>{
    res.send("Hello World");
})
app.listen(3001);