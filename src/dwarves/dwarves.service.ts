import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { DwarfDocument } from './interfaces/dwarf.interface';
import { CreateDwarfInput, Dwarf } from 'src/graphql';
import { DwarvesFormulas } from './dwarves.formulas';

@Injectable()
export class DwarvesService {
  constructor(
    @InjectModel('Dwarf') private readonly dwarfModel: Model<DwarfDocument>,
    private readonly dwarfFormulas: DwarvesFormulas,
  ) {}

  async create(dwarf: CreateDwarfInput): Promise<Dwarf> {
    const dwarfToSave = {
      ...dwarf,
      currentHits: this.dwarfFormulas.maxHits(dwarf),
    };
    const newDwarf = await this.dwarfModel.create(dwarfToSave);
    return {
      id: newDwarf._id,
      wounds: [],
      ...newDwarf.toJSON(),
    };
  }

  async findAll(): Promise<DwarfDocument[]> {
    return await this.dwarfModel.find().exec();
  }
}
