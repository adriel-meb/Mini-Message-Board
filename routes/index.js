const express= require("express");
const app = express();
const path = require('path');

app.set('view engine', 'ejs');

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

module.exports = function(app){
    app.get('/', (req,res)=>{
        res.render("home")
    })
    
    app.get('/new', (req,res)=>{
        res.render("newMessage")
    })
    
}