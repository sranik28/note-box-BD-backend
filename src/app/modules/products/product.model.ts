import { model, Schema } from 'mongoose';

const ProductSchema = new Schema<TProduct>(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      required: true,
    },
    colors: {
      type: [String],
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    inStock: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }, // Automatically manage createdAt and updatedAt fields
);

export const Product = model<TProduct>('Product', ProductSchema);