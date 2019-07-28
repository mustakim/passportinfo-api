import * as express from 'express';
// change the controller name
import { thanaController as controller } from '../controllers';
import { Helper } from '../libs';

const Routes = express.Router();
// change the router endpoint name
const routeName = 'thanas';

// change name
export const thanaRoutes = Routes;

Routes.use([`/${routeName}`], (req, res, next) => {
  Helper.logger.info(`a ${req.method} request in ${routeName} route.`);
  next();
});

Helper.restApiPlaceHolder(Routes, controller, routeName);
