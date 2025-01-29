const express = require('express');
require('dotenv').config()
const cors = require('cors');
const router = require('./routes/auth.route');
const connectDB = require('./config/connectionDB')

const app = express();

app.use(express.json());
app.use(cors());

app.use('/v1/api/auth',router)
app.use('/v1/api/blog',()=>{
    console.log('blog')
})
app.use('/',(req,res)=>{
    res.send('Hello Developer...')
})

const port = process.env.PORT || 3000;

app.listen(port,()=>{
    connectDB();
    console.log(`server is running on http://localhost:${port}`);
})

