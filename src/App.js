import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import JsonData from "./data.json";
import SmoothScroll from "smooth-scroll";
import { AboutMe } from "./components/AboutMe";
import { Skills } from "./components/Skills";
//import { Skills2 } from "./components/Skills2";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

function App() {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
    console.log(landingPageData);
  }, [landingPageData]);

  return (
    <div>
      <Header data={landingPageData.Header} />
      <AboutMe data={landingPageData.About} />
      <Skills />
    </div>
  );
}

export default App;
