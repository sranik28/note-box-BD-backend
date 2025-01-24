import { NextFunction, Request, Response } from 'express';
import config from '../config';
import AppError from '../errors/AppErrors';
import { TUserRole } from '../modules/user/user.interface';
import { User } from '../modules/user/user.model';
import { CatchAsync } from '../utils/CatchAsync';
import jwt, { JwtPayload } from 'jsonwebtoken';

export const auth = (...requiredRoles: TUserRole[]) => {
  return CatchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    if (!token) {
      throw new AppError(401, 'You are not authorized');
    }
    let decoded
    try {
        decoded = jwt.verify(
          token,
          config.jwt_access_secret as string,
        ) as JwtPayload;
      } catch (error) {
        throw new AppError(401, 'You are not authorized!');
      }

      const { email, role, iat } = decoded;

      const user= await User.findOne({ email });

      if (!user) {
        throw new AppError(401, 'You are not authorized!');
      }

      if (user?.isBlocked) {
        throw new AppError(400, 'User is blocked');
      }
      req.user = decoded as JwtPayload & { role: string };

    next();
  });
};
