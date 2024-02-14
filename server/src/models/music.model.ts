import mongoose from 'mongoose';
import { UserDocument } from './user.model';

export interface MusicInput {
  user: UserDocument['_id'];
  title: string;
  artist: string;
  genre: string;
  length: number;
  imageUrl?: string;
}

export interface MusicDocument extends mongoose.Document, MusicInput {
  createdAt: Date;
  updatedAt: Date;
}

const musicSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  title: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  length: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    default: "",
  },
}, {
  timestamps: true,
});

const MusicModel = mongoose.model<MusicDocument>('Music', musicSchema);
export default MusicModel;