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
    },
    updatedAt: {
      allowNull: true,
      type: DataTypes.DATE,
      defaultValue: Sequelize.NOW,
      field: "updated_at",
    }
};

class User extends Model {
    static associate(models){
        this.hasOne(models.Author,{
            as: 'author',
            foreignKey: 'userId'
        });
    }

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
