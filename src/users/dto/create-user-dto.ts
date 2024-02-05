import { IsEnum, MinLength } from 'class-validator';

export class CreateUserDto {
  id: number;

  @MinLength(3)
  name: string;

  email: string;
  password: string;
  
  @IsEnum(['true', 'false'], { message: 'Please add correct admin type' })
  admin: 'true' | 'false';
}
