import React from "react";
import BloodRequest from "../../components/BloodRequest/BloodRequest";
import Hero from "../../components/Hero/Hero";

const Dashboard = () => {
  return (
    <React.Fragment>
      <Hero />
      <BloodRequest />
    </React.Fragment>
  );
};

export default Dashboard;
