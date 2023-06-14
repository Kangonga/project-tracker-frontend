import { LoginForm } from '@app/features/authentication/components/LoginForm';
import { InputBlock } from '@app/features/authentication/components/inputBlocks';
import { Button, IconButton, Input, InputAdornment, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useState } from 'react';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import * as yup from 'yup';
import useLogin from '@app/features/authentication/hooks/useLogin';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';

interface formInterface {
  email: string;
  password: string;
}
interface apiResult {
  data: {
    msg: string;
    user: {
      email: string;
      firstname: string;
      lastname: string;
      role: string;
    };
  } | null;
  error: object | null;
}

export default function Login() {
  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = yup.object().shape({
    email: yup.string().email().required('Please provide a valid email'),
    password: yup.string().required('Please provide a valid password'),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema,
    onSubmit: async (values: formInterface) => await handleSubmit(values),
  });

  const [errors, setShowErrors] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (values: formInterface) => {
    const response: apiResult = await useLogin({
      email: values.email,
      password: values.password,
    });
    if (response.error) {
      setShowErrors(true);
    }
    if (response.data) {
      setShowErrors(false);
      if (response.data.user.role === 'developer') {
        navigate('/developer');
      }
      if (response.data.user.role === 'admin') {
        navigate('/admin');
      }
    }
  };

  return (
    <>
      <LoginForm onSubmit={formik.handleSubmit}>
        <h1 className="header">Welcome</h1>
        <InputBlock>
          <span>Email</span>
          <Input
            name="email"
            className="input"
            type="email"
            value={formik.values.email}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            startAdornment={
              <InputAdornment position="start">
                <IconButton className="icon">
                  <EmailIcon />
                </IconButton>
              </InputAdornment>
            }
          />
        </InputBlock>
        {formik.touched.email && formik.errors.email && (
          <Typography color="coral" fontSize=".9rem">
            {formik.errors.email}
          </Typography>
        )}

        <InputBlock>
          <span>Password</span>
          <Input
            name="password"
            className="input"
            value={formik.values.password}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            type={showPassword ? 'text' : 'password'}
            startAdornment={
              <InputAdornment position="start">
                {showPassword ? (
                  <IconButton className="icon" onClick={() => setShowPassword(!showPassword)}>
                    <VisibilityIcon />
                  </IconButton>
                ) : (
                  <IconButton className="icon" onClick={() => setShowPassword(!showPassword)}>
                    <VisibilityOffIcon />
                  </IconButton>
                )}
              </InputAdornment>
            }
          />
          {formik.touched.password && formik.errors.password && (
            <Typography color="coral" fontSize=".9rem">
              {formik.errors.password}
            </Typography>
          )}
        </InputBlock>
        <span className="forgotPassword">Forgot Password?</span>
        <Button type="submit" className="submit">
          Login
        </Button>
        {errors && (
          <Typography color="coral" fontSize=".9rem" textAlign="center">
            Invalid email or password
          </Typography>
        )}
      </LoginForm>
    </>
  );
}
