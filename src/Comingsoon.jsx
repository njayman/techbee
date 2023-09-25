import React, { useState, useEffect } from "react";
import Particles from "react-tsparticles";

const ComingSoonPage = () => {
  const [particlesParams, setParticlesParams] = useState({
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 800
        }
      },
      size: {
        value: 3,
        random: {
          enable: true,
          minimumValue: 1,
          maximumValue: 5
        }
      },
      move: {
        enable: true,
        speed: {
          min: 0.1,
          max: 0.5
        }
      },
      line_linked: {
        enable: false
      },
      color: {
        value: "#ffffff"
      }
    }
  });

  useEffect(() => {
    setParticlesParams({
      ...particlesParams,
      particles: {
        ...particlesParams.particles,
        color: {
          value:
            particlesParams.particles.color.value === "#ffffff"
              ? "#000000"
              : "#ffffff"
        }
      }
    });
  }, [particlesParams]);

  return (
    <div className="coming-soon-page">
      <div className="particles-background">
        <Particles params={particlesParams} />
      </div>
      <header className="header">
        <h1>techbee.tech</h1>
      </header>
      <main className="main">
        <h1 className="coming-soon">COMING SOON</h1>
      </main>
    </div>
  );
};

export default ComingSoonPage;
