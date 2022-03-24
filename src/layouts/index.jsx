import { Fragment } from "react";

import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Fragment>
      <Header />
      <main className="max-w-screen-lg mx-auto">
        <Outlet />
      </main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
