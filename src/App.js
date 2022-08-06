import { Routes, Route, useLocation } from "react-router-dom";

import Welcome from "../src/Pages/Welcome/Welcome.jsx";
import Intro from "../src/Pages/Intro/Intro.jsx";
import Question from "../src/Pages/Question/Question.jsx";
import Result from "../src/Pages/Result/Result.jsx";

import { AnimatePresence } from "framer-motion";
import "./App.scss";

export default function App() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Welcome />} />

          <Route path="/survey">
            <Route index element={<Intro />} />
            <Route path=":questionPath" element={<Question />} />
          </Route>

          <Route path="/result" element={<Result />} />
          <Route path="*" element={<p>404</p>} />
        </Routes>
      </AnimatePresence>
    </>
  );
}
