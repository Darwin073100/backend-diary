const boom = require('@hapi/boom');
const { models }  = require('../libs/sequelize');

class ChapterService {
  constructor() { }

  async findAll() {
    const data = await models.Chapter.findAll({
      include: ['diary']
    });
    return data;
  }

  async findById(id) {
    const chapter = models.Chapter.findByPk(id, {
      include: ['diary']
    });
    if (!chapter) {
      throw boom.notFound('Chapter not found');
    }
    return chapter;
  }

  async create(data) {
    const newChapter = await models.Chapter.create(data);
    return newChapter;
  }

  async update(id, changes) {
    const model = await this.findById(id);
    const upChapter = await model.update(changes);
    return upChapter;
  }

  async delete(id) {
    const model = await this.findById(id);
    await model.destroy();
    return {
      message: true
    }
  }
}

module.exports = ChapterService;
