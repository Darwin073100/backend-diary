const { Pool } = require('pg');
const { configuration } = require('../configuration');

const options = {};

if (configuration.isProd) {
    options.dialectOptions = {
        ssl: {
            rejectUnauthorized: false
        }
    }
} else {
    const URI = configuration.dbUrl;
    options.connectionString = URI;
}

const pool = new Pool(options);
module.exports = { pool };