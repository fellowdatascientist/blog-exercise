const corsAllows = {
    origin: process.env.CORS_ORIGIN.split(","),
    methods: process.env.CORS_METHODS.split(","),
    allowedHeaders: process.env.CORS_HEADERS.split(","),
    credentials: true
};

module.exports = corsAllows;
