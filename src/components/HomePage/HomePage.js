import React, {useMemo} from "react";
import Typed from "react-typed";
// import Particles from 'react-particles-js';
import Particles from "react-tsparticles";
// data-aos
const HomePage = () => {

  const MyParticles = useMemo(() => (

		<Particles
			id="tsparticles"
			options={{
			  background: {
			    color: {
			      value: "#0d47a100",
			    },
			  },
			  fpsLimit: 100,
			  interactivity: {
			    detectsOn: "canvas",
			    events: {
			      onClick: {
			        enable: true,
			        mode: "push",
			      },
			      onHover: {
			        enable: true,
			        mode: "repulse",
			      },
			      resize: true,
			    },
			    modes: {
			      bubble: {
			        distance: 400,
			        duration: 10,
			        opacity: 0.8,
			        size: 40,
			      },
			      push: {
			        quantity: 4,
			      },
			      repulse: {
			        distance: 200,
			        duration: 10,
			      },
			    },
			  },
			  particles: {
			    color: {
			      value: "#ffffff",
			    },
			    links: {
			      color: "#ffc107",
			      distance: 150,
			      enable: true,
			      opacity: 0.5,
			      width: 1,
			    },
			    collisions: {
			      enable: true,
			    },
			    move: {
			      direction: "none",
			      enable: true,
			      outMode: "bounce",
			      random: false,
			      speed: 4,
			      straight: false,
			    },
			    number: {
			      density: {
			        enable: true,
			        value_area: 800,
			      },
			      value: 80,
			    },
			    opacity: {
			      value: 0.5,
			    },
			    shape: {
			      type: "circle",
			    },
			    size: {
			      random: true,
			      value: 5,
			    },
			  },
			  detectRetina: true,
			}}
		/>

  	) , [Particles])

  return (
  	<>
  		{MyParticles}
		<div className="home">
			<div  className="home__overLay"></div>
			<div  className="home__info d-flex flex-column justify-content-center align-items-center text-center">
				<h1 className="text-uppercase">I'm Mohmad Gamal</h1>
				<Typed
					className="home__typed-text"
					strings={['Front-End Developer']}
					typeSpeed={200}
					backSpeed={100}
					loop
				/>
			</div>
		</div>

  	</>
  );
}

export default HomePage;