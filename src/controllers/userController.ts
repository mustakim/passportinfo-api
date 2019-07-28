import { Helper } from '../libs';
import { User as Model } from '../models/MYSQL';
import { BaseController } from './baseController';
import * as bcrypt from 'bcryptjs';

const controllerName = Helper.getFileName(__filename, __dirname);

export const userController = BaseController(controllerName, Model, {});

userController.createAdmin = async (req: any, res: any) => {
    try {

        const payload: any = req.body;
        const hashedPassword = bcrypt.hashSync(payload.password, 8);
        payload.password = hashedPassword;
        payload.user_type = 'admin';

        const data = await Model.create(payload);

        res
            .status(200)
            .json(
                Helper.logPlaceHolder.showSuccessPlaceHolder(data, controllerName)
            );
    } catch (err) {
        res.status(400).json({
            error: err,
            message: `error in read single ${controllerName} `,
            success: false
        });
    }
};

userController.createOfficer = async (req: any, res: any) => {
    try {

        const payload: any = req.body;
        const hashedPassword = bcrypt.hashSync(payload.password, 8);
        payload.password = hashedPassword;
        payload.user_type = 'officer';

        const data = await Model.create(payload);

        res
            .status(200)
            .json(
                Helper.logPlaceHolder.showSuccessPlaceHolder(data, controllerName)
            );
    } catch (err) {
        res.status(400).json({
            error: err,
            message: `error in read single ${controllerName} `,
            success: false
        });
    }
};