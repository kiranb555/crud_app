const mongoose = require('mongoose');
const mongoClient = require('mongodb');

const connectDB = async () => {
    console.log('mongo connection initialized')
    try {
         const con = await mongoose.connect(process.env.MONGO_URL);
        console.log(`MongoDB connection error, ${con}`);
    }
    catch (err) {
        console.log(`Mongo connection error:`, err);
        // process.exit(1)
    }
    console.log('mongo connection end')
};

module.exports = connectDB;