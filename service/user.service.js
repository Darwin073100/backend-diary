const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class UserService {
  constructor() { }

  async findAll() {
    const data = await models.User.findAll();
    return data;
  }

  async findById(id) {
    const user = models.user.findByPk(id, {
      include: ['author']
    });
    if (!user) {
      throw boom.notFound('User not found');
    }
    return user;
  }

  async create(data) {
    const newUser = await models.User.create(data);
    delete newUser.dataValues.userPassword;
    return newUser;
  }

  async update(id, changes) {
    const model = await this.findById(id);
    const upUser = await model.update(changes);
    return upUser;
  }

  async delete(id) {
    const model = await this.findById(id);
    await model.destroy();
    return {
      message: true
    }
  }
}

module.exports = UserService;
