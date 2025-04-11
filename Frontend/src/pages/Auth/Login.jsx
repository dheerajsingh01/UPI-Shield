import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from './ AuthLayout.jsx';
import AuthForm from '../../componennts/Authentication/AuthForm.jsx';
import AuthSocial from '../../componennts/Authentication/AuthSocial.jsx';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    setLoading(true);
    try {
      // Replace with your actual login API call
      console.log('Login data:', formData);
      await new Promise(resolve => setTimeout(resolve, 1000));
      navigate('/dashboard');
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Sign in to your account"
      subtitle="Secure your UPI transactions with our protection system"
    >
      <AuthForm type="login" onSubmit={handleSubmit} loading={loading} />
      
      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-[#4B5563]">
              Or continue with
            </span>
          </div>
        </div>

        <AuthSocial />

        <div className="mt-6 text-center">
          <p className="text-sm text-[#4B5563]">
            Don't have an account?{' '}
            <button
              onClick={() => navigate('/signup')}
              className="font-medium text-[#17C3B2] hover:text-[#0D9488]"
            >
              Sign up
            </button>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;