import { Injectable } from '@nestjs/common';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'joao',
      password: 'zero',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'um',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}

// @Injectable()
// export class UsersService {
//   constructor(
//     @InjectRepository()
//     private readonly usersModel: Repository<>
//   ){}
// }
