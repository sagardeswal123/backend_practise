const express = require('express');
const { connection } = require('./config/db');
const { dataModel } = require('./model/data.model');

const app = express();

app.use(express.json());

app.get("/",async(req,res)=>{
    const data = await dataModel.find();
    res.status(200).send(data)
})


app.listen(4600,async()=>{
    await connection
    console.log('listening on port 4600')
})