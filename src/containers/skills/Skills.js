import React, { useContext } from "react";
import "./Skills.scss";
import { skillsSection } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const { isDark } = useContext(StyleContext);
  if (!skillsSection.display) {
    return null;
  }
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="skills-main-div">
        <div className="skills-image-div">
          <img
            alt="Man Working"
            src={require("../../assets/images/csc.png")}
          ></img>
        </div>

      </div>
    </div>
  );
}
