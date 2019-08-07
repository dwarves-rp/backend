import { Controller, Get, Post, Body } from '@nestjs/common';
import { DwarvesService } from './dwarves.service';
import { DwarfDocument } from './interfaces/dwarf.interface';

@Controller('dwarves')
export class DwarvesController {
  constructor(private readonly dwarvesService: DwarvesService) {}

  @Post()
  async create() {}

  @Get()
  async findAll(): Promise<DwarfDocument[]> {
    return this.dwarvesService.findAll();
  }
}
