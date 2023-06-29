const { Sequelize } = require('sequelize');
const { configuration } = require('../configuration/');
const setupModels = require('../database/models');

const options = {
    dialect: 'postgres',
    logging: configuration.isProd ? false : true,
}

if (configuration.isProd) {
    options.dialectOptions = {
        ssl: {
            rejectUnauthorized: false
        }
    }
}

const sequelize = new Sequelize(configuration.dbUrl, options);
setupModels(sequelize);

module.exports = sequelize;