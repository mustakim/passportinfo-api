import * as config from 'config';
import { Helper } from '../../libs';
import {
  User as Model
} from '../../models/MYSQL';
import { BaseController } from '../baseController';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

const controllerName = Helper.getFileName(__filename, __dirname);

export const authController = BaseController(controllerName, Model, {});

authController.login = async (req, res) => {
  try {
    Helper.logPlaceHolder.initLogPlaceHolder(req, 'auth', 'login');

    const user = await Model.scope('withAll').findOne({
      where: { email: req.body.email }
    });
    if (!user) {
      return res.status(401).json({
        status: false,
        message: 'user not found'
      });
    }

    const bs = await bcrypt.compare(req.body.password, user.password);

    if (!bs) {
      return res.status(401).json({
        status: false,
        message: 'password do not match'
      });
    }

    const payload = user.toJSON();

    delete payload.password;
    delete payload.remember_token;

    const token = jwt.sign(payload, config.get('JWT.secret'), {
      // algorithm: 'RS256',
      // expiresIn: 60 * 60,
    });

    res.status(200).json({
      success: true,
      message: 'user login success',
      data: { token, payload }
    });
  } catch (err) {
    res.status(400).json({
      status: false,
      message: 'something went wrong in authentication',
      error: err
    });
  }
};

authController.signUp = async (req, res) => {
  try {
    Helper.logPlaceHolder.initLogPlaceHolder(req, 'auth', 'signup');

    const hashedPassword = bcrypt.hashSync(req.body.password, 8);

    const userCreate = await Model.create({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword
    });

    const user = await Model.findOne({
      where: { id: userCreate.id }
    });

    const payload = user.toJSON();

    const token = jwt.sign(payload, config.get('JWT.secret'), {
      // algorithm: 'RS256',
      // expiresIn: 60 * 60,
    });

    res.status(200).json({
      success: true,
      message: 'user registration success',
      data: { token, payload }
    });
  } catch (err) {
    // transaction.rollback();

    res.status(400).json({
      success: false,
      message: 'error in user registration',
      error: err
    });
  }
};