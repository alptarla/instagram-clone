import {
  Col, Image, Row, Tabs,
} from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts, selectUserPosts } from '../../store/slices/post';
import { getBookmarkedPosts } from '../../store/slices/profile';

function ProfileTabs() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const posts = useSelector(selectUserPosts(user.id));
  const saved = useSelector((state) => state.profile.saved);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const handleTab = (key) => {
    if (key === 'POST') {
      dispatch(getPosts());
    } else {
      // get saved
      dispatch(getBookmarkedPosts({ id: user.id }));
    }
  };

  return (
    <div>
      <Tabs
        defaultActiveKey="1"
        onChange={handleTab}
      >
        <Tabs.TabPane
          tab="posts"
          key="POST"
        >
          <Row>
            {posts.map((item, index) => (
              <Col lg={12}>
                <Image
                  width={400}
                  height={400}
                  src={item.file}
                  key={index}
                />
              </Col>
            ))}
          </Row>
        </Tabs.TabPane>
        <Tabs.TabPane
          tab="saved"
          key="SAVED"
        >
          <Row>
            {saved.map((item, index) => (
              <Col lg={12}>
                <Image
                  width={400}
                  height={400}
                  src={item.file}
                  key={index}
                />
              </Col>
            ))}
          </Row>
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}

export default ProfileTabs;
