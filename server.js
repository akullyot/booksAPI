
//SECTION - Initialization and Requirements
//Initalize express and include environment variables
    //Purpose: stores and defines environment variables
    require('dotenv').config();
    //Purpose: initialize express framework
const express        = require('express');
    //Purpose: initialize our ODM to MongoDB
const mongoose       = require('mongoose');
const cors           = require('cors');

const app = express();
    //set up a body parser for json
app.use(express.json())
app.use(cors())
//!SECTION


//SECTION - Routes
    //Static Routes
app.get('/', (request,response) => 
{
    response.send('<h1>Hello, World! Welcome to the entry page of Books API </h1>');
});
    //Books controller
app.use('/books', require('./controller/booksController.js'))
    //Catch all Route
app.get('*', (request,response) =>
{
    //chain together the sent HTML and the HTTP status
    response.status(404).send('<h1> 404 Page not Found </h1>');
});
//!SECTION



//SECTION - Listening and mongoDB connection
//Connect to your mongodb and listen on port given by env
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => console.log('connected to mongo: ', process.env.MONGO_URI))
app.listen(process.env.PORT, () => 
{
    console.log(`listening on port ${process.env.PORT}`);
});
//!SECTION