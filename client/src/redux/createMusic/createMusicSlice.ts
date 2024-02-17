import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface InitialState {
  loading: boolean;
  failure: boolean;
  errorMessage?: string;
}

const initialState: InitialState = {
  loading: false,
  failure: false,
  errorMessage: '',
};

const createMusicSlice = createSlice({
  name: 'createMusic',
  initialState,
  reducers: {
    createMusicRequest: (
      state,
      action: PayloadAction<{
        title: string;
        duration: string;
        artist: string;
        imageUrl?: string;
        genre: string;
      }>,
    ) => {
      state.loading = true;
    },
    createMusicRequestSuccess: (state) => {
      state.loading = false;
    },
    createMusicRequestFailure: (
      state,
      action: PayloadAction<{ message: string }>,
    ) => {
      state.loading = false;
      state.failure = true;
      state.errorMessage = action.payload.message;
    },
  },
});

export const {
  createMusicRequest,
  createMusicRequestSuccess,
  createMusicRequestFailure,
} = createMusicSlice.actions;
export default createMusicSlice.reducer;
