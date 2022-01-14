//imports
const mongoose = require('mongoose');
const express = require('express');
const app = express();
require('dotenv/config');
const morgan = require('morgan');

app.use(express.json());
app.use(morgan('tiny'));

const searchRoutes = require('./routes/search');

//API
// const api = process.env.API_URL;

//route

app.use(`/search`, searchRoutes);


//Database
mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'viga'
})
.then(()=>{
    console.log('Database Connection is ready...')
})
.catch((err)=> {
    console.log(err);
})



//Server
app.listen(3000, ()=>{
    console.log('server is running http://localhost:3000');
})