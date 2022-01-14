import { Button } from 'antd'
import Avatar from 'antd/lib/avatar/avatar'
import { useSelector } from 'react-redux'
import SuggestionItem from './SuggestionItem'
import classes from './Suggestions.module.scss'

const avatar =
  'https://avatars.githubusercontent.com/u/97050082?s=400&u=14092335003c830f68f55605247fb4fdf8aba677&v=4'

const Suggestions = () => {
  const { user } = useSelector((state) => state.auth)
  const userList = [
    { ...user, avatar },
    { ...user, avatar },
    { ...user, avatar }
  ]

  const handleUpload = () => {
    // todo: upload the post
  }

  const handleFollow = (user) => {
    // todo: follow this user
    console.log('user :>> ', user)
  }

  return (
    <div className={classes.suggestions}>
      <header className={classes.suggestionsTop}>
        <div className={classes.profile}>
          <Avatar src={avatar} className={classes.avatar} />
          <div>
            <h4>{user.username}</h4>
            <span>Your profile</span>
          </div>
        </div>
        <Button type="primary" onClick={handleUpload}>
          New post
        </Button>
      </header>
      <div className={classes.suggestionsList}>
        <div className={classes.suggestionsTitle}>
          <h4>Suggestions For You</h4>
          <Button type="text">See All</Button>
        </div>
        {userList.map((userItem, index) => (
          <SuggestionItem user={userItem} key={index} onFollow={handleFollow} />
        ))}
      </div>
    </div>
  )
}

export default Suggestions
