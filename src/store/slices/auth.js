import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authService from '../../services/auth';

export const login = createAsyncThunk('auth/login', ({ email, password }) => authService.signIn(email, password));
export const signUp = createAsyncThunk('auth/signUp', ({ email, password, username }) => authService.signUp(email, password, username));
export const logout = createAsyncThunk('auth/logout', () => authService.logout());

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
  },
  reducers: {
    setUser(state, { payload }) {
      state.user = payload;
    },
  },
  extraReducers: {
    [login.fulfilled](state, { payload }) {
      state.user = payload;
    },
    [signUp.fulfilled](state, { payload }) {
      state.user = payload;
    },
    [logout.fulfilled](state) {
      state.user = null;
    },
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
