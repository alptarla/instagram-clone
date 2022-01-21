import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import profileService from '../../services/profile'

export const getProfileById = createAsyncThunk('profile/getProfileById', ({ id }) =>
  profileService.getProfileById(id)
)

const profile = createSlice({
  name: 'profile',
  initialState: {
    profile: null,
    loading: false,
    suggestions: []
  },
  extraReducers: {
    [getProfileById.fulfilled](state, { payload }) {
      state.profile = payload
      state.loading = false
    },
    [getProfileById.pending](state) {
      state.loading = true
    }
  }
})

export default profile.reducer
