const express = require('express');
const mongoose = require('mongoose');
const blogRoutes = require('./routers/blogRoutes');
require("dotenv").config();

const app = express();

const PORT = process.env.NODE_DOCKER_PORT;

//connect to mongodb
const dbURI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.dg7saqz.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
        console.log("Connect to database");
        app.listen(PORT);
        console.log('Run backend');
    })
    .catch((error) => {console.log(error)});

app.use(express.urlencoded({ extended: true }));

app.use('/blogs', blogRoutes);

