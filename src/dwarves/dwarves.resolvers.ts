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
    const dwarves = await this.dwarvesService.findAll();
    return dwarves.map(dwarf => {
      const thing = {
        ...dwarf.toJSON(),
        id: dwarf._id,
        wounds: [],
      };

      return thing;
    });
  }

  @Mutation()
  async createDwarf(@Args('args') args: CreateDwarfInput): Promise<Dwarf> {
    const dwarf = await this.dwarvesService.create(args);

    return dwarf;
  }
}
