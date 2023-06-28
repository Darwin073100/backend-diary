const { configuration } = require('../configuration/');

module.exports = {
    development: {
        url: configuration.dbUrl,
        dialect: 'postgres'
    },
    production: {
        url: configuration.dbUrl,
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                rejectUnauthorized: false
            }
        }
    }
};