import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserService {

  constructor(private readonly prismaService: PrismaService) { }

  create(createUserInput: CreateUserInput) {
    return this.prismaService.user.create({ data: createUserInput });
  }


  findAll() {
    return this.prismaService.user.findMany();
  }

  findOne(id: number) {
    return this.prismaService.user.findUnique({ where: { id } });
  }


  update(id: number, updateUserInput: UpdateUserInput) {
    return this.prismaService.user.update({ where: { id }, data: updateUserInput });
  }



  remove(id: number) {
    return this.prismaService.user.delete({ where: { id } });
  }
}
