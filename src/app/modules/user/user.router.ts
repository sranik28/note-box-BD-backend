import express from 'express';
import { UserController } from './user.controller';
import { validateRequest } from '../../middlewares/validateRequest';
import { UserValidation } from './user.validation';

const router = express.Router();

router.post(
  '/create-admin',
  validateRequest(UserValidation.userValidationSchema),
  UserController.createAdmin,
);
router.post(
  '/create-user',
  validateRequest(UserValidation.userValidationSchema),
  UserController.createUser,
);

export const UserRouters = router;
