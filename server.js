// import express from express;
const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
app.use((req, res, next)=>{
    console.log("connected..")
    next();
});

app.post("/api/task", (req, res) => {
    try{
    const data = req.body;
    console.log("datas", data);
    res.json({ data:data, message:"data reversed success" });
    console.log("ddjdjd", data);
    }catch(error){
         res.json({ message: "error", error: error.message });
    }
});


app.listen(3001, ()=>{
    console.log("connected to the server");
})