import Avatar from 'antd/lib/avatar/avatar'
import classes from './Comment.module.scss'

const Comment = ({ comment }) => (
  <div className={classes.comment}>
    <Avatar src={comment.user.img} />
    <b>{comment.user.username}</b>
    <p>{comment.text}</p>
  </div>
)

export default Comment
