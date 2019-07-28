import { Inspector, Passport } from '.';
import { Thana } from './thana';
import { User } from './user';

if (!process.env.migrate) {
	Inspector.belongsTo(Thana, {
		foreignKey: 'thana_id',
		targetKey: 'id',
		as: 'thana'
	});
	Passport.belongsTo(User, {
		foreignKey: 'user_id',
		targetKey: 'id',
		as: 'user'
	});
	Passport.belongsTo(Inspector, {
		foreignKey: 'inspector_id',
		targetKey: 'id',
		as: 'inspector'
	});
}
