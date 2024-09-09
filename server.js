const express = require("express");
const app = express();
require("dotenv").config()

app.get('/api/get',(req,res) => {
    res.send({message:"My CI/CD Pipeline setup to aws S3 using github action runner !"})
})

app.get('/api/get_user_details',(req,res) => {
    res.send({
        user:{
            name:"Rayees",
            age:25,
            contact:9554540271
        },env:process.env.NAME
    })
});

app.get('/api/testing',(req,res) => {
    res.send({
        user:{
            name:"Sandeep",
            age:45,
            contact:7887878787
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
  