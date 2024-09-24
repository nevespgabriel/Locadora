import mongoose from "mongoose";
import "dotenv/config";

(async () => {
    try{
        await mongoose.connect(process.env.MONGODB);
        console.log("Connected with DB");
    } catch(error){
        console.log(error);
    }
})(); //como se fosse uma função main, executa no primeiro momento em que o arquivo é aberto