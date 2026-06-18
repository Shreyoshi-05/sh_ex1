import express from "express";

const app = express();

app.use(express.json());
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

// let order ={
//   message: "Order created successfully",
//   order: laptop
// }

let order = [];

app.post("/orders",(req,res)=>{

  const {name, cost} = req.body;
  let nn = {
    name,
    cost
  }

  order.push(...order,nn);

  res.json({
    message:"Order created successfully",
    order
  });
});

app.get("/orders",(req,res)=>{
  res.json({
    message: "Here is the list of all orders",
    orders: order
  });
});



const port = 3000;
app.listen(port,()=>{
  console.log("server is running on port", port);
})