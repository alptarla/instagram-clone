import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import postService from '../../services/post'

export const createPost = createAsyncThunk('post/createPost', ({ userId, description, file }) =>
  postService.createPost({ userId, description, file })
)
export const getPosts = createAsyncThunk('post/getPosts', () => postService.getPosts())

const post = createSlice({
  name: 'post',
  initialState: {
    posts: [],
    loading: false
  },
  extraReducers: {
    [createPost.fulfilled](state, { payload }) {
      state.posts.push(payload)
    },
    [getPosts.fulfilled](state, { payload }) {
      state.posts = payload
      state.loading = false
    },
    [getPosts.pending](state) {
      state.loading = true
    }
  }
})

export default post.reducer
