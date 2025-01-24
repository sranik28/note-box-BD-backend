import { Router } from 'express';
import { UserRouters } from '../modules/user/user.router';
import { AuthRouters } from '../modules/auth/auth.router';

const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRouters,
  },
  {
    path: '/auth',
    route: AuthRouters,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
