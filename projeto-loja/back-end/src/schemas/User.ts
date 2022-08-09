import { Schema, model } from 'mongoose';
import { UserInterface } from '../interfaces/shared';

const UserSchema = new Schema({
  name: String,
  email: String,
  password: String,
},
  {
    timestamps: true,
  });

export default model<UserInterface>('User', UserSchema);