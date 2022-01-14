import auth from './slices/auth'
const { configureStore } = require('@reduxjs/toolkit')

const store = configureStore({
  reducer: {
    auth
  }
})

export default store
