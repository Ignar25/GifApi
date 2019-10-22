const express = require('express');
const dotenv = require('dotenv');
const app = express();
const router = require('./application/routes/index');

dotenv.config();
PORT = process.env.PORT;

app.use(express.json())

app.listen(PORT, () =>{
    console.log(`APP listening in ${PORT}`)
})

app.use(router)