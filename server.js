const express= require("express");
const app = express();
const route= require('./routes/index');
const path = require('path');

app.set('view engine', 'ejs');

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

//sample test
const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
 ];


 //Main route
app.get('/', (req,res)=>{
    res.render("home", {messages})
})

app.get('/new', (req,res)=>{
    res.render("newMessage")
})



const PORT =process.env.PORT || 3000;
app.listen(PORT, () => console.log("server running in port:"+PORT));