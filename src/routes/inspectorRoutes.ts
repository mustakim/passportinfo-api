import * as express from 'express';
// change the controller name
import { inspectorController as controller } from '../controllers';
import { Helper } from '../libs';

const Routes = express.Router();
// change the router endpoint name
const routeName = 'inspectors';

// change name
export const inspectorRoutes = Routes;

Routes.use([`/${routeName}`], (req, res, next) => {
	Helper.logger.info(`a ${req.method} request in ${routeName} route.`);
	next();
});

Helper.restApiPlaceHolder(Routes, controller, routeName);
