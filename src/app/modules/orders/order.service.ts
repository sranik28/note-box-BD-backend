import AppError from '../../errors/AppErrors';
import { Product } from '../products/product.model';
import { TOrder } from './order.interface';
import { Order } from './order.model';

const createOrderIntoDB = async (payload: TOrder) => {
  const product = await Product.findById(payload.productId);
  if (!product) {
    throw new AppError(404, 'Product not found');
  }

  if (product.quantity < payload.quantity) {
    throw new AppError(400, 'Product quantity is not enough');
  }

  if (product.quantity === 0) {
    product.inStock = false;
  }

  if (product.inStock === false) {
    throw new AppError(400, 'Product is out of stock');
  }
  
  product.quantity -= payload.quantity;
  await product.save();

  const totalPrice = product.price * payload.quantity;
  payload.finalAmount = totalPrice;

  const result = await Order.create(payload);
  return result;
};

export const OrderService = {
  createOrderIntoDB,
};
