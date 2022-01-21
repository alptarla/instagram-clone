import { Col, Row } from 'antd'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Suggestions from '../../components/Suggestions'
import { getProfileById } from '../../store/slices/profile'

const Timeline = () => {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  // ** current user profile
  useEffect(() => {
    dispatch(getProfileById({ id: user.id }))
  }, [user, dispatch])

  return (
    <Row>
      <Col lg={16}>list of posts</Col>
      <Col lg={8}>
        <Suggestions />
      </Col>
    </Row>
  )
}

export default Timeline
