const express= require('express'); 
const router= express.Router();
 

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
    },
    {
      text: "What are you guys doing?",
      user: "Adriel",
      added: new Date()
    }
 ];


 //Main route
 router.get('/', (req,res)=>{
    res.render("home", {messages})
})


// Get New Message Form
router.get('/new', (req,res)=>{
    res.render("newMessage", {messages})
})

// POST New Message Form
router.post('/new', (req,res)=>{
  const message={};
  message.text= req.body.text;
  message.user=req.body.user;
  message.added= new Date();

  messages.push(message);
  res.redirect('/');
    console.log(message)
})





module.exports= router;