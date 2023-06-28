const { Model, DataTypes, Sequelize } = require('sequelize');

const CHAPTER_TABLE = 'chapters';

const ChapterSchema = {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true
    },
    text: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    createdAt:{
        type: DataTypes.DATE,
        allowNull: false,
        field: 'created_at',
        defaultValue: Sequelize.NOW
    }
};

class Chapter extends Model{

    static config(sequelize){
        return{
            sequelize,
            tableName: CHAPTER_TABLE,
            modelName: 'Chapter',
            timestamp: false
        }
    }
}

module.exports = {
    CHAPTER_TABLE,
    ChapterSchema,
    Chapter
}