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

const getAllOrder = CatchAsync(async (req, res, next) => {
  const result = await OrderService.getAllOrderService();
  sendResponse(res, {
    statusCode: 200,
    message: 'Order fetched successfully',
    success: true,
    data: result,
  });
});

const getSingleOrder = CatchAsync(async (req, res, next) => {
  const { productId } = req.params;
  const result = await OrderService.getSingleOrderService(productId);
  sendResponse(res, {
    statusCode: 200,
    message: 'Order fetched successfully',
    success: true,
    data: result,
  });
});

const deleteOrder = CatchAsync(async (req, res, next) => {
  const { productId } = req.params;
  const result = await OrderService.deleteSingleOrderService(productId);
  sendResponse(res, {
    statusCode: 200,
    message: 'Order deleted successfully',
    success: true,
    data: result,
  });
});

const updateOrder = CatchAsync(async (req, res, next) => {
  const { productId } = req.params;
  const payload = req.body;

  const result = await OrderService.updateSingleOrderService(
    productId,
    payload,
  );
  sendResponse(res, {
    statusCode: 200,
    message: 'Order updated successfully',
    success: true,
    data: result,
  });
});

const totalRevenue = CatchAsync(async (req, res, next) => {
  const result = await OrderService.calculateRevenueService();

  sendResponse(res, {
    statusCode: 200,
    message: 'Total Revenue fetched successfully',
    success: true,
    data: result,
  });
});

export const OrderController = {
  createOrder,
  getAllOrder,
  getSingleOrder,
  deleteOrder,
  updateOrder,
  totalRevenue,
};
