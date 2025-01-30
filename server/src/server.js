const express = require('express');
require('dotenv').config()
const cors = require('cors');
const authRouter = require('./routes/auth.route');
const connectDB = require('./config/connectionDB')
const corsAllows = require('./utils/corsAllows.utils')

const app = express();

app.use(express.json());
app.use(cors({
    origin: corsAllows.origin,
    methods: corsAllows.methods,
    allowedHeaders: corsAllows.allowedHeaders,
    credentials:corsAllows.credentials
}));

app.use('/v1/api/auth',authRouter)

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

