const { Model, DataTypes } = require('sequelize');

const PICTURE_TABLE = 'pictures';

const PictureSchema = {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
};

class Picture extends Model {
    static config(sequelize){
        return {
            sequelize,
            tableName: PICTURE_TABLE,
            modelName: 'Picture',
            timestamp: false
        }
    }
}

module.exports = {
    PICTURE_TABLE,
    PictureSchema,
    Picture
}