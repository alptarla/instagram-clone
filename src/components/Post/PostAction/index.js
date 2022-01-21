import classNames from 'classnames'
import { useState } from 'react'
import { Bookmark, Heart, MessageSquare } from 'react-feather'
import classes from './PostAction.module.scss'

const PostAction = ({ post, openPostModal }) => {
  const [like, setLike] = useState(false)
  const [bookmark, setBookmark] = useState(false)

  const handleLike = () => {
    // TODO: update like status into this post
    setLike(!like)
  }

  const handleBookmark = () => {
    // TODO: update bookmarks into the current user profile
    setBookmark(!bookmark)
  }

  return (
    <div className={classes.cardAction}>
      <Heart
        className={classNames(classes.heart, { [classes.active]: like })}
        onClick={handleLike}
      />
      <MessageSquare className={classes.message} onClick={openPostModal} />
      <Bookmark
        className={classNames(classes.bookmark, { [classes.active]: bookmark })}
        onClick={handleBookmark}
      />
    </div>
  )
}

export default PostAction
