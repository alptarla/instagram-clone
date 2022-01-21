import { collection, doc, getDoc, getDocs, setDoc } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { nanoid } from 'nanoid'
import { db, makeResObject, storage } from '../lib/firebase'
import post from '../store/slices/post'

const postService = {
  postDoc: (id) => doc(db, 'posts', id),
  async getPost(id) {
    const res = await getDoc(doc(db, 'posts', id))
    return makeResObject(res)
  },
  async createPost({ userId, description, file }) {
    const user = await getDoc(this.postDoc(userId))

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
  }
}

export default postService
