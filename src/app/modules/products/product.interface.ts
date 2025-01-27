import { Types } from 'mongoose';

export type TProduct = {
  user: Types.ObjectId;
  name: string;
  price: number;
  brand: string;
  images: string[];
  quantity: number;
  colors: string[];
  description: string;
  category: string;
  isDeleted: boolean;
  inStock: boolean;
};
