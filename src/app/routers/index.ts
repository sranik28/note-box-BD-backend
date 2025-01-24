import { Router } from 'express';
import { UserRouters } from '../modules/user/user.router';


const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRouters,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
