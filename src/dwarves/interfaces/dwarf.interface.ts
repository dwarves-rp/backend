import { Document } from 'mongoose';

export interface DwarfDocument extends Document {
  readonly name: string;
  readonly profession: string;
  readonly attributes: {
    readonly app: number;
    readonly con: number;
    readonly dex: number;
    readonly int: number;
    readonly pow: number;
    readonly siz: number;
    readonly str: number;
  };
  readonly isDead: boolean;
  readonly currentHits: number;
}
