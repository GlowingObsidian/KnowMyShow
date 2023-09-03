import { Outlet } from "react-router-dom";
import Navs from "./Navs";
import AppTitle from "./AppTitle";

function MainLayout() {
  return (
    <>
      <AppTitle />
      <Navs />
      <Outlet />
    </>
  );
}

export default MainLayout;
