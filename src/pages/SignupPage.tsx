import { useState } from 'react';
import { Form, Input, Checkbox, Button } from 'antd';
import { UserOutlined, MailOutlined, GoogleOutlined, AppleOutlined, FacebookOutlined } from '@ant-design/icons';
import { StyledSignUp } from './SignupPage';
import signup from '../assets/register.png';
import { useNavigate } from 'react-router-dom';


export default function SignUpPage() {
  const [role, setRole] = useState<'student' | 'instructor'>('student');
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    console.log('Registration data:', { ...values, role });
  };

  return (
    <StyledSignUp>
      {/* Chap taraf - Banner */}
      <div className="auth-banner">
         <img src={signup} alt="Sign Up Illustration" />
      </div>

      {/* O'ng taraf - Forma */}
      <div className="auth-form-container">
        <div className="form-wrapper">
          <h1 className="signup-title">Create Your Account</h1>

          {/* Role Switcher */}
          <div className="role-switcher">
            <button 
              className={`role-btn ${role === 'student' ? 'active' : ''}`}
              onClick={() => setRole('student')}
            >
              Student
            </button>
            <button 
              className={`role-btn ${role === 'instructor' ? 'active' : ''}`}
              onClick={() => setRole('instructor')}
            >
              Instructor
            </button>
          </div>

          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item
              label="Full name"
              name="fullName"
              rules={[{ required: true, message: 'Iltimos, ismingizni kiriting!' }]}
            >
              <Input prefix={<UserOutlined />} placeholder="Enter full name" />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, type: 'email', message: 'Iltimos, to`g`ri email kiriting!' }]}
            >
              <Input prefix={<MailOutlined />} placeholder="Enter email address" />
            </Form.Item>

            <Form.Item 
              name="agreement" 
              valuePropName="checked"
              rules={[{ validator: (_, value) => value ? Promise.resolve() : Promise.reject('Shartlarga rozilik bildirishingiz kerak') }]}
            >
              <Checkbox>
                I agree to the <span style={{color: '#000', fontWeight: 600}}>Terms of Service & Privacy Policy</span>
              </Checkbox>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="next-btn">
                Next
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