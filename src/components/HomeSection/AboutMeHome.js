import React, { useEffect, useState } from "react";
import profile from "../../images/imagenelegante.jpg";
import Introduce from "./Introduce";
import TitleSection from "./TitleSection";
import JsonData from "../../data.json";

export default function AboutMeHome() {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
    //console.log(landingPageData);
  }, [landingPageData]);
  return (
    <section id="aboutme">
      <div className="container-about-home">
        <div className="aboutme-home-right">
          <TitleSection title="About me" subtitle="Let me introduce mySelf" />
          <Introduce introducing={landingPageData?.Introduce?.introduce} />
        </div>
        <div className="aboutme-home-left">
          <img src={profile} alt="profilePic" className="introduce-img" />
        </div>
      </div>
    </section>
  );
}
