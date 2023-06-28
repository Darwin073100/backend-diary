'use strict';
const { AuthorSchema, AUTHOR_TABLE } = require('../models/author.model');
const { ChapterSchema, CHAPTER_TABLE } = require('../models/chapter.model');
const { DiarySchema, DIARY_TABLE } = require('../models/diary.model');
const { UserSchema, USER_TABLE } = require('../models/user.model');
const { PictureSchema, PICTURE_TABLE} = require('../models/picture.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable(USER_TABLE, UserSchema);
    await queryInterface.createTable(PICTURE_TABLE, PictureSchema);
    await queryInterface.createTable(AUTHOR_TABLE, AuthorSchema);
    await queryInterface.createTable(DIARY_TABLE, DiarySchema);
    await queryInterface.createTable(CHAPTER_TABLE, ChapterSchema);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable(CHAPTER_TABLE);
    await queryInterface.dropTable(DIARY_TABLE);
    await queryInterface.dropTable(AUTHOR_TABLE);
    await queryInterface.dropTable(PICTURE_TABLE);
    await queryInterface.dropTable(USER_TABLE);
  }
};
