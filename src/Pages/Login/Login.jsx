import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";


const Login = () => {
  return (
    <div className="bg-gray-50 flex-1">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
        <div className="w-full bg-white rounded-lg shadow sm:max-w-md">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Login
            </h1>

            <form className="space-y-4 md:space-y-6">
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="mobile"
                  className="text-sm font-semibold text-gray-700"
                >
                  Mobile Number
                </label>
                <div className="flex items-center">
                  <select
                    name="country_code"
                    id="country_code"
                    className="bg-gray-50 border text-gray-900 sm:text-sm rounded-md focus:ring-2 focus:outline-none focus:ring-slate-600 p-2.5"
                  >
                    <option value="+91">+91</option>
                  </select>
                  <input
                    type="text"
                    name="mobile_number"
                    id="mobile_number"
                    className="bg-gray-50 border w-full text-gray-900 sm:text-sm rounded-md focus:ring-2 focus:outline-none focus:ring-slate-600 p-2.5 ml-2"
                    placeholder="Mobile no"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                />
              </div>

              <div className="flex justify-end space-x-1">
                <div>
                  <Link
                    to={"/forgetpassword"}
                    className="text-blue-700 text-sm underline"
                  >
                    forget password
                  </Link>
                </div>
                <span> / </span>
                <div>
                  <Link
                    to={"/forgetpassword"}
                    className="text-blue-700 text-sm underline"
                  >
                    forget username
                  </Link>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="w-[50%] text-slate-200 bg-red-500 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-md text-sm px-5 py-2.5 text-center"
                >
                  Login
                </button>
                <button
                  type="button"
                  className="w-[20%] text-black bg-gray-200 focus:ring-3 focus:outline-none focus:ring-primary-300 font-medium rounded-md text-sm px-5 py-2.5"
                >
                  Cancel
                </button>
              </div>

              <div className="flex">
                <Link to={"/OTP"} className="text-blue-700 text-sm underline">
                  Login with OTP
                </Link>
              </div>
            </form>

            {/* <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-100">Or Login with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <div>
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  <FaFacebook fill="blue" size={"1.5rem"} />
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  <FaXTwitter size={"1.5rem"} />
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  <FcGoogle size={"1.5rem"} />
                </a>
              </div>
            </div> */}

            <p className="text-sm text-gray-500 font-medium">
              Don't have an account?{" "}
              <Link to="/signup" className="text-red-600 hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Login;
