import { Router } from 'express';
import { UserController } from '../controllers/userController';
import { UserService } from '../../application/services/userService';
import { MongoUserRepository } from '../../infrastructure/repositories/mongoUserRepository';

const userRepository = new MongoUserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);
const router = Router();

router.post('/users', (req, res) => userController.createUser(req, res));
router.get('/users/:id', (req, res) => userController.getUserById(req, res));
router.get('/users', (req, res) => userController.getAllUsers(req, res));
router.put('/users/:id', (req, res) => userController.updateUser(req, res));
router.delete('/users/:id', (req, res) => userController.deleteUser(req, res));

export default router;