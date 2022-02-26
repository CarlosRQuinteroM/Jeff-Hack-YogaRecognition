import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "src/pages/Home";
import YogaPractice from "src/pages/YogaPractice";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/yoga-practice" element={<YogaPractice />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
