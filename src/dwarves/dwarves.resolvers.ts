import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { DwarvesService } from './dwarves.service';
import { CreateDwarfInput, Dwarf } from 'src/graphql';

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

  @Mutation()
  async createDwarf(@Args('args') args: CreateDwarfInput): Promise<Dwarf> {
    const dwarf = await this.dwarvesService.create(args);

    return dwarf;
  }
}
