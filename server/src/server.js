const express = require('express');
require('dotenv').config()
const cors = require('cors')

const app = express();

app.use(express.json());
app.use(cors());

app.use('/v1/api/auth',()=>{})
app.use('/',(req,res)=>{
    res.send('Hello World...')
})

const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}/`)
})

