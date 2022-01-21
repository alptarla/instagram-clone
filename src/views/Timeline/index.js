import { Col, Row } from 'antd'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Suggestions from '../../components/Suggestions'
import { getPosts } from '../../store/slices/post'

const Timeline = () => {
  const { posts, loading } = useSelector((state) => state.post)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  if (loading) return <div>loading...</div>
  return (
    <Row>
      <Col lg={16}>{JSON.stringify(posts)}</Col>
      <Col lg={8}>
        <Suggestions />
      </Col>
    </Row>
  )
}

export default Timeline
