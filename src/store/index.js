import { auth as firebaseAuth } from '../lib/firebase'
import { makeUserObj } from '../services/auth'
import auth, { logout, setUser } from './slices/auth'
const { configureStore } = require('@reduxjs/toolkit')

const store = configureStore({
  reducer: {
    auth
  }
})

// subscribe auth user and init auth slice on store
const stored = JSON.parse(localStorage.getItem('user'))
if (stored) store.dispatch(setUser(stored))

const unsubscribe = firebaseAuth.onAuthStateChanged((user) => {
  if (!user) {
    store.dispatch(logout())
    localStorage.removeItem('user')
    return
  }

  store.dispatch(setUser(makeUserObj(user)))
  localStorage.setItem('user', JSON.stringify(makeUserObj(user)))
})

unsubscribe()

export default store
