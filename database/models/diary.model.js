const { Model, DataTypes, Sequelize } = require('sequelize');

const DIARY_TABLE = 'diaries';

const DiarySchema = {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    }, 
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'created_at',
        defaultValue: Sequelize.NOW
    }
};

class Diary extends Model{
    static config(sequelize){
        return {
            sequelize,
            tableName: DIARY_TABLE,
            modelName: 'Diary',
            timestamp: false
        };
    }
}

module.exports = {
    DIARY_TABLE,
    DiarySchema,
    Diary
};