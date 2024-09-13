import { Request, Response } from 'express';
import { UserService } from '../../application/services/userService';
import { User } from '../../domain/entities/user';

export class UserController {
	constructor(private userService: UserService) {}

	async createUser(req: Request, res: Response): Promise<void> {
		const { id, name, email, password } = req.body;
		const newUser = new User(id, name, email, password);
		const createdUser = await this.userService.createUser(newUser);
		res.status(201).json(createdUser);
	}

	async getUserById(req: Request, res: Response): Promise<void> {
		const user = await this.userService.getUserById(req.params.id);
		if (!user) {
			res.status(404).send('User not found');
			return;
		}
		res.json(user);
	}

	async getAllUsers(req: Request, res: Response): Promise<void> {
		const users = await this.userService.getAllUsers();
		res.json(users);
	}

	async updateUser(req: Request, res: Response): Promise<void> {
    const updatedUser = await this.userService.updateUser(req.params.id, req.body);
    if (!updatedUser) {
        res.status(404).send('User not found');
        return;
    }
    res.json(updatedUser);
}

async deleteUser(req: Request, res: Response): Promise<void> {
    const success = await this.userService.deleteUser(req.params.id);
    if (!success) {
        res.status(404).send('User not found');
        return;
    }
    res.status(204).send();
  }
}