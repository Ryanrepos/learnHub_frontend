import { Form, Input, Button, message } from 'antd';
import { LockOutlined } from '@ant-design/icons';
import signupImg from '../assets/login.png'; // Rasm yo'li to'g'rilangan
import { useNavigate, useLocation } from 'react-router-dom';
import { StyledVerify } from './VerifyPage';

export default function VerifyPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [form] = Form.useForm();

  // Signup dan kelgan emailni olish, bo'lmasa default
  const userEmail = location.state?.email || 'user@example.com';

  const onFinish = (values: { code: string }) => {
    console.log('Kiritilgan kod:', values.code);
    message.loading({ content: 'Tekshirilmoqda...', key: 'verify' });

    // Bu yerda backend mutation chaqiriladi
    setTimeout(() => {
      message.success({ content: 'Muvaffaqiyatli tasdiqlandi!', key: 'verify', duration: 2 });
      navigate('/');
    }, 1500);
  };

  // Faqat raqam kiritishni cheklash funksiyasi
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const onlyNums = value.replace(/[^0-9]/g, '').slice(0, 6);
    form.setFieldsValue({ code: onlyNums });
  };

  const handleResend = () => {
    message.info('Yangi kod emailingizga yuborildi');
  };

  return (
    <StyledVerify>
      <div className="auth-banner">
        <img src={signupImg} alt="Verify Illustration" />
      </div>

      <div className="auth-form-container">
        <div className="form-wrapper">
          <h1 className="verify-title">Check your inbox</h1>
          <p className="verify-subtitle">
            Enter the 6-digit code we sent to <br />
            <strong>{userEmail}</strong> to finish your sign up.
          </p>

          <Form form={form} layout="vertical" onFinish={onFinish}>
            <Form.Item
              name="code"
              rules={[
                { required: true, message: 'Iltimos, kodni kiriting!' },
                { len: 6, message: 'Kod 6 ta raqamdan iborat bo\'lishi kerak!' }
              ]}
            >
              <Input
                prefix={<LockOutlined />}
                placeholder="6-digit code"
                size="large"
                onChange={handleInputChange}
                autoFocus
                style={{ textAlign: 'center' }}
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="signup-btn">
                Sign Up
              </Button>
            </Form.Item>
          </Form>

          <button className="resend-btn" onClick={handleResend}>
            Resend email
          </button>
        </div>
      </div>
    </StyledVerify>
  );
}