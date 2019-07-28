import { Thana } from './../models/MYSQL/thana';
import { Helper } from '../libs';
// import your model
import { Inspector as Model } from '../models/MYSQL';
import { BaseController } from './baseController';

const controllerName = Helper.getFileName(__filename, __dirname);

// change the controller name
export const inspectorController = BaseController(controllerName, Model, {
  index: {
    include: [
      {
        model: Thana,
        as: 'thana',
        required: true
      }
    ]
  },
  show: {
    include: [
      {
        model: Thana,
        as: 'thana',
        required: true
      }
    ]
  }
});
