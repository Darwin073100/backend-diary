const { Model, DataTypes } = require('sequelize');
const { USER_TABLE } = require('./user.model');
const { PICTURE_TABLE } = require('./picture.model');

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
    },
    userId:{
        type: DataTypes.INTEGER,
        field: 'user_id',
        allowNull: false,
        unique: true,
        references:{
            model: USER_TABLE,
            key: 'id'
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    },
    pictureId:{
        type: DataTypes.INTEGER,
        field: 'picture_id',
        allowNull: false,
        unique: true,
        references:{
            model: PICTURE_TABLE,
            key: 'id'
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }
};

class Author extends Model{
    static associate(models){
        this.belongsTo(models.User, {
            as: 'user'
        });

        this.belongsTo(models.Picture, {
            as: 'picture'
        });

        this.hasMany(models.Diary, {
            as: 'diary',
            foreignKey: 'authorId'
        });
    }

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