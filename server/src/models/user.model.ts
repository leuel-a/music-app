import mongoose from 'mongoose';
import bcrypt, { compare } from 'bcrypt';
import config from 'config';

export interface UserInput {
  email: string;
  name: string;
  password: string;
}

export interface UserDocument extends mongoose.Document, UserInput {
  createdAt: Date;
  updatedAt: Date;

  comparePassword(candidatePassword: string): Promise<boolean>;
}

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
}, { timestamps: true });

userSchema.pre('save', async function(next) {
  let user = this as UserDocument;
  if (!user.isModified('password')) return next();

  const salt = await bcrypt.genSalt(config.get<number>('saltWorkFactor'));
  user.password = await bcrypt.hash(user.password, salt);

  return next();
});

userSchema.methods.comparePassword = async function(candidatePassword: string): Promise<boolean> {
  const user = this as UserDocument;

  try {
    await bcrypt.compare(candidatePassword, user.password);
    return true;
  } catch (error: any) {
    return false;
  }
};

const UserModel = mongoose.model<UserDocument>('User', userSchema);

export default UserModel;