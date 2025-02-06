const express = require('express');
require('dotenv').config();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');
const authRouter = require('./routes/auth.route');
const blogRouter = require('./routes/blog.route');
const commentRouter = require('./routes/comment.route');
const connectDB = require('./config/connectionDB');
const corsAllows = require('./utils/corsAllows.utils');
const { log } = require('console');

const app = express();

// Middleware setup
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: corsAllows.origin,
    methods: corsAllows.methods,
    allowedHeaders: corsAllows.allowedHeaders,
    credentials: corsAllows.credentials
}));

// Serve static files for uploaded images
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// Routes
app.use('/v1/api/auth', authRouter);
app.use('/v1/api/blog', blogRouter);
app.use('/v1/api/comment', commentRouter);

// Test route
app.use('/', (req, res) => {
    res.send('Hello Developer...');
});

app.use((req, res, next) => {
    res.status(404).send({ message: 'Route not found' });
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send({ message: 'Something went wrong' });
});


const port = process.env.PORT || 3000;

connectDB();

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
