import express from 'express';
import { UserController } from './user.controller';

const router = express.Router();


router.post('/create-admin', UserController.createAdmin);
router.post('/create-user', UserController.createUser);


export const UserRouters = router;
