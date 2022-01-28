require('dotenv').config({
    path: process.env.NODE_ENV === 'development' ? '.env.dev' : '.env'
});

const app = require('./app');

// const express = require('express');

// const app = express();

app.listen(process.env.SERVER_PORT, () => {
    console.log('Servidor iniciado...');
    console.log(process.env.SERVER_PORT);
})

app.get('/', (req, res) => {
    res.status(200).json({
        msg: 'Home',        
    });
});