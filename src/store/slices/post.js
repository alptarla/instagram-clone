import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import postService from '../../services/post'

export const createPost = createAsyncThunk('post/createPost', ({ userId, description, file }) =>
  postService.createPost({ userId, description, file })
)

const post = createSlice({
  name: 'post',
  initialState: {
    posts: [],
    loading: false
  },
  extraReducers: {
    [createPost.fulfilled](state, { payload }) {
      state.posts.push(payload)
    }
  }
})

export default post.reducer
