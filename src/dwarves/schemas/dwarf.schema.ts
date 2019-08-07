import * as mongoose from 'mongoose';

export const DwarfSchema = new mongoose.Schema({
  name: String,
  profession: String,
});
