import { Button, Skeleton } from 'antd'
import Avatar from 'antd/lib/avatar/avatar'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getProfiles } from '../../store/slices/profile'
import SuggestionItem from './SuggestionItem'
import classes from './Suggestions.module.scss'

const avatar =
  'https://avatars.githubusercontent.com/u/97050082?s=400&u=14092335003c830f68f55605247fb4fdf8aba677&v=4'

const Suggestions = () => {
  const { user } = useSelector((state) => state.auth)
  const { profile, suggestions, loading } = useSelector((state) => state.profile)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProfiles())
  }, [dispatch])

  const handleFollow = (user) => {
    // todo: follow this user
    console.log('user :>> ', user)
  }

  if (loading || !profile) return <Skeleton active />

  return (
    <div className={classes.suggestions}>
      <header className={classes.suggestionsTop}>
        <div className={classes.profile}>
          <Avatar src={avatar} className={classes.avatar} />
          <div>
            <h4>{profile.username}</h4>
            <span>Your profile</span>
          </div>
        </div>
        <Button type="primary">
          <Link to="/upload">Upload</Link>
        </Button>
      </header>
      <div className={classes.suggestionsList}>
        <div className={classes.suggestionsTitle}>
          <h4>Suggestions For You</h4>
          <Button type="text">See All</Button>
        </div>
        {suggestions.map((userItem, index) => (
          <SuggestionItem user={userItem} key={index} onFollow={handleFollow} />
        ))}
      </div>
    </div>
  )
}

export default Suggestions
