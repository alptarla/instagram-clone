import { Menu } from 'antd'
import classes from './Navigation.module.scss'

const Navigation = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.navBrand}>Instagram</div>
      <Menu mode="horizontal" className={classes.navMenu}>
        <Menu.Item key="profile">Profile</Menu.Item>
      </Menu>
    </nav>
  )
}

export default Navigation
