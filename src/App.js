import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Welcome from "../src/Pages/Welcome/Welcome.jsx";
import Survey from "../src/Pages/Survey/Survey.jsx";
import Result from "../src/Pages/Result/Result.jsx";
import ErrorPage from "./Pages/ErrorPage/ErrorPage.jsx";

import "./App.scss";


export default function App() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Welcome />} />

          <Route path="/survey">
            <Route index path=":questionPath" element={<Survey />} />
          </Route>

          <Route path="/result" element={<Result />} />
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
      </AnimatePresence>
    </>
  );
}
