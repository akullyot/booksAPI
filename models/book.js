//SECTION - Requirements
const mongoose = require('mongoose');
//shorthand for the schema constructor
const {Schema} = mongoose;
//!SECTION

//SECTION - Schema Definition
const bookSchema = new Schema
(
    {
        title      : {type: String, required:true},
        description: {type: String},
        year       : {type: Number},
        quantity   : {type: Number},
        imageURL   : {type: String, default: 'http://placehold.it/500x500.png'}
    }
);
//!SECTION

//SECTION - Creat Model and Export it 
//Purpose: Use said schema to create a model 
const Book = mongoose.model('Book', bookSchema);
module.exports = Book;
//!SECTION
