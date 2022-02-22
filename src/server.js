require('dotenv').config({
    path: process.env.NODE_ENV === 'development' ? '.env.dev' : '.env'
});

const app = require('./app');

app.listen(process.env.SERVER_PORT, () => {
    console.log('Servidor iniciado...');
    console.log(process.env.SERVER_PORT);
});
