import MusicModel, { MusicDocument, MusicInput } from '../models/music.model';
import { FilterQuery, QueryOptions, UpdateQuery } from 'mongoose';

export async function createMusic(input: MusicInput): Promise<MusicDocument> {
  return MusicModel.create(input);
}

export async function findMusic(
  query: FilterQuery<MusicDocument>,
  options: QueryOptions = { lean: true },
) {
  return MusicModel.findOne(query, {}, options);
}

export async function getAllMusic(page: number, pageSize: number, userId?: string) {
  let query;

  if (userId) {
    query = MusicModel.find({ user: userId });
  } else {
    query = MusicModel.find({});
  }

  const totalItems = await MusicModel.countDocuments();
  const totalPages = Math.ceil(totalItems / pageSize);

  const results = await query
    .skip((page - 1) * pageSize)
    .limit(pageSize)
    .lean();
  return {
    data: results,
    totalItems,
    totalPages,
    currentPage: page,
    pageSize,
  };
}

export async function findAndUpdate(
  query: FilterQuery<MusicDocument>,
  update: UpdateQuery<MusicDocument>,
  options: QueryOptions,
) {
  return MusicModel.findOneAndUpdate(query, update, options);
}

export async function deleteMusic(query: FilterQuery<MusicDocument>) {
  return MusicModel.deleteOne(query);
}
