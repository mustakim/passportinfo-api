import { authRoutes } from './authRoutes';
import { inspectorRoutes } from './inspectorRoutes';
import { migrationRoutes } from './migrationRoutes';
import { passportRoutes } from './passportRoutes';
import { thanaRoutes } from './thanaRoutes';
import { userRoutes } from './userRoutes';

export const apiRoutes = [
	migrationRoutes,
	authRoutes,
	userRoutes,
	passportRoutes,
	thanaRoutes,
	inspectorRoutes
];
