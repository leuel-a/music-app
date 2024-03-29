import UserModel, { UserDocument, UserInput } from '../models/user.model';
import { omit } from 'lodash';
import { FilterQuery } from 'mongoose';

export async function createUser(input: UserInput) {
  try {
    return await UserModel.create(input);
  } catch (e: any) {
    throw new Error(e);
  }
}

export async function validatePassword({ email, password }: { email: string, password: string }) {
  const user = await UserModel.findOne({ email });
  if (!user) return false;

  const isValid = await user.comparePassword(password);
  if (!isValid) return false;

  return omit(user.toJSON(), 'password');
}

export async function findUser(query: FilterQuery<UserDocument>) {
  return UserModel.findOne(query).lean();
}