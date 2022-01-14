import { useSelector } from 'react-redux'

const Timeline = () => {
  const { user } = useSelector((state) => state.auth)

  return <div>Timeline for {user?.username}</div>
}

export default Timeline
