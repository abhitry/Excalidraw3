const mongoose = require('mongoose');

const Schema=mongoose.Schema;
const ObjectId=mongoose.ObjectId;

const users=new Schema({
    name:String,
    password:String,
    email:{ type: String, unique: true } 
})
const Todos=new Schema({
    description:String,
    doen:String,
    userId:ObjectId
})

const UserModel=mongoose.model("users",users);
const TodoModel=mongoose.model("todos",Todos);

module.exports={UserModel:UserModel,TodoModel:TodoModel};