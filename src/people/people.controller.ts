import { Controller, Get, Param, Query } from '@nestjs/common';
import { PeopleService } from './people.service';

@Controller('people')
export class PeopleController {
  constructor(private readonly peopleService: PeopleService) {}

  @Get()
  async getPeople(@Query('page') page: string) {
    return this.peopleService.getPeople(page);
  }
  @Get(':id')
  async getPeopleById(@Param('id') id: string) {
    return this.peopleService.getPeopleById(id);
  }
}
