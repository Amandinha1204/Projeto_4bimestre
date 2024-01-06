// src/modules/user/services/UserService.ts
import { CreateUser } from './CreateUser';
import { ReadUser } from './ReadUser';
import { UpdateUser } from './UpdateUser';
import { DeleteUser } from './DeleteUser';
import { CreateUserDTO } from '../dtos/CreateUserDTO';
import { UserMapping } from '../mappings/UserMapping';
import { User } from '../entities/User';

export class UserService {
  private createUserHandler: CreateUser;
  private readUserHandler: ReadUser;
  private updateUserHandler: UpdateUser;
  private deleteUserHandler: DeleteUser;

  constructor() {
    this.createUserHandler = new CreateUser();
    this.readUserHandler = new ReadUser();
    this.updateUserHandler = new UpdateUser();
    this.deleteUserHandler = new DeleteUser();
  }

  async createUser(createUserDTO: CreateUserDTO): Promise<User> {
    return this.createUserHandler.createUser(createUserDTO);
  }

  async getUserById(userId: string): Promise<User | undefined> {
    return this.readUserHandler.execute(userId);
  }

  async updateUser(userId: string, updatedUser: User): Promise<User | undefined> {
    return this.updateUserHandler.execute(userId, updatedUser);
  }

  async deleteUser(userId: string): Promise<void> {
    return this.deleteUserHandler.execute(userId);
  }
}
