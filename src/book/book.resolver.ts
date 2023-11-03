import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { BookService } from './book.service';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Resolver('Book')
export class BookResolver {
  constructor(private readonly bookService: BookService) { }

  @Mutation('createBook')
  @UseGuards(AuthGuard('auth0'))
  create(@Args('createBookInput') createBookInput: CreateBookInput, @Context() context,) {
    const userId = context.req.user.id;

    return this.bookService.create(createBookInput, userId);
  }

  @Query('book')
  @UseGuards(AuthGuard('auth0'))
  findAll() {
    return this.bookService.findAll();
  }

  @Query('book')
  @UseGuards(AuthGuard('auth0'))
  findOne(@Args('id') id: number) {
    return this.bookService.findOne(id);
  }

  @Query('book/user')
  @UseGuards(AuthGuard('auth0'))
  findByUser(@Context() context) {
    const id = context.req.user.id;

    return this.bookService.findByUser(id);
  }

  @Mutation('updateBook')
  @UseGuards(AuthGuard('auth0'))
  update(@Args('updateBookInput') updateBookInput: UpdateBookInput) {
    return this.bookService.update(updateBookInput.id, updateBookInput);
  }

  @Mutation('removeBook')
  @UseGuards(AuthGuard('auth0'))
  remove(@Args('id') id: number) {
    return this.bookService.remove(id);
  }
}
