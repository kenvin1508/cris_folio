import React, { useContext } from "react";
import "./Talks.scss";
import { talkSection } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

import calendlyLogo from "../../assets/images/avatar.png";

export default function Talks() {
  const { isDark } = useContext(StyleContext);
  if (!talkSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="talks">
        <div className="talk-header">
          <h1 className="talk-header-title">{talkSection.title}</h1>

          <div className="talk-subtitle-with-image">
            <img
              src={calendlyLogo}
              alt="avatar"
              className="talk-subtitle-avatar"
            />
            <div>
              {talkSection.subtitle.split("\n\n").map((paragraph, index) => (
                <p
                  key={index}
                  className={
                    isDark
                      ? "dark-mode talk-header-subtitle"
                      : "talk-header-subtitle"
                  }
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

        </div>
      </div>
    </Fade>
  );
}
