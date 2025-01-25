import { z } from 'zod';

const ProductValidationSchema = z.object({
  body: z.object({
    name: z.string().nonempty('Name is required'),
    price: z.number().min(0, 'Price must be greater than 0'),
    brand: z.string().nonempty('Brand is required'),
    model: z.string().nonempty('Model is required'),
    quantity: z.number().min(0, 'Quantity must be greater than 0'),
    description: z.string().nonempty('Description is required'),
    category: z.string().nonempty('Category is required'),
    stock: z.number().min(0, 'Stock must be greater than 0'),
  }),
});

const ProductUpdateValidationSchema = z.object({
  body: z.object({
    name: z.string().nonempty('Name is required').optional(),
    price: z.number().min(0, 'Price must be greater than 0').optional(),
    brand: z.string().nonempty('Brand is required').optional(),
    model: z.string().nonempty('Model is required').optional(),
    quantity: z.number().min(0, 'Quantity must be greater than 0').optional(),
    description: z.string().nonempty('Description is required').optional(),
    category: z.string().nonempty('Category is required').optional(),
    stock: z.number().min(0, 'Stock must be greater than 0').optional(),
  }),
});

export const ProductValidation = {
  ProductValidationSchema,
  ProductUpdateValidationSchema,
};
