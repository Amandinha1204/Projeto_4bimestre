// src/modules/user/services/ReadUser.ts
import { User } from '../entities/User';
import { UserRepository } from '../repositories/UserRepository';

export class ReadUser {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async execute(userId: string): Promise<User | undefined> {
    return this.userRepository.getUserById(userId);
  }
}
