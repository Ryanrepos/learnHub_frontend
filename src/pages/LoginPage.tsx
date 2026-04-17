import { Form, Input, Button } from 'antd';
import { MailOutlined, LockOutlined, GoogleOutlined, AppleOutlined, FacebookOutlined } from '@ant-design/icons';
import { StyledLogin } from './LoginPage';
import loginImg from '../assets/login.png';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../composables/useLogin';

export default function LoginPage() {
  const navigate = useNavigate();

  const { isPending, mutate } = useLogin()

  const onFinish = (values: { email: string, password: string }) => {
    mutate(values)
    console.log('Login data:', values);
  };

  return (
    <StyledLogin>
      {/* Chap taraf - Banner */}
      <div className="auth-banner">
        {/* Bu yerga rasmni import qilib qo'yasan */}
        <img src={loginImg} alt="Auth Illustration" />
      </div>

      {/* O'ng taraf - Forma */}
      <div className="auth-form-container">
        <div className="form-wrapper">
          <h1 className="login-title">Login</h1>

          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, type: 'email', message: 'Iltimos, emailni to`g`ri kiriting!' }]}
            >
              <Input prefix={<MailOutlined />} placeholder="Enter email address" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Iltimos, parolni kiriting!' }]}
            >
              <Input.Password prefix={<LockOutlined />} placeholder="Enter Password" />
            </Form.Item>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 24 }}>
              <span className="forgot-password">Forgot Password?</span>
            </div>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-btn">
                Login
              </Button>
            </Form.Item>
          </Form>

          <div className="social-divider">or continue with</div>

          <div className="social-icons">
            <div className="social-btn"><GoogleOutlined style={{ color: '#EA4335' }} /></div>
            <div className="social-btn"><AppleOutlined /></div>
            <div className="social-btn"><FacebookOutlined style={{ color: '#1877F2' }} /></div>
          </div>

          <p className="signup-text">
            Don't have an account? <span onClick={() => navigate('/auth/register')}>Sign Up</span>
          </p>
        </div>
      </div>
    </StyledLogin>
  );
}