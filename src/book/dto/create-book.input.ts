import {  IsNotEmpty } from 'class-validator';

export class CreateBookInput {
    @IsNotEmpty()
    name: string

    @IsNotEmpty()
    image: string

    @IsNotEmpty()
    author: string

    @IsNotEmpty()
    description: string
}
