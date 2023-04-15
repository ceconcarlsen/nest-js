import * as mongoose from 'mongoose';

export const userSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true },
    description: { type: String, require: true },
  },
  { versionKey: false },
);
