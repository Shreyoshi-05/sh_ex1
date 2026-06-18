import express from "express";

const app = express();

app.use((req,res,next)=>{
  console.log("authentication middleware called");
  next();
});

app.use("/firstRoom",(req,res,next)=>{
  console.log("first middleware called ...");
  next();
});

app.get("/firstRoom",(req,res)=>{
  res.send("this is Room First..")
});

app.use("/secRoom",(req,res,next)=>{
  console.log("sec room middleware called ...");
  next();
});

app.get("/secRoom",(req,res)=>{
  res.send("you are in sec room...")
})

const port = 3000;
app.listen(port,()=>{
  console.log("server is running on port", port);
})