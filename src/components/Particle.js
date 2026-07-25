import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 55,
            density: {
              enable: true,
              value_area: 1200,
            },
          },

          color: {
            value: ["#6a9cff", "#9879ff", "#62d9ff"],
          },

          line_linked: {
            enable: false,
            opacity: 0.02,
          },

          move: {
            enable: true,
            direction: "none",
            speed: 0.18,
            random: true,
            straight: false,
            out_mode: "out",
          },

          size: {
            value: 1.4,
            random: true,
          },

          opacity: {
            value: 0.35,
            random: true,
            anim: {
              enable: true,
              speed: 0.6,
              opacity_min: 0.05,
              sync: false,
            },
          },
        },

        interactivity: {
          detect_on: "canvas",

          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },

            resize: true,
          },

          modes: {
            repulse: {
              distance: 80,
              duration: 0.4,
            },
          },
        },

        retina_detect: true,
      }}
    />
  );
}

export default Particle;