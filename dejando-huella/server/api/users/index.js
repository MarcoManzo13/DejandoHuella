import model from "~~/server/models/user"

export default defineEventHandler(async (event) =>{
    const body = await readBody(event)
    console.log('Received form data:', body); // Inspect the object

    try{
        const result = await model.find()
        new model(body).save()
        return { message: 'Author created' };
    }
    catch(err){
        throw createError({
            message: err.message
        })
    }
})