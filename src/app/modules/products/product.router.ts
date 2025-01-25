import express from 'express';
import { USER_ROLE } from '../user/user.constent';
import { auth } from '../../middlewares/auth';
import { ProductValidation } from './product.validation';
import { validateRequest } from '../../middlewares/validateRequest';
import { ProductController } from './product.controller';

const router = express.Router();

router.post(
  '/create-product',
  auth( USER_ROLE.admin),
  validateRequest(ProductValidation.ProductValidationSchema),
  ProductController.createProduct,
);
router.get(
 '/',
 auth(USER_ROLE.user, USER_ROLE.admin),
 validateRequest(ProductValidation.ProductValidationSchema),
 ProductController.getAllProducts,
);
router.get(
  '/:productId',
  auth(USER_ROLE.user, USER_ROLE.admin),
  validateRequest(ProductValidation.ProductValidationSchema),
  ProductController.getProductById,
);
router.patch(
  '/update-product/:productId',
  auth(USER_ROLE.admin),
  validateRequest(ProductValidation.ProductValidationSchema),
  ProductController.updateProductById,
);
router.delete(
  '/delete-product/:productId',
  auth(USER_ROLE.admin),
  ProductController.deleteProductById,
);

export const ProductRouters = router;
