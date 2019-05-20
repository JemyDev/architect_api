const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { secretKey } = require('../../../config');
const { createUser } = require('../../services/queries');

const User = {
  /**
   * Create a User
   * @param {object} req
   * @param {object} res
   * @returns {object} user object
   */
  async create(req, res) {
    try {
      const hashedPassword = bcrypt.hashSync(req.body.password, 8);
      const { rows } = await createUser(req.body.name, req.body.email, hashedPassword);
      const token = jwt.sign({ id: rows[0].id }, secretKey, { expiresIn: 86400 }); // expires in 24 hours
      return res.status(201).send({ auth: true, token });
    } catch (e) {
      return res.status(400).send(e);
    }
  }
};

module.exports = User;