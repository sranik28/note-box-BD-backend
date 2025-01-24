import { CatchAsync } from '../../utils/CatchAsync';
import { sendResponse } from '../../utils/sendResponse';
import { AuthService } from './auth.service';

const login = CatchAsync(async (req, res, next) => {
  const result = await AuthService.login(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    token: result,
  });
});


export const AuthController = { login };