import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../header";
import AppSelectPage from "../pages/AppSelectPage";
import Styles from "./appRouting.module.css";

const AppRouting = () => {
  return (
    <div>
      <Router>
        <Header />
        <div className={Styles.Body}>
          <Routes>
            <Route path="/" element={<AppSelectPage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default AppRouting;
