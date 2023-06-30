const boom = require('@hapi/boom');
const { models }  = require('../libs/sequelize');

class AuthorService {
  constructor() { }

  async findAll() {
    const data = await models.Author.findAll({
      include: ['diary']
    });
    return data;
  }

  async findById(id) {
    const author = models.Author.findByPk(id);
    if (!author) {
      throw boom.notFound('Author not found');
    }
    return author;
  }

  async create(data) {
    const newAuthor = await models.Author.create(data, {
      include: ['user']
    });
    delete newAuthor.user.dataValues.userPassword;
    return newAuthor;
  }

  async update(id, changes) {
    const model = await this.findById(id);
    const upAuthor = await model.update(changes);
    return upAuthor;
  }

  async delete(id) {
    const model = await this.findById(id);
    await model.destroy();
    return {
      message: true
    }
  }
}

module.exports = AuthorService;
