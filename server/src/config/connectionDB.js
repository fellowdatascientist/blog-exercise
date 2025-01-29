const mongoose = require('mongoose')

const connectDB = async () => {
        mongoose.connect(process.env.MONGOURL)
        .then(db=>console.log("DB is connected"))
        .catch(err=>console.log(err))
}

module.exports = connectDB