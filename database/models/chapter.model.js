const { Model, DataTypes, Sequelize } = require('sequelize');
const { DIARY_TABLE } = require('./diary.model');
const { PICTURE_TABLE } = require('./picture.model');

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
    },
    diaryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'diary_id',
        references: {
            model: DIARY_TABLE,
            key: 'id'
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    },
    pictureId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'picture_id',
        references: {
            model: PICTURE_TABLE,
            key: 'id'
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }
};

class Chapter extends Model{
    static associate(models){
        this.belongsTo(models.Picture, {
            as: 'picture'
        });

        this.belongsTo(models.Diary, {
            as: 'diary'
        });
    }

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