import express from 'express';
import { UserController } from './user.controller';
import { validateRequest } from '../../middlewares/validateRequest';
import { UserValidation } from './user.validation';
import { USER_ROLE } from './user.constent';
import { auth } from '../../middlewares/auth';

const router = express.Router();

router.post(
  '/create-admin',
  auth(USER_ROLE.admin),
  validateRequest(UserValidation.userValidationSchema),
  UserController.createAdmin,
);
router.post(
  '/create-user',
  auth(USER_ROLE.admin,USER_ROLE.user),
  validateRequest(UserValidation.userValidationSchema),
  UserController.createUser,
);

export const UserRouters = router;
