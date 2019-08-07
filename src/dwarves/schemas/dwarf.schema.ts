import * as mongoose from 'mongoose';

export const DwarfSchema = new mongoose.Schema({
  name: String,
  profession: String,
  attributes: {
    app: Number,
    con: Number,
    dex: Number,
    int: Number,
    pow: Number,
    siz: Number,
    str: Number,
  },
  isDead: Boolean,
  currentHits: Number,
});
