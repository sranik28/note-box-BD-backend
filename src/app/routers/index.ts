import { Router } from 'express';
import { UserRouters } from '../modules/user/user.router';
import { AuthRouters } from '../modules/auth/auth.router';
import { ProductRouters } from '../modules/products/product.router';
import { OrderRouters } from '../modules/orders/order.router';

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
  {
    path: '/products',
    route: ProductRouters,
  },
  {
    path: '/orders',
    route: OrderRouters,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
