import Layout, { Content, Footer, Header } from 'antd/lib/layout/layout'
import classes from '../Layout/Layout.module.scss'
import Navigation from './Navigation'

const AppLayout = ({ children }) => (
  <Layout className={classes.layout}>
    <Header>
      <Navigation />
    </Header>
    <Content className="container">{children}</Content>
    <Footer>
      <div className="container">Footer</div>
    </Footer>
  </Layout>
)

export default AppLayout
