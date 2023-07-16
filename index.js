const express = require('express');
const { connection } = require('./config/db');
const { dataModel } = require('./model/data.model');
require("dotenv").config();
const cors = require('cors');

const app = express();
app.use(cors());

app.use(express.json());

const connectDB = async () => {
    try {
      const conn = await connection;
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  }
  

app.get("/",async(req,res)=>{
    const data = await dataModel.find().maxTimeMS(40000);
    res.status(200).send(data)
})

connectDB().then(() => {
    app.listen(process.env.PORT || 4500, () => {
        console.log("listening for requests");
    })
})

// app.listen(process.env.PORT || 4500,async()=>{
//     await connection
//     console.log('listening on port 4600')
// })
