import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DwarfSchema } from './schemas/dwarf.schema';
import { DwarvesController } from './dwarves.controller';
import { DwarvesService } from './dwarves.service';
import { DwarvesResolvers } from './dwarves.resolvers';
import { DwarvesFormulas } from './dwarves.formulas';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Dwarf', schema: DwarfSchema }]),
  ],
  controllers: [DwarvesController],
  providers: [DwarvesService, DwarvesResolvers, DwarvesFormulas],
})
export class DwarvesModule {}
