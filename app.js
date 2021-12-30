const express = require('express');
const app = express();
const authRoute =  require('./routes/authentication');
const postRoute =  require('./routes/posts');
const database = require('./database/connection.js');
const bodyParser = require('body-parser');
const PORT = 5000;

// Using this to convert response into JSON
app.use(bodyParser.json());

// Route Middleware
app.use('/' , authRoute);
app.use('/' , postRoute);

//Listening to the port
app.listen(PORT , () => console.log(`Application is listening at http://localhost:${PORT}`))

