import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const handleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/e4b3c14a-684b-4fc4-b14f-2b486a4e9f4e/IN-en-20240219-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background-img"
        />
      </div>
      <form className="absolute w-3/12 p-14 my-36 mx-auto right-0 left-0 bg-opacity-70 rounded-md bg-black text-white">
        <h1 className="text-3xl py-4">{isSignIn ? "Sign In" : "Sign Up"}</h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700 bg-opacity-80"
          />
        )}
        <input
          type="text"
          placeholder="Email"
          className="p-4 my-4 w-full bg-gray-700 bg-opacity-80"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 bg-opacity-80"
        />
        <button className="p-4 my-6 bg-red-700 rounded-lg w-full">
          Sign In
        </button>
        <p className="cursor-pointer" onClick={handleSignIn}>
          {isSignIn
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
