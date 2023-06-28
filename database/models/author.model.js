const { Model, DataTypes } = require('sequelize');

const AUTHOR_TABLE = 'authors';

const AuthorSchema = {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'last_name'
    },
    sex: {
        type: DataTypes.CHAR,
        allowNull: true,
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    address: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
};

class Author extends Model{
    static config(sequelize){
        return {
            sequelize,
            tableName: AUTHOR_TABLE,
            modelName: 'Author',
            timestamp: false
        }
    }
}

module.exports = {
    AUTHOR_TABLE,
    AuthorSchema,
    Author
}