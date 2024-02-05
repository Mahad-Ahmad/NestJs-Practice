import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user-dto';
import { UpdateUserDto } from './dto/update-user-dto';

@Injectable()
export class UsersService {
  private users: any[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      password: 'password123',
      admin: 'true',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      password: 'securepass789',
      admin: 'true',
    },
    {
      id: 3,
      name: 'Alice Johnson',
      email: 'alice@example.com',
      password: 'mypassword@123',
      admin: 'false',
    },
    {
      id: 4,
      name: 'Bob Brown',
      email: 'bob@example.com',
      password: 'pass1234!',
      admin: 'true',
    },
    {
      id: 5,
      name: 'Emily Davis',
      email: 'emily@example.com',
      password: 'strongPassword456',
      admin: 'false',
    },
  ];

  getUsers(admin: 'true' | 'false') {
    if (admin) return this.users.filter((el) => el.admin == admin);
    return this.users;
  }

  getUser(id: number) {
    const user = this.users.find((el) => el.id == id);
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }

  createUser(createUserDto: CreateUserDto) {
    const user = {
      id: new Date(),
      ...createUserDto,
    };
    this.users.push(user);
    return user;
  }

  updateUser(id: number, updateUserDto: UpdateUserDto) {
    this.users = this.users.map((el) => {
      if (el.id == id) {
        return { ...el, ...updateUserDto };
      }
      return el;
    });
    return this.getUser(id);
  }

  deleteUser(id: number) {
    const toBeDeleted = this.getUser(id);
    this.users = this.users.filter((el) => el.id !== id);
    return toBeDeleted;
  }
}
