import classNames from 'classnames'
import { useState } from 'react'
import { Bookmark, Heart, MessageSquare } from 'react-feather'
import { useDispatch, useSelector } from 'react-redux'
import { likePost } from '../../../store/slices/post'
import { bookmarkPost } from '../../../store/slices/profile'
import classes from './PostAction.module.scss'

const PostAction = ({ post, openPostModal }) => {
  const { profile } = useSelector((state) => state.profile)

  const isLiked = post?.likes?.includes(profile.id)
  const isBookmarked = profile?.bookmarks?.includes(post.id)

  const [like, setLike] = useState(isLiked)
  const [bookmark, setBookmark] = useState(isBookmarked)

  const dispatch = useDispatch()

  const handleLike = () => {
    // TODO: update like status into this post
    setLike(!like)
    dispatch(likePost({ userId: profile.id, postId: post.id, isLiked: !like }))
  }

  const handleBookmark = () => {
    // TODO: update bookmarks into the current user profile
    setBookmark(!bookmark)
    dispatch(bookmarkPost({ userId: profile.id, postId: post.id, isBookmarked: !bookmark }))
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
