import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import loginBg from "../../assets/login-bg.jpg";
import googleIcon from "../../assets/google-icon.png";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db, auth } from "../../firebase/config";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Ensure this is imported for styling

const SignUp = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formLoading, setformLoading] = useState(false);
  const [googleBtnLoading, setGoogleBtnLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(`Updating ${name}: ${value}`);
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    setformLoading(true);
    setError("");

    // Validate fields
    if (!formData.fname || !formData.lname) {
      setError("First and last name are required");
      setformLoading(false);
      return;
    }

    if (!formData.confirmPassword) {
      toast.error("Please confirm your password", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setformLoading(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setformLoading(false);
      return;
    }

    try {
      console.log("Attempting to create user");
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const user = userCredential.user;

      console.log("User signed up successfully");
      navigate("/");
    } catch (error) {
      setError(error.message);
      console.error("Signup Error:", error);
    } finally {
      setformLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      setGoogleBtnLoading(true);
      setError("");

      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);

      const user = result.user;
      const userInfo = {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        uid: user.uid,
      };

      console.log("User signed up:", userInfo);
      navigate("/");
    } catch (error) {
      console.error("Error:", error);
      setError(error.message);
    } finally {
      setGoogleBtnLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${loginBg})` }}
    >
      {error && <div className="text-red-500 absolute">{error}</div>}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md rounded-xl overflow-hidden">
          <div className="backdrop-blur-xl bg-white/10 p-8 shadow-2xl border border-white/20">
            <div className="mb-8 text-center">
              <h1 className="text-[40px] font-bold text-white">SIGN UP</h1>
            </div>

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
                  className="w-full border-b-2 border-b-gray-400 bg-transparent p-3 text-white placeholder-gray-400 focus:border-b-red-500 focus:ring-0 focus:outline-none"
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
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-[18px] text-gray-200 mb-2"
                >
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
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
                {formLoading ? "Signing Up..." : "Create Account"}
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
                disabled={googleBtnLoading}
                type="button"
                className="w-full rounded-lg border border-gray-400 bg-transparent p-3 text-white transition-colors hover:bg-white/10 flex items-center justify-center gap-2"
              >
                <img src={googleIcon} alt="Google" className="w-5 h-5" />
                {googleBtnLoading ? "Signing up..." : "Continue with Google"}
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
      <ToastContainer />
    </div>
  );
};

export default SignUp;