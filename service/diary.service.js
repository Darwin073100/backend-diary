const boom = require('@hapi/boom');
const { models }  = require('../libs/sequelize');

class DiaryService {
  constructor() { }

  async findAll() {
    const data = await models.Diary.findAll({
      include: ['author']
    });
    return data;
  }

  async findById(id) {
    const diary = models.Diary.findByPk(id, {
      include: ['author']
    });
    if (!diary) {
      throw boom.notFound('Diary not found');
    }
    return diary;
  }

  async create(data) {
    const newDiary = await models.Diary.create(data);
    return newDiary;
  }

  async update(id, changes) {
    const model = await this.findById(id);
    const upDiary = await model.update(changes);
    return upDiary;
  }

  async delete(id) {
    const model = await this.findById(id);
    await model.destroy();
    return {
      message: true
    }
  }
}

module.exports = DiaryService;
