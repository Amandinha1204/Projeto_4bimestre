// src/modules/user/controllers/CreateUserController.ts
import { Request, Response } from 'express';
import { UserService } from '../services/UserService';
import { CreateUserDTO } from '../dtos/CreateUserDTO';

export class CreateUserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  async execute(req: Request, res: Response): Promise<void> {
    const createUserDTO: CreateUserDTO = req.body;

    try {
      const user = await this.userService.createUser(createUserDTO); // Remova ".execute" daqui
      res.status(201).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }
}
