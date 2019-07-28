import * as express from 'express';
import {userController as controller } from '../controllers';
import { Helper } from '../libs';

const Routes = express.Router();
const routeName = 'users';

export const userRoutes = Routes;

Routes.use([`/${routeName}`], (req, res, next) => {

    Helper.logger.info(`a ${req.method} request in ${routeName} route.`);
    next();

});

Routes.route(`/${routeName}/createAdmin`).post(controller.createAdmin);
Routes.route(`/${routeName}/createOfficer`).post(controller.createOfficer);

Helper.restApiPlaceHolder(Routes, controller, routeName);
