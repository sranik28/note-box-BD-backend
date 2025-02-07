import QueryBuilder from '../../builder/QueryBuilder';
import AppError from '../../errors/AppErrors';
import { productSearchableFields } from './product.constant';
import { TProduct } from './product.interface';
import { Product } from './product.model';

const createProductIntoDB = async (payload: TProduct, userRole: string) => {
  if (userRole !== 'admin') {
    throw new Error('Unauthorized: Only admins can create products.');
  }

  const result = await Product.create(payload);
  return result;
};

const getAllProductsFromDB = async (query: Record<string, unknown>) => {
  const ProductQuery = new QueryBuilder(
    Product.find({ isDeleted: false }).populate('user'),
    query,
  )
    .search(productSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await ProductQuery.modelQuery;
  const meta = await ProductQuery.countTotal();

  // If no products are found, you might want to handle it (optional)
  if (!result || result.length === 0) {
    throw new AppError(404, 'No products found');
  }

  return { result, meta };
};

const getProductByIdFromDB = async (id: string) => {
  const isProductDeleted = await Product.findOne({ _id: id, isDeleted: true });
  if (isProductDeleted) {
    throw new AppError(404, 'Product not found');
  }

  const result = await Product.findOne({ _id: id }).populate('user');
  return result;
};

const updateProductByIdFromDB = async (id: string, payload: TProduct) => {
  const result = await Product.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const deleteProductByIdFromDB = async (id: string) => {
  const product = await Product.findOne({ _id: id });

  if (!product) {
    throw new AppError(404, 'Product not found');
  }
  const result = await Product.findOneAndUpdate(
    { _id: id },
    { isDeleted: true },
    { new: true },
  );
  return result;
};

export const ProductService = {
  createProductIntoDB,
  getAllProductsFromDB,
  getProductByIdFromDB,
  updateProductByIdFromDB,
  deleteProductByIdFromDB,
};
