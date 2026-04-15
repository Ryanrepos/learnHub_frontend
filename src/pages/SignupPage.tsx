import { Form, Input, Checkbox, Button } from 'antd';
import { UserOutlined, MailOutlined, LockOutlined, GoogleOutlined, AppleOutlined, FacebookOutlined } from '@ant-design/icons';
import signupImg from '../assets/login.png';
import { useNavigate } from 'react-router-dom';
import { useRegister } from '../composables/useLogin';
import { StyledSignUp } from './SignupPage';

export default function SignUpPage() {
  const navigate = useNavigate();
  const { isPending, mutate } = useRegister();

  const onFinish = (values: any) => {
    // values endi to'g'ridan-to'g'ri backend kutilganidek: 
    // { firstName, lastName, email, password }
    mutate(values);
  };

  return (
    <StyledSignUp>
      {/* Chap taraf - Banner */}
      <div className="auth-banner">
         <img src={signupImg} alt="Sign Up Illustration" />
      </div>

      {/* O'ng taraf - Forma */}
      <div className="auth-form-container">
        <div className="form-wrapper">
          <h1 className="signup-title">Create Your Account</h1>

          <Form layout="vertical" onFinish={onFinish}>
            
            {/* Ism va Familiya qatori */}
            <div className="name-row">
              <Form.Item
                label="First name"
                name="firstName"
                style={{ flex: 1 }}
                rules={[{ required: true, message: 'Ismingizni kiriting!' }]}
              >
                <Input prefix={<UserOutlined />} placeholder="John" />
              </Form.Item>

              <Form.Item
                label="Last name"
                name="lastName"
                style={{ flex: 1 }}
                rules={[{ required: true, message: 'Familiyangizni kiriting!' }]}
              >
                <Input prefix={<UserOutlined />} placeholder="Doe" />
              </Form.Item>
            </div>

            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, type: 'email', message: 'To\'g\'ri email kiriting!' }]}
            >
              <Input prefix={<MailOutlined />} placeholder="Enter email address" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: 'Parol kiriting!' },
                { min: 6, message: 'Parol kamida 6 belgidan iborat bo\'lishi kerak!' }
              ]}
            >
              <Input.Password prefix={<LockOutlined />} placeholder="Create a password" />
            </Form.Item>

           
            <Form.Item>
              <Button 
                type="primary" 
                htmlType="submit" 
                className="next-btn"
                loading={isPending}
              >
                Create Account
              </Button>
            </Form.Item>
          </Form>

          <div className="social-divider">or continue with</div>

          <div className="social-icons">
            <div className="social-btn"><GoogleOutlined style={{ color: '#EA4335' }} /></div>
            <div className="social-btn"><AppleOutlined /></div>
            <div className="social-btn"><FacebookOutlined style={{ color: '#1877F2' }} /></div>
          </div>

          <p className="login-link">
            Already have an account? <span onClick={() => navigate('/auth/login')}>Login</span>
          </p>
        </div>
      </div>
    </StyledSignUp>
  );
}