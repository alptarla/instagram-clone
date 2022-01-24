import { Button, Input } from 'antd'
import { useState } from 'react'
import classes from './CommentInput.module.scss'

const CommentInput = ({ onComment }) => {
  const [comment, setComment] = useState('')

  return (
    <div className={classes.commentInput}>
      <Input
        placeholder="Enter your comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <Button type="primary" onClick={() => onComment(comment)} disabled={!comment}>
        Send
      </Button>
    </div>
  )
}

export default CommentInput
