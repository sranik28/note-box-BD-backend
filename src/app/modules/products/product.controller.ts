import { CatchAsync } from '../../utils/CatchAsync';
import { sendResponse } from '../../utils/sendResponse';
import { ProductService } from './product.service';

const createProduct = CatchAsync(async (req, res, next) => {
  const result = await ProductService.createProductIntoDB(req.body);
  sendResponse(res, {
    statusCode: 200,
    message: 'Product created successfully',
    success: true,
    data: result,
  });
});

const getAllProducts = CatchAsync(async (req, res, next) => {
    const {productId} = req.params
  const result = await ProductService.getAllProductsFromDB(productId);
  sendResponse(res, {
    statusCode: 200,
    message: 'Products fetched successfully',
    success: true,
    data: result,
  });
});

const getProductById = CatchAsync(async (req, res, next) => {
  const result = await ProductService.getProductByIdFromDB(req.params.id);
  sendResponse(res, {
    statusCode: 200,
    message: 'Product fetched successfully',
    success: true,
    data: result,
  });
});

const updateProductById = CatchAsync(async (req, res, next) => {
  const result = await ProductService.updateProductByIdFromDB(
    req.params.id,
    req.body,
  );
  sendResponse(res, {
    statusCode: 200,
    message: 'Product updated successfully',
    success: true,
    data: result,
  });
});

const deleteProductById = CatchAsync(async (req, res, next) => {
  const result = await ProductService.deleteProductByIdFromDB(req.params.id);
  sendResponse(res, {
    statusCode: 200,
    message: 'Product deleted successfully',
    success: true,
    data: result,
  });
});

export const ProductController = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
};