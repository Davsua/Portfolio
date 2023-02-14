import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import JsonData from "./data.json";
import SmoothScroll from "smooth-scroll";
import { AboutMe } from "./components/AboutMe";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { SocialMediaButtons } from "./components/SocialMediaButtons";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

function App() {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
    //console.log(landingPageData);
  }, [landingPageData]);

  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route
            path="/"
            element={<Header data={landingPageData.Header} />}
          ></Route>

          <Route
            path="/aboutme"
            element={<AboutMe data={landingPageData.About} />}
          ></Route>

          <Route path="/skills" element={<Skills />}></Route>

          <Route
            path="/projects"
            element={<Projects data={landingPageData.Projects} />}
          ></Route>

          <Route path="/contact" element={<Contact />}></Route>
        </Routes>

        <SocialMediaButtons />
      </Router>
    </>
  );
}

export default App;
