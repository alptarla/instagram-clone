import { Dropdown, Menu } from 'antd'
import Avatar from 'antd/lib/avatar/avatar'
import cn from 'classnames'
import { Home, User } from 'react-feather'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../../../store/slices/auth'
import Logo from '../../shared/Logo'
import classes from './Navigation.module.scss'

const Navigation = () => {
  const { user } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const handleLogout = () => dispatch(logout())

  const avatarDropdown = (
    <Menu mode="horizontal">
      <Menu.Item key="profile">
        <Link to="/profile/me">Profile</Link>
      </Menu.Item>
      <Menu.Item key="logout" onClick={handleLogout}>
        Log Out
      </Menu.Item>
    </Menu>
  )

  return (
    <nav className={cn('container', classes.nav)}>
      <Link to="/">
        <Logo />
      </Link>
      {user ? (
        <div className={classes.navLinks}>
          <Link to="/">
            <Home />
          </Link>
          <Dropdown overlay={avatarDropdown} className={classes.dropdown}>
            <Avatar size="small" src={<User />} />
          </Dropdown>
        </div>
      ) : null}
    </nav>
  )
}

export default Navigation
