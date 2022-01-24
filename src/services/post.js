import {
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc
} from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { nanoid } from 'nanoid'
import { db, makeResObject, storage } from '../lib/firebase'

const postService = {
  postDoc: (id) => doc(db, 'posts', id),
  async getPost(id) {
    const res = await getDoc(this.postDoc(id))
    const post = makeResObject(res)

    // ** populate user property
    await getDoc(post.user).then((res) => {
      post.user = makeResObject(res)
    })

    return post
  },
  async createPost({ userId, description, file }) {
    const user = await getDoc(doc(db, 'profiles', userId))

    const uploaded = await uploadBytes(ref(storage, file.name), file)
    const fileUrl = await getDownloadURL(uploaded.ref)

    const post = {
      id: nanoid(),
      description,
      file: fileUrl,
      likes: [],
      comments: [],
      user: user.ref
    }

    await setDoc(this.postDoc(post.id), post)
    return this.getPost(post.id)
  },
  async getPosts() {
    const res = await getDocs(collection(db, 'posts'))
    let posts = res.docs.map((doc) => makeResObject(doc))

    // ** populate user property
    posts = posts.map(async (post) => {
      const res = await getDoc(post.user)
      return { ...post, user: makeResObject(res) }
    })

    return Promise.all(posts)
  },
  async likePost({ userId, postId, isLiked }) {
    await updateDoc(this.postDoc(postId), {
      likes: isLiked ? arrayUnion(userId) : arrayRemove(userId)
    })
    return this.getPost(postId)
  }
}

export default postService
