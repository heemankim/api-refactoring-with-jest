import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // legacy
  @Get('/v1/users')
  getUsersV1() {
    return [
        {name: 'nestJS', age: 20, gender: 'male'},
        {name: 'nestJS', age: 20, gender: 'female'}
    ];
  }

  // refactoring target
  @Get('/v2/users')
  getUsersV2() {
    return [
      {name: 'nestJS', age: 20, gender: 'male'},
      {name: 'nestJS', age: 20, gender: 'female'}
    ];
  }
}
