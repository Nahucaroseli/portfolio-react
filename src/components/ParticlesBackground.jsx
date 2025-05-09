import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
  const particlesInit = async (main) => {
    await loadSlim(main);
  };

  const particlesLoaded = (container) => {

  };

  return (
    <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          particles: {
            number: {
              value: 10,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color:{
                value:"#1B5018"
            },
            size: {
              value: 1.5,
            },
            move: {
              enable: true,
              speed: 1,
            },
            shape:{
                type: "polygon",
                polygon:{
                    sides: 6
                }
            }
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
        }}
      />
    </div>
  );
};

export default ParticlesBackground;