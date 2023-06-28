const { Model, DataTypes, Sequelize } = require('sequelize');
const { AUTHOR_TABLE } = require('./author.model');
const { PICTURE_TABLE } = require('./picture.model');

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
    },
    authorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'author_id',
        references: {
            model: AUTHOR_TABLE,
            key: 'id'
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    },
    pictureId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'picture_id',
        unique: true,
        references: {
            model: PICTURE_TABLE,
            key: 'id'
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }
};

class Diary extends Model{
    static associate(models){
        this.belongsTo(models.Author, {
            as: 'author'
        });

        this.belongsTo(models.Picture, {
            as: 'picture'
        });

        this.hasMany(models.Chapter, {
            as: 'chapter',
            foreignKey: 'diaryId'
        });
    }

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