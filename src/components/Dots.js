import React from 'react';
import atomize from "@quarkly/atomize";
import Particles from 'react-particles-js';

const Dots = props => <Particles params={{
	"particles": {
		"width": "100",
		"height": "100",
		"color": {
			"value": "#5BFFE6"
		},
		"number": {
			"value": 100,
			"density": {
				"enable": false
			}
		},
		"size": {
			"value": 4,
			"random": true,
			"anim": {
				"speed": 2,
				"size_min": 0.3
			}
		},
		"line_linked": {
			"enable": false
		},
		"move": {
			"random": true,
			"speed": 0.2,
			"direction": "top",
			"out_mode": "out"
		}
	},
	"interactivity": {
		"events": {
			"onhover": {
				"enable": true,
				"mode": "bubble"
			},
			"onclick": {
				"enable": true,
				"mode": "repulse"
			}
		},
		"modes": {
			"bubble": {
				"distance": 100,
				"duration": 2,
				"size": 5,
				"opacity": 1
			},
			"repulse": {
				"distance": 400,
				"duration": 4
			}
		}
	}
}} {...props} />;

export default atomize(Dots)({
	name: "Dots",
	effects: {
		hover: ":hover"
	},
	normalize: true,
	mixins: true,
	description: {
		// past here description for your component
		en: "Dots — my awesome component"
	},
	propInfo: {
		// past here props description for your component
		yourCustomProps: {
			control: "input"
		}
	}
});