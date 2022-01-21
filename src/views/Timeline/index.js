import { Col, Row } from 'antd'
import Suggestions from '../../components/Suggestions'

const Timeline = () => {
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
