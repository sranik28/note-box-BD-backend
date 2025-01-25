import { CatchAsync } from '../../utils/CatchAsync';
import { sendResponse } from '../../utils/sendResponse';
import { OrderService } from './order.service';

const createOrder = CatchAsync(async (req, res, next) => {
  const result = await OrderService.createOrderIntoDB(req.body);
  sendResponse(res, {
    statusCode: 200,
    message: 'Order created successfully',
    success: true,
    data: result,
  });
});

export const OrderController = { createOrder };
