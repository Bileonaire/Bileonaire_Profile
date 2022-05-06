import React, { useState } from "react";
import { useRouter } from "next/router";
import Input from "../components/Input";
import { useAppContext } from "../context/Context";
import { useCookies } from "react-cookie";
import apiCall from "../utils/api";

const AuthForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isSignup, setisSignup] = useState(false);
  const { setShowModal, setNotification, setIsSuccess } = useAppContext();
  const [cookies, setCookie] = useCookies(["user"]);

  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const userData = {
      username,
      email,
      password,
      isSignup,
    };

    try {
      if (isSignup) {
        const response = await apiCall("post", "/users", userData);
        if (response.status === 201) {
          setSuccess("Sign Up Successful, Kindly Sign In");
          clearForm();
          setisSignup(false);
        } else {
          setError(
            "Invalid Details. Put a valid email and password length more than five characters. Try Again"
          );
        }
      } else {
        const response = await apiCall("post", "/auth/signin", userData);
        if (response.status === 200) {
          setSuccess("Sign In Successful , Welcome!");
          setCookie(
            "user",
            { isLoggedIn: true, ...response.data },
            { path: "/" }
          );
          clearForm();
          router.push("/user/trades");
          setNotification("Successful Login, Welcome!");
          setIsSuccess(true);
          setShowModal(false);
        } else {
          throw "error";
        }
      }
    } catch (e) {
      console.log(e);
      setError("Invalid Details. Try Again");
    }
  };

  const clearForm = () => {
    setUsername("");
    setEmail("");
    setPassword("");
  };

  const toggle = () => {
    clearForm();
    setisSignup(!isSignup);
    setError("");
    setSuccess("");
  };

  const fields = [
    {
      title: "Username",
      value: username,
      placeholder: "Doe",
      type: "text",
      onchange: setUsername,
      id: "lastName",
      required: true,
      show: true && isSignup,
    },
    {
      title: "Email",
      value: email,
      placeholder: "email@email.com",
      type: "email",
      onchange: setEmail,
      id: "email",
      required: true,
    },
    {
      title: "Password",
      value: password,
      placeholder: "",
      type: "password",
      onchange: setPassword,
      id: "password",
      required: true,
    },
  ];

  return (
    <>
      <div className="flex flex-col mx-auto">
        <div className="m-auto">
          <div className="bg-white border-b shadow-2xl rounded-3xl p-8 flex flex-col w-96 mx-auto">
            <h3 className="text-center text-2xl mb-6 font-bold text-blue-400">
              {isSignup ? "Sign Up" : "Sign In"}
            </h3>
            {success !== "" && (
              <div className="w-full flex justify-center mb-4">
                <p className="text-green-600 text-sm text-center">{success}</p>
              </div>
            )}
            <form onSubmit={onSubmit}>
              {fields.map((field) => (
                <Input
                  key={field.id}
                  title={field.title}
                  placeholder={field.placeholder}
                  type={field.type}
                  id={field.id}
                  value={field.value}
                  onchange={field.onchange}
                  required={field.required}
                  show={field.show}
                />
              ))}
              {error !== "" && (
                <div className="w-full flex justify-center">
                  <p className="text-red-600 text-sm text-center">{error}</p>
                </div>
              )}

              <div className="flex items-center justify-between mt-6">
                <button
                  className="bg-blue-400 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded-lg w-full"
                  type="submit"
                >
                  {isSignup ? "Sign Up" : "Sign In"}
                </button>
              </div>
            </form>
            <p
              onClick={() => toggle()}
              className="text-center cursor-pointer font-medium text-sm mt-4"
            >
              {isSignup
                ? "Already Have an account? "
                : "Don't Have an account? "}
              <span className="cursor-pointer text-lg text-blue-400 hover:text-blue-500 hover:font-bold">
                {isSignup ? "Sign In" : "Sign Up"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthForm;
