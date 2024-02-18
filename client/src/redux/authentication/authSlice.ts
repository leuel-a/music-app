import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface InitialState {
  isAuthenticated: boolean;
  loading: boolean;
  failure: boolean;
  errorMessage?: string;
  registerLoading: boolean;
  registerFailure: boolean;
  registerErrorMessage?: string;
  registerUserSuccess?: boolean;
}

const initialState: InitialState = {
  isAuthenticated: false,
  loading: false,
  failure: false,
  errorMessage: undefined,
  registerLoading: false,
  registerFailure: false,
  registerUserSuccess: false,
  registerErrorMessage: undefined,
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
    logoutRequest: (state) => {
      state.isAuthenticated = false;
    },
    registerRequest: (
      state,
      action: PayloadAction<{
        name: string;
        email: string;
        password: string;
        confirmPassword: string;
      }>,
    ) => {
      state.registerLoading = true;
    },
    registerSuccess: (state) => {
      state.registerLoading = false;
      state.registerUserSuccess = true;
    },
    registerFailure: (state, action: PayloadAction<{ message: string }>) => {
      state.registerLoading = false;
      state.registerFailure = true;
      state.registerErrorMessage = action.payload.message;
    },
  },
});

export const {
  loginRequest,
  logoutRequest,
  loginSuccess,
  loginFailure,
  checkAuthState,
  registerRequest,
  registerFailure,
  registerSuccess,
} = authSlice.actions;
export default authSlice.reducer;
