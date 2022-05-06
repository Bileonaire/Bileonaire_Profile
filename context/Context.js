import React, { useState, createContext, useContext } from "react";

const GlobalContext = createContext({});

export default function ContextWrapper(props) {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalProps, setModalProps] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [notification, setNotification] = useState("");
  const [isSuccess, setIsSuccess] = useState(true);

  return (
    <GlobalContext.Provider
      value={{
        showModal,
        setShowModal,
        modalContent,
        setModalContent,
        modalProps,
        setModalProps,
        isLoggedIn,
        setIsLoggedIn,
        user,
        setUser,
        notification,
        isSuccess,
        setNotification,
        setIsSuccess,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}

export function useAppContext() {
  return useContext(GlobalContext);
}
