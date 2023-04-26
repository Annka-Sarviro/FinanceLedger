import { Outlet } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";

export const Layout = () => {
  return (
    <>
      <GlobalStyle />
      <Outlet />
    </>
  );
};
