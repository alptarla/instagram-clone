import { Button, Input } from 'antd'
import { useState } from 'react'
import classes from './CommentInput.module.scss'

const CommentInput = ({ onComment, loading }) => {
  const [comment, setComment] = useState('')

  const handleComment = () => {
    onComment(comment)
    setComment('')
  }

  return (
    <div className={classes.commentInput}>
      <Input
        placeholder="Enter your comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <Button type="primary" onClick={handleComment} disabled={!comment} loading={loading}>
        Send
      </Button>
    </div>
  )
}

export default CommentInput
