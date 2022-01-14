import { Button, Card, Form, Input } from 'antd'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Logo from '../../components/shared/Logo'
import rules from '../../lib/formRules'
import { signUp } from '../../store/slices/auth'
import classes from '../../styles/Form.module.scss'

const SignUp = () => {
  const [loading, setLoading] = useState(false)

  const { user } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSignUp = async ({ email, password, username }) => {
    try {
      setLoading(true)
      await dispatch(signUp({ email, password, username })).unwrap()
      navigate('/')
    } catch {
      toast.error('Authentication denied!')
    } finally {
      setLoading(false)
    }
  }

  if (user) return <Navigate to="/" />
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
            <Input placeholder="Email" />
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
        <span>Have an account? </span>
        <Link to="/auth/login">Log in</Link>
      </Card>
    </div>
  )
}

export default SignUp
