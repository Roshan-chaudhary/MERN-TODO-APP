
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');

const app = express();
//use express.json() to get data into json format
app.use(express.json());
//Port 
const PORT = process.env.PORT || 5500;

//use cors
app.use(cors())

//import routes
const TodoItemRoute = require('./routes/todoItems');


//connect to mongodb ..
mongoose.connect("mongodb+srv://roshanchy678910:8uf3Li4fC9QLijGf@cluster0.ojex6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=> console.log("Database connected"))
.catch(err => console.log(err))


app.use('/', TodoItemRoute)



//connect to server
app.listen(PORT, ()=> console.log("Server connected") );

