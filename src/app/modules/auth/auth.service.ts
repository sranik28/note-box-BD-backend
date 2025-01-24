import config from '../../config';
import AppError from '../../errors/AppErrors';
import { User } from '../user/user.model';
import { TLoginUser } from './auth.interface';
import bcrypt from 'bcrypt';
import { createToken } from './auth.utils';

const login = async (payload: TLoginUser) => {
  const isUserExist = await User.findOne({ email: payload?.email });

  if (!isUserExist) {
    throw new AppError(404, 'User not found');
  }

  if (isUserExist?.isBlocked) {
    throw new AppError(400, 'User is blocked');
  }

  // checking if the password is correct
  const isPasswordMatched = await bcrypt.compare(
    payload?.password,
    isUserExist?.password,
  );
  if (!isPasswordMatched) {
    throw new AppError(400, 'Password is incorrect');
  }


  const jwtPayload = {
    email: isUserExist?.email,
    role: isUserExist?.role,
  };

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string,
  );

  return accessToken ;
};


export const AuthService = { login };