
// Import necessary modules
/*import { defineEventHandler } from 'nexus';
import ArticleModel from '../../models/article';

// Define the event handler for fetching articles
export default defineEventHandler(async (event) => {
    try {
        // Fetch articles from the database
        const articles = await ArticleModel.find();

        // Return the fetched articles
        return articles;
    } catch (error) {
        // Handle errors
        throw new Error('Failed to fetch articles');
    }
});*/

import model from "~~/server/models/article"

export default defineEventHandler(async (event) =>{


    try{
        const result = await model.find({})
        new model(body).save()
        return { message: result };
    }
    catch(err){
        throw createError({
            message: err.message
        })
    }
})