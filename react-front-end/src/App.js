import { Routes, useNavigationType, useLocation } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import TV1 from "./pages/SignUP/TV1";
import Home from "./pages/Home/Home"
import LoginPage from "./pages/Login/LoginPage"

import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/signup" element={<TV1/>} />
    </Routes>
  );
}

export default App;