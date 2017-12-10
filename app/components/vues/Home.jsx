import React 	from "react";
import { BrowserRouter as Router,
         Link, IndexRedirect,  browserHistory } from "react-router";
import PropTypes from 'prop-types';

import Banniere	from "./../home/Banniere.jsx"
import Scroll from "./../assets/Scroll.jsx"
import Animation from './../../utilities/Animation.js';

export default class Home extends React.Component{
	static contextTypes = {
        router: PropTypes.object
    }

	constructor(props){
		super(props);
		this.handleClickAbout = this.handleClickAbout.bind(this);
	}

	handleClickAbout(){
		 //Animation.switchPage(function(){
            this.context.router.history.push('/about');
        //}.bind(this));
	}

	render(){	
		const myClass = (this.props.isActive) ? " active" : " not-active";
		return(
			<div id="home" className={myClass}>  
		      	<Banniere clickProject={this.props.clickProject} clickAbout={this.handleClickAbout}/>
		      	<Scroll click={this.props.clickProject}/>
			</div>
		);
	}
}
