import mongoose from "mongoose";

const connectMongoose = async()=>{
    try {
         await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected...');
        
    } catch (error) {
        console.log(error.message);
        
    }
}

export default connectMongoose;