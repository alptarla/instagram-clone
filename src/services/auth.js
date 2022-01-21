import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { auth, db } from '../lib/firebase'

// utils
const profileDoc = (id) => doc(db, 'profiles', id)

export const makeUserObj = (user) => ({
  id: user.uid,
  email: user.email,
  username: user.displayName
})

const authService = {
  async signIn(email, password) {
    const { user } = await signInWithEmailAndPassword(auth, email, password)
    return makeUserObj(user)
  },
  async signUp(email, password, username) {
    const { user } = await createUserWithEmailAndPassword(auth, email, password)
    await updateProfile(user, { displayName: username })

    await setDoc(profileDoc(user.uid), {
      email: user.email,
      username: user.displayName,
      img: null,
      followers: [],
      following: [],
      posts: [],
      bookmarks: []
    })

    return makeUserObj(user)
  },
  logout: () => auth.signOut()
}

export default authService
