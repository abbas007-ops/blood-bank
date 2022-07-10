import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AllRoutes from "./routes/AllRoutes";
import Header from "./components/Layout/Header";

import Footer from "./components/Layout/Footer";
import Hero from "./components/Hero/Hero";
import BannerImage from "./components/bannerImage/BannerImage";

function App() {
  return (
    <React.Fragment>
      <Header />
      {/* <Hero /> */}
      {/* <BannerImage /> */}
      <AllRoutes />
      <Footer />
    </React.Fragment>
  );
}

export default App;
