import { Col, Row } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Post from '../../components/Post';
import PostsLoader from '../../components/shared/PostsLoader';
import Suggestions from '../../components/Suggestions';
import { getPosts } from '../../store/slices/post';

function Timeline() {
  const { posts = [], loading } = useSelector((state) => state.post);
  const { profile } = useSelector((state) => state.profile);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const postItems = posts.map((post, index) => (
    <Post
      key={index}
      post={post}
      loading={loading}
      user={profile}
    />
  ));

  return (
    <Row>
      <Col lg={16}>
        {loading ? <PostsLoader count={3} /> : null}
        {postItems}
      </Col>
      <Col lg={8}>
        <Suggestions />
      </Col>
    </Row>
  );
}

export default Timeline;
