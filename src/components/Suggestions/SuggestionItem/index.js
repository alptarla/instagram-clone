import { Button } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import classes from './SuggestionItem.module.scss';

function SuggestionItem({ user, onFollow }) {
  return (
    <div className={classes.suggestionItem}>
      <div className={classes.profile}>
        <Avatar
          src={user.avatar}
          className={classes.avatar}
        />
        <div>
          <h4>{user.username}</h4>
          <span>Suggested for you</span>
        </div>
      </div>
      <Button
        type="text"
        disabled
        onClick={() => onFollow(user)}
      >
        Follow
      </Button>
    </div>
  );
}

export default SuggestionItem;
