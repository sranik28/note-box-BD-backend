import { CatchAsync } from '../../utils/CatchAsync';
import { sendResponse } from '../../utils/sendResponse';
import { UserService } from './user.service';

const createAdmin = CatchAsync(async (req, res, next) => {
  const result = await UserService.createAdminIntoDB(req.body);
  sendResponse(res, {
    statusCode: 200,
    message: 'Admin created successfully',
    success: true,
    data: result,
  });
});

const createUser = CatchAsync(async (req, res, next) => {
  const result = await UserService.createUserIntoDB(req.body);
  sendResponse(res, {
    statusCode: 200,
    message: 'User created successfully',
    success: true,
    data: result,
  });
});

export const UserController = { createAdmin, createUser };
