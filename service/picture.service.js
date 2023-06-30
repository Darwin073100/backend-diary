const boom = require('@hapi/boom');
const { models }  = require('../libs/sequelize');

class PictureService {
  constructor() { }

  async findAll() {
    const data = await models.Picture.findAll();
    return data;
  }

  async findById(id) {
    const picture = models.Picture.findByPk(id);
    if (!picture) {
      throw boom.notFound('Picture not found');
    }
    return picture;
  }

  async create(data) {
    const newPicture = await models.Picture.create(data);
    delete newPicture.user.dataValues.userPassword;
    return newPicture;
  }

  async update(id, changes) {
    const model = await this.findById(id);
    const upPicture = await model.update(changes);
    return upPicture;
  }

  async delete(id) {
    const model = await this.findById(id);
    await model.destroy();
    return {
      message: true
    }
  }
}

module.exports = PictureService;
