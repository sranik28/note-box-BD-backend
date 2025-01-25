import { Product } from "../products/product.model";
import { TOrder } from "./order.interface";
import { Order } from "./order.model";

const createOrderIntoDB = async (order: TOrder) => {
    const product = await Product.findById(order.productId);
  if (!product) {
    throw new Error('Product not found');
  }

  const totalPrice = product.price * order.quantity;
  order.finalAmount = totalPrice;

  const result = await Order.create(order);
  return result;
};

export const OrderService = {
    createOrderIntoDB
}