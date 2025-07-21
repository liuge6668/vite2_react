// src/pages/Login/index.tsx
import React from 'react'
import { Card, Form, Input, Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import style from './index.module.less'

const Login: React.FC = () => {
  const navigate = useNavigate()

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values)
    // 模拟登录成功后跳转到首页
    navigate('/')
  }

  return (
    <div className={style.loginContainer}>
      <Card title='登录' style={{ width: 400 }}>
        <Form name='login' onFinish={onFinish} layout='horizontal' labelCol={{ span: 6 }} wrapperCol={{ span: 18 }}>
          <Form.Item label='用户名' name='username' rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label='密码' name='password' rules={[{ required: true }]}>
            <Input.Password />
          </Form.Item>
          <Form.Item label={null}>
            <Button type='primary' htmlType='submit' block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Login
