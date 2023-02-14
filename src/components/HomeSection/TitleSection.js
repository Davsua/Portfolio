import React from "react";

export default function TitleSection({
  subtitle = "Here is a title",
  title = "Here is a subtitle",
}) {
  return (
    <div className="titlesection-aboutme">
      <p className="subtitle-aboutme-home">{subtitle}</p>
      <h2 className="title-aboutme-home">{title}</h2>
    </div>
  );
}
