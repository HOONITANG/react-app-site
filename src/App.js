import React from "react";
import { Route, Routes } from "react-router-dom";
import "./css/reset.css";
import "./css/main.css";
import Home from "./pages/Home";
import Policy from "./pages/Policy";
import PolicyEN from "./pages/Policy_EN";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/react-app-site" element={<Home />} />
      <Route path="/react-app-site/policy_ko" element={<Policy />} />
      <Route path="/react-app-site/policy_en" element={<PolicyEN />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default App;
