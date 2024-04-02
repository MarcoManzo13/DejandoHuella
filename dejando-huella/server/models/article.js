import mongoose from 'mongoose';

const { Schema } = mongoose;

// Define the article schema
const articleSchema = new Schema({

  imageURL: String,
  title: String,
  description: String,
  
  // Add more fields as needed
});

// Create the article model
const ArticleModel = mongoose.model('Article', articleSchema);

export default ArticleModel;
