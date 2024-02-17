import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface InitialState {
  isAuthenticated: boolean;
  loading: boolean;
  failure: boolean;
  errorMessage?: string;
}

const initialState: InitialState = {
  isAuthenticated: false,
  loading: false,
  failure: false,
  errorMessage: undefined,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginRequest: (
      state,
      action: PayloadAction<{ email: string; password: string }>,
    ) => {
      state.loading = true;
    },
    loginSuccess: (state) => {
      state.loading = false;
      state.isAuthenticated = true;
    },
    loginFailure: (state, action: PayloadAction<{ message: string }>) => {
      state.loading = false;
      state.failure = true;
      state.errorMessage = action.payload.message;
    },
    checkAuthState: (
      state,
      action: PayloadAction<{ isAuthenticated: boolean }>,
    ) => {
      state.isAuthenticated = action.payload.isAuthenticated;
    },
  },
});

export const { loginRequest, loginSuccess, loginFailure, checkAuthState } =
  authSlice.actions;
export default authSlice.reducer;
