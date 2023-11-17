require("dotenv").config();
const express=require("express");
const app=express();
const connectDB=require('./db/connect');
const posts_routes=require("./routes/products");
const PORT= process.env.PORT || 5000;

app.get("/",(req,res)=>{
    res.send("Hi I'm Alive")
});

app.use('/api/posts',posts_routes);

const start=async()=>{
    try{
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT,()=>{
            console.log(`${PORT} Yes I'm Connected`)
        })
    }
    catch(error){
        console.log(error)
    }
}

start();