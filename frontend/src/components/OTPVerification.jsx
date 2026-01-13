import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const OTPContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
`;

const OTPCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 40px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 100%;
`;

const Title = styled.h1`
  color: #333;
  text-align: center;
  margin-bottom: 10px;
  font-size: 28px;
`;

const Subtitle = styled.p`
  color: #666;
  text-align: center;
  margin-bottom: 30px;
  font-size: 14px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  color: #333;
  font-weight: 600;
  margin-bottom: 8px;
  font-size: 14px;
`;

const OTPInputContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
  justify-content: center;
`;

const OTPInput = styled.input`
  width: 50px;
  height: 50px;
  font-size: 24px;
  text-align: center;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  &:invalid {
    border-color: #ff6b6b;
  }
`;

const PasswordInput = styled.input`
  width: 100%;
  padding: 12px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 14px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

const ResendText = styled.p`
  text-align: center;
  color: #666;
  font-size: 14px;
  margin-top: 15px;

  button {
    background: none;
    border: none;
    color: #667eea;
    cursor: pointer;
    font-weight: 600;
    text-decoration: underline;

    &:hover {
      color: #764ba2;
    }

    &:disabled {
      color: #ccc;
      cursor: not-allowed;
    }
  }
`;

const ErrorMessage = styled.div`
  background-color: #ffe0e0;
  color: #c92a2a;
  padding: 10px;
  border-radius: 6px;
  margin-bottom: 15px;
  font-size: 14px;
  border: 1px solid #ff8787;
`;

const SuccessMessage = styled.div`
  background-color: #d3f9d8;
  color: #2b8a3e;
  padding: 10px;
  border-radius: 6px;
  margin-bottom: 15px;
  font-size: 14px;
  border: 1px solid #51cf66;
`;

const TimerText = styled.p`
  text-align: center;
  color: #667eea;
  font-size: 14px;
  font-weight: 600;
`;

const OTPVerification = ({ email, userId, password, onVerificationSuccess }) => {
  const [otp, setOTP] = useState(['', '', '', '', '', '']);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          setCanResend(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleOTPChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;

    const newOTP = [...otp];
    newOTP[index] = value;
    setOTP(newOTP);

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleOTPKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const otpValue = otp.join('');

    console.log('handleVerifyOTP called with:', { email, otpValue, passwordProvided: !!password });

    if (otpValue.length !== 6) {
      setError('Please enter all 6 digits of the OTP');
      return;
    }

    setLoading(true);

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
      
      // Normalize email
      const normalizedEmail = email.toLowerCase().trim();
      
      console.log('Verifying OTP:', {
        email: normalizedEmail,
        otp: otpValue,
        apiUrl: `${apiUrl}/auth/verify-otp`
      });
      
      const response = await fetch(`${apiUrl}/auth/verify-otp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: normalizedEmail,
          otp: otpValue,
          password: password || '', // Send password to backend for hashing after OTP verification
        }),
      });

      const data = await response.json();
      
      console.log('OTP response:', { status: response.status, data, passwordSent: !!password });

      if (response.ok) {
        setSuccess('Email verified successfully!');
        if (data.token) {
          localStorage.setItem('token', data.token);
          console.log('[OTP] Token saved to localStorage');
        }
        if (data.user) {
          localStorage.setItem('userInfo', JSON.stringify(data.user));
          console.log('[OTP] User info saved to localStorage', data.user);
        }

        setTimeout(() => {
          if (onVerificationSuccess) {
            console.log('[OTP] Calling onVerificationSuccess callback');
            onVerificationSuccess(data.user);
          }
        }, 1500);
      } else {
        const errorMsg = data.message || 'OTP verification failed';
        console.error('[OTP] Verification failed:', errorMsg, 'Status:', response.status);
        setError(errorMsg);
      }
    } catch (err) {
      console.error('OTP verification error:', err);
      setError('Error verifying OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleResendOTP = async () => {
    setLoading(true);
    setError('');

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
      
      const response = await fetch(`${apiUrl}/auth/resend-otp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess('OTP resent to your email');
        setTimeLeft(600);
        setCanResend(false);
        setOTP(['', '', '', '', '', '']);
      } else {
        setError(data.message || 'Failed to resend OTP');
      }
    } catch (err) {
      console.error('Resend OTP error:', err);
      setError('Error resending OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <OTPContainer>
      <OTPCard>
        <Title>Verify Your Email</Title>
        <Subtitle>We sent a 6-digit code to {email}</Subtitle>

        {error && <ErrorMessage>{error}</ErrorMessage>}
        {success && <SuccessMessage>{success}</SuccessMessage>}

        <form onSubmit={handleVerifyOTP}>
          <FormGroup>
            <Label>Enter OTP Code</Label>
            <OTPInputContainer>
              {otp.map((digit, index) => (
                <OTPInput
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleOTPChange(index, e.target.value)}
                  onKeyDown={(e) => handleOTPKeyDown(index, e)}
                  disabled={loading}
                  inputMode="numeric"
                />
              ))}
            </OTPInputContainer>
          </FormGroup>

          <Button type="submit" disabled={loading || timeLeft === 0}>
            {loading ? 'Verifying...' : 'Verify Email'}
          </Button>
        </form>

        <TimerText>OTP expires in {formatTime(timeLeft)}</TimerText>

        <ResendText>
          Didn't receive the code?{' '}
          <button onClick={handleResendOTP} disabled={!canResend || loading}>
            Resend
          </button>
        </ResendText>
      </OTPCard>
    </OTPContainer>
  );
};

export default OTPVerification;
