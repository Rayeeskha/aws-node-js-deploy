const express = require("express");
const app = express();
require("dotenv").config()

app.get('/api/get',(req,res) => {
    res.send({message:"hello back to nodejs"})
})

app.get('/api/get_user_details',(req,res) => {
    res.send({
        user:{
            name:"Rayees khan",
            age:25,
            contact:9554540271
        }
    })
});

// local
// app.listen(process.env.PORT,() => {
//     console.log("listening to 8000");
// })

// Production 
app.listen(8000, '0.0.0.0', () => {
    console.log('Server is running on port 8000');
});
  