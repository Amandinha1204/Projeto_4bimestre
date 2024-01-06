// src/modules/user/controllers/UpdateUserController.ts
import { Request, Response } from 'express';
import { UserService } from '../services/UserService';
import { UserMapping } from '../mappings/UserMapping';

export class UpdateUserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  async execute(req: Request, res: Response): Promise<void> {
    const userId: string = req.params.id;
    const updatedUser = req.body;

    try {
      const user = await this.userService.updateUser(userId, updatedUser);
      if (user) {
        const userDTO = UserMapping.toDTO(user);
        res.status(200).json(userDTO);
      } else {
        res.status(404).send('User not found');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }
}
