import { Card, message } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import Meta from 'antd/lib/card/Meta';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createComment } from '../../store/slices/post';
import classes from './Post.module.scss';
import PostAction from './PostAction';
import PostModal from './PostModal';

function Post({ post, user }) {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  const handleComment = async (comment) => {
    const data = {
      id: nanoid(),
      text: comment,
      user,
      postId: post.id,
    };

    try {
      setLoading(true);
      await dispatch(createComment({ comment: data })).unwrap();
    } catch (error) {
      message.error('Something went wrong!');
      console.log('error :>> ', error);
    } finally {
      setShowModal(false);
      setLoading(false);
    }
  };

  const image = (
    <img
      src={post.file}
      alt={post.description}
    />
  );
  const cardTop = (
    <div className={classes.cardTop}>
      <Avatar src={post.user.img} />
      <span>{post.user.username}</span>
    </div>
  );

  // TODO: display last comments on action below
  return (
    <Card
      title={cardTop}
      className={classes.card}
      cover={image}
    >
      <Meta
        className={classes.cardDescription}
        title={post.description}
      />
      <PostAction
        post={post}
        openPostModal={() => setShowModal(true)}
      />
      <PostModal
        visible={showModal}
        onCancel={() => setShowModal(false)}
        post={post}
        onComment={handleComment}
        loading={loading}
      />
    </Card>
  );
}

export default Post;
