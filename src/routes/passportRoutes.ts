import * as express from 'express';
// change the controller name
import { passportController as controller } from '../controllers';
import { Helper } from '../libs';

const Routes = express.Router();
// change the router endpoint name
const routeName = 'passports';

// change name
export const passportRoutes = Routes;

Routes.use([`/${routeName}`], (req, res, next) => {
  Helper.logger.info(`a ${req.method} request in ${routeName} route.`);
  next();
});

Helper.restApiPlaceHolder(Routes, controller, routeName);
