const { Author, AuthorSchema } = require('./author.model');
const { Chapter, ChapterSchema } = require('./chapter.model');
const { Diary, DiarySchema } = require('./diary.model');
const { Picture, PictureSchema } = require('./picture.model');
const { User, UserSchema } = require('./user.model');

const setupModels = (sequelize) => {
    Author.init(AuthorSchema, Author.config(sequelize));
    Chapter.init(ChapterSchema, Chapter.config(sequelize));
    Diary.init(DiarySchema, Diary.config(sequelize));
    Picture.init(PictureSchema, Picture.config(sequelize));
    User.init(UserSchema, User.config(sequelize));
}

module.exports = { setupModels };