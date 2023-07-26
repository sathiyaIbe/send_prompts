import mongoose from "mongoose";

let isConnected=false

export const connectDb=async()=>{
    mongoose.set('strictQuery', true);
    if(isConnected){
        console.log("Mongodb is already connected");
        return;
    }
    try{
        await mongoose.connect(process.env.MONGODB_URI,{
            dbName:'publicDb',
            useNewUrlParser: true,
            useUnifiedTopology:true,
        })
        isConnected=true
        console.log("MongoDb is connected")
    }catch(error){
        console.log(error)
    }


}