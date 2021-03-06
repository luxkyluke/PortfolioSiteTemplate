import { Route, Switch, BrowserRouter } from 'react-router-dom';
import React from "react";
import PropTypes from "prop-types";
import { Transition, TransitionGroup } from 'react-transition-group'


import HomePage from "./vues/HomePage.jsx";
import Home from "./vues/Home.jsx";
import Projects from "./vues/Projects.jsx";
import Project from "./vues/Project.jsx";
import About from "./vues/About.jsx";
import Animation from '../utilities/Animation.js';



export default class Main extends React.Component {

	/*static propTypes = {
		location: React.PropTypes.object.isRequired
	}*/
/*
	componentDidUpdate(prevProps) {
		//Animation.switchPage(function(){})
	}
*/
    render() {   
        return(
        	<main>
	        	<TransitionGroup>
					<Transition
						key={"test"}
						timeout={1000}
						onEnter={el => console.log('enter', el)}
						onExit={el => console.log('exit', el)}
					>
						<Switch>
							<Route exact path='/' render = {(props) =>(
							  	<HomePage page={"home"}/>
						  	)}/>
						  	<Route path='/about' component={About}/>	
							<Route path='/project/:id' component={Project}/>
							<Route  path='/projects' render = {(props) =>(
								<HomePage page={"projects"}/>
							)}/>	
							<Route exact render = {(props) =>(
							  	<HomePage page={"home"}/>
						  	)}/>
						</Switch>
					</Transition>
				</TransitionGroup>
			</main>

        );
    }
}
