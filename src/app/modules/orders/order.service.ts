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

  product.inStock = product.quantity > 0;

  if (product.inStock) {
    throw new AppError(400, 'Product is out of stock');
  }
  // if (product.quantity === 0) {
  //   product.inStock = false;
  // }

  product.quantity -= payload.quantity;
  await product.save();

  const totalPrice = product.price * payload.quantity;
  payload.finalAmount = totalPrice;

  const result = await Order.create(payload);
  return result;
};

const calculateRevenueService = async () => {
  const result = await Order.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: '$totalPrice' },
      },
    },
    {
      $project: {
        _id: 0, // Exclude _id
      },
    },
  ]);
  return result;
};

//Get All Product
const getAllOrderService = async () => {
  // console.log(searchTerm);

  const result = await Order.find();
  return result;
};

//Get single Product
const getSingleOrderService = async (id: string) => {
  const result = await Order.findById(id);
  if (!result) {
    throw new AppError(404, `Order with ID ${id} not found.`);
  }
  return result;
};
//delete Product
const deleteSingleOrderService = async (id: string) => {
  const result = await Order.findByIdAndDelete(id);
  if (!result) {
    throw new AppError(404, `Order with ID ${id} not found.`);
  }
  return result;
};
// Update Product
const updateSingleOrderService = async (
  id: string,
  payload: Partial<TOrder>,
) => {
  const result = await Order.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  if (!result) {
    throw new AppError(404, `Order with ID ${id} not found.`);
  }
  return result;
};

export const OrderService = {
  createOrderIntoDB,
  updateSingleOrderService,
  getSingleOrderService,
  getAllOrderService,
  calculateRevenueService,
  deleteSingleOrderService
};
