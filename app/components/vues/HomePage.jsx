import React 	from "react";
import {Link, Route} from "react-router-dom";
import PropTypes from "prop-types";

import Home	from "./Home.jsx"
import Projects from "./Projects.jsx"


export default class HomePage extends React.Component{
	static contextTypes = {
	    router: PropTypes.object
	  }

	constructor(props, context){
		super(props, context);

		this.state ={
			"home": this.props.page === 'home'
		}


		this.handleScroll = this.handleScroll.bind(this);
		this.scrollUp = this.scrollUp.bind(this);
		this.scrollDown = this.scrollDown.bind(this);

	}

	componentWillReceiveProps(nextProps) {
        if(nextProps.page !== this.state.page){
        	const isHome = (nextProps.page === 'home');
            this.setState({'home':isHome});
            if(isHome){
        		window.addEventListener('wheel', this.handleScroll);
            }
        }
    }

	handleScroll(e){
        const dir = e.deltaY/Math.abs(e.deltaY);
        //console.log(dir)
        if(dir > 0 && this.state.home){
	       	this.scrollDown();
        }
	}

	scrollDown(){
		if(document.querySelector('.page').classList.contains('hide'))
			return;
		this.context.router.history.push("/projects");
		this.setState({'home':false});
        window.removeEventListener('wheel', this.handleScroll);
	}

	scrollUp(){
		if(document.querySelector('.page').classList.contains('hide'))
			return;
		this.setState({
    		'home':true
    	});
    	this.context.router.history.push("/");
        window.addEventListener('wheel', this.handleScroll);
	}

	componentDidMount() { 
        window.addEventListener('wheel', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('wheel', this.handleScroll);
    }

	render(){	
		const myStyle= (this.state.home) ? {} :  {
			'transform':'translateY(-100%)'
		};
		return(
			<div id="homePage" className="page" >
				<div id="homePage__wrapper" style={myStyle}>
					<Home isActive={this.state.home} clickProject={this.scrollDown}/>
				    <Projects isActive={(!this.state.home)} up={this.scrollUp}/>
			    </div>
		    </div>
		);
	}
}
