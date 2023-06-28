const { Model, DataTypes, Sequelize } = require('sequelize');

const USER_TABLE = 'users';

const UserSchema = {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true
    },
    userName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'user_name',
        unique: true,
    },
    userPassword: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'user_password'
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'created_at',
        defaultValue: Sequelize.NOW
    }
};

class User extends Model {
    static config(sequelize){
        return {
            sequelize,
            tableName: USER_TABLE,
            modelName: 'User',
            timestamp: false
        }
    }
}

module.exports = {
    USER_TABLE,
    UserSchema,
    User
};