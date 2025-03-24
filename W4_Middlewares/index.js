let express=require("express");
let app=express();
let reqcount=0;

function middleware(req,res,next)
{
    reqcount=reqcount+1;
    next();
}
app.use(middleware);

app.get("/asd",function(req,res)
{
    res.status(200).json({name:"john"})
})
app.post("/asd",function(req,res)
{
    res.status(200).json({msg:"Created dummy user"})
})
app.get("/requestCount",function(req,res)
{
    res.status(200).json({reqcount})
})

app.listen(302);