const express = require('express');
const dotenv = require('dotenv');
const app = express();
const router = require('./application/routes/index');

dotenv.config();


app.use(express.json())

/* eslint-disable no-undef */
app.listen(process.env.PORT, () =>{
    console.log(`APP listening in ${process.env.PORT}`)
})

app.use(router)