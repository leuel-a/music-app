import { User } from "./User";

export interface Music {
  _id: string;
  user: string;
  title: string;
  artist: string;
  genre: string;
  length: number;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface GetAllMusicResponse {
  currentPage: number;
  data: Music[];
  pageSize: number;
  totalItems: number;
  totalPages: number;
  user?: User;
}