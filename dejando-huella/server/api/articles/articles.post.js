import model from "~~/server/models/articles"
export default defineEventHandler(async (event) =>{
    const body = await readBody(event)
    console.log('Recieved Report:', body); // Inspect the object

    try{
        const result = await model.find()
        new model(body).save()
        return { message: 'Report created' };
    }
    catch(err){
        throw createError({
            message: err.message
        })
    }
})