import { z } from 'zod';

const ProductValidationSchema = z.object({
  body: z.object({
    name: z.string().nonempty('Name is required'),
    price: z.number().min(0, 'Price must be greater than 0'),
    brand: z.string().nonempty('Brand is required'),
    images: z.array(z.string()).min(1, 'At least one image is required'),
    colors: z.array(z.string()).min(1, 'At least one color is required'),
    quantity: z.number().min(0, 'Quantity must be greater than 0'),
    description: z.string().nonempty('Description is required'),
    category: z.string().nonempty('Category is required'),
    inStock: z.boolean().optional().default(true),
    isDeleted: z.boolean().optional().default(false),
  }),
});

const ProductUpdateValidationSchema = z.object({
  body: z.object({
    name: z.string().nonempty('Name is required').optional(),
    price: z.number().min(0, 'Price must be greater than 0').optional(),
    brand: z.string().nonempty('Brand is required').optional(),
    images: z.array(z.string()).min(1, 'At least one image is required').optional(),
    colors: z.array(z.string()).min(1, 'At least one color is required').optional(),
    quantity: z.number().min(0, 'Quantity must be greater than 0').optional(),
    description: z.string().nonempty('Description is required').optional(),
    category: z.string().nonempty('Category is required').optional(),
    inStock: z.boolean().optional().default(true),
    isDeleted: z.boolean().optional().default(false),
  }),
});

export const ProductValidation = {
  ProductValidationSchema,
  ProductUpdateValidationSchema,
};
