// User index
// Catches unknown HTTP Requests and redirect them
// It only handles GET REQUEST. Serves for debugging purposes

import model from "~~/server/models/user";
import { readBody, createError } from 'h3';

export default defineEventHandler(async (event) => {
    if (event.req.method === 'GET') {
        // Maintain the GET logic to list users.
        try {
            const users = await model.find(); // Get all users.
            return users; // Return the list of users.
        } catch(err) {
            // Handle any error that occurs when listing the users.
            throw createError({ statusCode: 500, message: err.message });
        }
    } else {
        // If the HTTP method is neither POST nor GET, return a 'Method Not Allowed' error.
        throw createError({ statusCode: 405, message: 'Method Not Allowed' });
    }
});
