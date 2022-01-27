require('dotenv').config({
    path: process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env'
});

module.exports = {
    dialect: 'postgres',
    database: 'homolog',
    host: 'localhost',
    port: 4000,
    username: 'admin',
    password: '123qWe',
    define: {
        timestamps: true,
        underscored: true
    }
}