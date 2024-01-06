// src/modules/user/services/DeleteUser.ts
import { UserRepository } from '../repositories/UserRepository';

export class DeleteUser {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async execute(userId: string): Promise<void> {
    return this.userRepository.deleteUser(userId);
  }
}
