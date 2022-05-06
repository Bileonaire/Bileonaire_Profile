import React, { useEffect } from "react";
import { useAppContext } from "../context/Context";

const Notification = () => {
  const { notification, isSuccess, setNotification } = useAppContext();

  useEffect(() => {
    const timer = setTimeout(() => {
      setNotification("");
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <>
      {notification !== "" && (
        <div className="fixed z-50 flex justify-center items-center w-screen">
          {isSuccess ? (
            <div className="bg-green-400 rounded-xl px-4 py-2 shadow-lg mt-5 animate-bounce">
              <p className="p-2">{notification}</p>
            </div>
          ) : (
            <div className="bg-red-400 rounded-xl px-4 py-2 shadow-lg mt-5 animate-bounce">
              <p className="p-2">{notification}</p>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Notification;
