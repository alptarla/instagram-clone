import { doc, getDoc, setDoc } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { nanoid } from 'nanoid'
import { db, makeResObject, storage } from '../lib/firebase'

const getPost = async (id) => {
  const res = await getDoc(doc(db, 'posts', id))
  return makeResObject(res)
}

const postDoc = (id) => doc(db, 'posts', id)

const postService = {
  async createPost({ userId, description, file }) {
    const user = await getDoc(postDoc(userId))

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

    await setDoc(postDoc(post.id), post)
    return getPost(post.id)
  }
}

export default postService
