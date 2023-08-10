import mongoose from "mongoose";

let isConnect = false;

export const connectToDb = async () => {
    mongoose.set('strictQuery', true);
    
    if (isConnect) {
        console.log("MongoDb Connected");
        return
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName:"share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })    

        isConnect = true;

        console.log('Mongodb Connect');
    } catch (error) {
        console.log(error);
    }
} 

