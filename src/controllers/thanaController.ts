import { Helper } from '../libs';
// import your model
import { Inspector, Thana as Model } from '../models/MYSQL';
import { BaseController } from './baseController';

const controllerName = Helper.getFileName(__filename, __dirname);

// change the controller name
export const thanaController = BaseController(controllerName, Model, {});
