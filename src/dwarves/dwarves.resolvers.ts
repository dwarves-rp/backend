import { Resolver, Query } from '@nestjs/graphql';
import { DwarvesService } from './dwarves.service';

@Resolver('Dwarf')
export class DwarvesResolvers {
  constructor(private readonly dwarvesService: DwarvesService) {}

  @Query()
  async echo() {
    return 'hey';
  }

  @Query()
  async dwarves() {
    return this.dwarvesService.findAll();
  }
}
