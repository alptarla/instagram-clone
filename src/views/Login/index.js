import { Button, Card, Form, Input } from 'antd'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Logo from '../../components/shared/Logo'
import rules from '../../lib/formRules'
import { login } from '../../store/slices/auth'
import classes from '../../styles/Form.module.scss'

const Login = () => {
  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = async ({ email, password }) => {
    try {
      setLoading(true)
      await dispatch(login({ email, password })).unwrap()
      navigate('/')
    } catch {
      toast.error('Authentication denied!')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={classes.section}>
      <Card className={classes.sectionTop}>
        <div className={classes.logo}>
          <Logo />
        </div>
        <Form name="basic" onFinish={handleLogin} className={classes.form}>
          <Form.Item className={classes.formItem} name="email" rules={rules.email}>
            <Input placeholder="Phone number, username, or email" />
          </Form.Item>
          <Form.Item className={classes.formItem} name="password" rules={rules.password}>
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
      <Card className={classes.sectionBottom}>
        <span>Don't have an account? </span>
        <Link to="/auth/sign-up">Sign up</Link>
      </Card>
    </div>
  )
}

export default Login
