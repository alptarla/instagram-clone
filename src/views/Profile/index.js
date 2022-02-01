import { SettingFilled } from '@ant-design/icons/lib/icons';
import { Button } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import { useSelector } from 'react-redux';
import ProfileTabs from '../../components/ProfileTabs';
import classes from './Profile.module.scss';

function Profile() {
  const { profile, loading } = useSelector((state) => state.profile);

  if (loading || !profile) return <div>loading...</div>;
  return (
    <div className={classes.profile}>
      <div className={classes.profileTop}>
        <Avatar
          src={profile.img}
          alt={profile.username}
          size={100}
        />
        <div>
          <div className={classes.profileAction}>
            <h4>{profile.username}</h4>
            <Button disabled>
              <b>Edit Profile</b>
            </Button>
            <SettingFilled />
          </div>
          <div className={classes.profileStatus}>
            <span>0 posts</span>
            <span>92 followers</span>
            <span>117 following</span>
          </div>
          <div className={classes.profileBio}>
            <b>{profile.username}</b>
            <span>Ankara</span>
          </div>
        </div>
      </div>
      <ProfileTabs />
    </div>
  );
}

export default Profile;
