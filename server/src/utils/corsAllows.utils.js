const corsAllows = {
    origin: process.env.CORS_ORIGIN.split(","),
    methods: process.env.CORS_METHODS.split(","),
    allowedHeaders: process.env.CORS_HEADERS.split(","),
    credentials: process.env.CORS_CREDENTIALS === "true" 
};

module.exports = corsAllows;
