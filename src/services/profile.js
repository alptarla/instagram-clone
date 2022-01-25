import {
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc
} from 'firebase/firestore'
import { db, makeResObject } from '../lib/firebase'

const profileService = {
  async getProfileById(id) {
    const res = await getDoc(doc(db, 'profiles', id))
    return makeResObject(res)
  },
  async getProfiles() {
    const res = await getDocs(collection(db, 'profiles'))
    return res.docs.map((doc) => makeResObject(doc))
  },
  async getSuggestionProfiles(userId) {
    const profiles = await this.getProfiles()
    const suggestions = profiles.filter((profile) => !profile.following.includes(userId))

    return suggestions
  },
  async bookmarkPost({ userId, postId, isBookmarked }) {
    await updateDoc(doc(db, 'profiles', userId), {
      bookmarks: isBookmarked ? arrayUnion(postId) : arrayRemove(postId)
    })

    return this.getProfileById(userId)
  }
}

export default profileService
