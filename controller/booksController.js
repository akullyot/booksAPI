//SECTION - Controller Dependencies
const express     = require('express');
const books        = express.Router();
//Mongo Database
const Book        = require('../models/book.js');
//!SECTION

//SECTION - Routes
//static Routes
    //Purpose: Index of all Books
books.get("/", (request, response)=>
{

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
        .then(res.status(200).json({
            message: 'Seed successful'
        }))
        .catch(res.status(400).json({
            message: 'Seed unsuccessful'
        }));
});
    
//Dynamic Routes
    //Purpose: List the Info for an Individual Book
books.get("/:id", (request, response)=>
{

});
    //Purpsoe: Update a singular book
books.put("/:id", (request,response) => 
{

});
    //Purpose: Delete a singular Book
books.delete("/:id", (request,response) => 
{

});
    //Purpose: add a singular Book
books.post("/:id", (request,response) => 
{

});
//Catch all Route
books.get('*', (request,response) =>
{
    //chain together the sent HTML and the HTTP status
    response.status(404).send('<h1> 404 Page not Found </h1>');
});

//!SECTION


//SECTION - Export Router
module.exports = book;
//!SECTION