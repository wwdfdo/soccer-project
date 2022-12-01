import React from "react";
import { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../store/auth-context";

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoding, setIsLoading] = useState(false);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const history = useNavigate();

  const authCtx = useContext(AuthContext);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    setIsLoading(true);

    let url;

    if (isLogin) {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDSeHrPhqs_nQahx79fAidFAtK9jBlSeRI`;
    } else {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDSeHrPhqs_nQahx79fAidFAtK9jBlSeRI`;
    }

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        // firstname: enteredFirstname,
        // lastname: enteredLasttname,
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication failed";

            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        authCtx.login(data.idToken);

        console.log(data);

        history("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <section className=" h-screen flex justify-center items-center bg-[#40085b]">
      <form
        onSubmit={submitHandler}
        className="flex flex-col gap-8  bg-opacity-50 w-1/4 p-10"
      >
        <div className="flex flex-col gap-2 text-lg font-semibold">
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            ref={emailInputRef}
            className="outline-none rounded-md p-[0.25rem] text-md font-normal"
          />
        </div>
        <div className="flex flex-col gap-2 text-lg font-semibold">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            ref={passwordInputRef}
            className="outline-none rounded-md p-[0.25rem] text-md font-normal"
          />
        </div>
        <div className="flex flex-col items-center text-lg font-semibold gap-5">
          <button className="bg-[#ff33ff] px-10 py-2 rounded-3xl">
            {isLogin ? "Login" : "Create An Account"}
          </button>
          {isLoding && <p>Sending Request...</p>}
          <button
            type="button"
            onClick={switchAuthModeHandler}
            className="text-gray-400"
          >
            {isLogin ? "Create An New Account" : "Login existing account"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default AuthForm;
