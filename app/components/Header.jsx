import React from "react";
import {Link} from "react-router-dom";
import BurgerMenu	from "./assets/BurgerMenu.jsx"
import Menu	from "./vues/Menu.jsx"

export default class Header extends React.Component{
	constructor(props){
		super(props);

		this.state ={
			"open": false
		}

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(){
		if(this.state.open)
			this.closeMenu();
		else
			this.openMenu();
	}

	openMenu(){
		const page = document.getElementsByClassName("page")[0];
		page.classList.add('hide');
		//	page.style.display = 'none';
		/*setTimeout(function(){
		}, 500);*/
		this.setState ({
			'open' : !this.state.open
		});
	}	

	closeMenu(){
		const page = document.getElementsByClassName("page")[0];
		//page.style.display = 'block';
		page.classList.remove('hide');
		const menu = document.getElementById('menu');
		menu.style.opacity = 0;
		/*menu.style.transform = 'translateX(+100%)';
		menu.style.border = '0px'*/

		setTimeout(function(){
			this.setState ({
				'open' : !this.state.open
			});
			menu.style="";
		}.bind(this), 400);
	}

	render(){
		const myClass = (this.state.open) ? "active" : "";
		return(
			<div>
				<header className={myClass}>
					<div id="blank_veil" className="mask"></div>
					<div id="dark_veil" className="mask"></div>
			      	<Menu isOpen={this.state.open} close={this.handleClick}/>
			      	<BurgerMenu isOpen={this.state.open} click={this.handleClick}/>
				</header>
				{this.props.children}
			</div>
		);
	}
}
