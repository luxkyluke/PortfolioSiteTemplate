import React from "react";
import { BrowserRouter as Router,
         Link } from "react-router";

import Utility 	from "./../../utilities/utility.js";
import Button	from "./../assets/Button.jsx";

export default class Banniere extends React.Component {

	constructor(props){
		super(props);
		document.addEventListener("mousemove", function(event){
			const width = window.innerWidth;
			const height = window.innerHeight;
			let x = Math.floor((event.clientX-(width/2))/100);
			x = (Math.abs(x) > 5) ? (x>0 ? 5 : -5) : x;
			let y = Math.floor((event.clientY+150-(height/2))/75);
			y = (Math.abs(y) > 6) ? (y>0 ? 6 : -6) : y;
			const title = document.querySelector(".title h1");
			if(!title)
				return
			title.style.textShadow = (x) + "px " + (y) + "px #0062a5"
		});
	
		this.handleEnterBtnClick.bind(this);
		this.handleAboutBtnClick.bind(this);
	}

	handleEnterBtnClick(){
		
	}

	handleAboutBtnClick(){

	}

    render() { 
    	return(  
	    	<div className="banniere" onMouseMove={this.handleMouseMove}>
				<div className="title">
					<h1>Antoine Demiere</h1>
				</div>
				<div className="banniere__rubriques">
		      		<Button label = "Projects"
		      				click = {this.props.clickProject}
		      		/>
		      		<Button label = "About Me"
		      				click = {this.props.clickAbout}
		      		/>
		      	</div>
			</div>
    	);
	}
}
