//after company logs in
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import TopBar from "./TopBar";
import MenuRoutes from "../company/MenuRoutes";

const MainCompany = () => (
  <Router>
    <TopBar />
    <MenuRoutes />
  </Router>
);

export default MainCompany;