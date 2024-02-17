import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Music } from '../../types/Music';
import { User } from '../../types/User';

interface InitialState {
  loading: boolean;
  faliure: null | string;
  musics: Music[];
  currPage: number;
  totalPages: number;
  user?: User;
}

const initialState: InitialState = {
  loading: false,
  faliure: null,
  musics: [],
  currPage: 0,
  totalPages: 0,
};

const musicSlice = createSlice({
  name: 'music',
  initialState,
  reducers: {
    fetchMusics: (state, action: PayloadAction<{ type: string }>) => {
      state.loading = true;
    },
    fetchMusicsSuccess: (
      state,
      action: PayloadAction<{
        currentPage: number;
        data: Music[];
        pageSize: number;
        totalItems: number;
        totalPages: number;
      }>,
    ) => {
      state.loading = false;
      state.musics = action.payload.data;
      state.currPage = action.payload.currentPage;
      state.totalPages = action.payload.totalPages;
    },
    fetchMusicsFailure: (state, action) => {
      state.loading = false;
      state.faliure = action.payload;
    },
  },
});

export const { fetchMusics, fetchMusicsSuccess, fetchMusicsFailure } =
  musicSlice.actions;
export default musicSlice.reducer;
