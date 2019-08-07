import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Dwarf } from './interfaces/dwarf.interface';

@Injectable()
export class DwarvesService {
  constructor(
    @InjectModel('Dwarf') private readonly dwarfModel: Model<Dwarf>,
  ) {}

  async create(): Promise<string> {
    return 'hey';
  }

  async findAll(): Promise<Dwarf[]> {
    return await this.dwarfModel.find().exec();
  }
}
