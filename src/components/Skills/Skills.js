import React from "react";
import ProgressBar from 'react-animated-progress-bar';

import {allSkills} from './data.js'

const Skills = () => {

  return (
	<div className="skills">

		<main id="skills">
		    <h1 className="text-uppercase lg-heading">
		      My
		      <span className="text-sec">Skills</span>
		    </h1>

		    <h2 className="sm-heading">
		      Check out of my Skills...
		    </h2>

			<div className="skills-container">
			      <div className="item">
			      	{allSkills ? allSkills.map((item) => (
				      	<div className="progress-bar" key={item.id}>
							<h3>{item.skill}</h3>
							<ProgressBar
							          width="500px"
							          height="10px"
							          fontColor="white"
							          trackWidth="10"
							          percentage={item.perc}
							          trackPathColor="#9e9e9e"
							          trackBorderColor="#fff"
							          hollowBackgroundColor="#212529b0"
							          defColor={{
							            fair: 'orangered',
							            good: 'yellow',
							            excellent: 'green',
							            poor: 'red',
							          }}
							          
							/>
				      	</div>
			      	)) : <p>Loading......</p>}

			      </div>

			</div>
		</main>
		<footer id="main-footer">
		Copyright &copy; 2021 Updated By <span> Mohmad Gamal </span>
		</footer>
	</div>
  );
}

export default Skills;


