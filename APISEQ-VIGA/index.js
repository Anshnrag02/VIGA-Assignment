//imports
const express = require('express');
const app = express();
app.use(express.json());
require('dotenv/config');
const morgan = require('morgan');
const sequelize  = require('./utils/database');

app.use(morgan('tiny'));

const searchRoutes = require('./routes/search');

//API
// const api = process.env.API_URL;

//route
app.use(`/search`, searchRoutes);

//Import Models
const Project = require('./models/project');
const Asset = require('./models/asset');
const Department = require('./models/department');

//Database
Asset.hasOne(Department);
Department.hasOne(Project);



sequelize.sync()
    .then(
        
            // console.log(result);
            app.listen(3000, ()=>{
                console.log('server is running http://localhost:3000');
            })
         
    )
    .catch(err=>{
        throw err;
    });
//Server
// app.listen(3000, ()=>{
//     console.log('server is running http://localhost:3000');
// })