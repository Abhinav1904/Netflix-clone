import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_IMG_URL, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const dispatch = useDispatch();

  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef();
  const password = useRef();
  const name = useRef();

  const handleSignIn = () => {
    const message = checkValidateData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    if (message) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              // Profile updated!
              const { uid, displayName, email, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  displayName: displayName,
                  email: email,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage("Error");
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + -+errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + -+errorMessage);
        });
    }
  };

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div>
      <Header />
      <div className="fixed">
        <img src={BG_IMG_URL} alt="background-img" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-3/12 p-14 my-36 mx-auto right-0 left-0 bg-opacity-70 rounded-md bg-black text-white"
      >
        <h1 className="text-3xl py-4">{isSignIn ? "Sign In" : "Sign Up"}</h1>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700 bg-opacity-80"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="p-4 my-4 w-full bg-gray-700 bg-opacity-80"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 bg-opacity-80"
        />
        <p className=" my-1 text-lg text-red-600">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-700 rounded-lg w-full"
          onClick={handleSignIn}
        >
          Sign In
        </button>
        <p className="cursor-pointer" onClick={toggleSignIn}>
          {isSignIn
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
