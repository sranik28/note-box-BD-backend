import { z } from 'zod';

// Zod validation for OrderItem
// export const orderItemValidation = z.object({
//   productId: z.string(),
//   quantity: z.number().int().positive({ message: 'Quantity must be a positive integer' }),
//   color: z.string().optional(),
// });

// Zod validation for Order
export const createOrderValidation = z.object({
  userId: z.string(),
  productId: z.string(),
  quantity: z.number().int().positive({ message: 'Quantity must be a positive integer' }),
  color: z.string().optional(),
  totalAmount: z.number().positive({ message: 'Total amount must be a positive number' }),
  discount: z.number().min(0, { message: 'Discount must be a non-negative number' }).optional(),
  finalAmount: z.number().positive({ message: 'Final amount must be a positive number' }),
  paymentMethod: z.enum(['stripe', 'cash_on_delivery'], { message: 'Invalid payment method' }),
  status: z.enum(['pending', 'processing', 'shipped', 'delivered', 'cancelled'], { message: 'Invalid order status' }),
  shippingAddress: z.object({
    fullName: z.string().min(1, { message: 'Full name is required' }),
    address: z.string().min(1, { message: 'Address is required' }),
    city: z.string().min(1, { message: 'City is required' }),
    state: z.string().min(1, { message: 'State is required' }),
    postalCode: z.string().min(1, { message: 'Postal code is required' }),
    country: z.string().min(1, { message: 'Country is required' }),
    phoneNumber: z.string().min(1, { message: 'Phone number is required' }),
  }),
  trackingNumber: z.string().optional(),
  isPaid: z.boolean(),
  paidAt: z.date().optional(),
});



export const OrderValidationSchema = {
  createOrderValidation
};