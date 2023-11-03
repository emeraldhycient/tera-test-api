import { Injectable } from '@nestjs/common';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class BookService {
  constructor(private readonly prismaService: PrismaService) { }

  async create(createBookInput: CreateBookInput, userId: number) {
    const user = await this.prismaService.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new Error('User not found');
    }

    return this.prismaService.book.create({
      data: {
        ...createBookInput,
        user: {
          connect: { id: userId },
        },
      },
    });
  }


  findAll() {
    return this.prismaService.book.findMany();
  }
  findByUser(id: number) {
    return this.prismaService.book.findMany({ where: { userId: id } });
  }
   

  findOne(id: number) {
    return this.prismaService.book.findUnique({ where: { id } });
  }


  update(id: number, updateBookInput: UpdateBookInput) {
    //update the book

    return this.prismaService.book.update({
      where: { id },
      data: updateBookInput
    })
  }



  remove(id: number) {
    return this.prismaService.book.delete({ where: { id } });
  }

}
