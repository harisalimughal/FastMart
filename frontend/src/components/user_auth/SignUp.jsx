import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
import loginBg from "../../assets/login-bg.jpg";
import googleIcon from "../../assets/google-icon.png";
import { checkValidationsRegister } from "./authUtil";
import { registerUser } from "./authApi";

import { toast } from "react-toastify";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    const { valid, message } = checkValidationsRegister({
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    });

    if (!valid) {
      toast.error(message);
      console.error("Validation error:", message);
      return;
    }

    registerUser({
      firstName,
      lastName,
      email,
      password,
    })
      .then((response) => {
        if (response.success) {
          toast.success("Registration successful! Please log in.");
          // Redirect to login page or perform any other action
        } else {
          toast.error(response.message || "Registration failed. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Registration error:", error);
        toast.error("An error occurred during registration. Please try again.");
      });
  };

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${loginBg})` }}
    >
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md rounded-xl overflow-hidden">
          <div className="backdrop-blur-xl bg-white/10 p-8 shadow-2xl border border-white/20">
            <div className="mb-8 text-center">
              <h1 className="text-[40px] font-bold text-white">SIGN UP</h1>
            </div>

            <form onSubmit={handleRegister} className="space-y-6">
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
                  className="w-full border-b-2 border-b-gray-400 bg-transparent p-3 text-white placeholder-gray-400 focus:border-b-red-500 focus:ring-0 focus:outline-none"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                    className="w-full border-b-2 border-b-gray-400 bg-transparent p-3 text-white placeholder-gray-400 focus:border-b-red-500 focus:ring-0 focus:outline-none"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
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
                    className="w-full border-b-2 border-b-gray-400 bg-transparent p-3 text-white placeholder-gray-400 focus:border-b-red-500 focus:ring-0 focus:outline-none"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
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
                    className="w-full border-b-2 border-b-gray-400 bg-transparent p-3 text-white placeholder-gray-400 focus:border-b-red-500 focus:ring-0 focus:outline-none"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="new-password"
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
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-[18px] text-gray-200 mb-2"
                >
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    className="w-full border-b-2 border-b-gray-400 bg-transparent p-3 text-white placeholder-gray-400 focus:border-b-red-500 focus:ring-0 focus:outline-none"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    autoComplete="new-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300"
                  >
                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
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
                type="button"
                className="w-full rounded-lg border border-gray-400 bg-transparent p-3 text-white transition-colors hover:bg-white/10 flex items-center justify-center gap-2"
              >
                <img src={googleIcon} alt="Google" className="w-5 h-5" />
                Continue with Google
              </button>

              <p className="text-center text-sm text-gray-300">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-red-400 hover:text-red-300 transition-colors"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;