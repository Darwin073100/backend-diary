require('dotenv').config();

const configuration = {
    env: process.env.NODE_ENV || 'development',
    isProd: process.env.NODE_ENV === 'production',
    port: process.env.PORT,
    dbUrl: process.env.DATABASE_URL
};

module.exports = { configuration };