import profile from "../images/imagenelegante.jpg";

export const AboutMe = (props) => {
  return (
    <section id="aboutme">
      <div className="about-container">
        <div className="about-pic">
          <img className="profile-pic" alt="profile_pic" src={profile}></img>
        </div>
        <div className="about-text">
          <h3 className="text-about">
            {props.data ? props.data.introduction : "loading..."}
          </h3>
        </div>
      </div>
    </section>
  );
};
