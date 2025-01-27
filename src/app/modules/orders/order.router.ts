import express from 'express';
import { auth } from '../../middlewares/auth';
import { USER_ROLE } from '../user/user.constent';
import { validateRequest } from '../../middlewares/validateRequest';
import { OrderValidationSchema } from './order.validation';
import { OrderController } from './order.controller';


const router = express.Router();

router.post(
"/create-order",
// auth(USER_ROLE.user, USER_ROLE.admin),
validateRequest(OrderValidationSchema.createOrderValidation),
OrderController.createOrder
);
// router.post(

// );

export const OrderRouters = router;
