import React from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

const BaseScreen = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default BaseScreen;
