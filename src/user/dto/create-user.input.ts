import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserInput {
    @IsNotEmpty()
    name: string

    @IsEmail()
    @IsNotEmpty()
    email: string

    @IsNotEmpty()
    password: string
}
