const express=require('express');
const cors=require('cors');
const recipeRoutes = require("./routes/recipeRoutes");

const app=express();


app.use(express.json());
app.use(cors());
app.use(recipeRoutes);




app.listen(4000,()=>{
    console.log('server 4000 portunu dinlemeye başladı');
});