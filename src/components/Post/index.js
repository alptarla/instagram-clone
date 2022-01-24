import { Card } from 'antd'
import Avatar from 'antd/lib/avatar/avatar'
import Meta from 'antd/lib/card/Meta'
import { useState } from 'react'
import classes from './Post.module.scss'
import PostAction from './PostAction'
import PostModal from './PostModal'

const Post = ({ post }) => {
  const [showModal, setShowModal] = useState(false)

  const image = <img src={post.file} alt={post.description} />
  const cardTop = (
    <div className={classes.cardTop}>
      <Avatar src={post.user.img} />
      <span>{post.user.username}</span>
    </div>
  )

  return (
    <Card title={cardTop} className={classes.card} cover={image}>
      <Meta className={classes.cardDescription} title={post.description} />
      <PostAction post={post} openPostModal={() => setShowModal(true)} />
      <PostModal
        visible={showModal}
        onOk={() => setShowModal(false)}
        onCancel={() => setShowModal(false)}
        post={post}
      />
    </Card>
  )
}

export default Post
