import { ReactElement } from "react";
import { Routes, Route } from "react-router-dom";
import App from "../App/App";
import SuccessScreen from "../routes/SuccessScreen";

function Router(): ReactElement {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="success" element={<SuccessScreen />} />
    </Routes>
  );
}

export default Router;
