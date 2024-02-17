import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User } from '../../types/User';
import { Music } from '../../types/Music';
import { stat } from 'fs';
import { act } from 'react-dom/test-utils';

interface InitialState {
  loading: boolean;
  faliure: boolean;
  errorMessage?: string;
  musics: Music[];
  currPage: number;
  totalPages: number;
  user?: User;
}

export interface FetchSuccessMusicResponse {
  user: User;
  data: Music[];
  totalItems: number;
  totalPages: number;
  currentPage: number;
  pageSize: number;
}

const initialState: InitialState = {
  loading: false,
  faliure: false,
  musics: [],
  currPage: 0,
  totalPages: 0,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getSelfMusics: (state, action: PayloadAction<{ type: string }>) => {
      state.loading = true;
    },
    getSelfMusicsSuccess: (
      state,
      action: PayloadAction<FetchSuccessMusicResponse>,
    ) => {
      state.loading = false;
      state.musics = action.payload.data;
      state.currPage = action.payload.currentPage;
      state.totalPages = action.payload.totalPages;
      state.user = action.payload.user;
    },
    getSelfMusicsFailure: (
      state,
      action: PayloadAction<{ message: string }>,
    ) => {
      state.loading = false;
      state.faliure = true;
      state.errorMessage = action.payload.message;
    },
    deleteMusic: (state, action: PayloadAction<{ musicId: string }>) => {
      state.loading = true;
    },
    updateMusic: (
      state,
      action: PayloadAction<{
        musicId: string;
        update: {
          title: string;
          artist: string;
          imageUrl?: string;
          genre: string;
        };
      }>,
    ) => {},
  },
});

export const {
  getSelfMusics,
  getSelfMusicsSuccess,
  getSelfMusicsFailure,
  deleteMusic,
  updateMusic,
} = userSlice.actions;
export default userSlice.reducer;
