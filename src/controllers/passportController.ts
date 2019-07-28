import { Helper } from '../libs';
// import your model
import { Inspector, Passport as Model, User } from '../models/MYSQL';
import { BaseController } from './baseController';

const controllerName = Helper.getFileName(__filename, __dirname);

// change the controller name
export const passportController = BaseController(controllerName, Model, {
	index: {
		include: [
			{
				model: User,
				as: 'user',
				required: false
			},
			{
				model: Inspector,
				as: 'inspector',
				required: false
			}
		]
	},
	show: {
		include: [
			{
				model: User,
				as: 'user',
				required: false
			},
			{
				model: Inspector,
				as: 'inspector',
				required: false
			}
		]
	}
});
