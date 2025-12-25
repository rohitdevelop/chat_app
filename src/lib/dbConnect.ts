 
 import mongoose from 'mongoose';

  async function dbConnect(){
    try {
        const connect = await mongoose.connect(process.env.MONGODB_URI! )
        if (connect) {
            console.log("Database connected successfully");
        }
    } catch (error) {
        console.error("Database connection error:", error);
    } 
}

export default dbConnect;