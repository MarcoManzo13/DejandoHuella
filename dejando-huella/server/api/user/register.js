// User Register Script
// HTTP POST REQUEST ONLY
import model from "~~/server/models/user";
import { readBody, createError } from 'h3';

//DEFINE EVENT HANDLER FOR A REGISTER
export default defineEventHandler(async (event) => {
    //ONLY POST ACCEPTED
    if (event.req.method === 'POST') {
        const body = await readBody(event); // get body request
        console.log('Received form data:', body); //inspect received object

        try {
            // Try to save new user
            const newUser = await new model(body).save(); // save new user in DB
            return { message: 'User created successfully', user: newUser }; // Succesful answer with new user created
        } catch(err) {
            // ERROR HANDLING during new user creation
            throw createError({ statusCode: 500, message: err.message });
        }
    } else {
        // Getting any HTTP method beside POST Will raise error
        throw createError({ statusCode: 405, message: 'Method Not Allowed' });
    }
});
