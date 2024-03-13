import mongoose from "mongoose"

export default defineNitroPlugin(async (app) => {
    const config = useRuntimeConfig()
    try{
        await mongoose.connect(config.MONGO_URI)
        console.log("Connected to mongoDB")
    }
    catch (err){
        console.log(err)
        console.log()
    }
})