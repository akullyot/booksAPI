//SECTION - Controller Dependencies
const express     = require('express');
const books        = express.Router();
//Mongo Database
const Book        = require('../models/book.js');
//!SECTION

//SECTION - Routes
//static Routes
    //Purpose: Index of all Books
books.get('/', (request, response) => {
    Book.find()
        .then(foundBooks => 
        {
            response.status(200).json(foundBooks)
        })
        .catch(err => 
        {
            response.status(400).json(
            {
                message: 'Failed to load the index of all books'
            })
        })
});
    //Purpose: add a singular Book
books.post("/", (request,response) => 
{
    Book.create(request.body)
    .then(createdBook => 
    {
        response.status(200).json(createdBook)
    })
    .catch(err => 
    {
        response.status(400).json(
        {
            message: 'Failed to create a new book'
        })
    })

});
    //Purpose: Seed in Data for faster testing
books.get('/seed', (request, response) => 
{
    Book.insertMany([{
        "title": "The Shinobi Initiative",
        "description": "The reality-bending adventures of a clandestine service agency in the year 2166",
        "year": 2014,
        "quantity": 10,
        "imageURL": "https://imgur.com/LEqsHy5.jpeg"
        },
        {
        "title": "Tess the Wonder Dog",
        "description": "The tale of a dog who gets super powers",
        "year": 2007,
        "quantity": 3,
        "imageURL": "https://imgur.com/cEJmGKV.jpg"
        },
        {
        "title": "The Annals of Arathrae",
        "description": "This anthology tells the intertwined narratives of six fairy tales.",
        "year": 2016,
        "quantity": 8,
        "imageURL": "https://imgur.com/VGyUtrr.jpeg"
        },
        {
        "title": "WARP",
        "description": "A time-space anomaly folds matter from different points in earth's history in on itself, sending six unlikely heroes on a race against time as worlds literally collide.",
        "year": 2010,
        "quantity": 4,
        "imageURL": "https://imgur.com/qYLKtPH.jpeg"
        }])
        .then(response.status(200).json({
            message: 'Seed successful'
        }))
        .catch(response.status(400).json({
            message: 'Seed unsuccessful'
        }));
});

    
//Dynamic Routes
    //Purpose: List the Info for an Individual Book
books.get("/:id", (request, response)=>
{
    Book.findById(request.params.id)
    .then(foundBook => 
    {
        response.status(200).json(foundBook)
    })
    .catch(err => 
    {
        response.status(400).json(
        {
            message: 'Failed to find a book of this specific index'
        })
    })

});
    //Purpsoe: Update a singular book
books.put("/:id", (request,response) => 
{
    Book.findByIdAndUpdate(request.params.id)
    .then(updatedBook => 
    {
        response.status(200).json(updatedBook)
    })
    .catch(err => 
    {
        response.status(400).json(
        {
            message: 'Failed to update the book of this specific index'
        })
    })

});
    //Purpose: Delete a singular Book
books.delete("/:id", (request,response) => 
{
    Book.findByIdAndDelete(request.params.id)
    .then(deletedBook => 
    {
        response.status(200).json({message: 'Deletion Successful'})
    })
    .catch(err => 
    {
        response.status(400).json(
        {
            message: 'Failed to delete a book of this specific index'
        })
    })

});
//Catch all Route
books.get('*', (request,response) =>
{
    //chain together the sent HTML and the HTTP status
    response.status(404).send('<h1> 404 Page not Found </h1>');
});

//!SECTION


//SECTION - Export Router
module.exports = books;
//!SECTION