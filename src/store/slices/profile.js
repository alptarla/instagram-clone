import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import profileService from '../../services/profile';

export const getProfileById = createAsyncThunk('profile/getProfileById', ({ id }) => profileService.getProfileById(id));
export const bookmarkPost = createAsyncThunk(
  'post/bookmarkPost',
  ({ userId, postId, isBookmarked }) => profileService.bookmarkPost({ userId, postId, isBookmarked }),
);
export const getProfiles = createAsyncThunk('profile/getProfiles', () => profileService.getProfiles());
export const getBookmarkedPosts = createAsyncThunk('profile/getBookmarkedPosts', ({ id }) => profileService.getBookmarkedPosts(id));

const profile = createSlice({
  name: 'profile',
  initialState: {
    profile: null,
    loading: false,
    saved: [],
    suggestions: [],
  },
  extraReducers: {
    [getProfileById.fulfilled](state, { payload }) {
      state.profile = payload;
      state.loading = false;
    },
    [getProfileById.pending](state) {
      state.loading = true;
    },
    [bookmarkPost.fulfilled](state, { payload }) {
      state.profile = payload;
    },
    [getProfiles.fulfilled](state, { payload }) {
      state.suggestions = payload;
      state.loading = false;
    },
    [getProfiles.pending](state) {
      state.loading = true;
    },
    [getBookmarkedPosts.fulfilled](state, { payload }) {
      state.saved = payload;
    },
  },
});

export default profile.reducer;
