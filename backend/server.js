const express =require('express');
const data=require('./data');
const app=express();


app.get('/api/products',(req,res)=>{
    res.send(data.products)
})
const PORT=process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
});