// src/modules/user/repositories/UserRepository.ts
import { User } from '../entities/User';

export class UserRepository {
  private users: User[] = [];

  async createUser(user: User): Promise<User> {
    this.users.push(user);
    return user;
  }

  async getUserById(userId: string): Promise<User | undefined> {
    return this.users.find((user) => user.id === userId);
  }

  async updateUser(userId: string, updatedUser: User): Promise<User | undefined> {
    const index = this.users.findIndex((user) => user.id === userId);

    if (index !== -1) {
      this.users[index] = { ...this.users[index], ...updatedUser };
      return this.users[index];
    }

    return undefined;
  }

  async deleteUser(userId: string): Promise<void> {
    this.users = this.users.filter((user) => user.id !== userId);
  }
}
