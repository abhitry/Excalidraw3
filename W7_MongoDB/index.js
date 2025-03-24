const express=require("express");
const zod = require('zod');
const {z} = require('zod');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const {UserModel,TodoModel}=require("./db.js");
let JWT_SECRET="ajbdhfyvuhijw1293r8475hrfnd";

mongoose.connect("mongodb+srv://abhishekmasne2015:01092002%40Ai@cluster0.aj8wd.mongodb.net/todo-abhishek-2")
const app=express();
app.use(express.json());
app.post("/signup",async function(req,res){
    let errorthrown=false;
    const requiredbody=z.object({
        email:z.string().min(3).max(100).email(),
        password:z.string().min(3).max(100),
        name:z.string().min(3).max(100)
    })
    const parseddatawithsucces=requiredbody.safeParse(req.body);
    if(!parseddatawithsucces.success){ res.json({
        msg:"incoorect format",
        error:parseddatawithsucces.error
        });
        return ;
    }
    const email=req.body.email;
    const password=req.body.password;
    const name=req.body.name;
    const hashedPasswrod=await bcrypt.hash(password,5)
    console.log(hashedPasswrod);
    try{await UserModel.create({name:name,password:hashedPasswrod,email:email})}
    catch(e){res.json({msg:"Email Already Present "});errorthrown=true}
    if(!errorthrown)res.json({msg:"User signup in and strored in mongodb"})

})

app.post("/signin",async function(req,res){
    const email=req.body.email;
    const password=req.body.password;
    const response=await UserModel.findOne({email:email});
    const passwordmatch=bcrypt.compare(password,response.password);
    if(passwordmatch){
        const token=jwt.sign({id:response._id.toString()},JWT_SECRET);
        
        res.json({token:token})
    }else{
        res.json({msg:"incorrect Credentials"})
    }
})

app.use(auth);
app.post("/todo",auth,async function(req,res){
    const userId=req.userId;
    const todos=await UserModel.find({_id:userId});
    res.json({todos});
})
app.get("/todos",auth,function(req,res){
    const userId=req.userId;
    res.json({userId:userId});
})
function auth(req,res,next)
{
    const token=req.headers.token;
    const decodeinfo=jwt.verify(token,JWT_SECRET);
    if(decodeinfo){req.userId=decodeinfo.id;next();}
    else{res.status(404).json({msg:"invalid credentials"})};

}
app.listen(3000);