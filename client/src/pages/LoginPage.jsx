import React, { useContext, useRef, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [currentState, setCurrentState] = useState('Login');
  const { login, SignUp, errorMSG } = useContext(AuthContext)
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.form || '/';

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  // Handle login/signup form submission
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const name = nameRef.current?.value;
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    if (currentState === 'Login') {
      const data = {
        email, password
      }
      const response = await login(data);
      if (response) {
        navigate(from,{replace:true});
      }
    } else {
      const data = {
        name, email, password
      }
      SignUp(data)
    }
  };

  const onForgotPasswordHandler = async (event) => {
    event.preventDefault();
  };

  return (
    <div className="w-full h-[28rem] sm:min-h-screen flex flex-col justify-center items-center px-4 sm:px-0">
      <form
        onSubmit={currentState === 'Forgot Password' ? onForgotPasswordHandler : onSubmitHandler}
        className="flex flex-col items-center w-full sm:max-w-md md:max-w-lg lg:max-w-xl bg-white dark:bg-gray-900 shadow-lg dark:shadow-gray-900 p-6 rounded-lg text-gray-800 dark:text-white gap-3   "
      >
        <div className="inline-flex items-center gap-2 mb-6 mt-4">
          <p className="prata-regular text-2xl sm:text-3xl font-semibold dark:text-white">{currentState}</p>
          <hr className="border-none h-[1.5px] w-10 bg-gray-800 dark:bg-white" />
        </div>

        {/* Conditionally render form fields based on the currentState */}
        {currentState === 'Sign Up' && (
          <input
            ref={nameRef}
            type="text"
            className="w-full px-4 py-3 border border-gray-800 dark:border-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800 dark:focus:ring-white dark:text-black"
            placeholder="Full Name"
            required
          />
        )}

        <input
          ref={emailRef}
          type="email"
          className="w-full px-4 py-3 border border-gray-800 dark:border-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800 dark:focus:ring-white dark:text-black"
          placeholder="Email"
          required
        />

        {/* Password field only for Login or Sign Up, not Forgot Password */}
        {currentState !== 'Forgot Password' && (
          <input
            ref={passwordRef}
            type="password"
            className="w-full px-4 py-3 border border-gray-800 dark:border-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800 dark:focus:ring-white dark:text-black"
            placeholder="Password"
            required
          />
        )}

        {errorMSG && (
          <span className={`opacity-0 transition-opacity duration-500 ${errorMSG ? 'opacity-100' : ''}`}>
            <p className="text-red-500 dark:text-red-600">{errorMSG}</p>
          </span>
        )}

        <div className="w-full flex flex-col sm:flex-row justify-between text-sm mt-2">
          {currentState !== 'Forgot Password' && (
            <p onClick={() => setCurrentState('Forgot Password')} className="cursor-pointer text-black hover:underline dark:text-white">
              Forgot Password?
            </p>
          )}

          {currentState === 'Login' ? (
            <p onClick={() => setCurrentState('Sign Up')} className="cursor-pointer text-black hover:underline mt-2 sm:mt-0 dark:text-white">
              Create Account
            </p>
          ) : currentState === 'Sign Up' ? (
            <p onClick={() => setCurrentState('Login')} className="cursor-pointer text-black hover:underline mt-2 sm:mt-0 dark:text-white">
              Login Here
            </p>
          ) : (
            <p onClick={() => setCurrentState('Login')} className="cursor-pointer text-black hover:underline mt-2 sm:mt-0 dark:text-white">
              Back to Login
            </p>
          )}
        </div>

        <button className="w-full bg-black dark:bg-gray-800 text-white font-medium py-3 rounded-md mt-6 transition-transform duration-200 hover:scale-105">
          {currentState === 'Login'
            ? 'Sign In'
            : currentState === 'Sign Up'
              ? 'Sign Up'
              : 'Reset Password'}
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
