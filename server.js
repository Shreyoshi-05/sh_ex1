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

let order = [];
let id = 1;

app.post("/orders",(req,res)=>{

  const {name, cost} = req.body;
  let nn = {
    id: id++,
    name,
    cost
  }

  order.push(nn);

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

app.get("/orders/:id",(req,res)=>{
  const id = req.params.id;
  let ans = order.filter((item)=>item.id == id);

  res.status(200).json({
    "success":true,
    "data":ans
  })
})

app.use((req,res)=>{
  res.status(404).send("404 Page Not Found");
});

const port = 3000;
app.listen(port,()=>{
  console.log("server is running on port", port);
})