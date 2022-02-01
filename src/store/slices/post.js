import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import postService from '../../services/post';

export const createPost = createAsyncThunk('post/createPost', ({ userId, description, file }) => postService.createPost({ userId, description, file }));
export const getPosts = createAsyncThunk('post/getPosts', () => postService.getPosts());
export const likePost = createAsyncThunk('post/likePost', ({ userId, postId, isLiked }) => postService.likePost({ userId, postId, isLiked }));
export const createComment = createAsyncThunk('post/createComment', ({ comment }) => postService.createComment(comment));

const post = createSlice({
  name: 'post',
  initialState: {
    posts: [],
    loading: false,
  },
  extraReducers: {
    [createPost.fulfilled](state, { payload }) {
      state.posts.push(payload);
    },
    [getPosts.fulfilled](state, { payload }) {
      state.posts = payload;
      state.loading = false;
    },
    [getPosts.pending](state) {
      state.loading = true;
    },
    [likePost.fulfilled](state, { payload }) {
      state.posts = state.posts.map((post) => (post.id === payload.id ? payload : post));
    },
    [createComment.fulfilled](state, { payload }) {
      state.posts = state.posts.map((post) => (post.id === payload.id ? payload : post));
    },
  },
});

export const selectUserPosts = (userId) => (state) => state.post.posts.filter((post) => post.user.id === userId);

export default post.reducer;
