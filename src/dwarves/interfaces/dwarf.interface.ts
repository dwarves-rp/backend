import { Document } from 'mongoose';

export interface Dwarf extends Document {
  readonly name: string;
  readonly profession: string;
}
