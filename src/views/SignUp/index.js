import { Button, Card, Form, Input } from 'antd'
import { Link } from 'react-router-dom'
import Logo from '../../components/shared/Logo'
import rules from '../../lib/formRules'
import classes from '../../styles/Form.module.scss'

const SignUp = () => {
  const handleSignUp = (values) => {
    // todo: register user, then redirect to timeline
    console.log('values :>> ', values)
  }

  return (
    <div className={classes.section}>
      <Card className={classes.sectionTop}>
        <div className={classes.logo}>
          <Logo />
        </div>
        <Form name="basic" onFinish={handleSignUp} className={classes.form}>
          <Form.Item className={classes.formItem} name="username" rules={rules.username}>
            <Input placeholder="Username" />
          </Form.Item>
          <Form.Item className={classes.formItem} name="email" rules={rules.email}>
            <Input placeholder="Phone number, username, or email" />
          </Form.Item>
          <Form.Item className={classes.formItem} name="password" rules={rules.password}>
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
      <Card className={classes.sectionBottom}>
        <span>Have an account? </span>
        <Link to="/auth/login">Log in</Link>
      </Card>
    </div>
  )
}

export default SignUp
