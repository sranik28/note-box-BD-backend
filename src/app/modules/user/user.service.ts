import { TUser } from './user.interface';
import { User } from './user.model';

const createAdminIntoDB = async (payload: TUser) => {
  const result = await User.create( payload );
  return result;
};

const createUserIntoDB = async (payload: TUser) => {
  const result = await User.create( payload );
  return result;
};

export const UserService = {
  createAdminIntoDB,
  createUserIntoDB,
};
