import React from "react";
import { Header, Sidebar, Modal, Notification } from "./";

const Layout = ({ children }) => {
  return (
    <>
      <Notification />
      <Modal />
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 m-5">{children}</div>
      </div>
    </>
  );
};

export default Layout;
