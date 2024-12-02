import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import loginBg from "../../assets/login-bg.jpg";
import googleIcon from "../../assets/google-icon.png";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase/config";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Sign Up  submitted:", formData);
  };

  const handleGoogleSignUp = async () => {
    try {

      setLoading(true);
      setError("");

      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);

      // Get user info
      const user = result.user;
      const userInfo = {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        uid: user.uid,
      };

      console.log("User signed up:", userInfo);
      navigate("/");
      // Here you can:
      // 1. Store additional user info if needed
      // 2. Redirect to another page
      // 3. Update UI state
    } catch (error) {
      console.error("Error:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${loginBg})` }}
    >
      {error && <div className="text-red-500 mb-4">{error}</div>}
      {/* Main content */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        {/* Login Card with enhanced blur effect */}
        <div className="w-full max-w-md rounded-xl overflow-hidden">
          {/* Blur effect background */}
          <div className="backdrop-blur-xl bg-white/10 p-8 shadow-2xl border border-white/20">
            {/* LoGIN */}
            <div className="mb-8 text-center">
              <h1 className="text-[40px] font-bold text-white">SIGN UP</h1>
            </div>

            {/* SignUp Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-[18px] font-medium text-gray-200 mb-2"
                >
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

              <div className="flex space-x-4">
                <div className="flex flex-col w-full">
                  <label
                    htmlFor="fname"
                    className="block text-sm text-[18px] font-medium text-gray-200 mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="fname"
                    name="fname"
                    value={formData.fname}
                    onChange={handleInputChange}
                    className="w-full border-b-2 border-b-gray-400 bg-transparent p-3 text-white placeholder-gray-400 focus:border-b-red-500 focus:ring-0 focus:outline-none"
                    required
                  />
                </div>

                <div className="flex flex-col w-full">
                  <label
                    htmlFor="lname"
                    className="block text-sm text-[18px] font-medium text-gray-200 mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lname"
                    name="lname"
                    value={formData.lname}
                    onChange={handleInputChange}
                    className="w-full border-b-2 border-b-gray-400 bg-transparent p-3 text-white placeholder-gray-400 focus:border-b-red-500 focus:ring-0 focus:outline-none"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-[18px] text-gray-200 mb-2"
                >
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

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-[18px] text-gray-200 mb-2"
                >
                  Confirm Password
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
                <a
                  href="#"
                  className="text-sm text-gray-300 hover:text-red-400 transition-colors"
                >
                  Forgot Password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-red-600 p-3 text-white font-bold text-[24px] transition-colors hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                Create Account
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
                onClick={handleGoogleSignUp}
                disabled={loading}
                type="button"
                className="w-full rounded-lg border border-gray-400 bg-transparent p-3 text-white transition-colors hover:bg-white/10 flex items-center justify-center gap-2"
              >
                <img src={googleIcon} alt="Google" className="w-5 h-5" />
                {loading ? "Signing in..." : "Continue with Google"}
              </button>

              <p className="text-center text-sm text-gray-300">
                Already have an account?{" "}
                <a
                  href="#"
                  className="text-red-400 hover:text-red-300 transition-colors"
                >
                  Login
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
