import Layout, { Content, Footer, Header } from 'antd/lib/layout/layout';
import cn from 'classnames';
import classes from './Layout.module.scss';
import Navigation from './Navigation';

function AppLayout({ children }) {
  return (
    <Layout className={classes.layout}>
      <Header className={classes.header}>
        <Navigation />
      </Header>
      <Content className={cn('container', classes.main)}>{children}</Content>
      <Footer className={classes.footer}>
        <div className="container">Footer</div>
      </Footer>
    </Layout>
  );
}

export default AppLayout;
