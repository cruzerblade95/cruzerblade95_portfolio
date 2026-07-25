import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Senior Software Engineer",
          "AI Full-Stack Developer",
          "Flutter Developer",
          "Laravel & React Engineer",
          "Cloud & Web3 Builder",
        ],
        autoStart: true,
        loop: true,
        delay: 45,
        deleteSpeed: 30,
        cursor: "▍",
      }}
    />
  );
}

export default Type;