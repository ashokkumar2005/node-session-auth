
 import express from "express";
 import session from "express-session";

 const app =express();

 app.use(express.json());

 app.use(session({
    secret:"mysecreat",
    resave:false,
   saveUninitialized:true
 })
)

const user ={
    username:"ashok",
    password:123
 }

 //user login route
 app.post("/loginuser", (req,res)=>{

    const {username,password} = req.body;

    if(username===user.username && password===user.password){
        req.session.user=username;
        return res.send("user login pannitaru");
    }else{
        res.send("user not exisit");
    }

 })

 //prodected route

 app.get("/dashboard",(req,res)=>{
    if(req.session.user){
        return res.send("welcome " + req.session.user);
    }else{res.send("somthing wrong login first")};

 })

 //logout user 

 app.get("/logout",(req,res)=>{
    req.session.destroy();
    return res.send("logout the user successfully");
 })

 app.listen(3000,()=>{
    console.log("server starting at 3000");
 })


