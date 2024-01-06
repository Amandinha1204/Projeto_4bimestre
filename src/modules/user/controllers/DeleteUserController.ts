// src/modules/user/controllers/DeleteUserController.ts
import { Request, Response } from 'express';
import { UserService } from '../services/UserService';

export class DeleteUserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  async execute(req: Request, res: Response): Promise<void> {
    const userId: string = req.params.id;

    try {
      await this.userService.deleteUser(userId);
      res.status(204).send();
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }
}
