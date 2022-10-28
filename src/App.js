import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import JsonData from "./data.json";
import SmoothScroll from "smooth-scroll";
import { AboutMe } from "./components/AboutMe";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { SocialMediaButtons } from "./components/SocialMediaButtons";

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
      <Projects data={landingPageData.Projects} />
      <SocialMediaButtons />
    </div>
  );
}

export default App;
