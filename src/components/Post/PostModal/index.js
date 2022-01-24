import { Col, Row } from 'antd'
import Avatar from 'antd/lib/avatar/avatar'
import Modal from 'antd/lib/modal/Modal'
import Comment from '../Comment'
import CommentInput from '../Comment/CommentInput/CommentInput'
import classes from './PostModal.module.scss'

const PostModal = ({ visible, onCancel, post, onComment, loading }) => {
  const modalTop = (
    <div className={classes.modalTop}>
      <Avatar src={post.user.img} />
      <span>{post.user.username}</span>
    </div>
  )

  const commentItems = post.comments.map((comment, index) => (
    <Comment comment={comment} key={index} />
  ))

  return (
    <Modal
      centered
      title={modalTop}
      visible={visible}
      onCancel={onCancel}
      className={classes.modal}
      width={800}
      footer={null}
    >
      <Row>
        <Col span={12}>
          <img src={post.file} alt={post.description} className={classes.postImage} />
        </Col>
        <Col span={12}>
          <div className={classes.commentView}>
            <div className={classes.commentList}>{commentItems}</div>
            <CommentInput onComment={onComment} loading={loading} />
          </div>
        </Col>
      </Row>
    </Modal>
  )
}

export default PostModal
