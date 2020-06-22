const express= require("express");
const app = express();
const route= require('./routes/index');
const path = require('path');
var bodyParser = require('body-parser')

//View Engine
app.set('view engine', 'ejs');

//body parser middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));


// Routes
app.use('/', require('./routes/index'));


const PORT =process.env.PORT || 3000;
app.listen(PORT, () => console.log("server running in port:"+PORT));