import { Controller, Get, Post, Body } from '@nestjs/common';
import { DwarvesService } from './dwarves.service';
import { Dwarf } from './interfaces/dwarf.interface';

@Controller('dwarves')
export class DwarvesController {
  constructor(private readonly dwarvesService: DwarvesService) {}

  @Post()
  async create() {
    this.dwarvesService.create();
  }

  @Get()
  async findAll(): Promise<Dwarf[]> {
    return this.dwarvesService.findAll();
  }
}
