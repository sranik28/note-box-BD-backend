import express from 'express';
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
router.get('/revenue', OrderController.totalRevenue)
router.get('/:productId', OrderController.getSingleOrder);
router.get('/', OrderController.getAllOrder);
router.put('/:productId', OrderController.updateOrder);
router.delete('/:productId', OrderController.deleteOrder);

export const OrderRouters = router;
