import { Injectable } from '@nestjs/common';

@Injectable()
export class DwarvesFormulas {
  maxHits(dwarf: DwarfWithAttributes) {
    return Math.floor((dwarf.attributes.siz + dwarf.attributes.con) / 2) + 5;
  }
}

interface DwarfWithAttributes {
  attributes: {
    con: number;
    siz: number;
  };
}
