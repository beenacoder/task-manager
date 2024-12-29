const mongoose = require('mongoose');

 const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.DATABASE_URI);
        console.log(`MongoDB connected: ${connect.connection.host}`)

    } catch (error) {
        console.log(error.message)
        console.error('Error al conectar a MongoDB:', error.message);
    }
}

module.exports = connectDB
