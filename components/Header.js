import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useAppContext } from "../context/Context";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import { useCookies } from "react-cookie";

const Header = () => {
  const router = useRouter();
  const [cookies, setCookies, removeCookies] = useCookies(["user"]);
  const {
    setIsLoggedIn,
    setUser,
    user,
    setShowModal,
    setModalContent,
    isLoggedIn,
  } = useAppContext();

  useEffect(() => {
    if (cookies.user) {
      const { accessToken } = cookies["user"];
      if (accessToken) {
        setIsLoggedIn(true);
        setUser(cookies.user);
      }
    }
  });

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const signOut = () => {
    removeCookies("user", { path: "/" });

    setIsLoggedIn(false);
    setUser({});
    router.push("/");
  };

  const SignInModal = () => {
    setShowModal(true);
    setModalContent("signin");
  };

  return (
    <>
      <div className="bg-black text-white h-20 shadow-lg">
        <div className="flex justify-between mx-10 h-full">
          <div
            onClick={() => router.push("/user/timezones")}
            className="h-20 items-center flex cursor-pointer"
          >
            <h1 className="text-3xl font-serif font-bold">Bileonaire FX</h1>
          </div>
          {!isLoggedIn ? (
            <div
              onClick={() => SignInModal()}
              className="h-20 items-center flex cursor-pointer"
            >
              <p className="mr-3">Login</p>
              <LoginIcon className="text-2xl" />
            </div>
          ) : (
            <div className="h-20 items-center flex">
              {user?.role === "admin" || user?.role === "moderator" ? (
                <button
                  onClick={() => router.push("/users")}
                  className="bg-blue-300 py-2 px-4 mr-2 rounded-lg shadow-md"
                >
                  Users
                </button>
              ) : (
                ""
              )}
              {user?.username && (
                <>
                  <p className="text-slate-200 text-lg"> Hi {capitalizeFirstLetter(user?.username)} </p>
                  <div className=" bg-gray-300 mx-4 rounded-full h-10 w-10 flex">
                    <p className="m-auto">
                        {user?.username[0]?.toUpperCase()}
                    </p>
                  </div>
                </>
              )}
              <LogoutIcon onClick={() => signOut()} className="text-xl" />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
