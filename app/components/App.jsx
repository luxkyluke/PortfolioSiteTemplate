import React from "react";
import PropTypes from "prop-types";
import { Transition, TransitionGroup } from 'react-transition-group'
import { Route, Switch, BrowserRouter } from 'react-router-dom';


import Main	from "./Main.jsx"
import Header	from "./Header.jsx"
import Footer	from "./Footer.jsx"
import Style from "./../assets/scss/main.scss"
import Anim from "./../utilities/backgroundAnim.js"

import HomePage from "./vues/HomePage.jsx";
import Home from "./vues/Home.jsx";
import Projects from "./vues/Projects.jsx";
import Project from "./vues/Project.jsx";
import About from "./vues/About.jsx";
import Animation from '../utilities/Animation.js';


export default class App extends React.Component {
	/*constructor(props, context){
		super(props, context);
	}

	componentWillMount() {
		this.unlisten = this.context.router.history.listen((location, action) => {
		  console.log("on route change");
		});
	}
	
	componentWillUnmount() {
	  this.unlisten();
	}*/

    render() {   
        return(		
			<Header>
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
			</Header>
        );
    }
}
