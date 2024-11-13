import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import loginBg from '../../assets/login-bg.jpg';
import googleIcon from '../../assets/google-icon.png';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
      email: '',
      password: ''
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle login logic here
      console.log('Login submitted:', formData);
    };
  return (
    <div 
    className="min-h-screen w-full bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${loginBg})` }}
    >
       
 {/* Main content */}
 <div className="relative min-h-screen flex items-center justify-center p-4">
        {/* Login Card with enhanced blur effect */}
        <div className="w-full max-w-md rounded-xl overflow-hidden">
          {/* Blur effect background */}
          <div className="backdrop-blur-xl bg-white/10 p-8 shadow-2xl border border-white/20">
            {/* LoGIN */}
            <div className="mb-8 text-center">
              <h1 className="text-[40px] font-bold text-white">LOGIN</h1>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm text-[18px] font-medium text-gray-200 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full border-b-2 border-b-gray-400 bg-transparent p-3 text-white placeholder-gray-400 focus:border-b-red-500 focus:ring-0 focus:outline-none "
                  required
                />
                
            </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-[18px] text-gray-200 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full border-b-2 border-b-gray-400 bg-transparent p-3 text-white placeholder-gray-400 focus:border-b-red-500 focus:ring-0 focus:outline-none"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div className="text-right">
                <a href="#" className="text-sm text-gray-300 hover:text-red-400 transition-colors">
                  Forgot Password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-red-600 p-3 text-white font-bold text-[24px] transition-colors hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                LOGIN
              </button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-600"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-transparent px-2 text-gray-300">or</span>
                </div>
              </div>

              <button
                type="button"
                className="w-full rounded-lg border border-gray-400 bg-transparent p-3 text-white transition-colors hover:bg-white/10 flex items-center justify-center gap-2"
              >
                <img
                  src={googleIcon}
                  alt="Google"
                  className="w-5 h-5"
                />
                Continue with Google
              </button>

              <p className="text-center text-sm text-gray-300">
                Don't have an account?{' '}
                <a href="#" className="text-red-400 hover:text-red-300 transition-colors">
                  Sign Up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>

    </div>


  );
};

export default Login;
